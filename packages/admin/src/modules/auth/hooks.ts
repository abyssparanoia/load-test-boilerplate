import { Dispatch, SetStateAction, useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { auth as authCli } from '@typescript-plane-boilerplate/firebase-client'
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, Unsubscribe } from 'firebase/auth'
import { useRecoilCallback, useRecoilState, useRecoilValue } from 'recoil'
import { authState } from './atom'

interface ISignInForm {
  email: string
  password: string
}

const handleError = (error: unknown, setError?: Dispatch<SetStateAction<Error | undefined>>) => {
  let errorMessage = 'Auth Error occurred'
  if (error instanceof Error) {
    setError?.(error)
    errorMessage += ` :${error.message}`
    errorMessage
  }
  //   Toaster.error(errorMessage)
}

export const useSignIn = () => {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<Error>()

  const handleSignin = useRecoilCallback(
    ({ set }) =>
      async ({ email, password }: ISignInForm) => {
        try {
          setIsLoading(true)
          setError(undefined)
          const { user } = await signInWithEmailAndPassword(authCli, email, password)

          // const { claims } = (await auth.currentUser?.getIdTokenResult()) || {}
          // if (claims?.role !== 'ADMIN') {
          //   throw new Error('ログインする権限がありません')
          // }

          if (user) {
            set(authState, { isInit: true, isLoggedIn: true, uid: user.uid })
            router.push('/')
          } else {
            throw new Error('ユーザーが存在しません')
          }
        } catch (error: any) {
          console.log(error)
          handleError(error, setError)
        } finally {
          setIsLoading(false)
        }
      },
    [router]
  )

  const handleSignInWithGoogle = useRecoilCallback(
    ({ set }) =>
      async () => {
        try {
          setIsLoading(true)
          setError(undefined)
          const { user } = await signInWithPopup(authCli, new GoogleAuthProvider())

          // const { claims } = (await auth.currentUser?.getIdTokenResult()) || {}
          // if (claims?.role !== 'ADMIN') {
          //   throw new Error('ログインする権限がありません')
          // }

          console.log(user)

          if (user) {
            set(authState, { isInit: true, isLoggedIn: true, uid: user.uid })
            router.push('/')
          } else {
            throw new Error('ユーザーが存在しません')
          }
        } catch (error: any) {
          console.error(error)
          handleError(error, setError)
        } finally {
          setIsLoading(false)
        }
      },
    [router]
  )

  const clearError = useCallback(() => {
    setError(undefined)
  }, [])

  return { handleSignin, handleSignInWithGoogle, isLoading, error, clearError }
}

export const useSignOut = () => {
  const router = useRouter()

  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<Error>()

  const handleSignOut = useRecoilCallback(
    ({ set }) =>
      async () => {
        try {
          setIsLoading(true)
          await authCli.signOut()
          set(authState, { isInit: true, isLoggedIn: false, uid: '' })
          setIsLoading(false)
          router.push('/sign_in')
        } catch (error: any) {
          setError(error)
        } finally {
          setIsLoading(false)
        }
      },
    [router]
  )
  return { handleSignOut, isLoading, error }
}

// アプリケーションの初回mount時にsdkのloadを行う
export const useAuthLoad = () => {
  const [auth, setAuth] = useRecoilState(authState)

  useEffect(() => {
    let unsubscriber: Unsubscribe | undefined = undefined
    if (!auth.isInit) {
      unsubscriber = authCli.onIdTokenChanged(user => {
        if (user) {
          setAuth({ isInit: true, isLoggedIn: true, uid: user.uid })
        } else {
          setAuth({ isInit: true, isLoggedIn: false, uid: '' })
        }
      })
    }
    return () => {
      if (unsubscriber) {
        unsubscriber()
      }
    }
  }, [auth, setAuth])

  return { isLoading: !auth.isInit }
}

export const useAuthRequired = () => {
  const router = useRouter()
  const auth = useRecoilValue(authState)
  if (!auth.isLoggedIn) {
    router.push('/sign_in')
  }
}

export const useIsLoggedIn = () => {
  const auth = useRecoilValue(authState)
  return { isLoggedIn: auth.isLoggedIn }
}

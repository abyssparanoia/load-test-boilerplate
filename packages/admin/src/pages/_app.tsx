import React from 'react'
import { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'
import { useAuthLoad } from 'src/modules/auth/hooks'

const NextApp = ({ Component, pageProps }: AppProps) => {
  const { isLoading } = useAuthLoad()

  if (isLoading) {
    return <div>Loading...</div>
  }

  return <Component {...pageProps} />
}

const MyApp = (props: AppProps) => {
  return (
    <RecoilRoot>
      <NextApp {...props} />
    </RecoilRoot>
  )
}

export default MyApp

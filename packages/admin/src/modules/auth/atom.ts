import { atom } from 'recoil'

export const authState = atom<{
  isInit: boolean
  isLoggedIn: boolean
  uid: string
}>({
  key: 'auth',
  default: {
    isInit: false,
    isLoggedIn: false,
    uid: ''
  }
})

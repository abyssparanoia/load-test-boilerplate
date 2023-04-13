import { IBase } from './base'

export interface IUser extends IBase {
  id: string
  displayName: string
  email: string
}

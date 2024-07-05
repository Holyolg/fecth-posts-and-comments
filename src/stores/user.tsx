import { atom, map } from 'nanostores'
import type { StoreValue } from 'nanostores'


export interface IUser {
  username: string,
    password: string
  }


  
  export const $user = map<IUser>({
    username: '',
    password: ''
    
  })
  
export const $username = atom('')
export const $password = atom('')

export const $error = atom('')

export const $auth = atom(false)

import { type JsonSettings } from './jsonSettings'
import { type FeatureFlags } from '@/shared/types/featureFlags'

export enum UserRole {
  ADMIN = 'ADMIN',
  USER = 'USER',
  MANAGER = 'MANAGER'
}

export interface User {
  id: string
  username: string
  avatar?: string
  roles?: UserRole[]
  features?: FeatureFlags
  jsonSettings?: JsonSettings
}

export interface UserSchema {
  authData?: User
  _mounted?: boolean
}

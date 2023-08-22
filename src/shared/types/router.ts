import { type RouteProps } from 'react-router-dom'
// eslint-disable-next-line dev-proger-eslint-plugin/layer-imports
import { type UserRole } from '@/entities/User'

export type AppRouteProps = RouteProps & {
  authOnly?: boolean
  roles?: UserRole[]
}

import { IUser } from './user.types'

// Tokens
export const AuthToken = {
	ACCESS_TOKEN: 'accessToken',
	REFRESH_TOKEN: 'refreshToken',
} as const

export type AuthToken = (typeof AuthToken)[keyof typeof AuthToken]

export interface ITokenInside {
	id: number
	rights: UserRole[]
	iat: number
	exp: number
}

// Roles
export const UserRole = {
	USER: 'USER',
	PREMIUM: 'PREMIUM',
	MANAGER: 'MANAGER',
	ADMIN: 'ADMIN',
} as const

export type UserRole = (typeof UserRole)[keyof typeof UserRole]

// Other
export type TProtectUserData = Omit<ITokenInside, 'iat' | 'exp'>

export interface IFormData extends Pick<IUser, 'email'> {
	password: string
}

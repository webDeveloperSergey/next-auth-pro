import { axiosClassic } from '@/api/axios'
import { IFormData } from '@/types/auth.types'
import { IUser } from '@/types/user.types'
import authTokenService from './auth-token.service'

interface IAuthResponse {
	user: IUser
	accessToken: string
}

class AuthService {
	async main(
		type: 'login' | 'register',
		data: IFormData,
		recaptchaToken?: string | null
	) {
		const response = await axiosClassic.post<IAuthResponse>(
			`/auth/${type}`,
			data,
			{
				headers: {
					recaptcha: recaptchaToken,
				},
			}
		)

		if (response.data.accessToken)
			authTokenService.saveAccessToken(response.data.accessToken)

		return response
	}

	// Re-updates token
	async getNewToken() {
		const response = await axiosClassic.post<IAuthResponse>(
			'/auth/access-token'
		)

		if (response.data.accessToken)
			authTokenService.saveAccessToken(response.data.accessToken)

		return response
	}

	// Re-updates token in middleware for back-end
	async getNewTokenByRefresh(refreshToken: string) {
		const response = await axiosClassic.post<IAuthResponse>(
			'/auth/access-token',
			{},
			{ headers: { Cookie: `refreshToken=${refreshToken}` } }
		)
	}

	async logout() {
		const response = await axiosClassic.post<IAuthResponse>('/auth/logout')

		if (response.data) authTokenService.removeAccessToken()

		return response
	}
}

export default new AuthService()

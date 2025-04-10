import { IFormData } from '@/types/auth.types'
import { IUser } from '@/types/user.types'

interface IAuthResponse {
	user: IUser
	accessToken: string
}

class AuthService {
	main(
		type: 'login' | 'register',
		data: IFormData,
		recaptchaToken?: string | null
	) {
		// const response =
	}
}

export default new AuthService()

import { AuthPageWrapper } from './AuthPageWrapper'
import { AuthForm } from './form/AuthForm'

interface Props {
	isLogin: boolean
}

export const AuthPage = ({ isLogin }: Props) => {
	return (
		<AuthPageWrapper heading={isLogin ? 'Sign in' : 'Sign up'}>
			<AuthForm isLogin={isLogin} />
		</AuthPageWrapper>
	)
}

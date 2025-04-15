import { Metadata } from 'next'
import { AuthPage } from '../AuthPage'

export const metadata: Metadata = {
	title: 'Sign in',
}

export default function Page() {
	return <AuthPage isLogin />
}

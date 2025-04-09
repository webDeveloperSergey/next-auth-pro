import { IFormData } from '@/types/auth.types'
import { useRouter } from 'next/navigation'
import { useRef, useTransition } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { useForm } from 'react-hook-form'

export const useAuthForm = () => {
	const { register, handleSubmit, reset } = useForm<IFormData>()

	const router = useRouter()
	const [isPending, startTransition] = useTransition()
	const recaptchaRef = useRef<ReCAPTCHA>(null)
}

import { PUBLIC_PAGES } from '@/config/pages/public.config'
import authService from '@/services/auth/auth.service'
import { IFormData } from '@/types/auth.types'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { useRef, useTransition } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

export const useAuthForm = () => {
	const { register, handleSubmit, reset } = useForm<IFormData>()

	const router = useRouter()
	const [isPending, startTransition] = useTransition()
	const recaptchaRef = useRef<ReCAPTCHA>(null)

	const { mutate: mutateLogin, isPending: isLoginPending } = useMutation({
		mutationKey: ['login'],
		mutationFn: (data: IFormData) =>
			authService.main('login', data, recaptchaRef.current?.getValue()),
		onSuccess() {
			startTransition(() => {
				reset()
				router.push(PUBLIC_PAGES.HOME)
			})
		},
		onError(error) {
			if (axios.isAxiosError(error)) toast.error(error.response?.data?.message)
		},
	})

	const { mutate: mutateRegister, isPending: isRegisterPending } = useMutation({
		mutationKey: ['register'],
		mutationFn: (data: IFormData) =>
			authService.main('register', data, recaptchaRef.current?.getValue()),
		onSuccess() {
			startTransition(() => {
				reset()
				router.push(PUBLIC_PAGES.HOME)
			})
		},
		onError(error) {
			if (axios.isAxiosError(error)) toast.error(error.response?.data?.message)
		},
	})
}

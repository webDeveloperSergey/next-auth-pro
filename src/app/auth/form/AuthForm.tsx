import styles from './AuthForm.module.scss'

interface Props {
	isLogin: boolean
}

export const AuthForm = ({ isLogin }: Props) => {
	return (
		<div>
			<input type='text' className={styles['input-field']} />
		</div>
	)
}

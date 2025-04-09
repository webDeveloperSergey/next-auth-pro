import { FC, ReactNode } from 'react'

interface Props {
	children: ReactNode
	heading: string
}

export const AuthPageWrapper: FC<Props> = ({ children, heading }) => {
	return (
		<div className='min-h-screen flex items-center justify-center'>
			<div className='bg-zinc-900 p-8 rounded-lg shadow-md'>
				<h2 className='font-semibold mb-4'>{heading}</h2>
				{children}
			</div>
		</div>
	)
}

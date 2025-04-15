import { ADMIN_PAGES } from '@/config/pages/admin.config'
import { DASHBOARD_PAGES } from '@/config/pages/dashboard.config'
import { MANAGER_PAGES } from '@/config/pages/manager.config'
import { PREMIUM_PAGES } from '@/config/pages/premium.config'
import { PUBLIC_PAGES } from '@/config/pages/public.config'
import Link from 'next/link'

const pages = [
	PUBLIC_PAGES.LOGIN,
	DASHBOARD_PAGES.PROFILE,
	PREMIUM_PAGES.HOME,
	ADMIN_PAGES.ADMIN,
	MANAGER_PAGES.MANAGER,
]

export default function Home() {
	return (
		<div>
			<h1 className='mt-4'>Home Page</h1>
			<br />
			<p>Для проверки, есть страницы:</p>
			<br />
			<ul className='space-y-2'>
				{pages.map(page => (
					<li key={page}>
						<Link className='text-primary hover:underline' href={page}>
							{page}
						</Link>
					</li>
				))}
			</ul>
		</div>
	)
}

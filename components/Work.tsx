import Link from '../components/Link'
import { ReactNode } from 'react'

export default function Work({ title, subtitle, url, children }: {
	title: string,
	subtitle: string,
	url: string,
	children: ReactNode
}) {
	return (
		<article className="space-y-4">

			<section className="space-y-2">

				<h3 className="font-title text-xl font-bold">
					<Link href={url}>
						{title}
					</Link>
				</h3>

				<p className="font-subtitle font-light">
					{subtitle}
				</p>

			</section>

			<section className="space-y-2">
				{children}
			</section>

		</article>
	)
}

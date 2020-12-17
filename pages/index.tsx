import Head from 'next/head'

export default function Home() {
	return (
		<div className="container mx-auto px-8 pt-16 pb-8">

			<Head>

				<title>
					Nahuel Gomez Castro
				</title>

				<meta
					name="theme-color"
					content="#FFFFFF"
				/>

				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
				/>

				<link
					rel="stylesheet"
					href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700;800;900&family=Raleway:wght@300;400&family=Source+Sans+Pro:wght@400;700&display=swap"
				/>

			</Head>

			<header className="space-y-2">

				<h1 className="font-title text-4xl font-black">
					Nahuel Gomez Castro
				</h1>

				<p className="font-subtitle text-xl font-light">
					I'm a software developer based in Argentina
				</p>

			</header>

		</div>
	)
}

import Head from 'next/head'

export default function Home() {
	return (
		<div className="container mx-auto">

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

			<h1>
				Nahuel Gomez Castro
			</h1>

			<p>
				I'm a software developer based in Argentina
			</p>

		</div>
	)
}

import Head from 'next/head'

export default function Home() {
	return (
		<div className="container mx-auto px-8 pt-16 pb-8 space-y-4">

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
					I'm a software developer based in <strong><a href="https://www.argentina.gob.ar" className="text-blue-500">
					Argentina</a></strong>
				</p>

			</header>

			<section className="space-y-2">

				<p>
					I create web and mobile apps with the motto <em>just works</em> in mind.
				</p>

				<p>
					I'm very passionate about <strong>free and open source software</strong> and I like to contribute to the
					community on all areas that I can on my free times.
				</p>

			</section>

			<section className="space-y-2">

				<h2 className="font-title text-2xl font-extrabold">
					My works
				</h2>

			</section>

		</div>
	)
}

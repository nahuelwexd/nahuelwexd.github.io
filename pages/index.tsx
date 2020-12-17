import Head from 'next/head'

export default function Home() {
	return (
		<div className="container mx-auto px-8 pt-16 pb-8 space-y-8">

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

			<section className="space-y-6">

				<h2 className="font-title text-2xl font-extrabold">
					My works
				</h2>

				<article className="space-y-4">

					<div className="space-y-2">

						<h3 className="font-title text-xl font-bold">
							<a href="https://github.com/nahuelwexd/Replay" className="text-blue-500">
								Replay
							</a>
						</h3>

						<p className="font-subtitle font-light">
							Explore and watch YouTube videos
						</p>

					</div>

					<div className="space-y-2">

						<p>
							An <strong>open source <a href="https://www.youtube.com" className="text-blue-500">YouTube</a> client
							</strong> for those concerned about their privacy and sick of heavy browsers like me! This is one of my
							longest projects, since I've used it a lot to learn, and therefore I've restarted it many times.
						</p>

						<p>
							It's currently being written in <strong><a href="https://wiki.gnome.org/Projects/Vala" className="text-blue-500">
							Vala</a></strong>, an <strong>object-oriented programming language</strong> developed by <strong><a
							href="https://www.gnome.org" className="text-blue-500">GNOME</a></strong> that transpiles to C and makes
							use of the <strong><a href="https://developer.gnome.org/gobject/stable" className="text-blue-500">GLib
							Object System</a></strong> to create its classes and interfaces, and in <strong><a href="https://www.gtk.org"
							className="text-blue-500">GTK</a></strong>, a toolkit developed by the same foundation that allows creating
							fantastic interfaces that are fast and, together with <strong><a href="https://gnome.pages.gitlab.gnome.org/libhandy"
							className="text-blue-500">Handy</a></strong>, are totally <strong>mobile friendly</strong>.
						</p>

					</div>

				</article>

				<article className="space-y-4">

					<div className="space-y-2">

						<h3 className="font-title text-xl font-bold">
							<a href="https//github.com/nahuelwexd/Vadi" className="text-blue-500">
								Vadi
							</a>
						</h3>

						<p className="font-subtitle font-light">
							Dependency injection utilities for Vala
						</p>

					</div>

					<div className="space-y-2">

						<p>
							Throughout my learning, I came across <strong><a href="https://en.wikipedia.org/wiki/Inversion_of_control"
							className="text-blue-500">inversion of control</a> and <a href="https://en.wikipedia.org/wiki/Dependency_injection"
							className="text-blue-500">dependency injection</a></strong>. I was quickly fascinated by them and wanted
							to start applying their concept wherever I put code. Great was my disappointment when I saw that Vala, one
							of the languages that aroused me the most passion, <strong>didn't have libraries that make it easy to use
							them</strong>, so I decided to create one by myself.
						</p>

						<p>
							Making use of dependency injection via construct properties, I managed to create a basic but functional
							generic factory of objects (commonly called <strong><a href="https://pasztor.at/blog/what-is-the-ioc-container"
							className="text-blue-500">IoC Container</a></strong>). Soon I'll be adding more tools and improving the
							developer experience.
						</p>

					</div>

				</article>

			</section>

		</div>
	)
}

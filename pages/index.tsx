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

						<p className="font-subtitle">
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

			</section>

		</div>
	)
}

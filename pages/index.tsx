import Head from 'next/head'
import Link from '../components/Link'

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
					I'm a software developer based in <strong><Link href="https://www.argentina.gob.ar">Argentina</Link></strong>
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
							<Link href="https://github.com/nahuelwexd/Replay">
								Replay
							</Link>
						</h3>

						<p className="font-subtitle font-light">
							Explore and watch YouTube videos
						</p>

					</div>

					<div className="space-y-2">

						<p>
							An <strong>open source <Link href="https://www.youtube.com">YouTube</Link> client</strong> for those
							concerned about their privacy and sick of heavy browsers like me! This is one of my longest projects,
							since I've used it a lot to learn, and therefore I've restarted it many times.
						</p>

						<p>
							It's currently being written in <strong><Link href="https://wiki.gnome.org/Projects/Vala">Vala</Link>
							</strong>, an <strong>object-oriented programming language</strong> developed by <strong><Link
							href="https://www.gnome.org">GNOME</Link></strong> that transpiles to C and makes use of the <strong>
							<Link href="https://developer.gnome.org/gobject/stable">GLib Object System</Link></strong> to create its
							classes and interfaces, and in <strong><Link href="https://www.gtk.org">GTK</Link></strong>, a toolkit
							developed by the same foundation that allows creating fantastic interfaces that are fast and, together
							with <strong><Link href="https://gnome.pages.gitlab.gnome.org/libhandy">Handy</Link></strong>, are totally
							<strong>mobile friendly</strong>.
						</p>

					</div>

				</article>

				<article className="space-y-4">

					<div className="space-y-2">

						<h3 className="font-title text-xl font-bold">
							<Link href="https//github.com/nahuelwexd/Vadi">
								Vadi
							</Link>
						</h3>

						<p className="font-subtitle font-light">
							Dependency injection utilities for Vala
						</p>

					</div>

					<div className="space-y-2">

						<p>
							Throughout my learning, I came across <strong><Link href="https://en.wikipedia.org/wiki/Inversion_of_control">
							inversion of control</Link> and <Link href="https://en.wikipedia.org/wiki/Dependency_injection">dependency
							injection</Link></strong>. I was quickly fascinated by them and wanted to start applying their concept
							wherever I put code. Great was my disappointment when I saw that Vala, one of the languages that aroused
							me the most passion, <strong>didn't have libraries that make it easy to use them</strong>, so I decided to
							create one by myself.
						</p>

						<p>
							Making use of dependency injection via construct properties, I managed to create a basic but functional
							generic factory of objects (commonly called <strong><Link href="https://pasztor.at/blog/what-is-the-ioc-container">
							IoC Container</Link></strong>). Soon I'll be adding more tools and improving the developer experience.
						</p>

					</div>

				</article>

			</section>

		</div>
	)
}

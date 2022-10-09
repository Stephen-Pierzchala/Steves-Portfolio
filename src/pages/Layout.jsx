import React from 'react'
import { Outlet, Link } from 'react-router-dom'

const Layout = () => {
	return (
		<>
			<header className="bg-gray-50 py-8 text-center">
				<h1 className="font-sans-serif text-xl font-bold">Steve's Portfolio</h1>
			</header>
			<main className="mx-auto mb-8 flex h-full max-w-5xl flex-col divide-y divide-slate-200 bg-white text-center outline outline-1 outline-slate-200">
				<nav className="">
					<ul className="flex items-center justify-center gap-4 py-9 ">
						<li className="text-s text-blue-600 visited:text-purple-600 hover:text-blue-800">
							<Link to="/">Home</Link>
						</li>
						<li className="text-blue-600 visited:text-purple-600 hover:text-blue-800">
							<Link to="/contact">Contact</Link>
						</li>
						<li className="text-blue-600 visited:text-purple-600 hover:text-blue-800">
							<Link to="/resume">Resume</Link>
						</li>
						<li className="text-blue-600 visited:text-purple-600 hover:text-blue-800">
							<Link to="/posts">Posts</Link>
						</li>
					</ul>
				</nav>
				<section className="min-h-[50vh] flex-grow py-8 px-16">
					<Outlet />
				</section>
			</main>
		</>
	)
}

export default Layout

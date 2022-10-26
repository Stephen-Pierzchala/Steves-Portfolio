import React from 'react'
import { Outlet, Link } from 'react-router-dom'

const Layout = () => {
	return (
		<>
			<header className="bg-gray-50 py-8 text-center">
				<h1 className="text-2xl font-bold">Steve's Portfolio</h1>
			</header>
			<main className="mx-auto mb-8 flex h-full max-w-5xl flex-col divide-y divide-slate-200 rounded-t-xl bg-white text-center outline outline-1 outline-slate-200">
				<nav className="">
					<ul className="flex items-center justify-center gap-4 py-9 ">
						<li className="border-b-2 border-dotted border-transparent text-lg text-blue-700 visited:text-purple-700 hover:cursor-pointer hover:border-slate-200 hover:text-blue-900">
							<Link to="/">Home</Link>
						</li>
						<li className="border-b-2 border-dotted border-transparent text-lg text-blue-700 visited:text-purple-700 hover:cursor-pointer hover:border-slate-200 hover:text-blue-900">
							<Link to="/contact">Contact</Link>
						</li>
						<li className="border-b-2 border-dotted border-transparent text-lg text-blue-700 visited:text-purple-700 hover:cursor-pointer hover:border-slate-200 hover:text-blue-900">
							<Link to="/resume">Resume</Link>
						</li>
						<li className="border-b-2 border-dotted border-transparent text-lg text-blue-700 visited:text-purple-700 hover:cursor-pointer hover:border-slate-200 hover:text-blue-900">
							<Link to="/posts">Posts</Link>
						</li>
					</ul>
				</nav>
				<section className="min-h-[50vh] flex-grow p-16">
					<Outlet />
				</section>
			</main>
		</>
	)
}

export default Layout

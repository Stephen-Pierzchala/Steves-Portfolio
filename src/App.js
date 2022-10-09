import React from 'react'
import Landing from './pages/Landing'
import Layout from './pages/Layout'
import Contact from './pages/Contact'
import Resume from './pages/Resume'
import PostList from './pages/PostList'
import { Routes, Route } from 'react-router-dom'

export function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route path="/" element={<Landing />} />
					<Route path="/posts" element={<PostList />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/resume" element={<Resume />} />
				</Route>
			</Routes>
		</>
	)
}

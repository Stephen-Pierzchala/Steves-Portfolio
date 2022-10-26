import React from 'react'
import PostLink from '../components/PostLink'

const Posts = () => {
	return (
		<>
			<h2 className="mb-4 text-xl font-bold">Blog Posts</h2>
			<div className="controls">
				<div className="flex flex-row justify-around">
					<div>sort</div>
					<div>filter</div>
				</div>
				<div>
					<div className="my-4 rounded-full border p-1">
						<p>Search bar</p>
					</div>
				</div>
			</div>
			<div className="divide-y-8 divide-solid divide-black">
				<PostLink />
				<PostLink />
				<PostLink />
				<PostLink />
				<PostLink />
				<PostLink />
				<PostLink />
				<PostLink />
				<PostLink />
				<PostLink />
				<PostLink />
				<PostLink />
				<PostLink />
				<PostLink />
				<PostLink />
				<PostLink />
				<PostLink />
				<PostLink />
				<PostLink />
				<PostLink />
				<PostLink />
				<PostLink />
				<PostLink />
				<PostLink />
				<PostLink />
				<PostLink />
				<PostLink />
				<PostLink />
				<PostLink />
				<PostLink />
			</div>
		</>
	)
}

export default Posts

import Post from '../components/Post'
import React from 'react'

const fs = require('fs')
const path = require('path')

/**
 * postLoader.js
 *
 * I liked the idea of using the filesystem as a CMS (content managment system)
 *
 * postLoader.js does the following
 *
 * 1. reads everything in the data/posts directory
 * 2. Parses that data and meta data, and then puts it into a React Post Component
 * 3. exports an array of Post components for each blog post in the data/posts directory.
 *
 * Now anytime I want to write a new blogpost, I just need to open a create a new md file in the data/posts directory and commit it to main branch. This would trigger CI and then automatically rebuild the project and deploy the new blog post.
 *
 * The problem with this approach (for this project) is that I'm using Parcel to create a react SPA. You can't read the filesystem like this on client side. This makes me want to use a SSR library like Next.js or something instead.
 *
 */

console.log('\n\n\n')
const targetFolder = '../data/posts'

const posts = []

fs.readdir(targetFolder, (err, folderNames) => {
	if (err) throw err

	folderNames.forEach((folder) => {
		const postData = {}

		//read metaData
		fs.readFile(
			path.resolve(`${targetFolder}/${folder}/metadata.json`),
			'utf8',
			(err, data) => {
				if (err) throw err
				postData.metadata = JSON.parse(data)
			}
		)

		//read the markdown
		console.log('reading post.md')
		fs.readFile(
			path.resolve(`${targetFolder}/${folder}/post.md`),
			'utf-8',
			(err, data) => {
				if (err) throw err
				postData.md = data
			}
		)

		//put them into a component
		const post = <Post metadata={postData.metadata} md={postData.md} />

		//append component to posts array
		posts.push(post)
	})
})

export default posts

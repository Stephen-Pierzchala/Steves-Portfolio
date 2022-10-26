import PropTypes from 'prop-types'
import React from 'react'

const Post = ({ metadata, md }) => {
	return (
		<>
			<h1>metadata</h1>
			<p>{metadata}</p>
			<h2>md</h2>
			<p>{md}</p>
		</>
	)
}

Post.propTypes = {
	metadata: PropTypes.object,
	md: PropTypes.string,
}

export default Post

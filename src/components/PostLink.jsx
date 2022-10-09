import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const PostLink = ({ title, link, date }) => {
	return (
		<Link to={link}>
			<li className="mb-2 flex justify-between border-b-2 border-dotted border-transparent hover:cursor-pointer hover:border-slate-200">
				<div className="text-blue-600 visited:text-purple-600 hover:text-blue-800">
					{title}
				</div>
				<div className="my-auto text-xs uppercase text-gray-500">{date}</div>
			</li>
		</Link>
	)
}

PostLink.propTypes = {
	title: PropTypes.string,
	link: PropTypes.string,
	date: PropTypes.string,
}

PostLink.defaultProps = {
	title: 'This is the title of a blog post that I wrote',
	link: '/',
	date: 'Tuesday',
}

export default PostLink

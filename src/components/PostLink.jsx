import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Tag from './Tag'

const PostLink = ({ title, link, date }) => {
	return (
		<Link to={link}>
			<div className="p-2 hover:bg-slate-200">
				<li className="mb-2 flex justify-between">
					<div className="visited:text-purple-70 text-lg text-blue-700">
						{title}
					</div>
					<div className=" uppercase text-gray-500">{date}</div>
				</li>
				<div className="flex flex-row gap-2">
					<Tag id="React.JS" color="red" />
					<Tag id="Parcel" color="teal" />
					<Tag id="TailwindCSS" color="orange" />
				</div>
			</div>
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

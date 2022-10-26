import React from 'react'
import PropTypes from 'prop-types'
import { useMemo } from 'react'

const Tag = ({ id, color }) => {
	const colorClass = useMemo(() => `bg-${color}-400`, [color])
	console.log(colorClass)

	//Interesting, tailwind doesnt support dynamic class names like this.
	// If I write out the class names like I did on the line below though, the postCSS compiler picks it up.
	//bg-red-400 bg-teal-400 bg-orange-400
	return (
		<div className="align inline-flex flex-row rounded-full border border-slate-600 pl-2 pr-1">
			<p className="mr-1 text-xs uppercase italic text-slate-600">{id}</p>
			<div className={`my-auto h-3 w-3 rounded-full ${colorClass}`}></div>
		</div>
	)
}

Tag.propTypes = {
	id: PropTypes.string,
	color: PropTypes.string,
}

Tag.defaultProps = {
	id: 'blogpost',
	color: 'lightblue',
}

export default Tag

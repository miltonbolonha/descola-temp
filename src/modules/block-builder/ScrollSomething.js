import React from 'react'

import Layout from '../layout'
// import AtomicBlock from '../atomic-block'
import slugify from '@tools/slugify'

const ScrollSomething = ({ title, numColumns, debug = false }) => {
	if (!title) {
		return null
	}
	const titleSlug = slugify(title)

	return (
		<Layout
			type="ROW"
			opt={{
				bgColor: '#3df',
				isBoxed: true,
				classes: 'light-content',
				alignTo: 'left',
			}}
			setLocation="home-quote"
		>
			{/* opt.bgColor
opt.bgColor
opt.bgColor
opt.classes
opt.isBoxed
opt.numColumns
opt.alignTo
opt.bgColor
opt.bgImg
opt.bgImg */}
		</Layout>
	)
}

export default ScrollSomething

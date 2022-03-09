import React from 'react'
import LayoutResolver from './containers/'

const Layout = ({ children, opt, type, sectionTitle, setLocation, logo }) => {
	return (
		<LayoutResolver
			children={children}
			logo={logo}
			opt={opt}
			type={type}
			sectionTitle={sectionTitle}
			setLocation={setLocation}
		/>
	)
}

export default Layout

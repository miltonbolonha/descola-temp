import React from 'react'
import LayoutResolver from './containers/'

const Layout = ({
	children,
	opt,
	type,
	// querySelector,
	sectionTitle,
	setLocation,
	logo,
	url,
}) => {
	return (
		<LayoutResolver
			children={children}
			logo={logo}
			opt={opt}
			type={type}
			// querySelector={querySelector}
			sectionTitle={sectionTitle}
			setLocation={setLocation}
			url={url}
		/>
	)
}

export default Layout

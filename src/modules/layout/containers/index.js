import React from 'react'
import BodyContainer from './BodyContainer'
import HeaderContainer from './HeaderContainer'
import FooterContainer from './FooterContainer'
import RowContainer from './RowContainer'
import BlockImageContainer from './BlockImageContainer'
import FormContainer from './FormContainer'
// import PlayerContainer from './PlayerContainer'
// import FullScreenContainer from './FullScreenContainer'
// import BlockShareContainer from './BlockShareContainer'
// import ScienceContainer from './ScienceContainer'
// import MainContainer from './MainContainer'
// import MemoryGameContainer from './MemoryGameContainer'

const LayoutResolver = ({
	children,
	opt,
	type,
	// querySelector,
	sectionTitle,
	setLocation,
	logo,
	url,
}) => {
	function renderComponent(renderThis) {
		switch (renderThis) {
			case 'BODY':
				return <BodyContainer children={children} opt={opt} />
			case 'FOOTER':
				return <FooterContainer children={children} opt={opt} />
			case 'BLOCK_IMAGE':
				return <BlockImageContainer opt={opt} />
			case 'SUBSCRIBE':
				return <FormContainer opt={opt} />
			// case 'BLOCK_SHARE':
			// return <BlockShareContainer opt={opt} />
			case 'HEADER':
				return <HeaderContainer logo={logo} opt={opt} />
			case 'ROW':
				return (
					<RowContainer
						opt={opt}
						children={children}
						// querySelector={querySelector}
						sectionTitle={sectionTitle}
						setLocation={setLocation}
					/>
				)
			default:
				return console.log(renderThis)
		}
	}
	return <>{renderComponent(type)}</>
}
export default LayoutResolver

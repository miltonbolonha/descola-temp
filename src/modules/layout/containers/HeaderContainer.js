import { React, useState } from '../dependencies'

import Header from '../components/Header'

const HeaderContainer = ({ logo, opt }) => {
	const logoHeader = opt ? opt.logoHeader : null
	const hasMainMenu = opt ? opt.mainMenu : null
	const [refState, setRefState] = useState(false)
	function handleRefState() {
		setRefState(!refState)
	}
	return (
		<Header
			// logo={logo}
			logoSvg={opt.logoSvg}
			refState={refState}
			handleRefState={handleRefState}
			logoComponent={logoHeader}
			mainMenu={hasMainMenu}
			logoUrl={opt.logoUrl}
		/>
	)
}
export default HeaderContainer

import { React, useRef } from '../dependencies'
import useListenOutsideEvents from '../../../tools/useListenOutsideEvents'

import MainMenu from '../components/MainMenu'

const FooterMainMenuContainer = (props) => {
	const { refState } = props
	const { handleRefState } = props
	const wrapperRef = useRef(null)
	const toggleConfig = {
		wrapperRef: wrapperRef,
		refState: refState,
		handleRefState: handleRefState,
		// application configs
		scroll: true,
		resize: true,
		outsideClick: true,
		hasOverlay: false,
		mouseDown: {
			on: true,
			clickElement: '.menu-wrapper',
		},
	}
	useListenOutsideEvents(toggleConfig)
	const isVisibleClass = toggleConfig.refState ? 'visible' : 'not-visible'
	const ariaVisible = toggleConfig.refState ? 'true' : 'false'
	return (
		<MainMenu
			wrapperRef={toggleConfig.wrapperRef}
			isVisibleClass={isVisibleClass}
			ariaVisible={ariaVisible}
		/>
	)
}

export default FooterMainMenuContainer

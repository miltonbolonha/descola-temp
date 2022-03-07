import React from 'react'
import { Link } from 'gatsby'
const MainMenu = ({ wrapperRef, isVisibleClass, ariaVisible }) => (
	<nav ref={wrapperRef} className={'main-nav zin menu-state-' + isVisibleClass}>
		<ul className="" id="mainmenu" aria-labelledby="check-toggle-icon">
			<li role="none">
				<p>Login / Registre-se</p>
			</li>
			<li role="none">
				<a href="https://descola.org/cursos" role="menuitem">
					Cursos
				</a>
			</li>
			<li role="none">
				<a href="https://descola.org/sobre" role="menuitem">
					O Que é a Descola?
				</a>
			</li>
			<li role="none">
				<a href="https://descola.org/empresas" role="menuitem">
					Para empresas
				</a>
			</li>
			<li role="none">
				<Link to="/" role="menuitem">
					Blog
				</Link>
			</li>
		</ul>
	</nav>
)

export default MainMenu

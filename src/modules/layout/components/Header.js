import React from 'react'
import { Link } from 'gatsby'
import MenuContainer from '../containers/MenuContainer'
import Layout from '..'
import { FiUser } from 'react-icons/fi'
import { RiShoppingBag3Line } from 'react-icons/ri'
import { GiHamburgerMenu } from 'react-icons/gi'
const Header = ({
	refState,
	handleRefState,
	mainMenu,
	logoComponent,
	logoSvg,
	logoUrl,
}) => {
	const menuActive = refState ? 'visible' : 'not-visible'
	return (
		<header role="banner">
			<Layout
				type="ROW"
				opt={{
					isBoxed: false,
					bgColor: '#e9e9ed',
					classes: 'mobile-header mobile-only',
				}}
			>
				{logoUrl ? (
					<a href="https://descola.org/" className="logo-link">
						{logoSvg}
					</a>
				) : (
					<Link to="/" className="logo-link">
						{logoSvg}
					</Link>
				)}
				<div className={'main-header main-header-' + menuActive} role="menubar">
					<MenuContainer refState={refState} handleRefState={handleRefState} />
					<div className="header-columns toggle-menu">
						<p className="menu-shop-bag-mobile">
							<FiUser />
						</p>
						<p className="menu-shop-bag-mobile">
							<RiShoppingBag3Line />
						</p>
						<button
							type="button"
							id="check-toggle-icon"
							onClick={handleRefState}
							aria-haspopup="true"
							aria-controls="mainmenu"
							aria-expanded={refState}
							className={`menu-wrapper menu-bar-icon mobile-only ${
								refState ? 'active' : 'not-active'
							}`}
						>
							<GiHamburgerMenu />
						</button>
					</div>
				</div>
			</Layout>
			<Layout type="ROW" opt={{ bgColor: '#e9e9ed', isBoxed: false }}>
				<Layout
					type="ROW"
					opt={{
						isBoxed: true,
						classes: 'top-hibbon desktop-only',
						alignTo: 'right',
					}}
				>
					<p>Login / Registre-se</p>
				</Layout>
			</Layout>
			<Layout
				type="ROW"
				opt={{
					bgColor: '#f6f7fa',
					isBoxed: false,
					classes: 'header-logo-wrapper desktop-only',
				}}
			>
				<Layout type="ROW" opt={{ isBoxed: true, classes: 'header-logo' }}>
					{logoUrl ? (
						<a href="https://descola.org/" className="logo-link">
							{logoSvg}
						</a>
					) : (
						<Link to="/" className="logo-link">
							{logoSvg}
						</Link>
					)}
					<nav className="main-nav desktop-only">
						<ul className="main-ul">
							<li>
								<a href="https://descola.org/cursos">Cursos</a>
							</li>
							<li>
								<a href="https://descola.org/sobre">O Que é a Descola?</a>
							</li>
							<li>
								<a href="https://descola.org/empresas">Para empresas</a>
							</li>
							<li>
								<Link to="/">Blog</Link>
							</li>
							<li className="menu-shop-bag">
								<RiShoppingBag3Line />
							</li>
							<li className="main-menu-search">
								<Layout
									type="SUBSCRIBE"
									opt={{ placeholder: 'Procure um curso' }}
								/>
							</li>
						</ul>
					</nav>
				</Layout>
			</Layout>
		</header>
	)
}

export default Header

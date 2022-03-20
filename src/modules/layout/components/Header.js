import React from 'react'
import { Link } from 'gatsby'
import MenuContainer from '../containers/MenuContainer'
import Layout from '..'
import layoutYAML from '@Content/configs/layout.yaml'
import mainMenuYAML from '@Content/menus/main-menu.yaml'
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
	const mainMenuItems = mainMenuYAML.menu.items
	const mainMenuStatus = mainMenuYAML.menu.status
	const { logo_url, link_01 } = layoutYAML.layout02

	let mainMenuReturnMobile = null
	let logoUrlReturn = null
	const menuActive = refState ? 'visible' : 'not-visible'

	const mainMenuReturn = mainMenuItems.map((list, indx) => {
		if (list.item.href) {
			return (
				<li key={indx}>
					<a href={list.item.href}>{list.item.label}</a>
				</li>
			)
		}
		if (list.item.to) {
			return (
				<li key={indx}>
					<Link to={list.item.to}>{list.item.label}</Link>
				</li>
			)
		}
		if (list.item.icon) {
			return (
				<li className="menu-shop-bag" key={indx}>
					<RiShoppingBag3Line />
				</li>
			)
		}
		if (list.item.search_widget) {
			return (
				<li className="main-menu-search" key={indx}>
					<Layout
						type="SEARCH"
						opt={{
							placeholder: list.item.search_label,
							searchStringBase: list.item.search_url_prefix,
						}}
					/>
				</li>
			)
		}
		return null
	})

	mainMenuReturnMobile = (
		<div className={'main-header main-header-' + menuActive} role="menubar">
			<MenuContainer
				refState={refState}
				handleRefState={handleRefState}
				menuItems={mainMenuItems}
				link_01={link_01}
			/>
			<div className="header-columns toggle-menu">
				<p className="menu-shop-bag-mobile">
					<FiUser />
				</p>
				<p className="menu-shop-bag-mobile" tabIndex="-1">
					<RiShoppingBag3Line />
				</p>
				<button
					type="button"
					id="check-toggle-icon"
					onClick={handleRefState}
					aria-haspopup="true"
					aria-controls="mainmenu"
					aria-expanded={refState}
					aria-label="Alternar visibilidade do menu"
					className={`menu-wrapper menu-bar-icon mobile-only ${
						refState ? 'active' : 'not-active'
					}`}
				>
					<GiHamburgerMenu />
				</button>
			</div>
		</div>
	)

	logoUrlReturn = logoUrl ? (
		<a href={logo_url} className="logo-link">
			{logoSvg}
		</a>
	) : (
		<Link to="/" className="logo-link">
			{logoSvg}
		</Link>
	)

	return (
		<header>
			<Layout
				type="ROW"
				opt={{
					isBoxed: false,
					bgColor: '#e9e9ed',
					classes: 'mobile-header mobile-only',
				}}
			>
				{logoUrlReturn}
				{mainMenuStatus === 'active' ? mainMenuReturnMobile : null}
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
					<p>
						<a href={link_01}>Login / Registre-se</a>
					</p>
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
						<a href={logo_url} className="logo-link">
							{logoSvg}
						</a>
					) : (
						<Link to="/" className="logo-link">
							{logoSvg}
						</Link>
					)}
					<nav className="main-nav desktop-only" id="site-navigation">
						<ul className="main-ul">
							{mainMenuStatus === 'active' ? mainMenuReturn : null}
						</ul>
					</nav>
				</Layout>
			</Layout>
		</header>
	)
}

export default Header

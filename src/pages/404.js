import React from 'react'
import { getSrc } from 'gatsby-plugin-image'

import DescolaLogo from '../../static/images/descola-logo.svg'
import DescolaLogoDark from '../../static/images/descola-logo-dark.svg'

import Layout from '@Layout'
import HeaderBlock from '@BlockBuilder/HeaderBlock'
import FooterBlock from '@BlockBuilder/FooterBlock'
import { useSiteMetaDatas } from '../tools/useSiteMetaDatas'

const ErrorPage = ({ data }) => {
	const { cardImage, footerThreeMarkdowRemark } = useSiteMetaDatas()
	return (
		<Layout
			type="BODY"
			opt={{
				titleSeo: `Descola`,
				classes: 'blog-list',
				schemaType: 'blog',
				cardImage: getSrc(cardImage.childrenImageSharp[0]),
			}}
		>
			<HeaderBlock logotipoSvg={<DescolaLogo />} />
			<Layout
				type="ROW"
				opt={{ isBoxed: true, classes: 'main-container-wrapper' }}
			>
				<main className="main-container">
					<h1>Erro 404</h1>
					<p>Você não deveria estar aqui.</p>
					<br />
				</main>
			</Layout>
			<FooterBlock
				footerLogo={<DescolaLogoDark />}
				featurePosts={footerThreeMarkdowRemark.edges}
			/>
		</Layout>
	)
}
export default ErrorPage

import React from 'react'
import { graphql } from 'gatsby'

import DescolaLogo from '../../static/images/descola-logo.svg'
import DescolaLogoDark from '../../static/images/descola-logo-dark.svg'

import Layout from '@Layout'
import HeaderBlock from '@BlockBuilder/HeaderBlock'
import FooterBlock from '@BlockBuilder/FooterBlock'
import PostsBlock from '@BlockBuilder/PostsBlock'

const ErrorPage = ({ data }) => {
	const posts = data.allMarkdownRemark.edges
	return (
		<Layout
			type="BODY"
			opt={{
				titleSeo: `Descola`,
				classes: 'blog-list',
				schemaType: 'blog',
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
				featurePosts={data.footerThreeMarkdowRemark.edges}
				postsForTags={posts}
			/>
		</Layout>
	)
}
export default ErrorPage

export const queryAtividade = graphql`
	query {
		site {
			siteMetadata {
				postsPerPage
			}
		}

		footerThreeMarkdowRemark: allMarkdownRemark(
			sort: { fields: frontmatter___date, order: DESC }
			filter: { frontmatter: { featuredPost: { eq: true } } }
		) {
			edges {
				node {
					fields {
						slug
					}
					frontmatter {
						date(formatString: "DD [de] MMMM [de] YYYY", locale: "pt-br")
						title
						tags
						footerFeaturedImage: featuredImage {
							childrenImageSharp {
								gatsbyImageData(
									width: 76
									height: 76
									placeholder: DOMINANT_COLOR
									quality: 70
								)
							}
						}
					}
					excerpt(pruneLength: 200)
				}
			}
		}
	}
`

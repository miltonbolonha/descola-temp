import React from 'react'
import { graphql } from 'gatsby'

import DescolaLogo from '../../static/images/descola-logo.svg'
import DescolaLogoDark from '../../static/images/descola-logo-dark.svg'

import Layout from '../modules/layout'
import HeaderBlock from '../modules/block-builder/HeaderBlock'
import FooterBlock from '../modules/block-builder/FooterBlock'
import PostsBlock from '../modules/block-builder/PostsBlock'

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
					<PostsBlock
						postsPerPage={data.site.siteMetadata.postsPerPage}
						postList={posts}
						typeLoad={'push'} // or false
						readMoreText="Ler Mais"
						pagination={{
							loadMoreBtn: true,
							loadMore: 'Ler Mais',
						}}
					/>
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

		allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
			edges {
				node {
					fields {
						slug
					}
					frontmatter {
						date(formatString: "DD [de] MMMM [de] YYYY", locale: "pt-br")
						title
						tags
						featuredImage {
							childrenImageSharp {
								gatsbyImageData(
									width: 350
									height: 224
									placeholder: DOMINANT_COLOR
									quality: 90
								)
							}
						}
					}
					excerpt(pruneLength: 200)
				}
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

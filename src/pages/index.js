import React from 'react'
import { graphql } from 'gatsby'
import { getSrc } from 'gatsby-plugin-image'

import DescolaLogo from '../../static/images/descola-logo.svg'
import DescolaLogoDark from '../../static/images/descola-logo-dark.svg'

import Layout from '@Layout'
import HeaderBlock from '@BlockBuilder/HeaderBlock'
import FooterBlock from '@BlockBuilder/FooterBlock'
import PostsBlock from '@BlockBuilder/PostsBlock'

const IndexPage = ({ data, location, serverData, pageContext }) => {
	const posts = data.allMarkdownRemark.edges
	return (
		<Layout
			type="BODY"
			opt={{
				titleSeo: `Descola`,
				classes: 'blog-list',
				schemaType: 'blog',
				blogListing: posts.slice(0, 9),
				mainLogo: data.imgHolder,
				cardImage: getSrc(data.cardImage.childrenImageSharp[0]),
			}}
		>
			<HeaderBlock logotipoSvg={<DescolaLogo />} />
			<Layout
				type="ROW"
				opt={{ isBoxed: true, classes: 'main-container-wrapper' }}
			>
				<main className="main-container">
					<h1>Posts</h1>
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
			/>
		</Layout>
	)
}
export default IndexPage

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
									width: 152
									height: 152
									placeholder: DOMINANT_COLOR
									quality: 80
								)
							}
						}
					}
					excerpt(pruneLength: 200)
				}
			}
		}
		imgHolder: file(relativePath: { eq: "descola-image.png" }) {
			childrenImageSharp {
				gatsbyImageData(width: 76, height: 76, placeholder: NONE, quality: 100)
			}
		}
		cardImage: file(relativePath: { eq: "descola-image.png" }) {
			childrenImageSharp {
				gatsbyImageData(
					width: 560
					height: 292
					placeholder: NONE
					quality: 100
				)
			}
		}
	}
`

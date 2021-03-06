import React from 'react'
import { graphql } from 'gatsby'
import { getSrc } from 'gatsby-plugin-image'

import DescolaLogo from '@Images/descola-logo.svg'
import DescolaLogoDark from '@Images/descola-logo-dark.svg'

import Layout from '@Layout'
import HeaderBlock from '@BlockBuilder/HeaderBlock'
import FooterBlock from '@BlockBuilder/FooterBlock'
import PostsBlock from '@BlockBuilder/PostsBlock'
import { useSiteMetaDatas } from '@tools/useSiteMetaDatas'

const IndexPage = (props) => {
	const { data } = props
	const posts = data.allMarkdownRemark.edges
	const { cardImage, footerThreeMarkdowRemark, imgHolder, site, darkLogo } =
		useSiteMetaDatas()
	return (
		<Layout
			type="BODY"
			opt={{
				titleSeo: `Blog | Descola - Aprenda Power Skills com cursos 100% online`,
				classes: 'blog-list',
				schemaType: 'blog',
				blogListing: posts.slice(0, 9),
				mainLogo: imgHolder,
				cardImage: cardImage ? getSrc(cardImage.childrenImageSharp[0]) : null,
				serverUrl: props.location.href,
			}}
		>
			<HeaderBlock logotipoSvg={<DescolaLogo />} />
			<Layout
				type="ROW"
				opt={{ isBoxed: true, classes: 'main-container-wrapper' }}
			>
				<main className="main-container" id="site-content" role="list">
					<h1>Posts</h1>
					<PostsBlock
						postsPerPage={site.siteMetadata.postsPerPage}
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
				featurePosts={footerThreeMarkdowRemark.edges}
			/>
		</Layout>
	)
}
export default IndexPage

export const queryAtividade = graphql`
	query {
		allMarkdownRemark(
			sort: { fields: frontmatter___date, order: DESC }
			limit: 900
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
	}
`

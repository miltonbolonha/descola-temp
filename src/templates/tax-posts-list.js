import React from 'react'
import { graphql } from 'gatsby'
import { getSrc } from 'gatsby-plugin-image'

import DescolaLogo from '@Images/descola-logo.svg'
import DescolaLogoDark from '@Images/descola-logo-dark.svg'

import Layout from '@Layout'
import HeaderBlock from '@BlockBuilder/HeaderBlock'
import FooterBlock from '@BlockBuilder/FooterBlock'
import PostsBlock from '@BlockBuilder/PostsBlock'
import { useSiteMetaDatas } from '../tools/useSiteMetaDatas'

const TagsList = (props) => {
	const tagList = props.data.allMarkdownRemark.edges
	const { cardImage, footerThreeMarkdowRemark, site } = useSiteMetaDatas()
	return (
		<Layout
			type="BODY"
			opt={{
				titleSeo: `Descola - Tags`,
				classes: 'blog-list',
				schemaType: 'blog',
				cardImage: getSrc(cardImage.childrenImageSharp[0]),
				blogListing: tagList.slice(0, 9),
				serverUrl: props.location.href,
			}}
		>
			<HeaderBlock logotipoSvg={<DescolaLogo />} />
			<Layout
				type="ROW"
				opt={{ isBoxed: true, classes: 'main-container-wrapper' }}
			>
				<main className="main-container" role="list">
					<h1>Posts da Tag: {props.pageContext.tag}</h1>
					<PostsBlock
						postList={tagList}
						postsPerPage={site.siteMetadata.postsPerPage}
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
export const query = graphql`
	query TagsList($tag: String) {
		allMarkdownRemark(
			sort: { fields: frontmatter___date, order: DESC }
			filter: { frontmatter: { tags: { in: [$tag] } } }
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

export default TagsList

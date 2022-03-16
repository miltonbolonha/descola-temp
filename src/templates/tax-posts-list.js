import React from 'react'
import { graphql } from 'gatsby'

import DescolaLogo from '../../static/images/descola-logo.svg'
import DescolaLogoDark from '../../static/images/descola-logo-dark.svg'

import Layout from '@Layout'
import HeaderBlock from '@BlockBuilder/HeaderBlock'
import FooterBlock from '@BlockBuilder/FooterBlock'
import PostsBlock from '@BlockBuilder/PostsBlock'

const TagsList = (props) => {
	const tagList = props.data.allMarkdownRemark.edges
	// const postFrontmatter = props.pageContext.markdownRemark.frontmatter
	return (
		<Layout
			type="BODY"
			opt={{
				titleSeo: `Descola - Tags`,
				classes: 'blog-list',
				schemaType: 'blog',
				blogListing: tagList.slice(0, 9),
			}}
		>
			<HeaderBlock logotipoSvg={<DescolaLogo />} />
			<Layout
				type="ROW"
				opt={{ isBoxed: true, classes: 'main-container-wrapper' }}
			>
				<main className="main-container">
					<h1>Posts da Tag: {props.pageContext.tag}</h1>
					<PostsBlock
						postList={tagList}
						postsPerPage={
							props.pageContext.postsPerPage.siteMetadata.postsPerPage
						}
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
				featurePosts={props.pageContext.footerThreeMarkdowRemark.edges}
			/>
		</Layout>
	)
}
export const query = graphql`
	query TagsList($tag: String) {
		allMarkdownRemark(
			sort: { fields: frontmatter___date, order: DESC }
			filter: { frontmatter: { tags: { in: [$tag] } } }
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
		imgHolder: file(relativePath: { eq: "descola-image.png" }) {
			childrenImageSharp {
				gatsbyImageData(width: 76, height: 76, placeholder: NONE, quality: 100)
			}
		}
	}
`

export default TagsList

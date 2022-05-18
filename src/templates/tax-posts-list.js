import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { getSrc } from 'gatsby-plugin-image'

import DescolaLogo from '@Images/descola-logo.svg'
import DescolaLogoDark from '@Images/descola-logo-dark.svg'

import Layout from '@Layout'
import HeaderBlock from '@BlockBuilder/HeaderBlock'
import FooterBlock from '@BlockBuilder/FooterBlock'
import PostsBlock from '@BlockBuilder/PostsBlock'
import { useSiteMetaDatas } from '../tools/useSiteMetaDatas'

const TagsList = (props) => {
	const { cardImage, footerThreeMarkdowRemark, site } = useSiteMetaDatas()
	return (
		<StaticQuery
			query={graphql`
				query TagsList {
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
			`}
			render={(data) => {
				const tagsList = data.allMarkdownRemark.edges
				const tagsContext = props.pageContext.tag
				const tagsListFiltered = tagsList.filter((item) => {
					return item.node.frontmatter.tags.includes(tagsContext)
				})
				return (
					<Layout
						type="BODY"
						opt={{
							titleSeo: `${props.pageContext.tag} | Descola - Aprenda Power Skills com cursos 100% online`,
							classes: 'blog-list',
							schemaType: 'blog',
							cardImage: getSrc(cardImage.childrenImageSharp[0]),
							blogListing: tagsList.slice(0, 9),
							serverUrl:
								props.location.origin || site.siteMetadata.siteUrl || '/',
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
									postList={tagsListFiltered}
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
			}}
		/>
	)
}

export default TagsList

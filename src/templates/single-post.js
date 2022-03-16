import React from 'react'
import { graphql } from 'gatsby'

import DescolaLogo from '../../static/images/descola-logo.svg'
import DescolaLogoDark from '../../static/images/descola-logo-dark.svg'

import Layout from '@Layout'
import HeaderBlock from '@BlockBuilder/HeaderBlock'
import FooterBlock from '@BlockBuilder/FooterBlock'

import SinglePostBlock from '@BlockBuilder/SinglePostBlock'

const SinglePost = ({ data }) => {
	const post = data.markdownRemark
	return (
		<Layout
			type="BODY"
			opt={{
				titleSeo: `${post.frontmatter.title} - Descola`,
				authorSeo: post.frontmatter.author,
				classes: 'single-post',
				datePublished: post.frontmatter.date,
				schemaType: 'article',
				featuredImage:
					data.site.siteMetadata.siteUrl +
					post.frontmatter.featuredImage.childrenImageSharp[0].gatsbyImageData
						.images.fallback.src,
				articleBody: post.html,
				mainLogo: data.imgHolder,
				description: post.excerpt,
			}}
		>
			<HeaderBlock logotipoSvg={<DescolaLogo />} />
			<SinglePostBlock
				imgHolder={data.imgHolder}
				date={post.frontmatter.date}
				author={post.frontmatter.author}
				html={post.html}
				title={post.frontmatter.title}
				tags={post.frontmatter.tags}
			/>
			<FooterBlock
				footerLogo={<DescolaLogoDark />}
				featurePosts={data.allMarkdownRemark.edges}
			/>
		</Layout>
	)
}

export const query = graphql`
	query SinglePost($slug: String!) {
		site {
			siteMetadata {
				postsPerPage
				siteUrl
			}
		}

		markdownRemark(fields: { slug: { eq: $slug } }) {
			frontmatter {
				title
				date(formatString: "DD [de] MMMM [de] YYYY", locale: "pt-br")
				author
				tags
				featuredPost
				featuredImage {
					childrenImageSharp {
						gatsbyImageData(
							width: 350
							height: 224
							placeholder: NONE
							quality: 100
						)
					}
				}
			}
			excerpt(pruneLength: 200)
			html
			fields {
				slug
			}
		}
		allMarkdownRemark(
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

export default SinglePost

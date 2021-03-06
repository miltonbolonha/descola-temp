import React from 'react'
import { graphql } from 'gatsby'

import DescolaLogo from '@Images/descola-logo.svg'
import DescolaLogoDark from '@Images/descola-logo-dark.svg'

import Layout from '@Layout'
import HeaderBlock from '@BlockBuilder/HeaderBlock'
import FooterBlock from '@BlockBuilder/FooterBlock'

import SinglePostBlock from '@BlockBuilder/SinglePostBlock'
import { useSiteMetaDatas } from '../tools/useSiteMetaDatas'

const SinglePost = ({ data, location }) => {
	const { footerThreeMarkdowRemark, imgHolder, site } = useSiteMetaDatas()
	const post = data.markdownRemark
	return (
		<Layout
			type="BODY"
			opt={{
				titleSeo: `${post.frontmatter.title} | Descola - Aprenda Power Skills com cursos 100% online`,
				authorSeo: post.frontmatter.author,
				classes: 'single-post',
				datePublished: post.frontmatter.date,
				schemaType: 'article',
				featuredImage:
					site.siteMetadata.siteUrl +
					post.frontmatter.featuredImage.childrenImageSharp[0].gatsbyImageData
						.images.fallback.src,
				cardImage:
					post.frontmatter.featuredImage.childrenImageSharp[0].gatsbyImageData
						.images.fallback.src,
				articleBody: post.html,
				mainLogo: imgHolder,
				description: post.excerpt,
				serverUrl: location.origin || site.siteMetadata.siteUrl || '/',
				articleUrl: location.href,
				social: site.siteMetadata.social.twitter,
			}}
		>
			<HeaderBlock logotipoSvg={<DescolaLogo />} />
			<main>
				<SinglePostBlock
					imgHolder={imgHolder}
					date={post.frontmatter.date}
					author={post.frontmatter.author}
					html={post.html}
					title={post.frontmatter.title}
					tags={post.frontmatter.tags}
					featuredImage={post.frontmatter.featuredImage}
				/>
			</main>
			<FooterBlock
				footerLogo={<DescolaLogoDark />}
				featurePosts={footerThreeMarkdowRemark.edges}
			/>
		</Layout>
	)
}

export const query = graphql`
	query SinglePost($slug: String!) {
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
							width: 1200
							height: 630
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
	}
`

export default SinglePost

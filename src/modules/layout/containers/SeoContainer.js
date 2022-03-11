import React from 'react'
import PropTypes from 'prop-types'

import { useStaticQuery, graphql } from 'gatsby'

import Seo from '../components/Seo'

function SeoContainer({
	frontmatter = {},
	description,
	lang,
	meta,
	title,
	datePublished,
	schemaType,
	titleSeo,
	authorSeo,
	featuredImage,
	blogListing,
	articleBody,
}) {
	const { site, apiPosts } = useStaticQuery(
		graphql`
			query {
				site {
					siteMetadata {
						title
						description
						siteUrl
						image
						keywords
						dateCreated
						author {
							name
						}
						organization {
							name
							url
							email
						}
						social {
							youtube
							instagram
							facebook
							linkedIn
						}
					}
				}

				apiPosts: allMarkdownRemark(
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
	)

	const metaDescription = description || site.siteMetadata.description
	return (
		<Seo
			lang={lang}
			title={titleSeo || title}
			siteTitle={site.siteMetadata.title}
			url={site.siteMetadata.organization.url}
			metaDescription={metaDescription}
			description={description || site.siteMetadata.description}
			meta={meta}
			siteUrl={site.siteMetadata.siteUrl}
			image={featuredImage || site.siteMetadata.image}
			author={authorSeo || site.siteMetadata.organization.name}
			organization={site.siteMetadata.organization}
			social={site.siteMetadata.social}
			datePublished={datePublished}
			dateCreated={site.siteMetadata.dateCreated}
			schemaType={schemaType}
			socialSameAs={site.siteMetadata.social}
			blogListing={blogListing}
			articleBody={articleBody}
			keywords={site.siteMetadata.keywords}
			apiPosts={apiPosts}
		/>
	)
}

SeoContainer.defaultProps = {
	lang: `en`,
	meta: [],
	description: ``,
}

SeoContainer.propTypes = {
	description: PropTypes.string,
	lang: PropTypes.string,
	meta: PropTypes.arrayOf(PropTypes.object),
	title: PropTypes.string.isRequired,
}

export default SeoContainer

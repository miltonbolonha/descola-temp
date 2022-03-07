import React from 'react'
import { Helmet } from 'react-helmet'

export default React.memo(
	({
		author,
		siteUrl,
		datePublished,
		defaultTitle,
		description,
		image,
		schemaType,
		organization,
		title,
		url,
		socialSameAs,
		blogListing,
		articleBody,
		keywords,
		dateCreated,
	}) => {
		const imageSrc = image.childrenImageSharp
			? image.childrenImageSharp[0].gatsbyImageData.images.fallback.src
			: image
		const dateNow = Date.now()
		const baseSchema = {
			'@context': 'http://schema.org',
			'@type': ['WebPage', 'CollectionPage'],
			'@id': siteUrl,
			headline: title,
			description: description,
			url: url,
			name: title,
			// email: organization.email,
			// logo: image,
			keywords: [keywords.map((e) => e)],
			primaryImageOfPage: imageSrc,
			inLanguage: 'pt-BR',
			copyrightYear: new Date().getFullYear(),
			potentialAction: 'Learning',
			datePublished: dateCreated,
			dateModified: dateNow,
			sameAs: [
				socialSameAs.instagram,
				socialSameAs.facebook,
				socialSameAs.linkedIn,
				socialSameAs.youtube,
			],
		}

		// const breadSchema = {
		// 	'@context': 'http://schema.org',
		// 	'@type': 'BreadcrumbList',
		// 	'@id': siteUrl,
		// 	itemListElement: [
		// 		{ '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
		// 	],
		// }

		// const blogSchema = blogListing
		// 	? blogListing.map((postBlog, index) => {
		// 			const thePost = postBlog.node
		// 			return {
		// 				'@context': 'http://schema.org',
		// 				'@type': 'NewsArticle',
		// 				position: index,
		// 				item: {
		// 					'@id': siteUrl + thePost.fields.slug,
		// 					name: thePost.frontmatter.title,
		// 					alternateName: defaultTitle,
		// 					headline: thePost.frontmatter.title,
		// 					breadcrumb: { '@id': siteUrl + thePost.fields.slug },
		// 					inLanguage: 'pt-BR',
		// 					image: {
		// 						'@type': 'ImageObject',
		// 						url: thePost.featuredImage
		// 							? thePost.featuredImage.childrenImageSharp[0].gatsbyImageData
		// 									.images.fallback.src
		// 							: null,
		// 					},
		// 					potentialAction: [
		// 						{ '@type': 'ReadAction', target: [siteUrl] },
		// 						'Learning',
		// 					],
		// 					description: description,
		// 					articleBody: thePost.html,
		// 					author: {
		// 						'@type': 'Person',
		// 						name: thePost.frontmatter.author,
		// 						url: siteUrl,
		// 					},
		// 					publisher: {
		// 						'@type': 'Organization',
		// 						url: organization.url,
		// 						name: organization.name,
		// 						logo: {
		// 							'@type': 'ImageObject',
		// 							url: thePost.featuredImage
		// 								? thePost.featuredImage.childrenImageSharp[0]
		// 										.gatsbyImageData.images.fallback.src
		// 								: null,
		// 						},
		// 					},
		// 					mainEntityOfPage: {
		// 						'@type': 'WebSite',
		// 						'@id': siteUrl,
		// 					},
		// 					datePublished: datePublished,
		// 					hasPart: {
		// 						'@type': 'BreadcrumbList',
		// 						'@id': siteUrl,
		// 						itemListElement: [
		// 							{
		// 								'@type': 'ListItem',
		// 								position: index,
		// 								name: 'Home',
		// 								item: siteUrl,
		// 							},
		// 							{
		// 								'@type': 'ListItem',
		// 								position: index,
		// 								name: thePost.frontmatter.title,
		// 								item: siteUrl + thePost.fields.slug,
		// 							},
		// 						],
		// 					},
		// 				},
		// 			}
		// 	  })
		// 	: null

		const schema =
			schemaType === 'article'
				? [
						baseSchema,
						{
							'@context': 'http://schema.org',
							'@type': 'NewsArticle',
							name: title,
							alternateName: defaultTitle,
							headline: title,
							image: {
								'@type': 'ImageObject',
								url: image.childrenImageSharp[0].gatsbyImageData.images.fallback
									.src,
							},
							description: description,
							articleBody: articleBody,
							author: {
								'@type': 'Person',
								name: author,
								url: siteUrl,
							},
							publisher: {
								'@type': 'Organization',
								url: organization.url,
								name: organization.name,
								logo: {
									'@type': 'ImageObject',
									url: image.childrenImageSharp[0].gatsbyImageData.images
										.fallback.src,
								},
							},
							mainEntityOfPage: {
								'@type': 'WebSite',
								'@id': siteUrl,
							},
							datePublished: datePublished,
						},
				  ]
				: [baseSchema]

		return (
			<Helmet>
				{/* Schema.org tags */}
				<script type="application/ld+json">{JSON.stringify(schema)}</script>
			</Helmet>
		)
	}
)

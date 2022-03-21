import React from 'react'
import { Helmet } from 'react-helmet'
// import { getSrc } from 'gatsby-plugin-image'

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
		ogranizationLogo,
	}) => {
		const dateNow = Date.now()
		const authorType =
			author === 'Descola' ? { type: 'Organization' } : { type: 'Person' }
		const orgSchema = [
			{
				'@type': ['Organization'],
				'@context': 'http://schema.org',
				name: title,
				url: url,
				email: organization.email,
				description: description,
				sameAs: [
					socialSameAs.instagram,
					socialSameAs.facebook,
					socialSameAs.linkedIn,
					socialSameAs.youtube,
				],
				potentialAction: 'Learning',
				logo: {
					'@type': 'ImageObject',
					url: ogranizationLogo,
					width: 156,
					height: 60,
				},
				contactPoint: [
					{
						'@type': 'ContactPoint',
						telephone: '+551130420043 ',
						contactType: 'Serviço Ao Cliente',
					},
				],
			},
		]

		const webSiteSchema = [
			{
				'@type': 'WebSite',
				'@context': 'http://schema.org',
				name: title,
				description: description,
				url: url,
				potentialAction: 'Learning',
				keywords: [keywords.map((e) => e)],
				inLanguage: 'pt-BR',
				copyrightYear: new Date().getFullYear(),
				datePublished: dateCreated,
				dateModified: dateNow,
				image: image,
				sameAs: [
					socialSameAs.instagram,
					socialSameAs.facebook,
					socialSameAs.linkedIn,
					socialSameAs.youtube,
				],
			},
		]

		// "potentialAction":
		// {
		// 	"@type": "SearchAction",
		// 	"target":
		// 	{
		// 		"@type": "EntryPoint",
		// 		"urlTemplate": "https://busca.uol.com.br/result.html?term={search_term_string}#gsc.tab=0&gsc.q={search_term_string}&gsc.page=1"
		// 	},
		// 	"query-input": "required name=search_term_string"
		// }

		const articleSchema = [
			{
				'@context': 'http://schema.org',
				'@type': 'NewsArticle',
				name: title,
				headline: 'excerpt',
				description: description,
				author: {
					'@type': authorType,
					name: author,
					url: siteUrl,
				},
				image: {
					'@type': 'ImageObject',
					url: image,
					height: 156,
					width: 60,
				},
				articleBody: articleBody,
				publisher: {
					'@type': 'Organization',
					name: organization.name,
					url: organization.url,
					logo: {
						'@type': 'ImageObject',
						url: ogranizationLogo,
						width: 156,
						height: 60,
					},
				},
				dateModified: dateNow,
				datePublished: datePublished,
			},
		]
		return (
			<Helmet>
				{/* Schema.org tags */}
				{schemaType === 'article' ? (
					<script type="application/ld+json" data-schema="Article">
						{JSON.stringify(articleSchema)}
					</script>
				) : null}
				<script type="application/ld+json" data-schema="WebSite">
					{JSON.stringify(webSiteSchema)}
				</script>
				<script type="application/ld+json" data-schema="Organization">
					{JSON.stringify(orgSchema)}
				</script>
			</Helmet>
		)
	}
)

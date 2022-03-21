import React from 'react'
import { Helmet } from 'react-helmet'
import { getSrc } from 'gatsby-plugin-image'

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
		const imageSrc = image.childrenImageSharp
			? organization.url.slice(0, -1) + getSrc(image.childrenImageSharp[0])
			: image
		const dateNow = Date.now()
		// const baseSchema = {
		const orgSchema = [
			{
				'@type': ['Organization'],
				'@context': 'http://schema.org',
				'@id': siteUrl,
				name: title, // NAME BRAND
				url: url, // BRAND URL
				description: description,
				sameAs: [
					socialSameAs.instagram,
					socialSameAs.facebook,
					socialSameAs.linkedIn,
					socialSameAs.youtube,
				],
				// alternateName: ,
				potentialAction: 'Learning',
				// logo: {
				// 		"@type": "ImageObject",
				// 		"url": "https://conteudo.imguol.com.br/c/home/interacao/facebook/compartilhe.png",
				// 		"width": "94",
				// 		"height": "60"
				// },
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
				name: title, // NAME BRAND
				description: description,
				url: url, // BRAND URL
				potentialAction: 'Learning',
				headline: title,
				keywords: [keywords.map((e) => e)],
				inLanguage: 'pt-BR',
				copyrightYear: new Date().getFullYear(),
				datePublished: dateCreated,
				dateModified: dateNow,
				sameAs: [
					socialSameAs.instagram,
					socialSameAs.facebook,
					socialSameAs.linkedIn,
					socialSameAs.youtube,
				],
			},
		]
		// "image": "https://conteudo.imguol.com.br/c/home/interacao/facebook/compartilhe.png",

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

		// email: organization.email,

		// {
		// 	"@type": "Organization",
		// 	"@context": "http://schema.org",
		// 	"name": "UOL",
		// 	"url": "https://www.uol.com.br/",
		// 	"logo":
		// 	{
		// 		"@type": "ImageObject",
		// 		"url": "https://conteudo.imguol.com.br/c/home/interacao/facebook/compartilhe.png",
		// 		"width": "94",
		// 		"height": "60"
		// 	}
		// }

		const articleSchema = [
			{
				'@context': 'http://schema.org',
				'@type': 'NewsArticle',
				name: title,
				headline: 'excerpt',
				description: description,
				// author: {
				// 	'@type': 'Person',
				// 	name: author,
				// 	url: siteUrl,
				// },
				author: {
					'@type': 'Organization',
					name: author,
					url: siteUrl,
				},
				image: {
					'@type': 'ImageObject',
					url: imageSrc,
				},
				articleBody: articleBody,

				publisher: {
					'@type': 'Organization',
					name: organization.name,
					url: organization.url, // BRAND URL
					// logo: {
					// 	'@type': 'ImageObject',
					// 	url: ogranizationLogo,
					// "width": 156,
					// "height": 60
					// },
				},
				// mainEntityOfPage: siteUrl, POST / ACTUAL URL
				// "image":
				// {
				// 	"height": 1277,
				// 	"width": 1920,
				// 	"url": "http://conteudo.imguol.com.br/c/noticias/6c/2021/11/11/6fev2020---o-ministro-alexandre-de-moraes-durante-sessao-no-stf-supremo-tribunal-federal-1636654755541_v2_1920x1277.jpg",
				// 	"@type": "ImageObject"
				// },
				// "dateModified": "2022-03-20T18:39:31-03:00",
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

import React from 'react'
import Helmet from 'react-helmet'
import SchemaOrgContainer from '../containers/SchemaOrgContainer'

const Seo = ({
	lang,
	title,
	siteTitle,
	metaDescription,
	meta,
	siteUrl,
	image,
	author,
	organization,
	social,
	datePublished,
	description,
	url,
	schemaType,
	socialSameAs,
	blogListing,
	articleBody,
	keywords,
	dateCreated,
	organizationLogo,
	featuredImage,
	cardImage,
	serverUrl,
	themeColor,
	articleUrl,
}) => {
	const hasBar = serverUrl?.charAt(serverUrl.length - 1)
	const servBar = hasBar === '/' ? serverUrl?.slice(0, -1) : serverUrl
	const cardImagesrc = servBar + cardImage || servBar || cardImage
	return (
		<>
			<Helmet
				htmlAttributes={{
					lang,
				}}
				titleTemplate={`%s | ${siteTitle}`}
			>
				<title>{title}</title>
				<meta name="description" content={metaDescription} />
				<meta name="image" content={cardImagesrc || featuredImage} />
				<meta name="keywords" content={keywords.map((e) => e)} />
				<link
					rel="canonical"
					href={articleUrl || serverUrl}
					key={articleUrl || serverUrl}
				/>
				{/* OpenGraph tags */}
				<meta property="og:url" content={articleUrl || serverUrl} />
				{schemaType === 'article' ? (
					<meta property="og:type" content="article" />
				) : (
					<meta property="og:type" content="website" />
				)}
				<meta property="article:author" content={siteUrl} />
				<meta property="article:publisher" content={siteUrl} />

				<meta property="og:site_name" content={title} />
				<meta property="og:title" content={title} />
				<meta
					property="og:description"
					name="description"
					content={description}
				/>
				<meta
					property="og:image"
					name="image"
					content={cardImagesrc || featuredImage}
				/>
				{social.fbAppID ? (
					<meta property="fb:app_id" content={social.fbAppID} />
				) : null}
				{/* Twitter Card tags */}
				<meta name="twitter:card" content="summary_large_image" />
				{social.twitter ? (
					<meta name="twitter:creator" content={social.twitter} />
				) : null}
				<meta name="twitter:title" content={title} />
				<meta name="twitter:description" content={description} />
				<meta name="twitter:image" content={cardImagesrc || featuredImage} />
				<meta name="twitter:image:alt" content={metaDescription} />
				<meta name="theme-color" content={themeColor || '#FF0081'} />
				<meta name="twitter:site" content={`@` + social.twitter} />
				<meta name="author" content={author} />
				{datePublished ? (
					<meta name="article:published_time" content={datePublished} />
				) : (
					''
				)}
			</Helmet>
			<SchemaOrgContainer
				schemaType={schemaType}
				url={siteUrl}
				title={title}
				image={cardImagesrc || image || featuredImage}
				description={description}
				datePublished={datePublished}
				siteUrl={siteUrl}
				author={author}
				organization={organization}
				defaultTitle={title}
				socialSameAs={socialSameAs}
				blogListing={blogListing}
				articleBody={articleBody}
				keywords={keywords}
				dateCreated={dateCreated}
				organizationLogo={organizationLogo}
				serverUrl={serverUrl}
			/>
		</>
	)
}

export default Seo

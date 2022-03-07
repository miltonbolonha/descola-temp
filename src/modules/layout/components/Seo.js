import { React, Helmet } from '../dependencies'
import SchemaOrg from './SchemaOrg'

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
}) => (
	<>
		<Helmet
			htmlAttributes={{
				lang,
			}}
			titleTemplate={`%s | ${siteTitle}`}
		>
			<title>{title}</title>
			<meta name="description" content={metaDescription} />
			<meta name="image" content={image} />
			<meta name="keywords" content={keywords.map((e) => e)} />
			<link rel="canonical" href={siteUrl} />

			{/* OpenGraph tags */}
			<meta property="og:url" content={siteUrl} />
			{schemaType === 'article' ? (
				<meta property="og:type" content="article" />
			) : (
				<meta property="og:type" content="blog" />
			)}
			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			<meta property="og:image" content={image} />
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
			<meta name="twitter:image" content={image} />
		</Helmet>
		<SchemaOrg
			schemaType={schemaType}
			url={siteUrl}
			title={title}
			image={image}
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
		/>
	</>
	// title={title}
	//   meta={[
	//     {
	//       name: `description`,
	//       content: metaDescription,
	//     },
	//     {
	//       property: `og:title`,
	//       content: title,
	//     },
	//     {
	//       property: `og:description`,
	//       content: metaDescription,
	//     },
	//     {
	//       property: `og:type`,
	//       content: `website`,
	//     },
	//     {
	//       name: `twitter:card`,
	//       content: `summary`,
	//     },
	//     {
	//       name: `twitter:creator`,
	//       content: siteAuthor,
	//     },
	//     {
	//       name: `twitter:title`,
	//       content: title,
	//     },
	//     {
	//       name: `twitter:description`,
	//       content: metaDescription,
	//     },
	//   ].concat(meta)}
	// />
)

export default Seo

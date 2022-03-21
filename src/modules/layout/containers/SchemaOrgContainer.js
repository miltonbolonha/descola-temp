import React from 'react'
// import mainMenuYAML from '@Content/configs/schema-org.yaml'
import SchemaOrg from '../components/SchemaOrg'
import { getSrc } from 'gatsby-plugin-image'

const SchemaOrgContainer = ({
	schemaType,
	siteUrl,
	title,
	image,
	featuredImage,
	description,
	datePublished,
	author,
	organization,
	socialSameAs,
	blogListing,
	articleBody,
	keywords,
	dateCreated,
	ogranizationLogo,
}) => {
	const serverUrl = window.location.origin
	const ogranizationLogoVar =
		serverUrl + getSrc(ogranizationLogo.childrenImageSharp[0])
	return (
		<SchemaOrg
			schemaType={schemaType}
			url={siteUrl}
			title={title}
			image={image || featuredImage}
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
			ogranizationLogo={ogranizationLogoVar}
		/>
	)
}

export default SchemaOrgContainer

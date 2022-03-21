import React from 'react'
import mainMenuYAML from '@Content/configs/schema-org.yaml'
import SchemaOrg from '../components/SchemaOrg'

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
	console.log(mainMenuYAML)
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
			ogranizationLogo={ogranizationLogo}
		/>
	)
}

export default SchemaOrgContainer

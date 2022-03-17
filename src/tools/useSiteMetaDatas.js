import { useStaticQuery, graphql } from 'gatsby'

export const useSiteMetaDatas = () => {
	const site = useStaticQuery(
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
							logo
							cardImage
						}
						social {
							youtube
							instagram
							facebook
							linkedIn
						}
					}
				}
			}
		`
	)
	return site
}

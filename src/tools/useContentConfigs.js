import { useStaticQuery, graphql } from 'gatsby'

export const useContentConfigs = () => {
	const content = useStaticQuery(
		graphql`
			query {
				content: allYaml(
					filter: {
						footer: {
							col1: { status: { eq: true } }
							col2: { status: { eq: true } }
							col3: { status: { eq: true } }
							col4: { status: { eq: true } }
						}
					}
				) {
					edges {
						node {
							footer {
								col1 {
									phone
									phone_prefix
									p {
										p
									}
									status
									heading
								}
								col2 {
									footer_tags_widget
									footer_tags_heading
									social_media
									status
									heading
								}
								col3 {
									featured_posts_widget
									status
									num_posts
									heading
								}
								col4 {
									footer_menu_widget
									status
									heading
								}
							}
						}
					}
				}
			}
		`
	)
	return content.content?.edges[0]?.node
}

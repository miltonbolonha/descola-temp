const fs = require('fs')
const path = require('path')
const _ = require('lodash')
const { createFilePath } = require(`gatsby-source-filesystem`)

// const path = require('path')
// const fs = require('fs').promises

// exports.onPostBuild = async ({ graphql }) => {
// 	const { data } = await graphql(`
// 		{
// 			apiPosts: allMarkdownRemark(
// 				sort: { fields: frontmatter___date, order: DESC }
// 				filter: { frontmatter: { featuredPost: { eq: true } } }
// 			) {
// 				edges {
// 					node {
// 						fields {
// 							slug
// 						}
// 						frontmatter {
// 							date(formatString: "DD [de] MMMM [de] YYYY", locale: "pt-br")
// 							title
// 							tags
// 							footerFeaturedImage: featuredImage {
// 								childrenImageSharp {
// 									gatsbyImageData(
// 										width: 76
// 										height: 76
// 										placeholder: DOMINANT_COLOR
// 										quality: 70
// 									)
// 								}
// 							}
// 						}
// 						excerpt(pruneLength: 200)
// 					}
// 				}
// 			}
// 		}
// 	`)

// 	return fs.writeFile(
// 		path.resolve(__dirname, 'feed.json'),
// 		data.apiPosts.join()
// 	)
// }

// Adding slug field to each post
exports.onCreateNode = ({ node, getNode, actions }) => {
	const { createNodeField } = actions
	// Ensures we are processing only markdown files
	if (node.internal.type === 'MarkdownRemark') {
		// Use `createFilePath` to turn markdown files in our `data/faqs` directory into `/faqs/slug`
		const slug = createFilePath({
			node,
			getNode,
			basePath: 'pages',
		})

		// Creates new query'able field with name of 'slug'
		createNodeField({
			node,
			name: 'slug',
			value: `/${slug.slice(1)}`,
		})
	}
}

exports.createPages = ({ graphql, actions }) => {
	const { createPage } = actions

	return graphql(`
		{
			allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
				edges {
					node {
						fields {
							slug
						}
						frontmatter {
							date(formatString: "DD [de] MMMM [de] YYYY", locale: "pt-br")
							title
							author
							featuredPost
							templatekey
							tags
							featuredImage {
								childrenImageSharp {
									gatsbyImageData(
										width: 350
										height: 224
										placeholder: NONE
										quality: 100
									)
								}
							}
						}
					}
				}
			}
			tagsGroup: allMarkdownRemark(limit: 2000) {
				group(field: frontmatter___tags) {
					fieldValue
				}
			}
			featuredPosts: allMarkdownRemark(
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

			footerThreeMarkdowRemark: allMarkdownRemark(
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
			postsPerPage: site {
				siteMetadata {
					postsPerPage
				}
			}
		}
	`).then((result) => {
		const posts = result.data.allMarkdownRemark.edges
		// const featuredPosts = result.data.featuredPosts.edges

		posts.forEach(({ node }) => {
			createPage({
				path: node.fields.slug,
				component: path.resolve('./src/templates/single-post.js'),
				context: {
					slug: node.fields.slug,
				},
			})
		})

		// const postsPerPage = 5
		// const numPages = Math.ceil(posts.length / postsPerPage)

		// www./blog post list template
		// Array.from({ length: numPages }).forEach((_, index) => {
		// 	createPage({
		// 		path: index === 0 ? `/blog` : `/page/${index + 1}`,
		// 		component: path.resolve(`./src/templates/posts-list.js`),
		// 		context: {
		// 			limit: postsPerPage,
		// 			skip: index * postsPerPage,
		// 			numPages,
		// 			currentPage: index + 1,
		// 		},
		// 	})
		// })

		const tags = result.data.tagsGroup.group
		// Make tag pages
		tags.forEach((tag) => {
			createPage({
				path: `/tags/${_.kebabCase(tag.fieldValue)}`,
				component: path.resolve(`./src/templates/tax-posts-list.js`),
				context: {
					tag: tag.fieldValue,
					siteMetadata: result.data.siteMetadata,
					footerThreeMarkdowRemark: result.data.footerThreeMarkdowRemark,
					postsPerPage: result.data.postsPerPage,
				},
			})
		})

		// Array.from({ length: numPages }).forEach((_, index) => {
		// 	createPage({
		// 		path: index === 0 ? `/tags` : `/tags/page/${index + 1}`,
		// 		component: path.resolve(`./src/templates/tags-list.js`),
		// 		context: {
		// 			limit: postsPerPage,
		// 			skip: index * postsPerPage,
		// 			numPages,
		// 			currentPage: index + 1,
		// 		},
		// 	})
		// })
	})
}

// exports.onCreatePage = async ({ page, actions }) => {
// 	const { createPage, deletePage } = actions

// 	// Look for /404/ path
// 	if (page.path === '/') {
// 		const oldPage = { ...page }

// 		// Add page context
// 		page.context = {
// 			foo: 'bar',
// 		}

// 		// Recreate the modified page
// 		deletePage(oldPage)
// 		createPage(page)
// 	}
// }

exports.onPostBuild = ({ graphql }) => {
	return graphql(`
		{
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
	`).then((result) => {
		// processAndWriteJSONFiles(result)
		fs.writeFileSync(`./public/feed.json`, JSON.stringify(result))
	})
}

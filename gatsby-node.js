const path = require('path')
const _ = require('lodash')
const { createFilePath } = require(`gatsby-source-filesystem`)

function slugify(string) {
	if (!string) {
		return null
	}
	const a =
		'àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;'
	const b =
		'aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnooooooooprrsssssttuuuuuuuuuwxyyzzz------'
	const p = new RegExp(a.split('').join('|'), 'g')

	return string
		.toString()
		.toLowerCase()
		.replace(/\s+/g, '-') // Replace spaces with -
		.replace(p, (c) => b.charAt(a.indexOf(c))) // Replace special characters
		.replace(/&/g, '-and-') // Replace & with 'and'
		.replace(/[^\w\-]+/g, '') // Remove all non-word characters
		.replace(/\-\-+/g, '-') // Replace multiple - with single -
		.replace(/^-+/, '') // Trim - from start of text
		.replace(/-+$/, '') // Trim - from end of text
}

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
		}
	`).then((result) => {
		const posts = result.data.allMarkdownRemark.edges
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

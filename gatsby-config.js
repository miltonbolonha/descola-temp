require('dotenv').config({
	path: `.env.${process.env.NODE_ENV}`,
})

const path = require('path')
const businessInfos = require('./package.json')
module.exports = {
	siteMetadata: {
		pathPrefix: businessInfos.urlPrefix,
		title: businessInfos.appName,
		description: businessInfos.description,
		author: businessInfos.author,
		siteUrl: businessInfos.siteUrl,
		searchBaseUrl: businessInfos.searchBaseUrl,
		keywords: businessInfos.keywords,
		image: `${__dirname}/static/images/descola-logo.svg`,
		dateCreated: businessInfos.dateCreated,
		postsPerPage: businessInfos.postsPerPage,
		themeColor: businessInfos.themeColor,
		organization: {
			name: businessInfos.organization.name,
			email: businessInfos.organization.email,
			url: businessInfos.organization.url,
			logo: businessInfos.organization.logo,
			cardImage: businessInfos.organization.cardImage,
		},
		social: {
			instagram: businessInfos.clientSocial.instagram,
			facebook: businessInfos.clientSocial.facebook,
			linkedIn: businessInfos.clientSocial.linkedIn,
			youtube: businessInfos.clientSocial.youtube,
			twitter: businessInfos.clientSocial.twitter,
		},
	},
	plugins: [
		'gatsby-plugin-sass',
		'gatsby-plugin-image',
		`gatsby-plugin-sharp`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-react-helmet`,
		{
			resolve: 'gatsby-plugin-page-creator',
			options: {
				path: path.join(__dirname, 'src/pages'),
			},
		},
		`gatsby-plugin-catch-links`,
		`gatsby-remark-relative-images`,
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [`gatsby-remark-lazy-load`, `gatsby-remark-images`],
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/static/images/`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `content`,
				path: `${__dirname}/content/`,
			},
		},
		{
			resolve: `gatsby-transformer-yaml`,
			options: {
				typeName: `Yaml`, // a fixed string
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `posts`,
				path: `${__dirname}/posts`,
			},
		},
		`gatsby-plugin-mdx`,
		{
			resolve: 'gatsby-plugin-react-svg',
			options: {
				rule: {
					include: /images/,
				},
			},
		},
		{
			resolve: `gatsby-plugin-alias-imports`,
			options: {
				alias: {
					'@BlockBuilder': path.resolve(__dirname, 'src/modules/block-builder'),
					'@Layout': path.resolve(__dirname, 'src/modules/layout'),
					'@Content': path.resolve(__dirname, 'content'),
					'@Images': path.resolve(__dirname, 'static/images'),
					'@tools': path.resolve(__dirname, 'src/tools'),
					'@styles': path.resolve(__dirname, 'src/styles'),
				},
				extensions: ['js', 'scss'],
			},
		},
		{
			resolve: `gatsby-plugin-google-fonts`,
			options: {
				fonts: [
					businessInfos.importFont.font01,
					businessInfos.importFont.font02,
				],
				display: 'swap',
			},
		},
		{
			resolve: `gatsby-plugin-netlify`,
			options: {
				mergeSecurityHeaders: true, // boolean to turn off the default security headers
				mergeLinkHeaders: true, // boolean to turn off the default gatsby js headers
				mergeCachingHeaders: true, // boolean to turn off the default caching headers
				transformHeaders: (headers, path) => headers, // optional transform for manipulating headers under each path (e.g.sorting), etc.
				generateMatchPathRewrites: true, // boolean to turn off automatic creation of redirect rules for client only paths
			},
		},
		`gatsby-plugin-netlify-cms`,
		{
			resolve: 'gatsby-plugin-google-tagmanager',
			options: {
				id: 'GTM-W37N9T5',
			},
		},
	],
}

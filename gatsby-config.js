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
		keywords: businessInfos.keywords,
		image: `${__dirname}/static/images/descola-logo.svg`,
		dateCreated: businessInfos.dateCreated,
		postsPerPage: businessInfos.postsPerPage,
		organization: {
			name: businessInfos.organization.name,
			email: businessInfos.organization.email,
			url: businessInfos.organization.url,
			logo: `${__dirname}/static/images/descola-logo.svg`,
		},
		social: {
			instagram: businessInfos.clientSocial.instagram,
			facebook: businessInfos.clientSocial.facebook,
			linkedIn: businessInfos.clientSocial.linkedIn,
			youtube: businessInfos.clientSocial.youtube,
		},
	},
	plugins: [
		'gatsby-plugin-sass',
		'gatsby-plugin-image',
		'gatsby-plugin-sharp',
		`gatsby-transformer-sharp`,
		`gatsby-plugin-offline`,
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-business-in-build`,
			options: {
				name: businessInfos.clientOrg,
				version: businessInfos.version,
				developer: 'Milton Bolonha',
				project: 'Gatsby Business in Build',
				url: businessInfos.clientSite,
				message: 'Você está aqui.',
			},
		},
		{
			resolve: 'gatsby-plugin-page-creator',
			options: {
				path: path.join(__dirname, 'src/pages'),
			},
		},
		`gatsby-plugin-catch-links`,
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [
					{
						resolve: `gatsby-remark-relative-images`,
						options: {
							name: `uploads`,
						},
					},
					{
						resolve: `gatsby-remark-images`,
						options: {
							maxWidth: 695,
							linkImagesToOriginal: false,
						},
					},
					`gatsby-remark-lazy-load`,
				],
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
				name: `posts`,
				path: `${__dirname}/posts`,
			},
		},
		{
			resolve: `gatsby-plugin-mdx`,
			options: {
				gatsbyRemarkPlugins: [
					{
						resolve: `gatsby-remark-images`,
						options: {
							maxWidth: 1035,
							sizeByPixelDensity: true,
						},
					},
				],
			},
		},
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
					'@tools': path.resolve(__dirname, 'src/tools'),
					'@styles': path.resolve(__dirname, 'src/styles'),
				},
				extensions: ['js', 'scss'],
			},
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: businessInfos.clientOrg,
				short_name: businessInfos.clientShortName,
				start_url: businessInfos.urlPrefix,
				background_color: businessInfos.backgroundColor,
				theme_color: businessInfos.theme_color,
				display: businessInfos.displayManifest,
				icon: `${__dirname}/static/images/${businessInfos.iconManifest}`, // This path is relative to the root of the site.
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

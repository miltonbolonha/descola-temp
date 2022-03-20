import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
export default function HTML(props) {
	return (
		<html {...props.htmlAttributes}>
			<head>
				<meta charSet="utf-8" />
				<meta httpEquiv="x-ua-compatible" content="ie=edge" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1, shrink-to-fit=no"
				/>
				{props.headComponents}
			</head>
			<body {...props.bodyAttributes}>
				<Link
					data-trackable="a11y-skip-to-help"
					className="non-layout"
					to="/accessibility"
					tabIndex="0"
				>
					Accessibility helps
				</Link>
				<Link
					data-trackable="a11y-skip-to-navigation"
					className="non-layout"
					to="/#site-navigation"
					tabIndex="0"
				>
					Skip to navigation
				</Link>
				<Link
					data-trackable="a11y-skip-to-content"
					className="non-layout"
					to="#site-content"
					tabIndex="0"
				>
					Skip to content
				</Link>
				<Link
					data-trackable="a11y-skip-to-footer"
					className="non-layout"
					to="#site-footer"
					tabIndex="0"
				>
					Skip to footer
				</Link>
				{props.preBodyComponents}
				<noscript key="noscript" id="gatsby-noscript">
					This app works best with JavaScript enabled.
				</noscript>
				<div
					key={`body`}
					id="___gatsby"
					dangerouslySetInnerHTML={{ __html: props.body }}
				/>
				{props.postBodyComponents}
			</body>
		</html>
	)
}

HTML.propTypes = {
	htmlAttributes: PropTypes.object,
	headComponents: PropTypes.array,
	bodyAttributes: PropTypes.object,
	preBodyComponents: PropTypes.array,
	body: PropTypes.string,
	postBodyComponents: PropTypes.array,
}

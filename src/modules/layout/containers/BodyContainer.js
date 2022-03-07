// eslint-disable-next-line
import { React, PropTypes } from '../dependencies.js'

import SeoContainer from '../containers/SeoContainer'
import GlobalContext from '../services/context'
import Body from '../components/Body'

const BodyContainer = ({ children, opt }) => {
	return (
		<GlobalContext.Consumer>
			{(value) => (
				<>
					<SeoContainer
						title={opt.titleSeo}
						author={opt.authorSeo}
						datePublished={opt.datePublished}
						schemaType={opt.schemaType}
						titleSeo={opt.titleSeo}
						authorSeo={opt.authorSeo}
						featuredImage={opt.featuredImage}
						blogListing={opt.blogListing}
						articleBody={opt.articleBody}
					/>

					<Body opt={opt} bgImage={opt.bgImage} customClasses={opt.classes}>
						{children}
					</Body>
				</>
			)}
		</GlobalContext.Consumer>
	)
}
export default BodyContainer

// import React from 'react'
// import { graphql } from 'gatsby'

// import DescolaLogo from '../../static/images/descola-logo.svg'
// import DescolaLogoDark from '../../static/images/descola-logo-dark.svg'

// import Layout from '../modules/layout'
// import FooterBlock from '../modules/block-builder/FooterBlock'
// import PostsBlock from '../modules/block-builder/PostsBlock'

// const BlogList = (props) => {
// 	const postList = props.data.allMarkdownRemark.edges
// 	const postsPerPage = 5

// 	const { currentPage, numPages } = props.pageContext
// 	const isFirst = currentPage === 1
// 	const isLast = currentPage === numPages
// 	const prevPage = currentPage - 1 === 1 ? '/blog' : `/page/${currentPage - 1}`
// 	const nextPage = `/page/${currentPage + 1}`
// 	return (
// 		<Layout
// 			type="BODY"
// 			opt={{
// 				titleSeo: `Descola`,
// 				classes: 'blog-list',
// 			}}
// 		>
// 			<Layout
// 				type="HEADER"
// 				opt={{
// 					mainMenu: true,
// 					logoSvg: <DescolaLogo />,
// 				}}
// 			/>
// 			<Layout
// 				type="ROW"
// 				opt={{ isBoxed: true, classes: 'main-container-wrapper' }}
// 			>
// 				<main className="main-container">
// 					<h1>Posts</h1>
// 					<PostsBlock
// 						postsPerPage={postsPerPage}
// 						postList={postList}
// 						currentPage={currentPage}
// 						numPages={numPages}
// 						isFirst={isFirst}
// 						prevPage={prevPage}
// 						isLast={isLast}
// 						nextPage={nextPage}
// 						readMoreText="Mais Posts"
// 						pagination={{
// 							loadMoreBtn: false,
// 							loadMore: 'Carregar Mais',
// 						}}
// 					/>
// 				</main>
// 			</Layout>
// 			<FooterBlock
// 				placeholderImg={props.data.imgHolder}
// 				footerLogo={<DescolaLogoDark />}
// 			/>
// 		</Layout>
// 	)
// }
// export const query = graphql`
// 	query BlogList($skip: Int!, $limit: Int!) {
// 		allMarkdownRemark(
// 			sort: { fields: frontmatter___date, order: DESC }
// 			limit: $limit
// 			skip: $skip
// 		) {
// 			edges {
// 				node {
// 					fields {
// 						slug
// 					}
// 					frontmatter {
// 						date(formatString: "DD [de] MMMM [de] YYYY", locale: "pt-br")
// 						title
// 						tags
// 						featuredImage {
// 							childrenImageSharp {
// 								gatsbyImageData(
// 									width: 350
// 									height: 224
// 									placeholder: DOMINANT_COLOR
// 									quality: 90
// 								)
// 							}
// 						}
// 					}
// 					excerpt(pruneLength: 300)
// 				}
// 			}
// 		}
// 		imgHolder: file(relativePath: { eq: "placeholder700x300.png" }) {
// 			childrenImageSharp {
// 				gatsbyImageData(width: 76, height: 76, placeholder: NONE, quality: 100)
// 			}
// 		}
// 	}
// `

// export default BlogList

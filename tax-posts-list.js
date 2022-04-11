// import React from 'react'
// import { graphql } from 'gatsby'
// import { getSrc } from 'gatsby-plugin-image'
// import SeoContainer from 'gatsby-layout-builder-seo'

// import DescolaLogo from '@Images/descola-logo.svg'
// import DescolaLogoDark from '@Images/descola-logo-dark.svg'

// import Layout from 'gatsby-layout-builder'
// import HeaderBlock from '@BlockBuilder/HeaderBlock'
// import FooterBlock from '@BlockBuilder/FooterBlock'
// import PostsBlock from '@BlockBuilder/PostsBlock'
// import { useSiteMetadatas } from '../tools/useSiteMetadatas'

// const TagsList = props => {
//   const tagList = props.data.allMarkdownRemark.group[0].edges
//   const { cardImage, footerThreeMarkdowRemark, site } = useSiteMetadatas()
//   const {
//     author,
//     description,
//     keywords,
//     siteUrl,
//     title,
//     dateCreated,
//     postsPerPage,
//     organization,
//     social,
//     themeColor,
//   } = site.siteMetadata
//   return (
//     <Layout
//       type="BODY"
//       opt={{
//         // titleSeo: `Descola - Tags`,
//         classes: 'blog-list',
//         // schemaType: 'blog',
//         // cardImage: getSrc(cardImage.childrenImageSharp[0]),
//         // blogListing: tagList.slice(0, 9),
//         // serverUrl: props.location.origin || site.siteMetadata.siteUrl || '/',
//       }}
//     >
//       <SeoContainer
//         opt={{
//           titleSeo: `Descola- Tags`,
//           classes: 'blog-list',
//           keywords: keywords,
//           social: {
//             fbAppID: '0',
//           },
//           datePublished: dateCreated,
//           schemaType: 'Blog',
//           description: description,
//           authorSeo: author,
//           brandPhone: organization.phone,
//           brandEmail: organization.email,
//           businessName: organization.name,
//           dateCreated: dateCreated,
//           themeColor: themeColor,
//           blogListing: tagList.slice(0, 9),
//           mainLogo: imgHolder,
//           // cardImage: cardImage ? getSrc(cardImage.childrenImageSharp[0]) : null,
//           serverUrl: siteUrl,
//         }}
//       />

//       <HeaderBlock logotipoSvg={<DescolaLogo />} />
//       <Layout
//         type="ROW"
//         opt={{ isBoxed: true, classes: 'main-container-wrapper' }}
//       >
//         <main className="main-container" role="list">
//           <h1>Posts da Tag: {props.pageContext.tag}</h1>
//           <PostsBlock
//             postList={tagList}
//             postsPerPage={site.siteMetadata.postsPerPage}
//             readMoreText="Ler Mais"
//             pagination={{
//               loadMoreBtn: true,
//               loadMore: 'Ler Mais',
//             }}
//           />
//         </main>
//       </Layout>
//       <FooterBlock
//         footerLogo={<DescolaLogoDark />}
//         featurePosts={footerThreeMarkdowRemark.edges}
//       />
//     </Layout>
//   )
// }
// export const query = graphql`
//   query TagsList($tag: String) {
//     allMarkdownRemark(
//       sort: { fields: frontmatter___date, order: DESC }
//       filter: { frontmatter: { tags: { in: [$tag] } } }
//       limit: 900
//     ) {
//       group(field: frontmatter___tags) {
//         totalCount
//         fieldValue
//         edges {
//           node {
//             fields {
//               slug
//             }
//             frontmatter {
//               date(formatString: "DD [de] MMMM [de] YYYY", locale: "pt-br")
//               title
//               tags
//               featuredImage {
//                 childrenImageSharp {
//                   gatsbyImageData(
//                     width: 350
//                     height: 224
//                     placeholder: DOMINANT_COLOR
//                     quality: 90
//                   )
//                 }
//               }
//             }
//             excerpt(pruneLength: 200)
//           }
//         }
//       }
//     }
//   }
// `

// export default TagsList

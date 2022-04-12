import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import { getSrc } from 'gatsby-plugin-image'

import DescolaLogo from '@Images/descola-logo.svg'
import DescolaLogoDark from '@Images/descola-logo-dark.svg'

import Layout from 'gatsby-layout-builder'
import HeaderBlock from '@BlockBuilder/HeaderBlock'
import FooterBlock from '@BlockBuilder/FooterBlock'
import PostsBlock from '@BlockBuilder/PostsBlock'
import { useSiteMetadatas } from '../tools/useSiteMetadatas'

const TagListPage = props => {
  console.log(props.pageContext)
  return (
    <StaticQuery
      query={graphql`
        query TagsList {
          allMarkdownRemark(
            sort: { fields: frontmatter___date, order: DESC }
            # filter: { frontmatter: { tags: { in: [$tag] } } }
            limit: 900
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
                  featuredImage {
                    childrenImageSharp {
                      gatsbyImageData(
                        width: 350
                        height: 224
                        placeholder: DOMINANT_COLOR
                        quality: 90
                      )
                    }
                  }
                }
                excerpt(pruneLength: 200)
              }
            }
          }
        }
      `}
      render={data => {
        console.log(data)
        const tagList = data.allMarkdownRemark.edges
        const { cardImage, footerThreeMarkdowRemark, site } = useSiteMetadatas()

        const tagContext = props.pageContext.tag
        const tagListFiltered = tagList.filter(item => {
          return item.node.frontmatter.tags.includes(tagContext)
        })
        console.log('robozim')
        console.log(tagListFiltered)
        // const result = tagList.filter(function(tagObj) {
        // 		return tagObj.node.frontmatter.tags.some(function(tag) {
        // 				return tagContext.includes(tag);
        // 		});
        // });

        return (
          <>
            <Layout
              type="BODY"
              opt={{
                // titleSeo: `Descola - Tags`,
                classes: 'blog-list',
                // schemaType: 'blog',
                // cardImage: getSrc(cardImage.childrenImageSharp[0]),
                // blogListing: tagList.slice(0, 9),
                // serverUrl: props.location.origin || site.siteMetadata.siteUrl || '/',
              }}
            >
              <HeaderBlock logotipoSvg={<DescolaLogo />} />
              <Layout
                type="ROW"
                opt={{ isBoxed: true, classes: 'main-container-wrapper' }}
              >
                <main className="main-container" role="list">
                  <h1>Posts da Tag: {props.pageContext.tag}</h1>
                  <PostsBlock
                    postList={tagListFiltered}
                    postsPerPage={site.siteMetadata.postsPerPage}
                    readMoreText="Ler Mais"
                    pagination={{
                      loadMoreBtn: true,
                      loadMore: 'Ler Mais',
                    }}
                  />
                </main>
              </Layout>
              <FooterBlock
                footerLogo={<DescolaLogoDark />}
                featurePosts={footerThreeMarkdowRemark.edges}
              />
            </Layout>
          </>
        )
      }}
    />
  )
}
export default TagListPage

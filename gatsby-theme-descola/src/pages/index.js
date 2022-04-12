import React from 'react'
import { graphql, Link } from 'gatsby'
import { getSrc } from 'gatsby-plugin-image'

import Layout from 'gatsby-layout-builder'
import SeoContainer from 'gatsby-layout-builder-seo'
import { useSiteMetadatas } from '../tools/useSiteMetadatas'
import DescolaLogo from '@Images/descola-logo.svg'
import DescolaLogoDark from '@Images/descola-logo-dark.svg'
import HeaderBlock from '@BlockBuilder/HeaderBlock'
import FooterBlock from '@BlockBuilder/FooterBlock'
import PostsBlock from '@BlockBuilder/PostsBlock'
import AcessibilityBlock from '@BlockBuilder/AcessibilityBlock'

const IndexPage = props => {
  const {
    cardImage,
    footerThreeMarkdowRemark,
    imgHolder,
    site,
  } = useSiteMetadatas()
  const { data } = props
  const posts = data.allMarkdownRemark.edges
  const {
    author,
    description,
    keywords,
    siteUrl,
    title,
    dateCreated,
    postsPerPage,
    organization,
    social,
    themeColor,
  } = site.siteMetadata
  const cardImg = cardImage ? getSrc(cardImage.childrenImageSharp[0]) : null
  return (
    <Layout type="BODY" opt={{ classes: 'blog-list' }}>
      <SeoContainer
        opt={{
          // titleSeo: `Descola`,
          // classes: 'blog-list',
          // keywords: keywords,
          // social: {
          //   fbAppID: '0',
          // },
          // datePublished: dateCreated,
          // schemaType: 'Blog',
          // description: description,
          // authorSeo: author,
          // organization: {
          //   name: 'Organization',
          // },
          // brandPhone: organization.phone,
          // brandEmail: organization.email,
          // businessName: organization.name,
          // dateCreated: dateCreated,
          // themeColor: themeColor,
          // blogListing: posts.slice(0, 9),
          // mainLogo: imgHolder,
          // cardImage: cardImage ? getSrc(cardImage.childrenImageSharp[0]) : null,
          // serverUrl: siteUrl,
          // sameAs: {
          //   instagram: 'https://www.instagram.com/descola_',
          //   facebook: 'https://www.facebook.com/descola_',
          //   linkedIn: 'https://www.linkedin.com/company/descola_',
          //   youtube: 'asd',
          // },
          schemaType: 'Blog',
          startedWebsiteDate: dateCreated,
          // modifiedWebsiteDate: modifiedWebsiteDate,
          // createdPageDate: createdPageDate,
          // modifiedPageDate: modifiedPageDate,
          pageTitle: `Descola`,
          pageDescription: description,
          authorWebsiteData: organization.url,
          authorPostData: organization.name,
          highlightImage: cardImg,
          // postsList: postsList,
          // postBody: postBody,
          brandMainLogo: imgHolder,
          brandCardLogo: imgHolder,
          brandPhone: organization.phone,
          brandEmail: organization.email,
          brandName: organization.name,
          brandSocialArr: {
            instagram: 'https://www.instagram.com/descola_',
            facebook: 'https://www.facebook.com/descola_',
            linkedIn: 'https://www.linkedin.com/company/descola_',
            youtube: 'asd',
          },
          buildServerUrl: siteUrl,
          websiteLanguage: 'pt-BR',
          brandThemeColor: themeColor,
          brandKeywords: keywords,
          brandWebsiteUrl: siteUrl,
          // alternativeImage: alternativeImage,
          // websiteDescription: websiteDescription,
          // pageKeywords: pageKeywords,
          // postHeadline: postHeadline,
        }}
      />
      <AcessibilityBlock />
      <HeaderBlock logotipoSvg={<DescolaLogo />} />
      <Layout
        type="ROW"
        opt={{ isBoxed: true, classes: 'main-container-wrapper' }}
      >
        <main className="main-container" id="site-content" role="list">
          <h1>Posts</h1>
          <PostsBlock
            postsPerPage={site.siteMetadata.postsPerPage}
            postList={posts}
            typeLoad={'push'} // or false
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
  )
}

export default IndexPage

export const queryAtividade = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
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
`
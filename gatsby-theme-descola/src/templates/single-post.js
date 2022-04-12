import React from 'react'
import { graphql } from 'gatsby'

import SeoContainer from 'gatsby-layout-builder-seo'

import DescolaLogo from '@Images/descola-logo.svg'
import DescolaLogoDark from '@Images/descola-logo-dark.svg'

import Layout from 'gatsby-layout-builder'
import AcessibilityBlock from '@BlockBuilder/AcessibilityBlock'
import HeaderBlock from '@BlockBuilder/HeaderBlock'
import FooterBlock from '@BlockBuilder/FooterBlock'

import SinglePostBlock from '@BlockBuilder/SinglePostBlock'
import { useSiteMetadatas } from '../tools/useSiteMetadatas'

const SinglePost = ({ data, location }) => {
  const { footerThreeMarkdowRemark, imgHolder, site } = useSiteMetadatas()
  const {
    author,
    description,
    keywords,
    siteUrl,
    title,
    dateCreated,
    organization,
    social,
    themeColor,
  } = site.siteMetadata
  const post = data.markdownRemark
  return (
    <Layout type="BODY" opt={{ classes: 'single-post' }}>
      <SeoContainer
        opt={{
          // titleSeo:
          // authorSeo: ,
          // classes: 'single-post',
          // datePublished: ,
          schemaType: 'article',
          // featuredImage:

          // cardImage:
          //   post.frontmatter.featuredImage.childrenImageSharp[0].gatsbyImageData
          //     .images.fallback.src,
          // articleBody: ,
          // mainLogo: imgHolder,
          // description: ,
          // organization: {
          //   name: 'Organization',
          // },
          // serverUrl: location.origin || site.siteMetadata.siteUrl || '/',
          startedWebsiteDate: dateCreated,
          // modifiedWebsiteDate: modifiedWebsiteDate,
          createdPageDate: post.frontmatter.date,
          // modifiedPageDate: modifiedPageDate,
          pageTitle: `${post.frontmatter.title} - Descola`,
          pageDescription: post.excerpt,
          authorWebsiteData: organization.url,
          authorPostData: post.frontmatter.author,
          highlightImage:
            site.siteMetadata.siteUrl +
            post?.frontmatter?.featuredImage?.childrenImageSharp[0]
              .gatsbyImageData.images.fallback.src,
          // postsList: postsList,
          postBody: post.html,
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
          buildServerUrl: location.origin || site.siteMetadata.siteUrl || '/',
          websiteLanguage: 'pt-BR',
          brandThemeColor: themeColor,
          brandKeywords: keywords,
          brandWebsiteUrl: site.siteMetadata.siteUrl,
          // alternativeImage: alternativeImage,
          // websiteDescription: websiteDescription,
          // pageKeywords: pageKeywords,
          // postHeadline: postHeadline,
        }}
      />
      <AcessibilityBlock />
      <HeaderBlock logotipoSvg={<DescolaLogo />} />
      <main>
        <SinglePostBlock
          imgHolder={imgHolder}
          date={post.frontmatter.date}
          author={post.frontmatter.author}
          html={post.html}
          title={post.frontmatter.title}
          tags={post.frontmatter.tags}
        />
      </main>
      <FooterBlock
        footerLogo={<DescolaLogoDark />}
        featurePosts={footerThreeMarkdowRemark.edges}
      />
    </Layout>
  )
}

export const query = graphql`
  query SinglePost($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "DD [de] MMMM [de] YYYY", locale: "pt-br")
        author
        tags
        featuredPost
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
      excerpt(pruneLength: 200)
      html
      fields {
        slug
      }
    }
  }
`

export default SinglePost
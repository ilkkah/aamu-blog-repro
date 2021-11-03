import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Hero from '../components/hero'
import Layout from '../components/layout'
import ArticlePreview from '../components/article-preview'

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.aamu.BlogPostCollection')

    return (
      <Layout location={this.props.location} >
        <div>
          <Helmet>
            <title lang="en">{siteTitle}</title>
            <link rel="shortcut icon" type="image/png" href="https://st.aamu.app/img/logo.png" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Serif:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />            
            <script defer src="https://ilkkah.aamu.app/livechat.js" data-username="" data-useremail="" data-host="ilkkah" data-pid="0a597a28d3041a8b31a4e6792e5fc132"></script>
          </Helmet>
          <Hero />
          <div className="wrapper">
            <ul className="article-list">
              {posts.map((node) => {
                return (
                  <li key={node.slug}>
                    <ArticlePreview article={node} />
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        title
      }
    }
    aamu {
      BlogPostCollection (filter: { status: { EQ: "published" }}, sort: { publishDate: DESC }) {
        title
        slug
        publishDate
        heroImage {
          url
          image {
            id
            childImageSharp {
              gatsbyImageData(
                placeholder: BLURRED
                layout: FULL_WIDTH
              )
            }
          }
        }
        description
      }
    }
  }
`

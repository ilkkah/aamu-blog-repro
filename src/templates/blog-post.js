import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import { GatsbyImage } from "gatsby-plugin-image"
import Layout from '../components/layout'
import * as styles from './blog-post.module.css'
import { format } from 'date-fns'

class BlogPostTemplate extends React.Component {
  render() {
    const post = get(this.props, 'data.aamu.BlogPost')
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    return (
      <Layout location={this.props.location} >
        <div>
          <Helmet>
            <title lang="en">{`${post.title} | ${siteTitle}`}</title>
            <link rel="shortcut icon" type="image/png" href="/favicon.png" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Serif:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
            <script defer src="https://ilkkah.aamu.app/livechat.js" data-username="" data-useremail="" data-host="ilkkah" data-pid="0a597a28d3041a8b31a4e6792e5fc132"></script>
            <meta property="og:title" content={'Aamu.app blog – '+post.title} />
            <meta name="twitter:title" content={'Aamu.app blog – '+post.title} />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:image" content={post.heroImage.url} />
            <meta property="og:logo" content="https://st.aamu.app/img/logo.png" />
            <meta property="og:image" content={post.heroImage.url} />
          </Helmet>
          <div>
            <GatsbyImage alt={post.title} image={post.heroImage.image.childImageSharp.gatsbyImageData} />
          </div>
          <div className={styles.blogPost}>
            <h1 className={styles.sectionHeadline}>{post.title}</h1>
            <div className={styles.blogPostMeta}>
              <GatsbyImage className={styles.author} alt={post.author.name} image={post.author.image.image.childImageSharp.gatsbyImageData} /> by {post.author.name} on {format(new Date(post.publishDate).valueOf(), 'MMMM d, yyyy')}
            </div>
            <div className={styles.blogPostArticle}
              dangerouslySetInnerHTML={{
                __html: post.body,
              }}
            />
          </div>
        </div>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    aamu {
      BlogPost(slug: $slug) {
        title
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
        body
        slug
        author {
          id
          created
          updated
          name
          bio
          title
          image {
            url
            image {
              id
              childImageSharp {
                gatsbyImageData(
                  placeholder: BLURRED
                  layout: CONSTRAINED
                  width: 100
                )
              }
            }
          }
        }
      }
    }
  }
`

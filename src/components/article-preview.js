import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { GatsbyImage } from "gatsby-plugin-image"
import { format } from 'date-fns'
import * as styles from './article-preview.module.css'

export default ({ article }) => (
  <Link to={`/${article.slug}`}>
    <GatsbyImage alt="" image={article.heroImage.image.childImageSharp.gatsbyImageData} />
    <h3>
      {article.title}
    </h3>
    <small>{format(new Date(article.publishDate).valueOf(), 'MMMM d, yyyy')}</small>
    <p
      dangerouslySetInnerHTML={{
        __html: article.description,
      }}
    />
    {article.tags && article.tags.map(tag => (
      <p className={styles.tag} key={tag}>
        {tag}
      </p>
    ))}
  </Link>
)

import React from 'react'
import { GatsbyImage } from "gatsby-plugin-image"

import * as styles from './hero.module.css'

export default ({ data }) => (
	  <div className={styles.hero}>
	      <h1>Aamu.app Blog</h1>
		  <h2>Everything About Productivity</h2>
	  </div>
	)

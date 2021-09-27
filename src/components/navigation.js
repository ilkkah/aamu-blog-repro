import React from 'react'
import { Link } from 'gatsby'
import * as styles from './navigation.module.css'

export default () => (
  <nav role="navigation">
    <ul className={styles.navigation}>
      <li className={styles.navigationItem}>
        <Link to="https://aamu.app"><img className="logo" src="https://aamu.app/img/logo.png" /> Aamu.app</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/">Blog</Link>
      </li>
    </ul>
  </nav>
)

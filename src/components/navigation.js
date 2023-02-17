import React from 'react'
import { Link } from 'gatsby'
import * as styles from './navigation.module.css'

export default () => (
  <nav role="navigation">
    <ul className={styles.navigation}>
      <li className={styles.navigationItem}>
        <a href="https://aamu.app"><img className="logo" alt="Logo" src="https://st.aamu.app/img/logo-160-wbg.webp" /> Aamu.app</a>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/">Blog</Link>
      </li>
    </ul>
  </nav>
)

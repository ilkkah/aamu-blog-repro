import React from 'react'
import { Link } from 'gatsby'
import base from './base.css'
import Container from './container'
import Navigation from './navigation'

class Template extends React.Component {
  render() {
    const { location, children } = this.props

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    const isroot = location.pathname == rootPath ? true : false;

    return (
      <div>
        <Navigation />
        <Container isroot={ isroot }>
          {children}
        </Container>
      </div>
    )
  }
}

export default Template

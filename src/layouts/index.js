import React from 'react'
import Link from 'gatsby-link'
import Container from '../components/container'
import Header from '../components/header'
import Navigation from '../components/navigation'
import Footer from '../components/footer'

import './index.scss';

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    let header

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    return (
      <Container>
        <Header />
        <Navigation />
        {children()}
        <Footer />
      </Container>
    )
  }
}

export default Template

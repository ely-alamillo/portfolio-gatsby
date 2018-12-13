import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
// import favicon from '../img/favicon-png.png'
import favicon from '../img/favicon-real.svg'
import './index.scss'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
      link={[{ rel: 'shortcut icon', type: 'image/png', href: `${favicon}` }]}
    />
    <Header siteTitle={data.site.siteMetadata.title} />

    {/* <div className="section">
      <div className="container">{children()}</div>
    </div> */}
    {children()}
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

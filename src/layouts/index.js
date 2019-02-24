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
        {
          name: 'description',
          content: 'Hi, Welcome to my tiny space on the web.',
        },
        {
          name: 'keywords',
          content:
            'Ely Alamillo, Ely, Alamillo, React, Typescript, Javascript, GraphQL',
        },
        { name: 'author', content: 'Ely Alamillo' },
      ]}
      link={[{ rel: 'shortcut icon', type: 'image/svg', href: `${favicon}` }]}
    />
    <Header siteTitle={data.site.siteMetadata.title} />
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

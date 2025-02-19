// Redirects /docs to /docs/web-monetization-api

const React = require('react')
const { Redirect } = require('@docusaurus/router')

export default class Docs extends React.Component {
  render () {
    const { siteConfig } = this.props

    return (
      <Redirect
        to={'/docs/web-monetization-api'}
        config={siteConfig}
      />
    )
  }
}

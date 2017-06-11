import React from 'react'
import Link from 'next/link'
import 'isomorphic-fetch'

export default class MyPage extends React.Component {
  static async getInitialProps () {
    // eslint-disable-next-line no-undef
    const res = await fetch('http://localhost:9000/')
    const json = await res.json()
    return json
  }

  render () {
    return (
      <div>
        <p>Hello {this.props.hello} !!!️</p>
        <Link prefetch href='/anotherPage'><a>Go to another page</a></Link>
      </div>
    )
  }
}
import React from 'react'
import Link from 'next/link'
import 'isomorphic-fetch'

export default class AnotherPage extends React.Component {
  static async getInitialProps () {
    // eslint-disable-next-line no-undef
    const res = await fetch('http://localhost:9000/anotherPage')
    const json = await res.json()
    //console.log(json);
    return json
  }

  render () {
    return (
      <div>
        <p>This page have text {this.props.text}</p>
        <Link prefetch href='/'><a>Home</a></Link>
      </div>
    )
  }
}
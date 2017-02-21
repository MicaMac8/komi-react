import React, { Component } from 'react'

import Page from '../presentation/Page'

export default class HomePage extends Component {
  render () {
    return (
      <div className='home-page-container'>
        <Page text='Hello World'/>
      </div>
    )
  }
}

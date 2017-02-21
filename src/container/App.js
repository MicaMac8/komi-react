import React, { Component } from 'react'
import './App.css';
import Page from '../presentation/Page'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Page text='Hello World'/>
      </div>
    )
  }
}

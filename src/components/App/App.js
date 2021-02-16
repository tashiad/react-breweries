import React, { Component } from 'react'
import './App.css'
import Breweries from '../Breweries/Breweries'

class App extends Component {
  constructor() {
    super()
    this.state = {
      breweryData: []
    }
  }

  componentDidMount() {
    fetch('https://api.openbrewerydb.org/breweries')
    .then(response => response.json())
    .then(data => this.setState({ breweryData: data }))
    .catch(error => console.log(error))
  }

  render() {
    return (
      <>
        <h1>Brewery Finder</h1>
        <Breweries breweryData={this.state.breweryData}/>
      </>
    )
  }
}

export default App

import React, { Component } from 'react'
import './App.css'
import Breweries from '../Breweries/Breweries'
import AddBrewery from '../AddBrewery/AddBrewery'

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

  addBrewery = (newBrewery) => {
    this.setState({
      breweryData: [...this.state.breweryData, newBrewery]
    })
  }

  render() {
    return (
      <>
        <h1>Beer Me</h1>
        <AddBrewery addBrewery={this.addBrewery}/>
        <Breweries breweryData={this.state.breweryData}/>
      </>
    )
  }
}

export default App

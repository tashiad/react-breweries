import React, { Component } from 'react'
import './Form.css'

class From extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      brewery_type: '',
      city: '',
      state: '',
      website_url: ''
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  submitIdea = event => {
    event.preventDefault()
    const newBrewery = {
      id: Date.now(),
      ...this.state
    }
    this.props.addBrewery(newBrewery)
    this.clearInputs()
  }

  clearInputs = () => {
    this.setState({ name: '', brewery_type: '', city: '', state: '', website_url: '' })
  }

  render() {
    return (
      <>
        <h2>Add A Brewery</h2>
        <form>
          <input
            type='text'
            placeholder='Name'
            name='name'
            value={this.state.title}
            onChange={this.handleChange}
          />

          <input
            type='text'
            placeholder='Brewery Type'
            name='brewery_type'
            value={this.state.brewery_type}
            onChange={this.handleChange}
          />

          <input
            type='text'
            placeholder='City'
            name='city'
            value={this.state.city}
            onChange={this.handleChange}
          />

          <input
            type='text'
            placeholder='State'
            name='state'
            value={this.state.state}
            onChange={this.handleChange}
          />

          <input
            type='text'
            placeholder='Website URL'
            name='website_url'
            value={this.state.website_url}
            onChange={this.handleChange}
          />

          <button onClick={this.submitIdea}>SUBMIT</button>
        </form>
      </>
    )
  }
}

export default From

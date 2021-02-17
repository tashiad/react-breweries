import React from 'react'
import './Breweries.css'
import BreweryCard from '../BreweryCard/BreweryCard'

const Breweries = ({ breweryData }) => {
  const cards = breweryData.map(brewery => {
    return (
      <BreweryCard
        id={brewery.id}
        key={brewery.id}
        name={brewery.name}
        brewery_type={brewery.brewery_type}
        city={brewery.city}
        state={brewery.state}
        website_url={brewery.website_url}
      />
    )
  })

  return (
    <section className="card-container">
      {cards}
    </section>
  )
}

export default Breweries

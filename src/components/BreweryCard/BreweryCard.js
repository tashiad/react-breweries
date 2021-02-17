import React from 'react'
import './BreweryCard.css'

const BreweryCard = ({ id, name, brewery_type, city, state, website_url }) => {
  return (
    <article>
      <h2>{name}</h2>
      <p><b>Type:</b> {brewery_type}</p>
      <p><b>Location:</b> {`${city}, ${state}`}</p>
      <a href={website_url} target="_blank">Website</a>
    </article>
  )
}

export default BreweryCard

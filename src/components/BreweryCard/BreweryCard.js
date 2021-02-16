import React from 'react'
import './BreweryCard.css'

const BreweryCard = ({ id, name, type, city, state, site }) => {
  return (
    <article>
      <h2>{name}</h2>
      <p><b>Type:</b> {type}</p>
      <p><b>Location:</b> {`${city}, ${state}`}</p>
      <a href={site} target="_blank">Website</a>
    </article>
  )
}

export default BreweryCard

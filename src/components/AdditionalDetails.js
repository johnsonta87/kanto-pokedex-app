import React from 'react'

export default function AdditionalDetails(props) {
  const { base_experience, height, weight } = props.details;
  return (
    <div>
      <h4>Additional Details</h4>
      <p>Height: {height}"</p>
      <p>Weight: {weight} lbs.</p>
      <p>Base exp: {base_experience}</p>
    </div>
  )
}

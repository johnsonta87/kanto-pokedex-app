import React from 'react'
import styled from 'styled-components'
import { removeHyphen } from '../utils/helpers'

const EvolutionStyles = styled.div`
`;

export default function Evolution(props) {
  const { evolution_details, species } = props.evolution.evolves_to[0];


  return (
    <EvolutionStyles>
      <div className="detail-header">
        <h2>Evolution</h2>
      </div>

      <div className="pokemon-profile-row">
        <p>Next evolution at <strong>level {evolution_details[0].min_level}</strong> into <strong>{species.name}</strong>.</p>
      </div>
    </EvolutionStyles>
  )
}

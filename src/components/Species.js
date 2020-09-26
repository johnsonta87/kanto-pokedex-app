import React from 'react'
import styled from 'styled-components'
import { removeHyphen } from '../utils/helpers'

const SpeciesStyles = styled.div`
`;

export default function Species(props) {
  const {
    egg_groups,
    evolution_chain,
    evolves_from_species,
  } = props.species;

  return (
    <SpeciesStyles>
      <div className="species-details evolution">
        <div className="detail-header">
          <h2>Evolution</h2>
        </div>

        <div className="pokemon-profile-row">
          <p>Next evolution at <strong>level 16</strong> into <strong>NAME</strong>.</p>
        </div>
      </div>
    </SpeciesStyles>
  )
}

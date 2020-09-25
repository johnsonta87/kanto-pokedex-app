import React from 'react'
import styled from 'styled-components'
import { removeHyphen } from '../utils/helpers'

const SpeciesStyles = styled.div`
`;

export default function Species(props) {
  const {
    base_happiness,
    egg_groups,
    capture_rate,
    evolution_chain,
    evolves_from_species,
    growth_rate,
    habitat,
    is_legendary,
    is_mythical,
    flavor_text_entries,
    genera
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

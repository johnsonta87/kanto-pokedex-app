import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { fetchPokemonData, fetchPokemonEvolution } from '../api/services'
import { capitalize } from '../utils/helpers'

const SpeciesStyles = styled.div`
`;

export default function Species(props) {
  const [speciesURL, setSpeciesURL] = useState();
  const [evolution_chain, setPokemonEvolution] = useState();
  const url = props.evolutionChain;

  useEffect(() => {
    if (url) {
      fetchPokemonData(url)
        .then((response) => {
          setSpeciesURL(response.data.evolution_chain.url);
        })
        .catch((error) => {
          console.log('Sorry, Error! ' + error);
        });

      if (speciesURL) {
        fetchPokemonEvolution(speciesURL)
          .then((response) => {
            setPokemonEvolution(response.data.chain.evolves_to);
          })
          .catch((error) => {
            console.log('Sorry, Error! ' + error);
          });
      }
    }
  })

  return (
    <SpeciesStyles>
      <div className="species-details evolution">
        <div className="detail-header">
          <h2>Evolution</h2>
        </div>

        <div className="pokemon-profile-row">
          {evolution_chain && evolution_chain.map((chain, i) => (
            <p key={i}>Next evolution is <strong>{capitalize(chain.species.name)}</strong> at <strong>level 16</strong></p>
          ))}
        </div>
      </div>
    </SpeciesStyles>
  )
}

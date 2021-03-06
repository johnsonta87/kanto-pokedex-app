import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { fetchPokemonData } from '../api/services'
import Evolution from './Evolution'

const SpeciesStyles = styled.div`
`;

export default function Species(props) {
  const [pokemonSpecies, setPokemonEvolution] = useState();
  const { name, url } = props.species;

  useEffect(() => {
    if (url) {
      fetchPokemonData(url)
        .then((response) => {
          setPokemonEvolution(response.data.evolution_chain.url);
        })
        .catch((error) => {
          console.log('Sorry, Error! ' + error);
        });
    }
  })

  return (
    <SpeciesStyles>
      {pokemonSpecies ? (
        <div className="species-details evolution">
          <div className="pokemon-profile-row">
            <Evolution evolutionChain={url} name={name} />
          </div>
        </div>
      ) : ''}
    </SpeciesStyles>
  )
}

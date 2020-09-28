import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { fetchPokemonData, fetchPokemonEvolution } from '../api/services'
import LevelvsStone from '../components/LevelvsStone'
import { Dimmer, Loader } from 'semantic-ui-react'

const SpeciesStyles = styled.div`
  position: relative;
  .loader {
    margin-top: 50px;
  }
`;

export default function Species(props) {
  const [loading, setLoading] = useState(true);
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
            setLoading(false);
            setPokemonEvolution(response.data.chain);
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
          <h2>Evolution Chain</h2>
        </div>

        {loading ? <Loader active /> : (
          <div className="pokemon-profile-row">
            {evolution_chain && evolution_chain.species.name === props.name ? <LevelvsStone chain={evolution_chain} /> : ''}

            {evolution_chain && evolution_chain.evolves_to.filter((item) => (
              item.species.name === props.name
            )).map((chain_2, i) => chain_2.evolves_to[0] ? <LevelvsStone key={i} chain={chain_2} /> : 'No further evolution.')}

            {evolution_chain && evolution_chain.evolves_to[0].evolves_to.filter((item) => (
              item.species.name === props.name
            )).map((i) => <p key={i}>No further evolution.</p>)
            }
          </div>
        )}
      </div>
    </SpeciesStyles>
  )
}

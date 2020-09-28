import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { fetchPokemonData, fetchPokemonEvolution } from '../api/services'
import LevelvsStone from '../components/LevelvsStone'
import { Loader } from 'semantic-ui-react'

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
            setPokemonEvolution(response.data.chain);
            setLoading(false);
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
          <h2>Next Evolution</h2>
        </div>

        {loading ? <Loader active /> : (
          <div className="pokemon-profile-row">
            {evolution_chain.evolves_to.length > 0
              ? evolution_chain && evolution_chain.species.name === props.name
                ? <LevelvsStone chain={evolution_chain} />
                : evolution_chain.evolves_to.length > 0 && evolution_chain.evolves_to.filter((item) => (
                  item.species.name === props.name
                )).map((chain_2, i) => chain_2.evolves_to && chain_2.evolves_to.length > 0 ? <LevelvsStone key={i} chain={chain_2} /> : 'No further evolution.')
              : 'No further evolution.'
            }

          </div>
        )}
      </div>
    </SpeciesStyles>
  )
}

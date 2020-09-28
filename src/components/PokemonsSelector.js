import React, { useState, useEffect } from "react"
import PokemonInfo from "./PokemonInfo";
import { Container, Button, Dimmer, Loader } from 'semantic-ui-react'
import { removeHyphen } from '../utils/helpers'
import styled from 'styled-components'

import { fetchAllPokemonData, fetchPokemonSpecies, fetchPokemonData } from '../api/services'

const PokemonStyles = styled.div`
  .poke-buttons {
    text-transform: capitalize;
    background: rgba(173, 216, 230, 0.4);
    border: 2px solid #87CEEB;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 150px;
    width: 100%;

    &:hover,
    &:focus {
      background-color: #87CEEB;
    }

    img {
      max-width: 40px;
      margin-right: 10px;
    }
  }

  .message {
    text-align: center;
  }
`;

const PokeButtonGrid = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  border: 2px solid #FFE4B5;
  padding: 25px 15px;
  height: 500px;
  overflow-y: scroll;
  margin-top: 40px;
`;

const PokemonViewStyles = styled.div`
  width: 100%;
  position: absolute;
  top: 75px;
  left: 0;
  right: 0;
  height: 100%;
`;

const PokemonsSelector = () => {
  const [appLoading, setAppLoading] = useState(true);
  const [pokemonLoading, setPokemonLoading] = useState(true);
  const [pokemonList, setPokemonList] = useState([]);
  const [pokemonData, setPokemonData] = useState(null);
  const [pokemonSpecies, setPokemonSpecies] = useState([]);

  useEffect(() => {
    fetchAllPokemonData().then(res => {
      setAppLoading(false);
      setPokemonList(res.data.results);
    }).catch(error => {
      console.log(error)
    });
  });

  return (
    <PokemonStyles>
      {pokemonData ? (
        <PokemonViewStyles>
          <Button
            className="close-view"
            onClick={() => {
              // reset states
              setPokemonLoading(true);
              setPokemonData(null);
              setPokemonSpecies([]);
            }}
            title="Go back"
          ></Button>
          {pokemonLoading ? <Dimmer active inverted><Loader inverted>Loading</Loader></Dimmer> : (
            <PokemonInfo data={pokemonData} species={pokemonSpecies} loading={pokemonLoading} />
          )}
        </PokemonViewStyles>
      ) : ''}

      <Container>
        <PokeButtonGrid>
          {appLoading ? <Dimmer active inverted><Loader inverted>Loading</Loader></Dimmer> :
            pokemonList.map((pokemon, i) =>
              <Button className="poke-buttons"
                key={i}
                onClick={() => {
                  // Handle profile data
                  if (pokemon.url) {
                    fetchPokemonData(pokemon.url)
                      .then((response) => {
                        setPokemonLoading(false);
                        setPokemonData(response.data);
                      })
                      .catch((error) => {
                        console.log('Sorry, Error! ' + error);
                      });
                  }

                  // Handle species data
                  if (i > 0) {
                    fetchPokemonSpecies(i + 1)
                      .then((response) => {
                        setPokemonLoading(false);
                        setPokemonSpecies(response.data);
                      })
                      .catch((error) => {
                        console.log('Sorry, Error! ' + error);
                      });
                  }
                }}
              ><img src={`https://pokeres.bastionbot.org/images/pokemon/${i + 1}.png`} alt={removeHyphen(pokemon.name)} /> {removeHyphen(pokemon.name)}
              </Button>
            )}
        </PokeButtonGrid>
      </Container>
    </PokemonStyles>
  )
}

export default PokemonsSelector

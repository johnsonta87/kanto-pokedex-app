import React, { useState, useEffect } from "react"
import axios from 'axios'
import PokemonInfo from "./PokemonInfo";
import { Container, Grid, Message, Button, Dimmer, Loader } from 'semantic-ui-react'
import { removeHyphen } from '../utils/helpers'
import styled from 'styled-components'

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
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
`;

const PokemonsSelector = (props) => {
  const [loading, setLoading] = useState(true);
  const [pokemonLoading, setPokemonLoading] = useState(true);
  const [pokemonList, setPokemonList] = useState([]);
  const [pokemonURL, setPokemonURL] = useState();
  const [pokemonData, setPokemonData] = useState(null);
  const [pokemonSpecies, setPokemonSpecies] = useState([]);

  useEffect(() => {
    fetchAllPokemonData();
  })

  const fetchAllPokemonData = () => {
    axios.get(`${props.url}/pokemon/?limit=151`)
      .then(function (response) {
        setLoading(false);
        setPokemonList(response.data.results);
      })
      .catch(function (error) {
        console.log('Sorry, Error! ' + error);
      });
  }

  const fetchPokemonSpecies = (id) => {
    if (id) {
      axios.get(`${props.url}/pokemon-species/${id}`)
        .then(function (response) {
          setPokemonLoading(false);
          setPokemonSpecies(response.data);
        })
        .catch(function (error) {
          console.log('Sorry, Error! ' + error);
        });
    }
  }

  const fetchPokemonData = (url) => {
    if (url) {
      axios.get(url || pokemonURL)
        .then(function (response) {
          setPokemonLoading(false);
          setPokemonData(response.data);
        })
        .catch(function (error) {
          console.log('Sorry, Error! ' + error);
        });
    }
  }

  return (
    <Grid>
      <Grid.Row columns={1}>
        <Grid.Column>
          <PokemonStyles>
            {!pokemonData ? '' : (
              <PokemonViewStyles>
                <Button
                  className="close-view"
                  onClick={() => {
                    setPokemonData(null);
                  }}
                  title="Go back"
                ></Button>
                {pokemonLoading ? <Dimmer active inverted><Loader inverted>Loading</Loader></Dimmer> : (
                  <PokemonInfo data={pokemonData} species={pokemonSpecies} loading={pokemonLoading} />
                )}
              </PokemonViewStyles>
            )}

            <Container>
              <PokeButtonGrid>
                {loading ? <Dimmer active inverted><Loader inverted>Loading</Loader></Dimmer> :
                  pokemonList.map((pokemon, i) =>
                    <Button className="poke-buttons"
                      key={i}
                      onClick={() => {
                        setPokemonURL(pokemon.url);
                        fetchPokemonData(pokemon.url);
                        fetchPokemonSpecies(i + 1);
                      }}
                    ><img src={`https://pokeres.bastionbot.org/images/pokemon/${i + 1}.png`} alt={removeHyphen(pokemon.name)} /> {removeHyphen(pokemon.name)}
                    </Button>
                  )}
              </PokeButtonGrid>
            </Container>
          </PokemonStyles>
        </Grid.Column>
      </Grid.Row>
    </Grid >
  )
}

export default PokemonsSelector

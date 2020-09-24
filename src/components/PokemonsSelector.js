import React, { useState, useEffect } from "react"
import axios from 'axios'
import PokemonInfo from "./PokemonInfo";
import { Grid, Message, Button } from 'semantic-ui-react'
import styled from 'styled-components'

const PokemonStyles = styled.div`
  .poke-buttons {
    text-transform: capitalize;
    background-color: #ADD8E6;
    min-width: 150px;
    margin-bottom: 1em;
    border-radius: 25px;
    border: 2px solid #87CEEB;

    &:hover {
      background-color: #87CEEB;
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
`;

const PokemonsSelector = (props) => {
  const [pokemonList, setPokemonList] = useState([]);
  const [pokemonURL, setPokemonURL] = useState();
  const [pokemonData, setPokemonData] = useState();

  useEffect(() => {
    fetchAllPokemonData();
  })

  const fetchAllPokemonData = () => {
    axios.get(`${props.url}?limit=151`)
      .then(function (response) {
        setPokemonList(response.data.results);
      })
      .catch(function (error) {
        console.log('Sorry, Error! ' + error);
      });
  }

  const fetchPokemonData = (url) => {
    if (url) {
      axios.get(url || pokemonURL)
        .then(function (response) {
          console.log(response.data);
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
            {pokemonData ? <PokemonInfo data={pokemonData} /> : (
              <Message>
                <p>Choose a pokemon to view details</p>
              </Message>
            )}

            <PokeButtonGrid>
              {pokemonList.map((pokemon, index) =>
                <Button className="poke-buttons"
                  key={index}
                  onClick={() => {
                    setPokemonURL(pokemon.url);
                    fetchPokemonData(pokemon.url);
                  }}
                > {pokemon.name}
                </Button>
              )}
            </PokeButtonGrid>
          </PokemonStyles>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

export default PokemonsSelector

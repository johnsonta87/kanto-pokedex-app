import { createGlobalStyle } from 'styled-components'

export const theme = {
  colors: {
    grass: '#78C850',
    poison: '#A040A0',
    flying: '#A890F0',
    fire: '#F08030',
    fighting: '#C03028',
    psyhic: '#F85888',
    water: '#6890F0',
    bug: '#A8B820',
    dark: '#705848',
    ground: '#E0C068',
    electric: '#F8D030',
    fairy: '#EE99AC',
    dragon: '#7038F8',
    unknown: '#68A090',
    ghost: '#705898',
    ice: '#98D8D8',
    normal: '#A8A878',
    rock: '#B8A038',
    steel: '#B8B8D0',
  },
}

export const GlobalStyle = createGlobalStyle`
  *, *:before, *:after {
    box-sizing: border-box;
  }

  html {
    box-sizing: border-box;
  }

  body {
    background: #FFFFF0;
  }

  a {
    color: #3CB371;

    &:hover {
      color: #78C850;
    }
  }

  button {
    text-transform: capitalize;
    background-color: #ADD8E6;
    min-width: 150px;
    margin-bottom: 1em !important;
    border-radius: 25px;
    border-radius: 25px !important;
  }
`

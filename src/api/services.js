import API from './api'

export function fetchAllPokemonData() {
  return API.get(`/pokemon/?limit=151`);
}

export function fetchPokemonSpecies(id) {
  if (id) {
    return API.get(`/pokemon-species/${id}`);
  }
}

export function fetchPokemonEvolution(url) {
  if (url) {
    return API.get(url);
  }
}

export function fetchPokemonData(url) {
  if (url) {
    return API.get(url);
  }
}

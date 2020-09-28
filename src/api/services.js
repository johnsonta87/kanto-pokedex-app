import API from './api'

export const fetchAllPokemonData = async () => {
  try {
    const data = await API.get(`/pokemon/?limit=151`);
    return data;
  }
  catch (e) {
    console.log('We have the error in services', e);
  }
}

export const fetchPokemonSpecies = async (id) => {
  try {
    if (id) {
      const data = await API.get(`/pokemon-species/${id}`);
      return data;
    }
  }
  catch (e) {
    console.log('We have the error in services', e);
  }
}

export const fetchPokemonEvolution = async (url) => {
  try {
    if (url) {
      const data = await API.get(url);
      return data;
    }
  }
  catch (e) {
    console.log('We have the error in services', e);
  }
}

export const fetchPokemonData = async (url) => {
  try {
    if (url) {
      const data = await API.get(url);
      return data;
    }
  }
  catch (e) {
    console.log('We have the error in services', e);
  }
}

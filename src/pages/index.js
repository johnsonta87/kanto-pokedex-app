import React from "react"
import 'semantic-ui-css/semantic.min.css'

import Layout from "../components/layout"
import SEO from "../components/seo"
import PokemonsSelector from "../components/PokemonsSelector"

const App = () => {

  return (
    <Layout>
      <SEO title="Hello" />

      <PokemonsSelector url="https://pokeapi.co/api/v2/pokemon/" />
    </Layout>
  )
}

export default App

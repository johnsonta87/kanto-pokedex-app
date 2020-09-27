import React from "react"
import 'semantic-ui-css/semantic.min.css'
import { Grid } from 'semantic-ui-react'

import Layout from "../components/layout"
import SEO from "../components/seo"
import PokemonsSelector from "../components/PokemonsSelector"

const App = () => {

  return (
    <Layout>
      <SEO title="App" />

      <Grid.Column>
        <PokemonsSelector />
      </Grid.Column>
    </Layout>
  )
}

export default App

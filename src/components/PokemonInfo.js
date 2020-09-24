import React from 'react'
import { Container, Image, Item } from 'semantic-ui-react'
import styled from 'styled-components'
import Stats from './Stats'
import Type from './Type'
import Profile from './Profile'

const SinglePokemonStyles = styled.div`
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 25px;
    color: #fff;
    padding-left: 10%;
    padding-right: 10%;

    .pokemon-name {
      margin: 0;
      font-size: 2.5rem;
      font-weight: bold;
      text-transform: capitalize;
      color: #fff;
    }

    .pokemon-id {
      margin: 0;
      color: #fff;
    }
  }
`;

const InnerPokemonInfo = styled.div`
  max-width: 500px;
  margin: 0 auto;


  .image {
    position: relative;
    z-index: 1;
    margin: 0 auto;
  }
`;

export default function PokemonInfo(props) {
  const { id, name, types, abilities, base_experience, height, weight, stats } = props.data;

  return (
    <SinglePokemonStyles>
      <div className={`poke-info-container ${types.map((type) => type.type.name + '-pokemon ').join('')}`}>
        <Container>
          <InnerPokemonInfo>
          <Item.Header>
            <h2 className="pokemon-name">{name}</h2>
            <Type types={types} />
            <h4 className="pokemon-id">{`#${id}`}</h4>
          </Item.Header>
          <Image src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`} size='medium' centered alt={name} />

          <div className="pokemon-tabs">
            <Profile details={{ base_experience, height, weight, abilities }} />

            <Stats stats={stats} />
          </div>
          </InnerPokemonInfo>
        </Container>
      </div>


    </SinglePokemonStyles>
  )
}

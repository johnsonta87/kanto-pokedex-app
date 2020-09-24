import React from 'react'
import { Item, List } from 'semantic-ui-react'
import styled from 'styled-components'
import Stats from './Stats'
import Type from './Type'
import { removeHyphen } from '../utils/helpers'
import AdditionalDetails from './AdditionalDetails'

const SinglePokemonStyles = styled.div`
  margin-bottom: 50px;
  padding: 25px 40px;
  background-color: #FAF0E6;
  width: 100%;
  border-radius: 5px;

  .pokemon-name {
    text-transform: capitalize;
  }

  h4 {
    margin-bottom: 5px;
  }

  .abilities-slot {
    text-transform: capitalize;
    background-color: #E0FFFF;
    padding: 5px !important;
  }

  p {
    margin-bottom: 0;
    line-height: 1;
  }
`;

export default function PokemonInfo(props) {
  const { id, name, types, abilities, base_experience, height, weight, stats } = props.data;

  return (
    <SinglePokemonStyles>
      <Item.Group>
        <Item>
          <Item.Image src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`} size='small' alt={name} />

          <Item.Content>
            <Item.Header><h2 className="pokemon-name">{name}</h2></Item.Header>
            <Item.Meta>
              <Type types={types} />
            </Item.Meta>
            <Item.Description>
              <h4>Abilities</h4>
              <List horizontal>
                {abilities.map((ability) => <List.Item className="abilities-slot" key={ability.slot}>{removeHyphen(ability.ability.name)}</List.Item>)}
              </List>
            </Item.Description>
            <AdditionalDetails details={{ base_experience, height, weight }} />
          </Item.Content>
        </Item>
      </Item.Group>


      <Stats stats={stats} />
    </SinglePokemonStyles>
  )
}

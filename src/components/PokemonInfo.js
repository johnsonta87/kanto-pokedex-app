import React from 'react'
import { Item, List } from 'semantic-ui-react'
import styled from 'styled-components'

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
  const { name, sprites, types, abilities, base_experience, height, weight } = props.data;

  return (
    <SinglePokemonStyles>
      <Item.Group>
        <Item>
          <Item.Image src={sprites.front_default} size='small' alt={name} />

          <Item.Content>
            <Item.Header><h2 className="pokemon-name">{name}</h2></Item.Header>
            <Item.Meta>
              <List horizontal>
                {types.map((type) => <List.Item key={type.slot}>{type.type.name}</List.Item>)}
              </List>
            </Item.Meta>
            <Item.Description>
              <h4>Abilities</h4>
              <List horizontal>
                {abilities.map((ability) => <List.Item className="abilities-slot" key={ability.slot}>{ability.ability.name.replace(/-/g, " ")}</List.Item>)}
              </List>
            </Item.Description>
            <Item.Extra>Additional Details</Item.Extra>
            <p>Height: {height}"</p>
            <p>Weight: {weight} lbs.</p>
            <p>Base exp: {base_experience}</p>
          </Item.Content>
        </Item>
      </Item.Group>
    </SinglePokemonStyles>
  )
}

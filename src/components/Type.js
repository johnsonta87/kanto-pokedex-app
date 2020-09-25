import React from 'react'
import { List } from 'semantic-ui-react'
import { removeHyphen } from '../utils/helpers'
import styled from 'styled-components'

const TypeStyles = styled.div`
  margin-bottom: 25px;
`;

export default function PokemonType(props) {

  return (
    <TypeStyles>
      <List horizontal>
        {props.types.map((type) => (
          <List.Item
            key={type.slot}
            className={`pokemon-type ${type.type.name}-type`}
          ><span>{removeHyphen(type.type.name)}</span>
          </List.Item>
        ))}
      </List>
    </TypeStyles>
  )
}

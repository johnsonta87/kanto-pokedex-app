import React from 'react'
import { List } from 'semantic-ui-react'
import { removeHyphen } from '../utils/helpers'


export default function PokemonType(props) {

  return (
      <List horizontal>
        {props.types.map((type) => (
          <List.Item
            key={type.slot}
            className={`pokemon-type ${type.type.name}-type`}
          ><span>{removeHyphen(type.type.name)}</span>
          </List.Item>
        ))}
      </List>
  )
}

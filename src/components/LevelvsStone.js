import React from 'react'
import { capitalize, removeHyphen } from '../utils/helpers'

export default function LevelvsStone(props) {
  const { evolves_to } = props.chain;
  const { item, min_level } = evolves_to[0].evolution_details[0];

  return (
    <React.Fragment>
      {item
        ? <p>Evolves to <strong>{capitalize(evolves_to[0].species.name)}</strong> with a <strong>{capitalize(removeHyphen(item.name))}.</strong></p>
        : <p>Evolves to <strong>{capitalize(evolves_to[0].species.name)}</strong> at <strong>level {min_level}.</strong></p>
      }
    </React.Fragment>
  )
}

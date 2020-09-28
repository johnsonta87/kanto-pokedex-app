import React from 'react'
import { capitalize, removeHyphen } from '../utils/helpers'

export default function LevelvsStone(props) {
  const { evolves_to } = props.chain;


  return (
    <React.Fragment>
      {evolves_to[0].evolution_details[0].item ? (
        <p>
          Evolves to <strong>{capitalize(evolves_to[0].species.name)}</strong> with a <strong>{capitalize(removeHyphen(evolves_to[0].evolution_details[0].item.name))}.</strong>
        </p>
      ) : (
          <p>
            Evolves to <strong>{capitalize(evolves_to[0].species.name)}</strong> at <strong>level {evolves_to[0].evolution_details[0].min_level}.</strong>
          </p>
        )}
    </React.Fragment>
  )
}

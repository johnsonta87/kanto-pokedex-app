import React from 'react'
import { Progress } from 'semantic-ui-react'
import { removeHyphen } from '../utils/helpers'
import styled from 'styled-components'

const StatsProgress = styled.div`
  margin-top: 25px;
  width: 80%;

  .statName {
    text-transform: capitalize;
    font-weight: bold;
  }

  .progress {
    background: transparent;
    margin: 5px auto !important;

    .bar > .progress {
      top: 10%;
      color: #000;
    }
  }
`;

export default function PokemonStats(props) {
  const stats = [
    ...props.stats
  ];

  return (
    <StatsProgress>
      {stats.map((stat, index) => (
        <React.Fragment key={index}>
          <span className="statName">{removeHyphen(stat.stat.name)}</span>
          <Progress indicating progress='value' value={stat.base_stat} />
        </React.Fragment>
      ))}

    </StatsProgress>
  )
}

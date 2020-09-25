import React from 'react'
import { Progress } from 'semantic-ui-react'
import { removeHyphen } from '../utils/helpers'
import styled from 'styled-components'

const StatsProgress = styled.div`
  margin-top: 25px;
  margin-bottom: 25px;
  max-width: 80%;

  .ui.button {
    background: rgba(250, 128, 114, 0.4);
    border: 2px solid #FA8072;

    &:hover {
    background: rgba(250, 128, 114, 1);
    }
  }

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
      <div className="detail-header">
        <h2>Base stats</h2>
      </div>
      {stats.map((stat, index) => (
        <div key={index}>
          <span className="statName">{removeHyphen(stat.stat.name)}</span>
          <Progress indicating progress='value' value={stat.base_stat} />

        </div>
      ))}
    </StatsProgress>
  )
}

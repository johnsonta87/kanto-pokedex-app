import React from 'react'
import styled from 'styled-components'
import { removeHyphen } from '../utils/helpers'

const ProfileStyles = styled.div`
  .profile-header {
    width: 100%;
  }

  .pokemon-profile-row {
    display: flex;
    margin: 0 auto 15px;

    > strong {
      flex-basis: 20%;
      -webkit-box-flex: 1;
      -ms-flex-positive: 1;
      flex-grow: 1;
      -ms-flex-negative: 1;
      flex-shrink: 1;
      margin-right: 3px;
    }

    > p {
      -ms-flex-preferred-size: 30%;
      flex-basis: 30%;
      -webkit-box-flex: 1;
      -ms-flex-positive: 1;
      flex-grow: 1;
      -ms-flex-negative: 1;
      flex-shrink: 1;
      margin: 0 2px;
    }

    .abilities-slot {
      text-transform: capitalize;
    }
  }
`;

export default function Profile(props) {
  const {
    base_experience,
    height,
    weight,
    abilities
  } = props.details;

  return (
    <ProfileStyles>
      <div className="detail-header">
        <h2>Profile</h2>
      </div>
      <div className="pokemon-profile-row">
        <strong>Height:</strong> <p>{height} m</p>
        <strong>Weight:</strong> <p>{weight} kg</p>
      </div>

      <div className="pokemon-profile-row">
        <strong>Base exp:</strong> <p>{base_experience}</p>

        <strong>Abilities:</strong>&nbsp;
          <p className="abilities-slot">
          {abilities.map((ability) => (
            <React.Fragment key={ability.slot}>{`${removeHyphen(ability.ability.name)}, `}</React.Fragment>
          ))}
        </p>
      </div>
    </ProfileStyles>
  )
}

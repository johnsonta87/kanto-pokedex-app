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

  const {
    base_happiness,
    egg_groups,
    capture_rate,
    growth_rate,
    hatch_counter,
    habitat,
  } = props.species;

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
          <p className="abilities-slot capitalize">{`${abilities.map((ability) => removeHyphen(ability.ability.name)).join(', ')}`}
        </p>
      </div>

      <div className="pokemon-profile-row">
        <strong>Chance to catch:</strong> <p className="capitalize">{capture_rate}%</p>
        <strong>Habitat:</strong> <p className="capitalize">{removeHyphen(habitat.name)}</p>
      </div>

      <div className="pokemon-profile-row">
        <strong>Base Happiness:</strong> <p>{base_happiness}%</p>
        <strong>Growth:</strong> <p className="capitalize">{removeHyphen(growth_rate.name)}</p>
      </div>

      <div className="pokemon-profile-row">
        <strong>Egg Groups:</strong> <p className="capitalize">{`${egg_groups.map((egg) => removeHyphen(egg.name)).join(', ')}`}</p>
        <strong>Hatch:</strong> <p>{hatch_counter} steps</p>
      </div>
    </ProfileStyles>
  )
}

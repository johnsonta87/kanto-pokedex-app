import React, { useState } from 'react'
import styled from 'styled-components'
import { removeHyphen } from '../utils/helpers'
import { Button } from 'semantic-ui-react'

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

    > span {
      -ms-flex-preferred-size: 30%;
      flex-basis: 30%;
      -webkit-box-flex: 1;
      -ms-flex-positive: 1;
      flex-grow: 1;
      -ms-flex-negative: 1;
      flex-shrink: 1;
      margin: 0 2px;
    }
  }
`;

export default function AdditionalDetails(props) {
  const [show, setShow] = useState(false);
  const { base_experience, height, weight, abilities } = props.details;

  return (
    <ProfileStyles>
      <Button className="option-button" onClick={() => setShow(!show)}>{`${!show ? 'Profile' : 'Hide'}`}</Button>

      {show ? (
        <React.Fragment>
          <div className="pokemon-profile-row">
            <strong>Height:</strong> <span>{height} m</span>
            <strong>Weight:</strong> <span>{weight} kg</span>
          </div>

          <div className="pokemon-profile-row">
            <strong>Base exp:</strong> <span>{base_experience}</span>

            <strong>Abilities:</strong>&nbsp;
          <span className="abilities-slot">
              {abilities.map((ability) => (
                <React.Fragment>{`${removeHyphen(ability.ability.name)}`}</React.Fragment>
              ))}
            </span>
          </div>
        </React.Fragment>
      ) : ''}
    </ProfileStyles>
  )
}

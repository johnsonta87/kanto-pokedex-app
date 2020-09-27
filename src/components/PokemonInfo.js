import React from 'react'
import { Container, Image, Item, Dimmer, Loader } from 'semantic-ui-react'
import styled from 'styled-components'
import Stats from './Stats'
import Type from './Type'
import Profile from './Profile'
import Species from './Species'
import Description from './Description'

const SinglePokemonStyles = styled.div`
  position: relative;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto 25px;
    color: #fff;
    max-width: 600px;

    @media (max-width: 767px) {
      max-width: 90%;
    }

    .pokemon-name {
      margin: 0;
      font-size: 2.5rem;
      font-weight: bold;
      text-transform: capitalize;
      color: #fff;
    }

    .pokemon-id {
      margin: 0;
      color: #fff;
      font-size: 2.5rem;
      font-weight: bold;
    }
  }
`;

const InnerPokemonInfo = styled.div`
  position: relative;
  .image {
    position: relative;
    z-index: 1;
    margin: 0 auto;
    bottom: -80px;
    margin-top: -80px;
  }
`;

export default function PokemonInfo(props) {
  const {
    id,
    name,
    types,
    stats,
    species
  } = props.data;

  return (
    <SinglePokemonStyles>
      <div
        className={`poke-info-container ${types.map((type) => type.type.name + '-pokemon ').join('')}`}>
        <div className="types-bg">
          {types.map((type, i) => (
            <span key={i} className={`type-bg ${type.type.name}-bg`}></span>
          ))}
        </div>
        <InnerPokemonInfo>
          {!props.species ? <Dimmer active inverted><Loader inverted>Loading</Loader></Dimmer> : (
            <React.Fragment>
              <Item.Header>
                <h2 className="pokemon-name">{name}</h2>
                <h4 className="pokemon-id">{`#${id}`}</h4>
              </Item.Header>
              {id ? (<Image src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`} size='medium' centered alt={name} />) : ''}

              <span className="above-poke-tabs"></span>
              <div className="pokemon-tabs-wrapper">
                <Container>
                  <div className="pokemon-tabs">
                    <Type types={types} />

                    <Description species={props.species} />
                    <Profile details={props.data} species={props.species} />
                    <Stats stats={stats} />

                    <Species species={species} />
                  </div>
                </Container>
              </div>
            </React.Fragment>
          )}
        </InnerPokemonInfo>
      </div>


    </SinglePokemonStyles>
  )
}

import React from 'react'
import styled from 'styled-components'

const DescriptionStyles = styled.div`
  margin-bottom: 25px;

  .description-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;

      h4 {
        margin: 0;
        color: #fff;
        padding: 4px 6px;
      }

    .genus {
      font-size: 1.5rem;
      font-weight: bold;
      margin: 0;
    }

    .isBaby {
      background-color: #7B68EE;
    }
    .isLegendary {
      background: linear-gradient(90deg, #DC143C, #F08080 70%);
    }
    .isMythical {
      background: linear-gradient(90deg, #7B68EE, #8A2BE2 70%);
    }
  }
`;

export default function Profile(props) {
  const {
    genera,
    flavor_text_entries,
    is_baby,
    is_legendary,
    is_mythical,
  } = props.species;

  return (
    <DescriptionStyles>
      <div className="description-header">
        {genera && genera.filter((item) => (
          item.language.name === 'en'
        )).map((genus, i) => (
          <p className="genus" key={i}>{genus.genus}</p>
        ))}

        {is_baby ? <h4 className="isBaby">Baby</h4> : ''}
        {is_legendary ? <h4 className="isLegendary">Legendary</h4> : ''}
        {is_mythical ? <h4 className="isMythical">Mythical</h4> : ''}
      </div>

      {flavor_text_entries && flavor_text_entries.filter((item) => (
        item.version.name === 'diamond'
      )).map((flavor_text, i) => (
        <p key={i}>{flavor_text.flavor_text}</p>
      ))}
    </DescriptionStyles>
  )
}

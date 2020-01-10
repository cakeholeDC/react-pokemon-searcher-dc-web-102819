import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {
  render() {
    return (
      <Card.Group itemsPerRow={6}>
        {this.props.pokemon.map((creature, index) => <PokemonCard key={creature.name} data={creature} index={index+1} />)}
      </Card.Group>
    )
  }
}

export default PokemonCollection


//.filter(p => p.name.includes(this.state.searchTerm))
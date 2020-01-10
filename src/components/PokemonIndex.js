import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {
  constructor(){
    super()
    this.state = {
      collection: [],
      search: ''
    }
  }

  componentDidMount(){
    fetch('http://localhost:3000/pokemon')
      .then(response => response.json())
      .then(pokemon => this.setState({collection: pokemon}))
  }


  handleSearch = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleFormState = (obj) => {
    this.setState({
      collection: [...this.state.collection, obj]
    })
  }

  fileredCollection = () => {
    console.log(this.state.collection.length)
    return this.state.collection.filter(creature => creature.name.includes(this.state.search)).sort((a,b) => a.id > b.id ? 1 : -1)
  }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm onSubmit={this.handleFormState}/>
        <br />
        <Search onChange={this.handleSearch} />
        <br />
        <PokemonCollection pokemon={this.fileredCollection()}/>
      </Container>
    )
  }
}

export default PokemonPage

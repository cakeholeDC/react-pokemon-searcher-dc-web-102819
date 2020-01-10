import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  constructor() {
    super()

    this.state = {
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''
    }
  }

  handleFormChanges = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.target.reset()
    const {name, hp, frontUrl, backUrl} = event.target

    this.props.onSubmit({
      name: name.value,
      stats: [{
        name: 'hp',
        value: hp.value
      }],
      sprites: {
        "front": frontUrl.value,
        "back": backUrl.value
      },
      abilities: [],
      moves: []
    })
  }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={this.handleFormChanges}/>
            <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={this.handleFormChanges}/>
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" onChange={this.handleFormChanges}/>
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" onChange={this.handleFormChanges}/>
          </Form.Group>
          <Form.Button style={{backgroundColor: '#2D999F', color: '#000000'}}>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm

import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  constructor(){
    super()
    this.state = {
      spriteVers: 'front'
    }
  }

  findStatHP(stats){
    return (
      <React.Fragment>
        <i className="icon heartbeat red" />
        {stats.filter(stat => stat.name === "hp")[0].value} hp
      </React.Fragment>
    )
  }

  handleClick = () => {
    let imgType = this.state.spriteVers === 'front' ? "back" : "front"
    
    this.setState({
      spriteVers: imgType
    })  
  }

  render() {
    const {name, sprites, stats, abilities, moves} = this.props.data
    return (
      <Card
        style={{backgroundColor: '#D8D8C2'}}
        onClick={this.handleClick}
        image={ this.state.spriteVers === 'front' ? sprites.front : sprites.back }
        header={name}
        extra={`${abilities.length} Abilities / ${moves.length} Moves`}
        meta={this.findStatHP(stats)}
      />
    )
  }
}

export default PokemonCard






/*
        
<Card>
        <div>
          <div className="image">
            <img alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">POKEMON NAME HERE</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              POKEMON HP HERE hp
            </span>
          </div>
        </div>
      </Card>




              extra={<span>
                <i className="icon heartbeat red" />
                {stats[-1].value} hp
              </span>}
*/
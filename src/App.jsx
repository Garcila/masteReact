import React, {Component} from 'react';

import Row from './row.jsx'
import ColorSelect from './color.jsx'
import Title from './title.jsx'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      color: '',
    };
  }

  render() {
    return (
      <div className='flex'>
        <Row color={this.state.color}/>
        <ColorSelect
          onPickBrushColor={event => {this.setState({color: event.target.value})}}
          palette={this.props.palette}
        />
        {console.log(this.state.color)}
        <Title
          palette={this.props.palette}
        />
      </div>
    );
  }
}
export default App;

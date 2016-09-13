import React, {Component} from 'react';

class Title extends Component {
  render() {
    var result = [];
    const letters = 'MASTERMIND'.split('');
    const palette = this.props.palette;
    for (var i = 0; i < letters.length; i++) {
      result.push(<div style={{backgroundColor : (palette[i]) }} key={i}>{letters[i]}</div>);
  }
    return (
      <div className='col3'>
        <div className='title'>
          {result}
        </div>
      </div>
    );
  }
}

export default Title;

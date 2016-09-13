import React, {Component} from 'react';

class Row extends Component {
  render() {
    var colorInBrush =this.props.color;

    var clickPainter = function(e) {
      e.target.style.backgroundColor = colorInBrush
    }

    var guesses = [];
    for (var i = 0; i < 4; i++) {
      guesses.push(<div
        onClick={clickPainter}
        className='circle' key={i}>
      </div>)
    }
    var results = [];
    for (var i = 0; i < 4; i++) {
      results.push(<div className='result-mini' key={i}></div>)
    }

    var rows = [];
    var numberOfRows = 12;
    for (var i = 0; i < numberOfRows; i++) {
      var row = (
        <div className='row' key={i}>
          <div className='guess'>
            {guesses}
          </div>
          <div className='evaluate' style={{display:'none'}}>
            <input type='checkbox' className='check-evaluate'></input>
          </div>
          <div className='result'>
            {results}
          </div>
        </div>
      );
      rows.push(row);
    }

    return (
      <div className='col1'>
        {rows}
      </div>
    );
  }
}
export default Row;

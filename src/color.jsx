import React, {Component} from 'react';

class ColorSelect extends Component {

  render() {
  var colorCircles =
    (<form  onClick={(color) => this.props.onPickBrushColor(color)} >
      {this.props.palette.map(function(color){
        return <button   type='button' className='circle' key={color} value={color}
          style={{backgroundColor : color}}></button>;
      })}
    </form>);

    return (
      <div className='col2'>
        {colorCircles}
      </div>
    );
  }
}
export default ColorSelect;

import React from 'react';
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'

class PriceSlider extends React.Component {
  constructor(props, context) {
 super(props, context)
 this.state = {
   volume: 0
 }
 this.onPriceRangeSubmit = this.onPriceRangeSubmit.bind(this);
}

handleOnChange = (value) => {
 this.setState({
   volume: value
 })
}
onPriceRangeSubmit(){
  console.log(this.state.volume);
}

render() {
 let { volume } = this.state
 return (
   <div className="jumbotron">
   <h1> Select Price Range </h1>
    <Slider value={volume} min={300} max={3000} step={50} orientation="horizontal" onChange={this.handleOnChange} />
    <p>
        <button className="btn btn-lg btn-success" href="#" role="button" onClick={this.onPriceRangeSubmit}>Button</button>
    </p>
   </div>
 )
}
}
export default PriceSlider;

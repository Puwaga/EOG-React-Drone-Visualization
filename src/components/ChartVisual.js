import React, { Component } from 'react';
import Plot from 'react-plotly.js';
 
class ChartVisual extends Component {
 
  render() {
    return (
      <Plot
        data={[
          {
            x: this.props.data.temptime,
            y: this.props.data.metric,
            mode: 'lines',
            type: 'scatter',
          },
         
        ]}
        layout={ {width: 500, height: 300, title: 'Drone Temperature'} }
      />
    );
  }
}
 
export default ChartVisual;
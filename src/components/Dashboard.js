/***
 * AUTHOR EDISON NKEMANDE
 */


import React, { Component } from 'react'
import { connect } from "react-redux";
import * as actions from "../store/actions";
import MapVisual from "./MapVisual";
import ChartVisual from "./ChartVisual";
import '../style/customeMap.css'


class Dashboard extends Component {
    
    componentDidMount() {
        this.props.onLoad();
    }

    render() {
        const {latitude,longitude,convertedTimestamp } = this.props;
     
        return (
         <div>
           <div className="Dashboard-Visualization">
             <ul>
               <li><strong>Latitude : </strong> <span>{latitude}</span></li>
               <li><strong>Longitude : </strong> <span>{longitude}</span></li>
               <li><strong>Last Received : </strong> <span>{convertedTimestamp}</span></li>
               <li></li>
             </ul>
             
           </div>
           <div className="Graph-Visualization">
             <ChartVisual data={this.props}/>
           </div>
           <MapVisual latitude={latitude} longitude={longitude}/>
         </div>
        )
    }
}

const mapState = (state,ownProp) => {
    const {loading,latitude,longitude,timestamp,temperature,convertedTimestamp,data,temptime,metric} = state.drone;
    // console.log(state.drone);
    return {
      loading,
      timestamp,
      latitude,
      longitude,
      temperature,
      convertedTimestamp,
      data,
      temptime,
      metric
    };
};

const mapDispatch = dispatch => ({
    onLoad: () =>
      dispatch({
        type: actions.FETCH_DRONE
      })
});

export default connect(mapState,mapDispatch)(Dashboard);

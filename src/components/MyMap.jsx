import React, { Component } from "react";
import {Map, GeoJSON} from "react-leaflet";
import india_states from "../data/india_states.json";
import "leaflet/dist/leaflet.css";
import "./MyMap.css";

// var STATE = JSON.parse(india_states);

class MyMap extends Component {

  // state = {};

  stateStyle = {
      fillColor : "white",          
      fillOpacity: 1,
      color:"black",        //Strokes
      weight: 2,        //strokeWidth
  };

  changeStateColor = (event) => {
    event.target.setStyle({
        fillColor: "red",
    });
}

    // hoverState = (event) =>
    // {
    //         // event.target.bindPopup(india_states.properties.);
    //         // console.log(india_states.properties);
    //         event.target.setStyle({
    //           // fillColor: "green",
    //         })
    // }

  onEachState = (state, layer) => {
      const state_name= state.properties.ST_NM;
    //   console.log(state_name);
    // layer.bindPopup(state_name);
    layer.bindTooltip(state_name);
    

    layer.on({
      click : this.changeStateColor,
      // mouseover : this.hoverState,
        })
    };


  render() {
    return (
      <div>
        <Map style={{height:'100vh'}} zoom={4.5} center={[25, 90]}>
            <GeoJSON style={this.stateStyle} data={india_states.features} onEachFeature={this.onEachState}/>
        </Map>
      </div>
    );
  }
}

export default MyMap;

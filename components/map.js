import React, { useState } from "react";
import Map, {Marker, GeolocateControl } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';


export default function map(props) {
  const {data} = props

  //initial viewport for the map 
  const [viewport, setViewport] = useState({
    latitude: 25.191309256311968,
    longitude: 55.304633997680156,
    width: "100vw",
    height: "100vh",
    zoom: 10,
    pitch: 45
  });


  return (
    <Map
    initialViewState={viewport}
     
      onViewportChange={viewport => {
        setViewport(viewport);
      }}
      style={{width: "78vw" , height: "60vh", margin:"2% 0%", overflow:"hidden"}}
      mapStyle="mapbox://styles/mahir890/cl1v8ie5p000v14nujcckxn5i"
      mapboxAccessToken='pk.eyJ1IjoibWFoaXI4OTAiLCJhIjoiY2wxcnJwZGQ1MGgzMDNjcGExaTlzeXJhaiJ9.T9UNMgUmU1t1gDvWEwzLig'
      attributionControl={false}
    >
      <GeolocateControl />
      {data && data.map((x,i)=>{ 
        return(
          <Marker latitude={x.latitude} longitude={x.longitude} key={i} anchor="bottom" >
              <img width={15} src={"/../MAP-marker.svg"} /> <p className="text-white">{x.title}</p>
          </Marker>
          )})}
    </Map>
  );
}
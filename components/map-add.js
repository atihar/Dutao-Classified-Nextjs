import React, { useState } from 'react'
import Map, {Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';


export default function map() {
  const [x, setX] = useState('')

  const onMarkerDragEnd = (e) => {
    
  };

  return (
  <Map
    initialViewState={{
    latitude: 25.191309256311968,
    longitude: 55.304633997680156,
    zoom: 10,
    }}
    style={{width: "40vw" , height: "60vh", margin:"2% 0%", overflow:"hidden"}}
    mapStyle="mapbox://styles/mapbox/streets-v9"
    mapboxAccessToken='pk.eyJ1IjoibWFoaXI4OTAiLCJhIjoiY2wxcnJwZGQ1MGgzMDNjcGExaTlzeXJhaiJ9.T9UNMgUmU1t1gDvWEwzLig'
  >
    <Marker latitude={25.191309256311968} longitude={55.304633997680156} anchor="bottom" draggable={true} onDragEnd={onMarkerDragEnd} >
    <img width={15} src={"/../MAP-marker.svg"} />
    </Marker>
  </Map>
  );
}
import 'mapbox-gl/dist/mapbox-gl.css';
import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css'
import React, { useState, useRef, useCallback } from 'react'
import Map, { Marker, GeolocateControl } from 'react-map-gl'
import Geocoder from 'react-map-gl-geocoder'



const Example = () => {
    const [viewport, setViewport] = useState({
      latitude: 37.7577,
      longitude: -122.4376,
      zoom: 8,
    });
    const geocoderContainerRef = useRef();
    const mapRef = useRef();
    const handleViewportChange = useCallback(
      (newViewport) => setViewport(newViewport),
      []
    );

  // //initial viewport for the map 
  // const [viewport, setViewport] = useState({
  //   latitude: 25.191309256311968,
  //   longitude: 55.304633997680156,
  //   zoom: 10,
  //   pitch: 45
  // });


  return (
    <Map initialViewState={viewport} 
          onViewportChange={viewport => {
                setViewport(viewport);
        }}
      style={{maxWidth:"1200px", width: "100vw" , height: "30vh", margin:"2% 0%", overflow:"hidden"}}
      mapStyle="mapbox://styles/mahir890/cl1v8ie5p000v14nujcckxn5i"
      mapboxAccessToken='pk.eyJ1IjoibWFoaXI4OTAiLCJhIjoiY2wxcnJwZGQ1MGgzMDNjcGExaTlzeXJhaiJ9.T9UNMgUmU1t1gDvWEwzLig'
      attributionControl={false}
    >
      <div
        ref={geocoderContainerRef}
        style={{ position: "absolute", top: 20, left: 20, zIndex: 1 }}
      />
      <GeolocateControl />
      <Geocoder
          mapRef={mapRef}
          containerRef={geocoderContainerRef}
          onViewportChange={handleViewportChange}
          mapboxApiAccessToken='pk.eyJ1IjoibWFoaXI4OTAiLCJhIjoiY2wxcnJwZGQ1MGgzMDNjcGExaTlzeXJhaiJ9.T9UNMgUmU1t1gDvWEwzLig'
          position="top-left"
        />
      {/* {data && data.map((x,i)=>{ 
        return(
          <Marker latitude={x.latitude} longitude={x.longitude} key={i} anchor="bottom" >
              <img width={15} src={"/../MAP-marker.svg"} /> <p className="text-white">{x.title}</p>
          </Marker>
          )})} */}
    </Map>
  );
}

export default Example
// import ReactMapGL from 'react-map-gl';
import { Marker } from 'react-map-gl'; 
import dynamic from 'next/dynamic'
import {useState} from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
 
let  ReactMapGL = dynamic(() => import('react-map-gl'), {
   ssr: false
 }); 

export default function LocationView({mapCoordinates}){

const [viewport, setViewport] = useState({
   width: 400,
   height: 600,
   latitude: mapCoordinates.latitude,
   longitude: mapCoordinates.longitude,
   zoom: 13
 }); 

return (
        <ReactMapGL    
            mapboxAccessToken='pk.eyJ1IjoiaWJyYWhpbWZhemlsIiwiYSI6ImNsMTM3bmF3bzBhZjgzY3F1dWthZTUyazgifQ.-Dyq2Q4DFc3MTarWgdPYog'
            mapStyle="mapbox://styles/mapbox/streets-v11" 
                          
            initialViewState={{
            latitude: mapCoordinates.latitude,
            longitude: mapCoordinates.longitude,
            zoom: 15
            }}  
                           
            //   {...viewport}   
            //   onMove={ onViewPortChange}
                style={{marginBottom:'10px', width:600,height:400}}>
                    <Marker 
                        latitude={mapCoordinates.latitude}
                        longitude={mapCoordinates.longitude}
                        color="red" 
                        /> 
        </ReactMapGL>  )
}
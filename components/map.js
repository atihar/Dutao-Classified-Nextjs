//https://www.geeksforgeeks.org/how-to-create-a-location-finder-app-using-reactjs/
//objectives : finding a users location on load and reverse geocoding to find the place name
// then make query based on the place name in the database with its proximity while keeping the accuracy high

import 'mapbox-gl/dist/mapbox-gl.css';
import React, { useState, useEffect, useCallback } from 'react'
import Map, { Marker, GeolocateControl } from 'react-map-gl'
import axios from 'axios'
import useTranslation from 'next-translate/useTranslation'

export default function Example(props){
    const [cityName, setCityName] = useState('detecting ....');
    const [viewState, setViewState] = useState({
      longitude: 4.895168,
      latitude: 52.370216,
      zoom: 12,
  })
  const [lat, setLat] = useState('');
  const [lng, setLng] = useState('');
  const { t, lang } = useTranslation('common')
    // console.log(viewState);

    useEffect(()=>{
      navigator.geolocation.getCurrentPosition((satelite) => {
        setViewState({
          ...viewState,
          latitude: satelite.coords.latitude,
          longitude: satelite.coords.longitude
        });
        setLat(satelite.coords.latitude)
        setLng(satelite.coords.longitude)
        // console.log(satelite.coords)

      });

      axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${lng},${lat}.json?access_token=pk.eyJ1IjoibWFoaXI4OTAiLCJhIjoiY2wxcnJwZGQ1MGgzMDNjcGExaTlzeXJhaiJ9.T9UNMgUmU1t1gDvWEwzLig`)
      .then((res) => {
       setCityName('');
       if(res.data.features.length > 0){
          const cityN = res.data.features[1].text
          setCityName(cityN)
          props.passData(cityN);
       }
      });
    }, [cityName]);


  return (
    <>
    {/* <p className='text-base'>Location: {cityName} </p> */}
    <Map {...viewState}
      // onMove={(evt) => setViewState(evt.viewState)}
      style={{maxWidth:"1200px", width: "100%" , height: "30vh", margin:"2% 0%", overflow:"hidden"}}
      mapStyle="mapbox://styles/mahir890/cl2fzigrh002e14mrs18gfxr1"
      mapboxAccessToken='pk.eyJ1IjoibWFoaXI4OTAiLCJhIjoiY2wxcnJwZGQ1MGgzMDNjcGExaTlzeXJhaiJ9.T9UNMgUmU1t1gDvWEwzLig'
      attributionControl={false}
    >
      <GeolocateControl/>
        <Marker {...viewState} anchor="bottom">
            <div className='flex-column'>
              <img className='' width={20} src={"map-marker.svg"} /> 
              <p className="font-bold absolute whitespace-nowrap ml-[-25px]">{t('youRHere')}</p>
            </div>           
        </Marker>
    </Map>
    </>
  );
}

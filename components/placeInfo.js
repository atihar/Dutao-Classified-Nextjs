import Map from 'react-map-gl';

function placeInfo() {
  return (

    
      <section className='overflow-hidden max-w-screen-xl m-auto text-gray-700'>
          <Map
            initialViewState={{
              longitude: -122.4,
              latitude: 37.8,
              zoom: 14
            }}
            style={{width: 600, height: 400}}
            mapStyle="mapbox://styles/mapbox/streets-v9"
    />
        <div> 
            <h4 className='text-red-600 text-base bg-red-100 px-10 rounded-2xl '>Banks</h4>   
         </div>
    </section>
    

  )
}

export default placeInfo

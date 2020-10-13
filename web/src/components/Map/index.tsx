import React from 'react'
import { Map, TileLayer } from 'react-leaflet'

const MapComponent: React.FC = () => {
  return (
    <Map
      center={[-25.392428, -51.462465]}
      zoom={14.46}
      style={{
        width: '100%',
        height: '100%'
      }}
    >
      {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
      <TileLayer
        url={
          'https://api.mapbox.com/styles/v1/mapbox/satellite-v9/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoicGVkcmluaG9sZW1lcyIsImEiOiJja2c4NTVxN3kwYTFoMnJtaGh4a3loOW1sIn0.iCydWK3jdoMI6ouENn0SDw'
        }
      />
    </Map>
  )
}

export default MapComponent

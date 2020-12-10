import { useState} from 'react'
import GoogleMapReact from 'google-map-react';
import LocationMarker from './LocationMarker';
import fireIcon from '@iconify/icons-mdi/fire-alert';
import mountainIcon from '@iconify/icons-mdi/mountain';
import windIcon from '@iconify/icons-mdi/weather-windy';
import LocationInfoBox from './LocationInfoBox';

const Map = ({eventData, center, zoom }) => {
    const [locationInfo, setLocationInfo] = useState(null)
    console.log('locationinfo', locationInfo)

    const markers = eventData.map( ev => {
        if(ev.categories[0].id === 8){
            if(ev.geometries[0].coordinates[1] !== undefined && ev.geometries[0].coordinates[0] !== undefined){
                console.log('lat', ev.geometries[0].coordinates[1])
                return <LocationMarker 
                icon={fireIcon} 
                lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]} 
                onClick={ () => setLocationInfo({id: ev.id, title: ev.title})} />
            }
        }
        if(ev.categories[0].id === 12){
            if(ev.geometries[0].coordinates[1] !== undefined && ev.geometries[0].coordinates[0] !== undefined){
                console.log('lat', ev.geometries[0].coordinates[1])
                return <LocationMarker icon={mountainIcon} lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]}
                onClick={ () => setLocationInfo({id: ev.id, title: ev.title})}
                />
            }
            
        }
        if(ev.categories[0].id === 10){
            if(ev.geometries[0].coordinates[1] !== undefined && ev.geometries[0].coordinates[0] !== undefined){
                console.log('lat', ev.geometries[0].coordinates[1])
                return <LocationMarker icon={windIcon} lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]}
                onClick={ () => setLocationInfo({id: ev.id, title: ev.title})}
                />
            }
        }
        return null
    })
    return (
        <div className="map">
            <GoogleMapReact
                bootsrapURLKeys={{ key: 'AIzaSyAjeruCkwVxaVFlRcSWENhWpJjFWXSh5IE' }}
                defaultCenter={ center }
                defaultZoom={ zoom }
            >

            {markers}
               {/* <LocationMarker lat={center.lat} lng={center.lng} /> */}
            </GoogleMapReact>
            { locationInfo && <LocationInfoBox info={locationInfo} />}
        </div>
    )
}

Map.defaultProps = {
    center: {
        lat: 43.227450629,
        lng: -124.19652481
    },
    zoom: 6
}

export default Map

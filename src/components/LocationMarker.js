import {Icon} from '@iconify/react';



const LocationMarker = ( { lat, lng, onClick, icon,  }) => {
    return (
        <div className="location-marker" onClick={onclick}> 
            <Icon icon={icon} className="location-icon" />
        </div>
    )
}

export default LocationMarker

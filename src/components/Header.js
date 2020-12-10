import React from 'react'
import fireIcon from '@iconify/icons-mdi/fire-alert';
import mountainIcon from '@iconify/icons-mdi/mountain';
import windIcon from '@iconify/icons-mdi/weather-windy';
import {Icon} from '@iconify/react';

const Header = () => {
    return (
        <header className="header">
            <div className="header__icons">
            <h3>Natural Disaster Tracker (Powered By NASA)</h3>
                <div className="header__icon2">
                    <Icon icon={fireIcon} className="location-icon2" />
                    <span>- Wildfire</span> 
                    <Icon icon={windIcon} className="location-icon2" />
                    <span>- Storm</span> 
                    <Icon icon={mountainIcon} className="location-icon2" />
                    <span>- Volcano</span>
                </div>
            </div>
            
        </header>
    )
}

export default Header

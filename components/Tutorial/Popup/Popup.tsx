import React from 'react'
import stylex from './popup.module.scss'

interface PopupProps {
    isOpen: boolean
    togglePopup(): void
}

export default function Popup(props: PopupProps) {
    const popupStyle = {
        opacity: props.isOpen ? 1 : 0,
        zIndex: props.isOpen ? 200000 : -1,
        //Visibility: props.isOpen ? 'visible' : 'hidden'
    }
    return (
        <div className={stylex.popup} style={popupStyle} onClick={props.togglePopup}>
            <div className={stylex.contentPopup} style={popupStyle}>
                <iframe key={Math.random()} style={popupStyle} src={props.isOpen ? "https://www.youtube.com/embed/gCfs0tuc0ho" : "#"} frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
        </div>
    )
}
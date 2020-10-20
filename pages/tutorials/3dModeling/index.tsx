import React, { useState } from 'react'
import Footer from '../../../components/Footer/Footer'
import Tutorial from '../../../components/Tutorial/Tutorial'
import style from "../../../components/Artwork/artwork.module.scss"
import Popup from '../../../components/Tutorial/Popup/Popup'

interface IndexProps {
    menuOpen: boolean

    toggleMenu(): void

    closeMenu(): void
}

export default function Index(props: IndexProps) {
    const [isPopupOpen, setIsPopupOpen] = useState(false)

    const togglePopup = (): void => {
        setIsPopupOpen(prev => !prev)
    }

    return (
        <div className={props.menuOpen ? `${style.main} blur` : `${style.main}`} onClick={props.closeMenu}>
            <Tutorial title="3D Modeling" link="3dModeling" isGlobalStore={false} togglePopup={togglePopup} />
            <Popup isOpen={isPopupOpen} togglePopup={togglePopup} />
            <Footer />
        </div>
    )
}


import React from 'react'
import Store from "../../../components/Store/Store";
import Footer from "../../../components/Footer/Footer";
import style from "../../../components/Artwork/artwork.module.scss"

interface IndexProps {
    menuOpen: boolean

    toggleMenu(): void

    closeMenu(): void
}

export default function Index(props: IndexProps) {
    return (
        <>
            <div className={props.menuOpen ? `${style.main} blur` : `${style.main}`} onClick={props.closeMenu}>
                <Store title="3D Materials" link="3dMaterials" isGlobalStore={false} />
            </div>
            <Footer />
        </>
    )
}

import React from 'react'
import Footer from "../../components/Footer/Footer";
import Store from "../../components/Store/Store";
import style from "../../components/Artwork/artwork.module.scss"

interface StoreProps {
    menuOpen: boolean

    toggleMenu(): void

    closeMenu(): void
}

export default function Index(props: StoreProps) {
    return (
        <div className={props.menuOpen ? `${style.main} blur` : `${style.main}`} onClick={props.closeMenu}>
            <Store title="Illustrations" link="illustrations" isGlobalStore={true} />
            <Store title="3D Models" link="3dModels" isGlobalStore={true} />
            <Store title="3D Materials" link="3dMaterials" isGlobalStore={true} />
            <Footer />
        </div>
    )
}

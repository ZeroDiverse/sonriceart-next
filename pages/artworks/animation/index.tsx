import React from 'react'
import Artwork from '../../../components/Artwork/Artwork'
import style from '../../../components/Artwork/artwork.module.scss'
import Footer from '../../../components/Footer/Footer'

interface ArtworkProps {
    menuOpen: boolean

    toggleMenu(): void

    closeMenu(): void
}

export default function Animation(props: ArtworkProps) {
    return (
        <>
            <main className={props.menuOpen ? `${style.main} blur` : `${style.main}`} onClick={props.closeMenu}>
                <Artwork title="Animation" />
            </main>
            <Footer />
        </>
    )
}

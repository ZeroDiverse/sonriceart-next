import React from 'react'
import Artwork from '../../../components/Artwork/Artwork'
import Footer from '../../../components/Footer/Footer'
import style from '../../../components/Artwork/artwork.module.scss'

interface ArtworkProps {
    menuOpen: boolean

    toggleMenu(): void

    closeMenu(): void
}

export default function Illustration(props: ArtworkProps) {
    return (
        <>
            <main className={props.menuOpen ? `${style.main} blur` : `${style.main}`} onClick={props.closeMenu}>
                <Artwork title="Illustration - Concept" />
            </main>
            <Footer />
        </>
    )
}

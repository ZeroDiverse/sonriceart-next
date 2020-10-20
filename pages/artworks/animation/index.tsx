import React from 'react'
import Artwork from '../../../components/Artwork/Artwork'

interface ArtworkProps {
    menuOpen: boolean

    toggleMenu(): void

    closeMenu(): void
}

export default function Animation(props: ArtworkProps) {
    return (
        <Artwork title="Animation" menuOpen={props.menuOpen} toggleMenu={props.toggleMenu} closeMenu={props.closeMenu}/>
    )
}

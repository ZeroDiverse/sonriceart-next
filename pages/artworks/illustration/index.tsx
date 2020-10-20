import React from 'react'
import Artwork from '../../../components/Artwork/Artwork'

interface ArtworkProps {
    menuOpen: boolean

    toggleMenu(): void

    closeMenu(): void
}

export default function Illustration(props: ArtworkProps) {
    return (
        <Artwork title="Illustration - Concept" menuOpen={props.menuOpen} toggleMenu={props.toggleMenu}
                 closeMenu={props.closeMenu}/>
    )
}

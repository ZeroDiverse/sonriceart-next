import React from 'react'
import Artwork from '../../../components/Artwork/Artwork'

interface ArtworkProps {
    menuOpen: boolean
    toggleMenu(): void
    closeMenu(): void
}

export default function _3DModeling(props: ArtworkProps) {
    return (
        <Artwork title="3D Modeling" menuOpen={props.menuOpen} toggleMenu={props.toggleMenu} closeMenu={props.closeMenu} />
    )
}

import React from 'react'
import style from './artworks.module.scss'
import Slider from "../../components/Slider/Slider";

interface ArtworkProps {
    menuOpen: boolean
    toggleMenu(): void
    closeMenu(): void
}

export default function Artwork(props: ArtworkProps) {
    const images = [
        "/images/2.webp",
        "/images/CAT.webp",
        "/images/cafe_final.webp"
    ]

    const titles = [
        "AR ILLUSTRATION BOOK - THÁNH GIÓNG (SAINT GIONG)",
        "MY CAT",
        "CUXA COFFEE"
    ]

    return (
        <main className={ props.menuOpen ? `${style.main} blur` : `${style.main}`} onClick={props.closeMenu}>
            <Slider images={images} titles={titles}/>
        </main>
    )
}

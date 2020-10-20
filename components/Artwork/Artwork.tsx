import React from 'react'
import style from './artwork.module.scss'
import Footer from "../../components/Footer/Footer";

interface ArtworkProps {
    title: String,
    menuOpen: boolean
    toggleMenu(): void
    closeMenu(): void
}

export default function Artwork(props: ArtworkProps) {
    return (
        <>
            <main className={props.menuOpen ? `${style.main} blur` : `${style.main}`} onClick={props.closeMenu}>
                <h1>{props.title}</h1>
                <div className={style.contentMain}>
                    <div className={style.gridItems}>
                        <div className={style.gridItem}>
                            <div className="backgroundLayer" />
                            <img src="/images/2.webp" alt="project bg" />
                            <div className={style.description}>
                                <p>Test</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}

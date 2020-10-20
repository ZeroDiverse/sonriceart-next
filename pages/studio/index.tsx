import React from 'react'
import Footer from "../../components/Footer/Footer"
import style from "./studio.module.scss"

interface StudioProps {
    menuOpen: boolean
    toggleMenu(): void
    closeMenu(): void
}

export default function Studio(props: StudioProps) {
    return (
        <>
            <main className={props.menuOpen ? `${style.main} blur` : `${style.main}`} onClick={props.closeMenu}>
                <div>
                    <div className={style.lonta}>
                        <h1>RAW STUDIO</h1>
                        <img className={style.lontaImage} src={require("../../public/images/LONTA.webp")} alt="LONTA" />
                    </div>
                    <div className={style.about}>
                        <h1>ABOUT</h1>
                        <img className={style.rawStudioLogo} src={require("../../public/images/RAW_STUDIO_LOGO.webp")} alt="Raw Studio Logo" />
                        <div>
                            <div className={style.description}>
                                <p>
                                    Son Rice is Co-Founder and Creative Director who is currently
                                    working at the creative agency RAW Studio based in Hanoi, Vietnam.
                                    RAW Studio is a creative animation studio which designs and delivers
                                    3D and 2D Animation - Motion graphic and VFX for Films, Television
                                    Commercials, Games, Events,...
                                </p>
                                <p>
                                    The first RAW project is LONTA | THE YEAR OF PIG 2019 which was
                                    successfully funded on Saigoneer in Feb,2019 and exhibited in
                                    Halography 2019.

                                </p>
                            </div>
                            <div className={`flex justify-content-center ${style.flex} ${style.justifyContentCenter}`}>
                                <a href="https://www.facebook.com/Rawstudio.RAW" target="_blank">
                                    <button className="btn btn-primary">VIEW MORE</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}


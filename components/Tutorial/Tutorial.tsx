import Link from 'next/link'
import React from 'react'
import style from '../Artwork/artwork.module.scss'
import style1 from '../Store/store.module.scss'
import style2 from './tutorial.module.scss'

interface TutorialProps {
    title: String
    isGlobalStore: boolean
    togglePopup(): void
    link: String
}

export default function Tutorial(props: TutorialProps) {
    const displayNone = {
        display: "none"
    }

    return (
        <>
            <h1 className={props.isGlobalStore ? `${style.title}` : ''}>{props.title}</h1>
            {props.isGlobalStore &&
                <p className={style1.showMore}><Link href={`/tutorials/${props.link}`}><a>Show more</a></Link></p>
            }
            <div className={style.contentMain}>
                <div className={style.gridItems}>
                    <div className={`${style.gridItem} ${style2.mainItem}`} onClick={props.togglePopup}>
                        <div className={style.backgroundLayer} />
                        <img src="/images/2.webp" alt="project bg" />
                        <div className={style2.description}>
                            <a href="/images/2.webp" style={displayNone}></a>
                            <p>test</p>
                            <button className={`btn btn-primary ${style2.btnPrimary}`}>0:00</button>
                        </div>
                    </div>
                    <div className={`${style.gridItem}`} onClick={props.togglePopup}>
                        <div className={style.backgroundLayer} />
                        <img src="/images/2.webp" alt="project bg" />
                        <div className={style2.description}>
                            <a href="/images/2.webp" style={displayNone}></a>
                            <p>test</p>
                            <button className={`btn btn-primary ${style2.btnPrimary}`}>0:00</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
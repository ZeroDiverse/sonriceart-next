import Link from 'next/link'
import React from 'react'
import style from '../Artwork/artwork.module.scss'
import style1 from './store.module.scss'

interface StoreProps {
    title: String,
    isGlobalStore: boolean
    link: String
}

export default function Store(props: StoreProps) {
    return (
        <>
            <h1 className={props.isGlobalStore ? `${style.title}` : ''}>{props.title}</h1>
            {props.isGlobalStore &&
                <p className={style1.showMore}><Link href={`/stores/${props.link}`}><a>Show more</a></Link></p>
            }
            <div className={style.contentMain}>
                <div className={style.gridItems}>
                    <div className={style.gridItem}>
                        <div className={style.backgroundLayer} />
                        <img src="/images/2.webp" alt="project bg" />
                        <div className={style.description}>
                            <p />
                            <a href="/images/2.webp" target="_blank">
                                <button className="btn btn-primary">BUY</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

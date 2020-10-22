import React, { Key, useEffect, useState } from 'react'
import style from './artwork.module.scss'
import axiosInstance from '../../axios';

interface ArtworkProps {
    title: string
}

interface IArtwork {
    _id: string
    title: string
    coverImage: string
    album: string
    nameInCloud: string
    detail: string
    order: number
}

export default function Artwork(props: ArtworkProps) {

    const [artworks, setArtWorks] = useState<IArtwork[]>([])

    useEffect(() => {
        axiosInstance.get('/api/artworks')
            .then((data) => {
                setArtWorks(data.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <>
            <h1>{props.title}</h1>
            <div className={style.contentMain}>
                <div className={style.gridItems}>
                    {artworks.map((artwork) => {
                        if (artwork.album === props.title) {
                            return (
                                <div className={style.gridItem} key={artwork._id as Key}>
                                    <div className={style.backgroundLayer} />
                                    <img src={artwork.coverImage} alt="project bg" />
                                    <div className={style.description}>
                                        <p>{artwork.title}</p>
                                    </div>
                                </div>
                            )
                        }
                    })}
                </div>
            </div>
        </>
    )
}

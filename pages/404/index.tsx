import React from 'react'
import Link from 'next/link'
import style from './404.module.scss'

interface _404Props {
    menuOpen: boolean
    toggleMenu(): void
    closeMenu(): void
}

const _404: React.FC<_404Props> = (props: _404Props) => {
    return (
        <main onClick={props.closeMenu} className={ props.menuOpen ? `${style.main} blur` : `${style.main}`} >
            <h1>404</h1>
            <h2>
                OOPS, SORRY WE CAN'T FIND THAT PAGE!
            </h2>
            <p>
                Either something went wrong or the page doesn't exist anymore
            </p>
            <hr />
            <Link href="/"><button className="btn btn-primary">HOME PAGE</button></Link>
        </main>
    )
}

export default _404

import Link from 'next/link'
import style from './index.module.scss'
import React from "react";

interface IndexProps {
  menuOpen: boolean
  toggleMenu(): void
  closeMenu(): void
}



const Home: React.FC<IndexProps> = (props: IndexProps) => {
  return (
    <main role="main" className={props.menuOpen ? `${style.main} blur` : `${style.main}`} onClick={props.closeMenu}>
      <div className={style.backgroundLayer}></div>
      <div className={style.introduction}>
        <img src={require("../public/images/ava2.webp")} alt="main avatar" />
        <div className="intro">
          <h1 id="hello" className="cover-heading">HI WORLD, I'M SON RICE</h1>
          <p className="">I'M CREATIVE DIRECTOR AT RAWSTUDIO ALSO WORK IN ILLUSTRATION & 3D CGI</p>
          <Link href="/about/contact"><button type="button" className="btn btn-primary btn-xs">CONTACT ME</button></Link>
        </div>
      </div>
    </main>
  )
}

export default Home

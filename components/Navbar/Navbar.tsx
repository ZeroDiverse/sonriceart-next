import Link from 'next/link'
import * as React from 'react'
import Social from './Social'
import { useRouter } from 'next/router'

interface MainLayoutProps {
    menuOpen: boolean
    toggleMenu(): void
    closeMenu(): void
}


const Navbar: React.FC<MainLayoutProps> = (props: MainLayoutProps) => {
    const router = useRouter()
    const navStyleWhenMenuOpen = {
        backgroundColor: props.menuOpen ? "transparent" : "rgba(0,0,0)"
    }

    const navBrandStyleWhenMenuOpen = {
        display: props.menuOpen ? "none" : "flex"
    }

    React.useEffect(() => {
        console.log(router.pathname)
    }, [])

    return (
        <header style={navStyleWhenMenuOpen}>
            <div className="">
                <nav className="navbar" id="navbar">
                    <div className="collapse" onClick={props.toggleMenu} style={navBrandStyleWhenMenuOpen}>
                        <svg version="1.1" width="30px" height="30px" fill="#ffffff" id="Layer_1" focusable="false"
                            xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                            viewBox="0 0 448 512" xmlSpace="preserve">
                            <path
                                d="M412,132H36c-19.8,0-36-16.2-36-36v0c0-19.8,16.2-36,36-36h376c19.8,0,36,16.2,36,36v0C448,115.8,431.8,132,412,132z" />
                            <path
                                d="M412,292H36c-19.8,0-36-16.2-36-36v0c0-19.8,16.2-36,36-36h376c19.8,0,36,16.2,36,36v0C448,275.8,431.8,292,412,292z" />
                            <path
                                d="M412,452H36c-19.8,0-36-16.2-36-36v0c0-19.8,16.2-36,36-36h376c19.8,0,36,16.2,36,36v0C448,435.8,431.8,452,412,452z" />
                        </svg>
                    </div>
                    <Link href="/">
                        <a aria-label="home" id="home" style={navBrandStyleWhenMenuOpen}>
                            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" className="navbrand"
                                xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 524.4 510.2"
                                width="60px" height="60px" xmlSpace="preserve">
                                <g>
                                    <path className="st0"
                                        d="M212.5,340.2c-6.9-4-13.3-7.7-19.8-11.4c-21.1-12.2-42.2-24.4-63.3-36.5c-1.3-0.8-1.8-1.6-1.8-3.1
             c0-50.7,0-101.3,0-152c0-1.5,0.4-2.2,1.7-3c43.6-24.9,87.2-50,130.6-75.4c1.1-0.6,1.9-0.8,3.1-0.1c11.6,6.8,23.3,13.5,35,20.2
             c1.3,0.7,1.8,1.5,1.8,3c-0.1,13-0.1,26-0.2,38.9c0,1.8,0.5,2.8,2.1,3.7c18.5,10.6,37,21.3,55.5,31.9c1.4,0.8,2,1.6,2,3.3
             c0,13.3,0,26.7,0.1,40c0,1.7-0.5,2.8-1.7,3.9c-3.5,3.3-6.8,6.7-10.2,10c-1.1,1-1,1.5,0.1,2.4c3.4,3,6.9,6,10.6,8.6
             c0.8,0.6,1.2,1.2,1.2,2.3c-0.1,14.2-0.2,28.4-0.3,42.6c0,1.1-0.4,1.6-1.3,2.1c-9.8,5.5-19.6,11-29.4,16.6c-1.8,1-1.9,0.4-1.9-1.2
             c0-17.8,0-35.7,0-53.5c0-1.5-0.4-2.2-1.7-3c-7.6-4.1-15.2-8.3-23.2-12.6c0,1,0,1.8,0,2.5c0,11.6,0,23.3,0,34.9
             c0,15.5-0.1,31-0.1,46.4c0,1.4-0.5,2.2-1.7,2.8c-9.7,5.6-19.3,11.2-29,16.8c-1.9,1.1-1.9,1.1-1.9-1.2c0-34.3,0-68.6,0-102.9
             c0-41.6,0.1-83.2,0.2-124.8c0-1.4-0.6-2.1-1.7-3c-4.1-3.5-7.6-2.6-12,0c-33.8,19.8-67.7,39.3-101.7,58.8c-1.3,0.8-1.7,1.6-1.7,3
             c0,41.1,0,82.2,0,123.3c0,1.6,0.5,2.4,1.9,3.1c19.1,11,38.1,22,57.2,33c1.3,0.7,1.7,1.6,1.7,3C212.5,322.5,212.5,331.1,212.5,340.2
             z M326.4,194.1c0-5.6,0-11.3,0-17c0-1.1-0.9-1.2-1.5-1.6c-7.3-4.2-14.6-8.4-21.9-12.5c-0.4-0.3-0.8-0.8-1.6-0.5
             c0,5.6,0,11.2,0,16.9c0,1,0.4,1.5,1.3,2c7.4,4.1,14.8,8.2,22.2,12.3C325.2,193.9,325.6,194.4,326.4,194.1z" />
                                    <path className="st0" d="M195.1,176.9c7.4,4.6,14.5,9,21.7,13.5c12.5,7.7,24.9,15.5,37.4,23.2c1.1,0.7,1.5,1.4,1.5,2.7
             c0,35.5,0,71.1,0,106.6c0,3.9,0,7.8-0.1,11.8c0,1.3,0.6,1.9,1.5,2.7c2.8,2.2,5.1,1.9,8.1,0.1c34.4-20,68.9-39.9,103.4-59.7
             c1.5-0.9,2.1-1.8,2.1-3.6c-0.1-40.7-0.1-81.5,0-122.2c0-1.7-0.5-2.6-2-3.5c-18.4-10.5-36.8-21.2-55.1-31.8c-0.9-0.5-1.7-1-1.7-2.3
             c0.1-8.7,0-17.4,0-26.1c0-0.2,0.1-0.4,0.2-0.9c1.5,0.8,2.9,1.6,4.3,2.4c26.1,15.1,52.3,30.2,78.4,45.2c1.4,0.8,2,1.6,2,3.3
             c-0.1,50.1-0.1,100.2,0,150.2c0,1.5-0.4,2.4-1.8,3.2c-43.9,25.3-87.8,50.6-131.7,75.9c-1.4,0.8-2.3,0.8-3.6,0
             c-10.7-6.3-21.4-12.4-32.2-18.6c-1.1-0.7-1.6-1.4-1.5-2.7c0.1-12.6,0-25.1,0.1-37.7c0-1.5-0.4-2.3-1.7-3
             c-19.9-12.1-39.7-24.3-59.6-36.4c-1-0.6-1.7-1.2-1.7-2.6c0.1-17.1,0.2-34.2,0.3-51.4c0-0.2,0.1-0.4,0.1-0.6
             c0.7-0.3,1.1,0.3,1.5,0.6c9.6,6,19.1,12.1,28.7,18.2c1.1,0.7,1.5,1.4,1.5,2.7c-0.1,4.2,0,8.4,0,12.6c0,0.9,0,1.6,0.9,2.2
             c9.8,6,19.7,12,29.4,18c0.7-0.3,0.5-0.9,0.5-1.3c0.1-10.2,0.1-20.4,0.2-30.6c0-1.5-0.5-2.3-1.7-3c-19.8-11.9-39.2-24.4-58.4-37.2
             c-1.9-1.3-2.7-2.5-2.7-4.9c0.1-10.5,0.1-21-0.1-31.5c0-1.8,0.5-2.8,2.1-3.7c29.7-17.1,59.3-34.2,89-51.3c0.5-0.3,0.9-0.7,1.5-0.6
             c0.4,0.5,0.2,1.1,0.2,1.6c0,11.1,0,22.1,0,33.2c0,1.4-0.5,2.1-1.7,2.8c-19.1,11.1-38.1,22.3-57.2,33.4
             C196.5,176,195.9,176.4,195.1,176.9z" />
                                </g>
                                <g>
                                    <path className="st0" d="M127.7,395.6c0.1,0,0.2,0.1,0.2,0.2v8.9c0,0.1-0.1,0.2-0.2,0.2H85.4c-1.6,0-2.7,1-3.3,2.9v0.9
             c0,1.8,1.1,2.9,3.4,3.3h27.3c4.7,0,8.7,2.1,12.1,6.4c1.9,2.8,2.9,5.7,2.9,8.7v0.6c0,5.1-2.4,9.3-7.1,12.7c-2.6,1.6-5.2,2.4-7.7,2.4
             H73.2c-0.1,0-0.2-0.1-0.2-0.2v-8.9c0-0.1,0.1-0.2,0.2-0.2h39.7c2.3,0,4.1-1.3,5.4-4c0.2-0.7,0.3-1.4,0.3-2v-0.1
             c0-2.8-1.5-4.7-4.5-5.9c-0.6-0.1-1-0.2-1.3-0.2H86.5c-4,0-7.1-1.1-9.5-3.4c-2.8-2.7-4.2-5.7-4.2-8.8v-1c0-4.2,2.1-7.8,6.2-10.7
             c2.1-1.1,4.2-1.7,6.1-1.7H127.7z" />
                                    <path className="st0" d="M169.8,395.6c4.9,0,9.7,1.8,14.3,5.4c2.6,2.4,4.2,4.2,4.8,5.5c2.4,3.9,3.7,7.7,3.7,11.5v2.2
             c0,5.1-2.1,10.1-6.3,15.1c-5.1,4.9-10.5,7.3-16.4,7.3h-16.1c-4.9,0-9.8-1.9-14.6-5.8c-2.4-2.4-4.1-4.4-5-6.1c-2-3.8-3-7.4-3-10.9
             v-1.4c0-5.9,2.4-11.3,7.2-16.3c4.8-4.4,10-6.6,15.6-6.6H169.8z M169.6,433.4c4.3,0,8.1-2,11.2-6c1.7-2.6,2.6-5.3,2.6-8.2
             c0-5.4-2.6-9.6-7.7-12.8c-2.1-1-4.2-1.5-6.3-1.5h-15.2c-4.6,0-8.5,2.2-11.7,6.6c-1.4,2.4-2.1,4.8-2.1,7.2v0.9c0,4.2,1.9,7.8,5.6,11
             c2.6,1.9,5.3,2.9,8.3,2.9H169.6z" />
                                    <path className="st0"
                                        d="M205.2,395.6c23.1,21.9,35.2,33.3,36.2,34.3v-34.1c0-0.1,0.1-0.2,0.2-0.2h8.8c0.1,0,0.2,0.1,0.2,0.2v46.7
             c0,0.1-0.1,0.2-0.2,0.2h-9l-36.3-34.3v34.2c0,0.1-0.1,0.2-0.2,0.2H196c-0.1,0-0.2-0.1-0.2-0.2v-46.7c0-0.1,0.1-0.2,0.2-0.2H205.2z" />
                                    <path className="st0" d="M313.1,395.6c3.3,0,6.5,1.6,9.3,4.7c1.8,2.6,2.8,5,2.8,7.2v1.7c0,3.4-1.7,6.5-5,9.4c-2.3,1.8-5.1,2.6-8.4,2.6
             h-12.7v0.1c14.8,12.2,23.3,19.3,25.6,21.3v0.1h-14.2c-16.9-14-25.6-21.2-25.9-21.6v-8.9c0-0.1,0.1-0.2,0.2-0.2h27.2
             c1.8,0,3.1-0.7,3.8-2c0.3-0.6,0.4-1.2,0.4-1.6c0-1.6-0.9-2.8-2.7-3.4c-0.2,0-0.4-0.1-0.7-0.1h-33v37.6c0,0.1-0.1,0.2-0.2,0.2h-8.9
             c-0.1,0-0.2-0.1-0.2-0.2v-46.7c0-0.1,0.1-0.2,0.2-0.2H313.1z" />
                                    <path className="st0" d="M337.5,395.6c0.1,0,0.2,0.1,0.2,0.2v46.7c0,0.1-0.1,0.2-0.2,0.2h-8.8c-0.1,0-0.2-0.1-0.2-0.2v-46.7
             c0-0.1,0.1-0.2,0.2-0.2H337.5z" />
                                    <path className="st0" d="M395.5,395.6c0.1,0,0.2,0.1,0.2,0.2v8.9c0,0.1-0.1,0.2-0.2,0.2H364c-4.6,0-8.5,2.2-11.7,6.6
             c-1.4,2.4-2.1,4.8-2.1,7.2v0.9c0,4.2,1.9,7.8,5.6,11c2.6,1.9,5.3,2.9,8.1,2.9h31.6c0.1,0,0.2,0.1,0.2,0.2v8.9
             c0,0.1-0.1,0.2-0.2,0.2h-31.8c-5.4,0-10.4-2.1-15.2-6.2c-2.6-2.6-4.3-4.9-5.1-6.9c-1.6-3.4-2.4-6.6-2.4-9.7v-1.4
             c0-5.9,2.4-11.3,7.2-16.3c4.8-4.4,10-6.6,15.6-6.6H395.5z" />
                                    <path className="st0" d="M451.4,395.6c0.1,0,0.2,0.1,0.2,0.2v8.9c0,0.1-0.1,0.2-0.2,0.2h-52.3c-0.1,0-0.2-0.1-0.2-0.2v-8.9
             c0-0.1,0.1-0.2,0.2-0.2H451.4z M451.4,412c0.1,0,0.2,0.1,0.2,0.2v8.9c0,0.1-0.1,0.2-0.2,0.2h-52.3c-0.1,0-0.2-0.1-0.2-0.2v-8.9
             c0-0.1,0.1-0.2,0.2-0.2H451.4z M451.4,433.4c0.1,0,0.2,0.1,0.2,0.2v8.9c0,0.1-0.1,0.2-0.2,0.2h-52.3c-0.1,0-0.2-0.1-0.2-0.2v-8.9
             c0-0.1,0.1-0.2,0.2-0.2H451.4z" />
                                </g>
                            </svg>
                        </a>
                    </Link>
                    <div id={"sidenav"} className={props.menuOpen ? "sidenav sidenav-85" : "sidenav"}>
                        <ul className="sidenav" id="sidenav-nav">
                            <li className="btn-cls" onClick={props.toggleMenu}>&times;</li>
                            <li className="nav-item" data-item="artworks">
                                <div className="flex justify-content-space-between align-items-center">
                                    <Link href="/artworks"><a onClick={
                                        () => {
                                            router.push('/artworks')
                                            setTimeout(() => props.closeMenu(), 200)
                                        }
                                    } id="artworks">ARTWORKS</a></Link>
                                    <svg width="16px" height="16px" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 124.3 218.12"><defs></defs><title>NEXT - BACK - UP - DOWN</title><path className="cls-1" d="M315,252.29c.24,2.25-1,3.6-2.33,4.91q-50.75,50.73-101.49,101.44c-3.52,3.52-6.26,3.47-9.94.08-2.57-2.37-5-4.87-7.44-7.41-4.08-4.31-4-7.25.27-11.53Q235.71,298,277.46,256.3c3.23-3.21,3.28-4.88,0-8.12q-41.7-41.38-83.05-83.11c-4.89-4.91-4.87-7.54,0-12.6,12.64-13,11.7-11.72,23.08-.32q46.83,46.86,93.67,93.7C313.06,247.69,315.53,249.25,315,252.29Z" transform="translate(-190.77 -143.15)" /></svg>
                                </div>
                                <div className="sub-nav-item">
                                    <ul>
                                        <li><Link href="/artworks/illustration"><a onClick={() => {
                                            setTimeout(() => props.closeMenu(), 200)
                                        }}>Illustration - Concept</a></Link></li>
                                        <li><Link href="/artworks/3dModeling"><a onClick={() => {
                                            setTimeout(() => props.closeMenu(), 200)
                                        }}>3D Modeling</a></Link></li>
                                        <li><Link href="/artworks/animation"><a onClick={() => {
                                            setTimeout(() => props.closeMenu(), 200)
                                        }}>Animation</a></Link></li>
                                    </ul>
                                </div>
                            </li>
                            <li className="nav-item" data-item="about">
                                <div className="flex justify-content-space-between align-items-center">
                                    <Link href="/about/info"><a onClick={() => {
                                        setTimeout(() => props.closeMenu(), 200)
                                    }}>ABOUT</a></Link>
                                    <svg width="16px" height="16px" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 124.3 218.12"><defs></defs><title>NEXT - BACK - UP - DOWN</title><path className="cls-1" d="M315,252.29c.24,2.25-1,3.6-2.33,4.91q-50.75,50.73-101.49,101.44c-3.52,3.52-6.26,3.47-9.94.08-2.57-2.37-5-4.87-7.44-7.41-4.08-4.31-4-7.25.27-11.53Q235.71,298,277.46,256.3c3.23-3.21,3.28-4.88,0-8.12q-41.7-41.38-83.05-83.11c-4.89-4.91-4.87-7.54,0-12.6,12.64-13,11.7-11.72,23.08-.32q46.83,46.86,93.67,93.7C313.06,247.69,315.53,249.25,315,252.29Z" transform="translate(-190.77 -143.15)" /></svg>
                                </div>
                                <div className="sub-nav-item">
                                    <ul id="special">
                                        <li><Link href="/about/info"><a onClick={() => {
                                            setTimeout(() => props.closeMenu(), 200)
                                        }}>Info</a></Link></li><br />
                                        <li><Link href="/about/contact"><a onClick={() => {
                                            setTimeout(() => props.closeMenu(), 200)
                                        }}>Contact</a></Link></li>
                                    </ul>
                                </div>
                            </li>
                            <li className="nav-item" data-item="studio">
                                <div className="flex justify-content-space-between align-items-center">
                                    <Link href="/studio"><a onClick={() => {
                                        setTimeout(() => props.closeMenu(), 200)
                                    }}>STUDIO</a></Link>
                                </div>
                            </li>
                            <li className="nav-item" data-item="store">
                                <div className="flex justify-content-space-between align-items-center">
                                    <Link href="/stores"><a onClick={() => {
                                        setTimeout(() => props.closeMenu(), 200)
                                    }}>STORE</a></Link>
                                    <svg width="16px" height="16px" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 124.3 218.12"><defs></defs><title>NEXT - BACK - UP - DOWN</title><path className="cls-1" d="M315,252.29c.24,2.25-1,3.6-2.33,4.91q-50.75,50.73-101.49,101.44c-3.52,3.52-6.26,3.47-9.94.08-2.57-2.37-5-4.87-7.44-7.41-4.08-4.31-4-7.25.27-11.53Q235.71,298,277.46,256.3c3.23-3.21,3.28-4.88,0-8.12q-41.7-41.38-83.05-83.11c-4.89-4.91-4.87-7.54,0-12.6,12.64-13,11.7-11.72,23.08-.32q46.83,46.86,93.67,93.7C313.06,247.69,315.53,249.25,315,252.29Z" transform="translate(-190.77 -143.15)" /></svg>
                                </div>
                                <div className="sub-nav-item">
                                    <ul>
                                        <li><Link href="/stores/illustrations"><a onClick={() => {
                                            setTimeout(() => props.closeMenu(), 200)
                                        }}>Illustrations</a></Link></li><br />
                                        <li><Link href="/stores/3dModels"><a onClick={() => {
                                            setTimeout(() => props.closeMenu(), 200)
                                        }}>3D Models</a></Link></li>
                                        <li><Link href="/stores/3dMaterials"><a onClick={() => {
                                            setTimeout(() => props.closeMenu(), 200)
                                        }}>3D Materials</a></Link></li>
                                    </ul>
                                </div>
                            </li>
                            <li className="nav-item" data-item="tutorials">
                                <div className="flex justify-content-space-between align-items-center">
                                    <Link href="/tutorials"><a onClick={() => {
                                        setTimeout(() => props.closeMenu(), 200)
                                    }}>TURTORIALS</a></Link>
                                    <svg width="16px" height="16px" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 124.3 218.12"><defs></defs><title>NEXT - BACK - UP - DOWN</title><path className="cls-1" d="M315,252.29c.24,2.25-1,3.6-2.33,4.91q-50.75,50.73-101.49,101.44c-3.52,3.52-6.26,3.47-9.94.08-2.57-2.37-5-4.87-7.44-7.41-4.08-4.31-4-7.25.27-11.53Q235.71,298,277.46,256.3c3.23-3.21,3.28-4.88,0-8.12q-41.7-41.38-83.05-83.11c-4.89-4.91-4.87-7.54,0-12.6,12.64-13,11.7-11.72,23.08-.32q46.83,46.86,93.67,93.7C313.06,247.69,315.53,249.25,315,252.29Z" transform="translate(-190.77 -143.15)" /></svg>
                                </div>
                                <div className="sub-nav-item">
                                    <ul>
                                        <li><Link href="/tutorials/digitalArt"><a onClick={() => {
                                            setTimeout(() => props.closeMenu(), 200)
                                        }}>Digital art</a></Link></li><br />
                                        <li><Link href="/tutorials/3dModeling"><a onClick={() => {
                                            setTimeout(() => props.closeMenu(), 200)
                                        }}>3D Modeling</a></Link></li>
                                    </ul>
                                </div>
                            </li>
                            <Social />
                        </ul>
                    </div>
                </nav>
            </div>
        </header >
    )
}

export default Navbar

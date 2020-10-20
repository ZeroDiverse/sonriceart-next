import React, {useEffect, useState} from 'react'
import style from "../../pages/artworks/artworks.module.scss";

interface SliderProps{
    images: String[],
    titles: String[]
}

export default function Slider(props: SliderProps){
    const [index, setIndex] = useState(0); // create state to keep track of images index, set the default index to 0

    const cls1 = {
        fill: '#adb5bd'
    }

    const slideRight = () => {
        setIndex((index + 1) % props.images.length); // increases index by 1
    };


    const slideLeft = () => {
        const nextIndex = index - 1;
        if (nextIndex < 0) {
            setIndex(props.images.length - 1); // returns last index of images array if index is less than 0
        } else {
            setIndex(nextIndex);
        }
    };

    useEffect(() => {
        const id = setInterval(() => {
            console.log(index)
            setIndex((index + 1) % props.images.length); // increases index by 1
        }, 4000)
        return () => clearInterval(id);
    }, [index])

    return (
        props.images.length > 0 && (
            <div>
                <div className={style.leftArrow} >
                    <svg width="32px" height="32px" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 124.3 218.12" onClick={slideLeft}>
                        <defs>
                        </defs>
                        <title>NEXT - BACK - UP - DOWN</title>
                        <path className="cls-1"
                              d="M315,252.29c.24,2.25-1,3.6-2.33,4.91q-50.75,50.73-101.49,101.44c-3.52,3.52-6.26,3.47-9.94.08-2.57-2.37-5-4.87-7.44-7.41-4.08-4.31-4-7.25.27-11.53Q235.71,298,277.46,256.3c3.23-3.21,3.28-4.88,0-8.12q-41.7-41.38-83.05-83.11c-4.89-4.91-4.87-7.54,0-12.6,12.64-13,11.7-11.72,23.08-.32q46.83,46.86,93.67,93.7C313.06,247.69,315.53,249.25,315,252.29Z"
                              transform="translate(-190.77 -143.15)" style={cls1} />
                    </svg>
                </div>
                <div className={style.rightArrow}>
                    <svg width="32px" height="32px" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 124.3 218.12" onClick={slideRight}>
                        <defs>
                        </defs>
                        <title>NEXT - BACK - UP - DOWN</title>
                        <path className="cls-1"
                              d="M315,252.29c.24,2.25-1,3.6-2.33,4.91q-50.75,50.73-101.49,101.44c-3.52,3.52-6.26,3.47-9.94.08-2.57-2.37-5-4.87-7.44-7.41-4.08-4.31-4-7.25.27-11.53Q235.71,298,277.46,256.3c3.23-3.21,3.28-4.88,0-8.12q-41.7-41.38-83.05-83.11c-4.89-4.91-4.87-7.54,0-12.6,12.64-13,11.7-11.72,23.08-.32q46.83,46.86,93.67,93.7C313.06,247.69,315.53,249.25,315,252.29Z"
                              transform="translate(-190.77 -143.15)" style={cls1} />
                    </svg>
                </div>
                <div className={`${style.opacity0} ${style.aCurrent}`} onClick={slideRight}>
                    <div className={style.backgroundLayer}/>
                    <img className={style.slideShow} src={`${props.images[index]}`} >
                    </img>
                    <p className={style.desc}>{props.titles[index]}</p>
                </div>
            </div>
        )
    )
}

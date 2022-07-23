import { useEffect, useState } from "react";
import styled from "styled-components";
import base from "../../styles/base";

const BackgroundSvg = styled.svg`
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
`

export default function Background() {

    const [colorBackground, setColorBackground] = useState(null)

    useEffect(() => {
        let date = new Date()
        let hours = date.getHours()
        if(hours>=0 && hours<=5) {
            setColorBackground(base.colors.blue)
        } else if(hours>=6 && hours<=11) {
            setColorBackground(base.colors.green)
        } else if(hours>=12 && hours<=17) {
            setColorBackground(base.colors.yellow)
        } else {
            setColorBackground(base.colors.lightblue)
        }
    }, [])

    return(
        <BackgroundSvg preserveAspectRatio="xMidYMid slice"  width="100%" height="650" viewBox="0 0 1200 350" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M0 324H18C36 324 73 324 109 288C145 252 182 180 218 162C255 144 291 180 327 210C364 240 400 264 436 276C473 288 509 288 545 264C582 240 618 192 655 174C691 156 727 168 764 192C800 216 836 252 873 276C909 300 945 312 982 306C1018 300 1055 276 1091 258C1127 240 1164 228 1182 222L1200 216V0H1182C1164 0 1127 0 1091 0C1055 0 1018 0 982 0C945 0 909 0 873 0C836 0 800 0 764 0C727 0 691 0 655 0C618 0 582 0 545 0C509 0 473 0 436 0C400 0 364 0 327 0C291 0 255 0 218 0C182 0 145 0 109 0C73 0 36 0 18 0H0V324Z" fill={colorBackground}/>
        </BackgroundSvg>
    )
}


import React from 'react'
import styled, {css, keyframes} from 'styled-components'
import {setColor, setFlex, setLetterSpacing, setBorder, media} from '../../styles'

const Banner = ({className, title, text, greeting, children}) => {
    return (
        <div className={className}>
            <h1>{greeting} <span>{title}</span></h1>
            <div className="info">
                <p>{text}</p>
                {children}
            </div>
        </div>
    )
}

const BannerWrapper = styled(Banner)`
    color: ${setColor.primaryColor};
    border-radius: 5px;
    background-color: rgba(0, 0, 0, .2);
    backdrop-filter: blur(5px);
    width: 70%;
    ${setFlex()}
    flex-direction: column;
    padding: 3rem;

    h1 {
        text-transform: uppercase;
        color: ${setColor.mainGrey};
        text-align: center;
        ${setLetterSpacing(7)}

        span {
            ${setLetterSpacing(10)}
            color: ${setColor.primaryColor}
        }
    }

    p {
        padding: 2rem;
        color: ${setColor.mainWhite};
        text-align: justify;
    }

    ${media.tablet`
        width: 90vw;
        ${setBorder()}
    `}
/* 
    above helper function replaces this media query, but the syntax below works too
    @media only screen and (min-width: 768px) {
        width: 70vw;
        ${setBorder()}

    } */

`


export default BannerWrapper

import React from 'react'
import styled, {css, keyframes} from 'styled-components'
import {setColor, setFlex} from '../../styles'

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
    border: 2px solid ${setColor.primaryColor};
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
    }

    .info {
        padding: 2rem;
        color: ${setColor.mainWhite};
    }

`


export default BannerWrapper

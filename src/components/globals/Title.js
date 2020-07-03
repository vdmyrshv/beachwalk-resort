import React from 'react'
import styled from 'styled-components'

import {setFont, setLetterSpacing} from '../../styles'


const Title = ({className, title, center, margin}) => {
    return (
        <h3 className={className}>
            {title}
        </h3>
    )
}

export default styled(Title)`
    font-size: 3.6rem;
    text-transform: capitalize;
    ${setLetterSpacing(5)}
    ${setFont.slanted}
    text-align: ${props => props.center? 'center' : 'left'};
    margin: ${props => props.margin};
`

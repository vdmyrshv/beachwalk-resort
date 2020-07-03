import React from 'react'
import styled from 'styled-components'

import {
	setColor,
	setLetterSpacing,
	setBorder,
	setTransition
} from '../../styles'

const Button = styled.button`
	padding: 1.5rem 3rem;
	text-transform: uppercase;
	background: transparent;
	color: ${props => (props.alt ? setColor.primaryColor : setColor.mainWhite)};
	outline: none;
	border-style: none;
	border-radius: 3px;
	cursor: pointer;
	box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
	text-decoration: none;
	${setLetterSpacing(3)}
	${setBorder({ color: setColor.primaryColor })}

    ${setTransition()}

	&:hover {
		background-color: ${setColor.primaryColor};
		color: ${setColor.mainWhite};
        ${setBorder}
	}

	&:active {
		filter: brightness(75%);
		box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
	}
`

export default Button

export const SmallButton = styled(Button)`
	padding: 1rem 2rem;
`

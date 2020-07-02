import { css } from 'styled-components'

const defaultImage =
	'https://images.unsplash.com/photo-1519046904884-53103b34b206?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80'

export const setColor = {
	primaryColor: '#af9a7d',
	mainWhite: '#fff',
	mainBlack: '#222',
	mainGrey: '#ececec',
	lightGrey: '#f7f7f7'
}

export const setFont = {
	main: "font-family: 'Lato', sans-serif;",
	slanted: "font-family: 'Courgette', cursive;"
}

//setting defaults
export const setFlex = ({ x = 'center', y = 'center' } = {}) => `
display: flex;
align-items: ${y};
justify-content: ${x};
`
export const setBackground = ({
	img = defaultImage,
	direction = 'to right bottom',
	colorOne = 'rgba(0, 139, 139, .3)',
	colorTwo = 'rgba(173, 255, 47, .3)'
} = {}) => `
    background-image: linear-gradient(${direction}, ${colorOne}, ${colorTwo}), 
        url(${img});
`

export const setLetterSpacing = (spacing = 2) => `
	letter-spacing: ${spacing}px;
`

export const setBorder = ({
	width = '2px',
	style = 'solid',
	color = setColor.mainWhite
} = {}) => `
	border: ${width} ${style} ${color};
`

//code for the object and fn are from styled components docs on how to create helper function for media queries
//this code has been removed from the official docs but it's still good to have

//object map of breakpoints for easy customization
const sizes = {
	large: 1200,
	desktop: 992,
	tablet: 768,
	phone: 576
}

//iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((acc, label) => {
	acc[label] = (...args) => css`
	  @media (min-width: ${sizes[label] / 16}em) {
		${css(...args)}
	  }
	`;
  
	return acc;
  }, {});
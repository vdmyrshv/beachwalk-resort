import styled from 'styled-components'

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
    direction='to right bottom',
	colorOne = 'rgba(0, 139, 139, .3)',
	colorTwo = 'rgba(173, 255, 47, .3)'
} = {}) => `
    background-image: linear-gradient(${direction}, ${colorOne}, ${colorTwo}), 
        url(${img});
`

import React from 'react'
import styled from 'styled-components'
import {
	setBorder,
	setBoxShadow,
	setLetterSpacing,
	setTransition,
	setColor
} from '../../styles'
import { SmallButton } from './Button'

import PropTypes from 'prop-types'

const RoomCard = ({
	className,
	img = '',
	id = 0,
	title = 'default',
	info = 'default info',
	price = 999
}) => {
	return (
		//'article' is an html element that is for self contained content, say for example
		//in this case a card
		<div className={className}>
			<div className='shadow-hide'>
				<div className='img-container'>
					<img src={img} alt={`Room ${id}`} />
					<div className='img-price'>
						<h3>${price}</h3>
					</div>
				</div>
				<h4>{title}</h4>
				<p>{info}</p>
				<SmallButton alt>Book Now</SmallButton>
			</div>
		</div>
	)
}

RoomCard.propTypes = {
	id: PropTypes.number,
	title: PropTypes.string,
	info: PropTypes.string,
	price: PropTypes.number
}

export default styled(RoomCard)`
	padding: 3rem;

	position: relative;

	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: start;

    z-index: 2;

    ${setBoxShadow.dark}

	:hover {
		${setBoxShadow.darkPressed}
	}

	.img-container {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-bottom: 2rem;

		transition: all 0.2s;

		img {
			z-index: 6;
			width: 100%;
			display: block;
			transition: all 0.2s;
		}

		:hover .img-price {
			opacity: 1;
			transition: all 0.2s;
		}

		:hover img {
			filter: brightness(0.65);
			transition: all 0.2s;
		}
	}

	.img-price {
		position: absolute;
		z-index: 10;
		opacity: 0;
		transition: all 0.2s;

		h3 {
			color: ${setColor.mainGrey};
			padding: 0.5rem 1rem;
			${setBorder()}
		}
	}

	p {
		margin-bottom: 3rem;
	}

	h4 {
		color: ${setColor.mainBlack};
	}
`

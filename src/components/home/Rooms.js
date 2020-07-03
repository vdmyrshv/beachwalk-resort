import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import roomsData from './rooms-data'

import { setColor, media } from '../../styles'

import Section from '../globals/Section'
import RoomCard from '../globals/RoomCard'
import Title from '../globals/Title'

const RoomsCenter = styled.div`
	width: 90vw;
	margin: 3rem auto;
	display: grid;
	grid-column-gap: 5rem;
	grid-row-gap: 4rem;
	grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
	justify-content: space-evenly;
`

const Rooms = () => {
	const [rooms, setRooms] = useState(null)

	useEffect(() => {
		setRooms(roomsData)
	}, [])

	return (
		<Section color={setColor.mainGrey}>
			<Title margin='2rem 0 0 0' title='Check our rooms!' center />
			<RoomsCenter>
				{!!rooms &&
					rooms.map(({ id, img, title, info, price }) => (
						<RoomCard
							key={id}
							img={img}
							title={title}
							info={info}
							price={price}
						/>
					))}
			</RoomsCenter>
		</Section>
	)
}

export default Rooms

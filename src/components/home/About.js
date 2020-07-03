import React from 'react'
import styled from 'styled-components'

import aboutBcg from '../../images/aboutBcg.jpeg'

import { media } from '../../styles'

import Section from '../globals/Section'
import Title from '../globals/Title'
import Image from '../globals/Image'
import Button from '../globals/Button'

const AboutCenter = styled.div`
	display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 2rem;

	.about-img,
	.about-info {
		padding: 3rem;
	}
	p {
		margin-bottom: 2rem;
	}

	width: 90vw;
	margin: 0 auto;

    ${media.desktop`
        grid-template-columns: 1fr;
    `}
`

const About = () => {
	return (
		<Section>
			<AboutCenter>
				<div className='about-img'>
					<Image src={aboutBcg} alt='about us' />
				</div>
				<div className='about-info'>
					<Title title='this is the about section' />
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua. Ut enim ad minim veniam, quis nostrud
						exercitation ullamco laboris nisi ut aliquip ex ea
						commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu
						fugiat nulla pariatur. Excepteur sint occaecat cupidatat
						non proident, sunt in culpa qui officia deserunt mollit
						anim id est laborum.
					</p>
					<Button alt>Read More</Button>
				</div>
			</AboutCenter>
		</Section>
	)
}

export default About

import React from 'react'
import Hero from '../globals/Hero'

import mainImg from '../../images/homeBcg.jpeg'
import Banner from '../globals/Banner'

const Header = () => {
	return (
		<Hero img={mainImg}>
			<Banner
				greeting='welcome to'
				title='beachwalk resort'
				text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum vel aspernatur adipisci vero numquam eius. Neque eum unde deserunt, sapiente, nihil totam ratione sit voluptates dolores cupiditate explicabo ipsum. Corporis.'
			/>
		</Hero>
	)
}

export default Header

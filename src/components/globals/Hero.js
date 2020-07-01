import styled from 'styled-components'
//when importing assets, you can name them
import backgroundImg from '../../images/homeBcg.jpeg'
import {setFlex, setBackground} from '../../styles'

const Hero = styled.header`
    min-height: 100vh;
    /* remember to use the $ {} wrapper for variables within a tagged template literal!!!! */
    ${props => setBackground({img: props.img})}
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    
    ${setFlex({x:"center", y:"center"})}
`

export default Hero
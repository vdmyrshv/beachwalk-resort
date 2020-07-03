import styled from 'styled-components'

import {setBorder, setColor} from '../../styles'

export default styled.img`
    ${setBorder({width: '5px', color: setColor.primaryColor})}
    width: 100%;
    /* remember this is to get rid of the little margin on images since they're inline */
    display: block;
`
import { createGlobalStyle } from 'styled-components'

//import global style objects from styles.js, these are accesed in the global style using templates
import { setColor, setFont, setLetterSpacing } from '../../styles'

export default createGlobalStyle`

    /* @import statement here doesn't work for fonts, fonts imported in index.html in <head> */
    /* as per the documentation, the @import statement is currently having issues */
    /* @import url('https://fonts.googleapis.com/css2?family=Courgette&family=Lato:ital,wght@1,400;1,700&display=swap'); */
    *,
    *::after,
    *::before {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }
    html {
        font-size: 62.5%;
    }
    body{
        box-sizing: border-box;
        color: ${setColor.primaryColor};
        background: #fff;
        /* imported main global font using tagged template literal */
        ${setFont.main}
    }
    ::selection {
        background-color: rgba(0, 139, 139, 0.5);
        color: white;
    }

    h1,h2,h3,h4,h5,h6 {
        text-transform: capitalize;
    }
    
    h1 {
        font-size: 4rem;
        line-height: 1.2;
        margin-bottom: 0.5rem;
    }

    h2 {
        font-size: 3.75rem;
        margin-bottom: 0.75rem;
    }

    h3 {
        font-size: 3.5rem;
        margin-bottom: 1rem;
    }

    h4 {
        font-size: 3rem;
        font-weight: bold;
        margin-bottom: 1.25rem;
    }

    h5 {
        font-size: 2.5rem;
        font-weight: bold;
        margin-bottom: 1.5rem;
    }

    h6 {
        font-size: 2rem;
        font-weight: bold;
        margin-bottom: 1.6rem;
    }
    
    p {
        font-size: 1.6rem;
        line-height: 1.5;
        margin: 0 0 1.5 0;
        ${setLetterSpacing(1.15)}
    }

`

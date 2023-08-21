import { createGlobalStyle } from 'styled-components'
import '@fontsource/poppins/400.css'
import '@fontsource/poppins/500.css'
const GlobalStyles = createGlobalStyle`
    *,*::before,*::after{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    html{
        scroll-behavior: smooth;
    }
    body{
        overflow-x: hidden;
        font-family: 'Poppins', sans-serif;
        @media screen and (max-width: 768px) {
            overflow-y: ${(props) => (props.toggle ? 'hidden' : '')};
        }
    }
    h1,h2,h3,h4,h5,h6{
        margin: 0;
        padding: 0;
    }
    ul{
        list-style: none;
    }
    a{
        color: inherit;
        text-decoration: none;
        cursor: pointer;
    }
    button{
        cursor: pointer;
        border: none;
        outline: none;
    }
    textarea, input{
        font-family: 'Poppins', sans-serif;
    }
`
export default GlobalStyles

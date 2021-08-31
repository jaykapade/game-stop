import { createGlobalStyle } from 'styled-components'
import { motion } from 'framer-motion'

const GlobalStyles = createGlobalStyle`

*{
    margin:0;
    padding:0;
    box-sizing: border-box;
}
html{
    &::-webkit-scrollbar{
        width: 0.5rem;
    }
    &::-webkit-scrollbar-thumb{
        background-color: darkgray;
    }
}
body{
    font-family: 'Montserrat', sans-serif;
    width: 100%;
}
h2{
    font-size: 2.8rem;
    color: #333;

}
h3{
    font-size: 1.1rem;
    color: #333;
    padding:1rem;
}
p{
    line-height: 200%;
    color: #696969;
    
}
a{
    text-decoration: none;
    color: #333;
}
`

export default GlobalStyles

import { createGlobalStyle } from 'styled-components'

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
        background-color: #2b2a2a;
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
input{
    font-weight: bold;
    font-family: 'Montserrat', sans-serif;
}
h3{
    font-size: 1.1rem;
    color: #333;
    padding:0.5rem 0rem;
}
p{
    line-height: 200%;
    color: #696969;
    padding-bottom: 0.2rem;
    
}
a{
    text-decoration: none;
    color: #333;
}
img{
display: block;
}
`

export default GlobalStyles

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{margin:0;
padding :0;
box-sizing:border-box;
}

body{
    background: darkcyan;

}

button{
    font-weight: bold;
    font-size: 1.1rem;
    cursor: pointer;
    padding: 1rem 2rem;
    border : 3px solid greenyellow;
    color:white;
    transition: all 0.5s ease;
    &:hover{
        background-color: darkgoldenrod;
        color: white;
    }
}
`;

export default GlobalStyle;

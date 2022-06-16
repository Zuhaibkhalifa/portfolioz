import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{margin:0;
padding :0;
box-sizing:border-box;
}

body{
    background: #2b2d42;
    font-family: 'Kdam Thmor Pro', sans-serif;

}

button{
    font-weight: bold;
    font-size: 1.1rem;
    cursor: pointer;
    padding: 1rem 2rem;
    border : 3px solid #d90429;
    background: #2b2d42;
    color:white;
    transition: all 0.5s ease;
    font-family: 'Kdam Thmor Pro', sans-serif;
    &:hover{
        background-color: #d90429;
        color: #2b2d42;
    }
   
}
    h2{
        font-weight: lighter;
        font-size: 4rem;
        color: #edf2f4;
    }
    h3{
        color: #edf2f4;
    }
    h4{
        font-size:bold;
        color: #edf2f4;
        font-size: 2rem;
    }
    a{
        font-size:1.1;
    }
    span{
        font-weight:bold;
        color: #d90429;
    }
    p{
        padding: 3rem 0rem;
        color: gray;
        font-size: 1.4rem;
        line-height: 150%;
    }
`;

export default GlobalStyle;

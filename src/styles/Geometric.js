import styled from "styled-components";

export const Geometric = styled.div `

    width: 100vw;
    height: 100vh;

    .bg {
        animation:slide 3s ease-in-out infinite alternate;
        background-image: linear-gradient(60deg, #000 50%, #DDD 50%);
        bottom:0;
        left:-50%;
        opacity:.5;
        position:fixed;
        right:-50%;
        top:0;
        z-index:-1;
    }
    
    .bg2 {
        animation-direction:alternate-reverse;
        animation-duration:4s;
    }
    
    .bg3 {
        animation-duration:5s;
    }

    @keyframes slide {
    0% {
        transform:translateX(-25%);
    }
 
    100% {
        transform:translateX(25%);
    }
}  
`
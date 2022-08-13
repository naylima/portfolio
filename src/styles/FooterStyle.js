import styled from "styled-components";

export const Main = styled.div`

    width: 100%;  
    height: 180px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #222;

    box-shadow: 0 0 8px black;
    

    h1, p, a {
        color: #888;
        opacity: .5;
    }

    h1 {
        font-size: 36px;
        margin-bottom: 10px;
    }

    p:nth-child(2), p:nth-child(4){
        margin-bottom: 10px;
    }

    p:nth-child(2) {
        font-size: 16px;
    }

    span {
        font-weight: bold;
    }

    .icon {
        width: 20px;
        height: 20px;
        margin-right: 10px;

        cursor: pointer;
    }

`
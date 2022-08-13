import styled from "styled-components";

export const Main = styled.div`
    width: 100%;
    height: auto;
    padding: 80px 30px;
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;

    box-shadow: 0 0 5px black;

    > div {
        width: 350px;
        margin-left: 130px;
        display: flex;
        flex-direction: column;
    }

    h1 {
        font-size: 42px;
        margin-bottom: 20px;
        color: #222;
    }

    span {
        line-height: 20px;
        letter-spacing: 1px;
        margin: 2.5px 0;
        color: #222;
    }

    @media (max-width: 600px) {
        
        >div {
            width: 95%;
            margin-left: 0px;
        }
    }
`
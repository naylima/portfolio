import styled from "styled-components";

export const Main = styled.div`
    width: 100vw;
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

    .container {
        display: flex;
        flex-direction: column;
    }

    @media (max-width: 820px) {
        
        >div {
            width: 95%;
            margin-left: 0px;
        }

        .container {
            padding: 10px;
            background: linear-gradient(rgba(221,221,221,.1), rgba(221,221,221,.8));
        }
    }
`
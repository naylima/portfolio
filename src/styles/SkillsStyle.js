import styled from "styled-components";

export const Main = styled.div`

    width: 100%;
    height: 290px;
    padding: 0 20px;
    text-align: center;
    background-color: #DDD;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
        font-size: 42px;
    }

    >div {
        width: 70%;
        padding: 30px 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .icon {
        width: 50px;
        height: 50px;
        color: #222;
        transition: all 0.8s;

        :hover {
            color: yellow;
        }
    }

    @media (max-width: 600px) {

        >div {
            width: 100%;
        }
    }

`
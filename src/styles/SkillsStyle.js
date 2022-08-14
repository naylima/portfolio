import styled from "styled-components";

export const Main = styled.div`

    width: 100vw;
    padding: 130px 20px;
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

        height: auto;
        padding: 80px 0;

        >div {
            max-width: 100vw;
            padding: 20px 0;
            flex-direction: column;
        }

        .icon {
            margin: 10px 0;
    
            :active {
                color: yellow;
                opacity: .5;
            }
        }
    }

`
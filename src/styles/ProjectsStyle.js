import styled from "styled-components";

export const Main = styled.div`

    max-width: 100%;
    height: auto;
    padding: 20px;
    padding-top: 80px;
    text-align: center;
    background-color: #DDD;

    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
        font-size: 42px;
        margin-bottom: 20px;
        color: #222;
    }

    >div {
        width: 90%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .scroll {
        width: 90px;
        height: 90px;
        color: #555;
        cursor: pointer;
    }

    @media (max-width: 600px) {
        
        >div {
            width: 100%;
        }
    }

`

export const Carousel = styled.div`
    margin: 0 25px;
    overflow-x: hidden;
    scroll-behavior: smooth;
    display: flex;

    @media (max-width: 600px) {
        margin: 0 10px;
    }

`

export const ProjectBox = styled.div`

    width: 280px;
    height: 350px;
    margin: 20px 10px;
    background: linear-gradient(rgba(0,0,0,.1), rgba(0,0,0,.8));

    display: flex;
    align-items: center;
    justify-content: center;

    flex: none;

    p {
        color: yellow;
        cursor: pointer;
        transition: all 0.3s;

        :hover {
            letter-spacing: 2px;
        }
    }

    @media (max-width: 600px) {
        width: 92.5%;
    }

`
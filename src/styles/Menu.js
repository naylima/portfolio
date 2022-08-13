import styled from "styled-components";

export const Menu = styled.div`
    
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    position: fixed;
    top: 0;

    ul {
        display: flex;
        padding-right: 50px;
    }

    li {
        padding-left: 30px;
        letter-spacing: 1px;
        transition: all 0.5s;
        cursor: pointer;

        :hover {
            color: yellow;
        }
    }

    @media (max-width: 600px) {

        justify-content: center;
        background-color: rgba(0, 0, 0, 0.5);

        ul {
            padding-right: 0px;
            width: 100%;            
            justify-content: space-around;
        }

        li {
            padding-left: 0px;
        }

    }

`
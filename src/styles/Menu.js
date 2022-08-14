import styled from "styled-components";

export const Menu = styled.div`
    
    width: 100vw;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    position: fixed;
    top: 0;
    z-index: 1;

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
        background-color: rgba(0, 0, 0, 0.8);

        ul {
            padding-right: 0px;
            width: 100%;            
            justify-content: space-around;
        }

        li {
            padding-left: 0px;
            color: yellow;
            opacity: .5;

            :active {
                opacity: 1;
            }
        }

    }

`
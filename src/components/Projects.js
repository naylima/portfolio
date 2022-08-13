import React, { useRef } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import {Main, Carousel, ProjectBox } from "../styles/ProjectsStyle";


export default function Projects () {

    const carousel = useRef(null);

    const handleLeftClick = (e) => {
        e.preventDefault();
        carousel.current.scrollLeft -= carousel.current.offsetWidth;
    };

    const handleRightClick = (e) => {
        e.preventDefault();
        carousel.current.scrollLeft += carousel.current.offsetWidth;
    };

    return (
        <Main>
            <h1>Projetos</h1>    
            <div>    
                <BsChevronLeft className="scroll" onClick={handleLeftClick}/>
                <Carousel ref={carousel}>
                    <ProjectBox>
                        <p>em breve</p>
                    </ProjectBox>
                    <ProjectBox>
                        <p>em breve</p>
                    </ProjectBox>
                    <ProjectBox>
                        <p>em breve</p>
                    </ProjectBox>
                    <ProjectBox>
                        <p>em breve</p>
                    </ProjectBox>
                    <ProjectBox>
                        <p>em breve</p>
                    </ProjectBox>
                    <ProjectBox>
                        <p>em breve</p>
                    </ProjectBox>
                    <ProjectBox>
                        <p>em breve</p>
                    </ProjectBox>
                    <ProjectBox>
                        <p>em breve</p>
                    </ProjectBox>
                </Carousel>
                <BsChevronRight className="scroll" onClick={handleRightClick}/>
            </div>        
        </Main>
    )
}
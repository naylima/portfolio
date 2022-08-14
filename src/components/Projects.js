import React, { useRef, useEffect } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import {Main, Carousel, ProjectBox } from "../styles/ProjectsStyle";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Projects () {

    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, []);

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
                <Carousel ref={carousel} data-aos="fade-up">
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
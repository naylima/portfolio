import { useEffect } from "react";
import { BsGithub } from "react-icons/bs";
import { DiJavascript1 } from "react-icons/di";
import { FaCss3Alt, FaHtml5, FaReact } from "react-icons/fa";
import { Main } from "../styles/SkillsStyle";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Skills () {

    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, []);

    return (
        <Main>
            <h1>Habilidades</h1>
            <div data-aos="fade-up">
                <FaHtml5 className="icon"/>
                <FaCss3Alt className="icon"/>
                <DiJavascript1 className="icon"/>
                <FaReact className="icon"/>
                <BsGithub className="icon"/>
            </div>
        </Main>
    )
}
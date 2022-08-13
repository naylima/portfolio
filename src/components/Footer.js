import { BsLinkedin, BsGithub } from "react-icons/bs";
import { Main } from "../styles/FooterStyle";

export default function Footer () {
    return (
        <Main>
            <h1>Nayara Lima</h1>
            <p>front-end web developer</p>
            <p><span>E-mail: </span>nayaralima@poli.ufrj.br</p>
            <p><span>Whatsapp: </span>+552197500-1556</p>
            <div>
                <a href="https://www.linkedin.com/in/nayesteves/" target="_blank">
                    <BsLinkedin className="icon"/>
                </a> 
                <a href="https://github.com/naylima" target="_blank">
                    <BsGithub className="icon"/>
                </a> 
            </div>
        </Main>
    )
}
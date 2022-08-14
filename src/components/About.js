import { useEffect } from "react";
import { Main } from "../styles/AboutStyle";
import background from "../assets/coffe.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

export default function About () {

    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, []);

    return(
        <Main style={{ backgroundImage: `url(${background})` }}>
            <div>
                <h1>Sobre</h1>
                <div className="container" data-aos="fade-up">
                    <span> 
                        Olá, eu sou a Nayara, engenheira formada pela Universidade Federal do Rio de Janeiro,
                        onde tive meu primeiro contado com programação. 
                    </span>
                    <span>
                        Atuei como trainee de engenharia no setor industrial e 
                        gerenciei equipes em uma grande varejista, 
                        mas só descobri de fato o que gosto de fazer em 2022,
                        quando me inscrevi para participar
                        de uma das turmas de uma escola de programação.
                    </span>
                    <span>
                        Hoje já possuo conhecimentos sólidos em HTML, CSS, JavaScript e React.
                    </span>
                </div>
            </div>
        </Main>
    )
}
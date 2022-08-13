import { Main } from "../styles/AboutStyle";
import background from "../assets/coffe.jpg"

export default function About () {
    return(
        <Main style={{ backgroundImage: `url(${background})` }}>
            <div>
                <h1>Sobre</h1>
                <span> 
                    Olá, eu sou a Nayara, engenheira formada pela Universidade Federal do Rio de Janeiro,
                    onde tive seu primeiro contado com programação. 
                </span>
                <span>
                    Atuei como trainee de engenharia no setor industrial e 
                    gerenciei equipes em uma grande varejista, 
                    mas só descobri de fato o que gosta de fazer em 2022,
                    quando me inscrevi para participar
                    de uma das turmas de uma escola de programação.
                </span>
                <span>
                    Hoje já possuo conhecimentos sólidos em HTML, CSS, JavaScript e React.
                </span>
            </div>
        </Main>
    )
}
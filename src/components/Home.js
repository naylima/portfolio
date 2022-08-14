import { Geometric } from "../styles/Geometric"
import { Main, MainTitle } from "../styles/HomeStyle"

export default function Home () {
    return (
        <Main>
            <Geometric>
                <div className="bg"></div>
                <div className="bg bg2"></div>
                <div className="bg bg3"></div>
            </Geometric>
            <MainTitle>
                <h1>Nayara Lima</h1>
            </MainTitle>
        </Main>
       
    )
}
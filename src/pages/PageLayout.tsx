import Card from "../components/Card"
import Formulario from "../components/Form"
import ListaParticipantes from "../components/ParticipantList"
import Rodape from "../components/Footer"

const PageLayout = () => {
    return (
        <Card>
            <section>
                <h2>Vamos começar!</h2>
                <Formulario />
                <ListaParticipantes />
                <Rodape />
            </section>
        </Card>
    )
}

export default PageLayout
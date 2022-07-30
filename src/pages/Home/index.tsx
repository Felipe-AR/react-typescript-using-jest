import Card from "../../components/Card"
import Form from "../../components/Form"
import ParticipantList from "../../components/ParticipantList"
import Footer from "../../components/Footer"

const Home = () => {
    return (
        <Card>
            <section>
                <h2>Vamos começar!</h2>
                <Form />
                <ParticipantList />
                <Footer />
            </section>
        </Card>
    )
}

export default Home
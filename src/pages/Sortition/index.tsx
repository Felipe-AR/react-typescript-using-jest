import { useState } from "react";
import Card from "../../components/Card";
import { useListaDeParticipantes } from "../../state/hook/useListaDeParticipantes";
import { useResultadoSorteio } from "../../state/hook/useResultadoSorteio";
import Footer from "./Footer";
import { Button, InformationMessage, Select, WarningMessage } from "./styles";

const Sortition = () => {
  const [participanteAtual, setParticipanteAtual] = useState<string>("");
  const [amigoSecreto, setAmigoSecreto] = useState<string>("");

  const participantes = useListaDeParticipantes();
  const resultado = useResultadoSorteio();

  const sortear = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();
    const amigoSecretoDoParticipante = resultado.get(participanteAtual);
    if (amigoSecretoDoParticipante) setAmigoSecreto(amigoSecretoDoParticipante);
  };

  return (
    <Card>
      <section>
        <h2>Quem vai tirar o papelzinho</h2>
        <form onSubmit={sortear}>
          <Select
            required
            name="participanteAtual"
            id="participanteAtual"
            placeholder="Selecione o seu nome"
            value={participanteAtual}
            onChange={(evento) => setParticipanteAtual(evento.target.value)}
          >
            <option>Selecione o seu participante!</option>
            {participantes.map((participante) => (
              <option key={participante}>{participante}</option>
            ))}
          </Select>
          <InformationMessage>Clique em sortear para ver quem é o seu amigo secreto!</InformationMessage>
          <Button>Sortear</Button>
        </form>
        {amigoSecreto && <WarningMessage role="alert">{amigoSecreto}</WarningMessage>}
        <Footer />
      </section>
    </Card>
  );
};

export default Sortition;

import { useState } from "react";
import Card from "../../components/Card";
import { useListaDeParticipantes } from "../../state/hook/useListaDeParticipantes";
import { useResultadoSorteio } from "../../state/hook/useResultadoSorteio";
import Footer from "./Footer";
import { Button, Select, WarningMessage } from "./styles";

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
          {amigoSecreto && (
            <WarningMessage role="alert">{amigoSecreto}</WarningMessage>
          )}
          <Button>Sortear</Button>
        </form>
        <Footer />
      </section>
    </Card>
  );
};

export default Sortition;

import { useNavigate } from "react-router-dom";
import { useListaDeParticipantes } from "../../state/hook/useListaDeParticipantes";
import { Container, Image, Button } from "./styles";

const Rodape = () => {
  const participantes = useListaDeParticipantes();

  const navegarPara = useNavigate();

  const iniciar = () => {
    navegarPara("/sorteio");
  };

  return (
    <Container className="rodape-configuracoes">
      <Button
        className="botao"
        disabled={participantes.length < 3}
        onClick={iniciar}
      >
        Iniciar brincadeira
      </Button>
      <Image src="/imagens/sacolas.png" alt="Sacolas de compras" />
    </Container>
  );
};

export default Rodape;

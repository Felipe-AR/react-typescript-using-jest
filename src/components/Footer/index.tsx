import { useNavigate } from "react-router-dom";
import { useListaDeParticipantes } from "../../state/hook/useListaDeParticipantes";
import { useSorteador } from "../../state/hook/useSorteador";
import { Container, Image, Button } from "./styles";

const Footer = () => {
  const participantes = useListaDeParticipantes()
  const sortear = useSorteador()
  const navegarPara = useNavigate()

  const iniciar = () => {
    sortear()
    navegarPara("/sorteio")
  };

  return (
    <Container>
      <Button
        disabled={participantes.length < 3}
        onClick={iniciar}
      >
        Iniciar brincadeira
      </Button>
      <Image src="/imagens/sacolas.png" alt="Sacolas de compras" />
    </Container>
  );
};

export default Footer;

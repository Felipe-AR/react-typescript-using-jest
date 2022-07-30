import { Container, Brand, Participant } from "./styles";

const Header = () => {
  return (
    <Container>
      <Brand 
        role="img" 
        aria-label="Logo do Sorteador" 
      />
      <Participant
        src="/imagens/participante.png"
        alt="Participante com um presente na mão"
      />
    </Container>
  );
};

export default Header;

import styled from "styled-components";
import Card from "./Card";

const cardsData = [
    {
      date: "17 de ago, 2024",
      title: "O que é linguagem de programação? Conheça as principais",
      description:
        "Uma das mais populares vertentes da tecnologia da informação, a área de programação segue tendo muita demanda de trabalho justamente pela velocidade com que dispositivos tecnológicos vêm avançando.",
    },
    {
        date: "12 de jul, 2024",
        title: "GitHub agora permite fazer login sem precisar de senha",
        description:
          "O GitHub anunciou nesta quarta-feira (12) o acesso a partir das passkeys, método de autenticação sem senhas. A novidade está disponível em uma versão beta pública e pode substituir a autenticação em dois fatores.",
      },
      {
        date: "21 de jun, 2024",
        title: "Por que os hiperlinks são azuis em sua maioria?",
        description:
          "Quem navega na internet, certamente já percebeu que ela conta com diversos recursos para tornar a nossa vida mais fácil. Entre essas opções podemos mencionar os hiperlinks – uma palavra ou termo clicável que direciona o leitor.",
      },
    // Adicione mais objetos de cartão conforme necessário
  ];
export default function Main() {
    return (
    <StyledMain>
        <Card cards={cardsData}/>
    </StyledMain>
    )
}

export const StyledMain = styled.main `
  background-color: var(--dark-10);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.4rem;
  padding: 4rem 2.4rem;
`;
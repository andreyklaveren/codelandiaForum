import lupa from "../assets/lupa.svg";
import styled from "styled-components";
export default function Header() {
    return(
        <StyledHeader>
        <h1>
          <span className="code-logo">Code</span>lândia
        </h1>
        <button className="input-search">
          <img src={lupa} alt="Icone de lupa dentro de uma barra de pesquisa" />
          <input type="text" placeholder="Pesquisar no blog" />
        </button>
      </StyledHeader>
    )
}
export const StyledHeader = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.2rem;
    padding: 4.8rem 2.4rem;
    background-color: var(--dark-20);
    h1,
    .code-logo {
        color: var(--dark-60);
        font-weight: 500;
        font-size: 2.4rem;
        font-family: "Inter", sans-serif;
    }
    .code-logo {
        /*Cor salmão da logo*/
        color: var(--brand-color);
    }
    .input-search {
        display: flex;
        align-items: center;
        gap: 1.2rem;
        width: 100%;
        padding: 1.6rem 0 1.6rem 2.4rem;
        border: 2px solid var(--dark-40);
        border-radius: 0.8rem;
        @media screen and (min-width: 768px) {
        width: 70%;
        }
    }
    .input-search,
    input {
        color: var(--dark-60);
        background-color: var(--dark-30);
        padding-right: 2rem;
        @media screen and (max-width: 768px) {
        width: 100%;
        }
    }
    .input-search:focus-within {
        border: 2px solid var(--dark-60);
    }
    .input-search input:focus {
        outline: none;
    }
`;
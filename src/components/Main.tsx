import styled from "styled-components";
import heart from "../assets/heart.svg";

export default function Main() {
    return (
        <StyledMain>
        <div className="card">
          <div className="card-header">
            <h3 className="date">17 de ago, 2024</h3>
            <img id="heart-svg" src={heart} />
          </div>
          <h2 className="title">
            O que é linguagem de programação? Conheça as principais
          </h2>
          <p className="description">
            Uma das mais populares vertentes da tecnologia da informação, a área
            de programação segue tendo muita demanda de trabalho justamente pela
            velocidade com que dispositivos tecnológicos vêm avançando.
          </p>
        </div>
        <div className="card">
          <div className="card-header">
            <h3 className="date">17 de ago, 2024</h3>
            <img className="heart-svg" src={heart} />
          </div>
          <h2 className="title">
            O que é linguagem de programação? Conheça as principais
          </h2>
          <p className="description">
            Uma das mais populares vertentes da tecnologia da informação, a área
            de programação segue tendo muita demanda de trabalho justamente pela
            velocidade com que dispositivos tecnológicos vêm avançando.
          </p>
        </div>
        <div className="card">
          <div className="card-header">
            <h3 className="date">17 de ago, 2024</h3>
            <img className="heart-svg" src={heart} />
          </div>
          <h2 className="title">
            O que é linguagem de programação? Conheça as principais
          </h2>
          <p className="description">
            Uma das mais populares vertentes da tecnologia da informação, a área
            de programação segue tendo muita demanda de trabalho justamente pela
            velocidade com que dispositivos tecnológicos vêm avançando.
          </p>
        </div>
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
    .card {
        padding: 3.2rem 2.4rem;
        border: 2px solid var(--brand-color);
        border-radius: 0.8rem;
        .card-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 2rem;
            .date {
                color: var(--brand-color);
                font-size: 1.2rem;
                font-weight: 500;
            }
            .heart-svg {
                cursor: pointer;
            }
        }
    }
    .title {
        font-size: 2rem;
        font-weight: 500;
        margin-bottom: 1.6rem;
    }
    .description {
        color: var(--dark-50);
    }
`;
import styled from "styled-components";
import heart from "../assets/heart.svg";
interface CardData {
    date: string;
    title: string;
    description: string;
  }
      

export default function Card({ cards }: { cards: CardData[] }) {

    return (
        <>
            {cards.map((card, index) => (
                <StyledCard key={index}>
                    <div className="card-header">
                        <h3 className="date">{card.date}</h3>
                        <img id={`heart-svg-${index}`} src={heart}/>
                    </div>
                    <h2 className="title">
                        {card.title}
                    </h2>
                    <p className="description">
                        {card.description}
                    </p>
                </StyledCard>
            ))}
        </>
    )
}

const StyledCard = styled.div`
        padding: 3.2rem 2.4rem;
        border: 2px solid var(--brand-color);
        border-radius: 0.8rem;
        width: 100%;
        @media screen and (min-width: 768px) {
        width: 70%;
  }
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
    .title {
        font-size: 2rem;
        font-weight: 500;
        margin-bottom: 1.6rem;
    }
    .description {
        color: var(--dark-50);
    }
`;
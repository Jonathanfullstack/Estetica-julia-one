import styled from "styled-components";

export const ContainerFooter = styled.footer`
  background-color: ${(props) => props.theme.pink}; /* Usando a cor do tema */
  padding: 4rem 5rem; /* Padding mais suave para melhor espaçamento */
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap; /* Permitir que os elementos fiquem em linha, mas se ajustem em telas menores */
  color: ${(props) => props.theme.white}; /* Cor do texto definida pelo tema */

  @media screen and (max-width: 900px) {
    padding: 3rem 2rem;
    flex-direction: column;
    text-align: center; /* Texto centralizado para telas menores */
  }

  @media screen and (max-width: 600px) {
    padding: 2rem 1rem;
  }
`;

export const ContentFooter = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 18rem;
  font-size: 0.9rem;
  font-weight: 400;
  line-height: 1.5;
  gap: 0.8rem; /* Aumento no gap para melhor espaçamento entre os elementos */

  span {
    margin-top: 0.5rem;
  }

  @media screen and (max-width: 900px) {
    font-size: 1rem;
    max-width: 100%;
    margin-bottom: 2rem; /* Espaçamento extra para separar do restante do conteúdo */
  }
`;

export const IconsContainer = styled.div`
  display: flex;
  gap: 1.5rem; /* Reduzi o gap para deixar os ícones mais próximos */
  font-size: 2rem;

  svg {
    cursor: pointer;
    transition: color 0.3s ease-in-out, transform 0.3s ease-in-out;

    :hover {
      color: red; /* Muda para vermelho ao passar o mouse */
      transform: scale(1.2); /* Pequeno aumento ao passar o mouse */
    }
  }

  @media screen and (max-width: 900px) {
    justify-content: center; /* Centralizar ícones em telas menores */
    padding-top: 1rem;
    font-size: 2.5rem; /* Ícones maiores em telas menores */
  }
`;

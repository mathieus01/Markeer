import styled from 'styled-components';

export const SurgeriesList = styled.ul`
  max-height: 48vh;
  overflow: auto;
  margin-bottom: 0;
  overflow-x: hidden;

  @media (max-width: 425px) {
    max-height: 50vh;
  }

  .item-enter {
    opacity: 0;
    transform: translateX(-100px);
  }
  .item-enter-active {
    opacity: 1;
    transform: translateX(0px);
    transition: opacity 500ms, transform 500ms;
  }
  .item-exit {
    opacity: 1;
    transform: translateX(0px);
  }
  .item-exit-active {
    opacity: 0;
    transform: translateX(100px);
    transition: opacity 500ms, transform 500ms;
  }
`;

export const SurgeryItem = styled.li`
  cursor: pointer;
  border-bottom: 1px solid #eff2f7;

  &:last-child {
    border-bottom: 0px;
  }
  strong {
    font: normal 600 0.875rem/1rem var(--roboto);
    color: var(--title-color);
  }
  small {
    font: normal 400 0.8125rem/0.8125rem var(--roboto);
    color: var(--text-color);
  }
  p {
    font: normal 400 0.8125rem/0.8125rem var(--roboto);
    color: var(--text-color);
  }
  span {
    font: normal 400 0.8125rem/0.8125rem var(--roboto);
    color: var(--text-color);
  }
`;

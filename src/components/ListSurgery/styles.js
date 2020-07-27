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
    color: var(--title-color);
    font-size: 16px;
    font-weight: 600;
  }
  small {
    color: var(--title-color2);
    font-size: 14px;
    font-weight: 400;
  }
  p {
    color: var(--title-color2);
    font-size: 14px;
    font-weight: 400;
  }
  span {
    color: var(--title-color2);
    font-size: 14px;
    font-weight: 400;
  }
`;

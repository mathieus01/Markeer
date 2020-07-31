import styled from 'styled-components';

export const ProceduresList = styled.ul`
  min-height: fit-content;
  overflow-x: hidden;
  strong {
    font: normal 500 14px/18px var(--roboto) !important;
    text-transform: uppercase;
    color: var(--text-color) !important;
  }
  small {
    font: normal 400 13px/13px var(--roboto);
    color: var(--text-color) !important;
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

import styled from 'styled-components';

export const Container = styled.div`
  min-height: 500px;

  &::-webkit-scrollbar {
    width: 0.25rem;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: transparent;
  }
`;

export const Title = styled.div`
  min-height: fit-content;
  border-bottom: 1px solid #eff2f7;
`;

export const SurgeryHeader = styled.div`
  min-height: fit-content;
  border-bottom: 1px solid #eff2f7;

  span {
    font: normal 600 14px/16px var(--roboto);
    color: var(--text-color);
  }
  strong {
    font: normal 600 14px/20px var(--roboto);
    text-transform: uppercase;
    color: var(--title-color);
  }
`;

export const SurgeryInfo = styled.div`
  min-height: fit-content;
  strong {
    font: normal 600 18px/20px var(--roboto);
    text-transform: uppercase;
    color: var(--title-color);
  }
  span {
    font: normal 500 16px/16px var(--roboto);
    color: var(--text-color);
  }
  small {
    font: normal 400 14px/16px var(--roboto);
    color: var(--text-color);
  }
  svg {
    color: var(--title-color) !important;
  }
`;

export const SurgeryProcedure = styled.div`
  min-height: fit-content;
  strong {
    font: normal 600 16px/20px var(--roboto);
    text-transform: uppercase;
    color: var(--title-color);
  }
`;

export const ProceduresList = styled.ul`
  min-height: fit-content;
  strong {
    font: normal 500 14px/18px var(--roboto) !important;
    text-transform: uppercase;
    color: var(--text-color);
  }
  small {
    font: normal 400 13px/13px var(--roboto);
    color: var(--text-color);
  }

  li:last-child {
    border-bottom: none !important;
  }
`;

export const SurgeryPhotos = styled.div`
  min-height: fit-content;
  strong {
    font: normal 600 16px/20px var(--roboto);
    text-transform: uppercase;
    color: var(--title-color);
  }
  ul {
    list-style: none;
    li {
      line-height: 150px;
      list-style: none;
      background: var(--light-color);
      cursor: pointer;
    }
  }
`;

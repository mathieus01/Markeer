import styled from 'styled-components';

export const Container = styled.div`
  width: 550px;

  @media (max-width: 425px) {
    width: 90vw;
    height: 73vh;
  }
`;

export const Title = styled.div`
  border-bottom: 1px solid #eff2f7;
  min-height: fit-content;
`;

export const Body = styled.div`
  height: 92%;
  overflow-y: auto;

  label {
    color: var(--title-color);
    font-size: 0.875rem;
    font-weight: 600;
  }

  @media (max-width: 425px) {
    max-height: 54vh;
  }
`;

export const ButtonGroup = styled.div`
  height: 8%;
  min-height: 51px;
  border-top: var(--border-bottom);
  border-top: 1px solid #eff2f7;
`;

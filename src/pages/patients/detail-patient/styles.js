import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;

  @media (min-width: 1440px) {
    padding-right: 4rem !important;
    padding-left: 4rem !important;
  }

  @media (min-width: 1024px) and (max-width: 1439px) {
    padding-right: 4rem !important;
    padding-left: 4rem !important;
  }

  .surgery-search {
    border: none;
    border-radius: 8px;
    background: #f9fbfd;
    color: var(--text-color);
    font: normal 500 14px/16px var(--roboto);
    padding: 0.75rem !important;
    width: 86% !important;
  }
  .surgery-search::placeholder {
    color: var(--text-color) !important;
  }
`;

export const ListSurgeryTitle = styled.div`
  border-bottom: 1px solid #eff2f7;
  min-height: fit-content;
`;

export const PageTitle = styled.div`
  padding-top: 2rem;
  padding-bottom: 1.5rem;

  @media (max-width: 1439px) {
    color: var(--text-color-white);
    padding-top: 0.5rem;

    svg {
      color: var(--text-color-white);
    }
  }
`;

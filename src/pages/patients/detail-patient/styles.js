import styled from 'styled-components';

export const Container = styled.div`
  height: 94vh;
  overflow-y: auto;
  overflow-x: hidden;

  @media (min-width: 1248px) {
    padding-right: 9rem !important;
    padding-left: 9rem !important;
  }

  @media (min-width: 1024px) and (max-width: 1247px) {
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

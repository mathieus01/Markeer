import styled from 'styled-components';

export const Container = styled.div`
  padding: 2.5rem;
  height: 93vh;
  overflow-y: auto;
  overflow-x: hidden;

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

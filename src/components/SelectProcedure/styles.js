import styled from 'styled-components';

export const Container = styled.div``;

export const List = styled.ul`
  list-style-type: none;
  margin-bottom: 10px;
  max-height: 165px;
  overflow-y: auto;
`;
export const Item = styled.li`
  cursor: pointer;

  span {
    font: normal 400 15px/16px var(--roboto);
    color: var(--title-color);
  }
`;

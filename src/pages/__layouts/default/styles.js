import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  background: var(--background-color);
  /* background: #f5f9fc; */

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: -1;
    pointer-events: none;
    height: 475px;
    /* background: linear-gradient(270deg, #52b6fe, #4db4fe);  */
    background: linear-gradient(90deg, #2684ff 0%, #4c9aff 100%);
    border-bottom-right-radius: 30rem;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

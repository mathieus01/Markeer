import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background: transparent;
  /* background: #f5f9fc; */

  @media (max-width: 1439px) {
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      z-index: -1;
      pointer-events: none;
      height: 250px;
      background: var(--primary-color);
      opacity: 0.9;
      border-bottom-right-radius: 7rem;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
`;

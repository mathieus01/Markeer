import styled from 'styled-components';

export const List = styled.ul`
  height: 100%;
  max-height: 80vh;
  overflow: auto;
  margin-bottom: 0;

  .infinite-scroll-component__outerdiv {
    height: 100%;
  }
  div {
    &::-webkit-scrollbar {
      width: 0.25rem;
    }

    &::-webkit-scrollbar-track {
      background: transparent;
    }

    &::-webkit-scrollbar-thumb {
      background: transparent;
    }
  }
`;

export const Item = styled.li`
  cursor: pointer;
  border-bottom: 1px solid #eff2f7;

  &:last-child {
    border-bottom: 0px;
  }
`;

export const Avatar = styled.img`
  height: 3rem;
  width: 3rem;
  object-fit: cover;

  @media (min-width: 768px) and (max-width: 1024px) {
    height: 3rem;
    width: 3rem;
  }
`;

export const Section = styled.div`
  strong {
    font: normal 600 0.875rem/1rem var(--roboto);
    color: var(--title-color);
  }
  small {
    font: normal 400 0.8125rem/0.8125rem var(--roboto);
    color: var(--text-color);
  }
  p {
    font: normal 400 0.8125rem/0.8125rem var(--roboto);
    color: var(--text-color);
  }
  span {
    font: normal 400 0.8125rem/0.875rem var(--roboto);
    color: var(--text-color);
    max-width: 30vw;
    position: relative;
    flex-grow: 1;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;

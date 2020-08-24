import styled from 'styled-components';

export const List = styled.ul`
  height: 100%;
  max-height: 74vh;
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
    color: var(--title-color);
    font-size: 1rem;
    font-weight: 600;
  }
  small {
    color: var(--text-color);
    font-size: 0.875rem;
    font-weight: 400;
  }
  p {
    color: var(--text-color);
    font-size: 0.875rem;
    font-weight: 400;
  }
  span {
    max-width: 30vw;
    color: var(--text-color);
    font-weight: 400;
    font-size: 0.875rem;
    position: relative;
    flex-grow: 1;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;

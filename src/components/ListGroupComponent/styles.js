import styled from 'styled-components';

export const List = styled.ul`
  max-height: 83vh;
  overflow: auto;
  margin-bottom: 0;
`;

export const Item = styled.li`
  cursor: pointer;
`;

export const Avatar = styled.img`
  height: 4rem;
  width: 4rem;
  object-fit: cover;

  @media (min-width: 768px) and (max-width: 1024px) {
    height: 3rem;
    width: 3rem;
  }
`;

export const Section = styled.div`
  strong {
    font: normal 500 16px/20px var(--roboto);
    color: var(--title-color);
  }
  small {
    font: normal 300 13px/20px var(--roboto);
    color: #8a8f9d;
  }
  p {
    font: normal 400 15px/17px var(--roboto);
    color: var(--text-color);
  }
  span {
    font: normal 400 14px/18px var(--roboto);
    color: var(--text-color);
  }
`;

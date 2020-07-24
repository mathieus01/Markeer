import styled from 'styled-components';

export const List = styled.ul`
  max-height: 83vh;
  overflow: auto;
  margin-bottom: 0;
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
    color: var(--title-color2);
    font-size: 0.875rem;
    font-weight: 400;
  }
  p {
    color: var(--title-color2);
    font-size: 0.875rem;
    font-weight: 400;
  }
  span {
    color: var(--title-color2);
    font-size: 0.875rem;
    font-weight: 400;
  }
`;

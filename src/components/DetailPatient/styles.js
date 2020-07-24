import styled from 'styled-components';

export const Container = styled.div``;

export const Avatar = styled.img`
  height: 4rem;
  width: 4rem;
  object-fit: cover;

  @media (min-width: 768px) and (max-width: 1024px) {
    height: 3rem;
    width: 3rem;
  }
`;

export const PatientInfo = styled.div`
  strong {
    font: normal 400 15px/20px var(--roboto);
    color: var(--text-color);
  }
  small {
    font: normal 300 13px/20px var(--roboto);
    color: #8a8f9d;
  }
  p {
    font: normal 400 45px/34px var(--roboto);
    color: var(--title-color);
  }
`;

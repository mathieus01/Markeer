import styled from 'styled-components';

export const Container = styled.div`
  max-height: fit-content;
`;

export const Title = styled.div`
  border-bottom: 1px solid #eff2f7;
  min-height: fit-content;
`;

export const PatientInfo = styled.div`
  strong {
    font: normal 600 22px/26px var(--roboto);
    color: var(--title-color);
  }
`;

export const PatientAvatar = styled.img`
  height: 4rem;
  width: 4rem;
  object-fit: cover;
`;

export const PatientType = styled.div`
  strong {
    font: normal 600 16px/20px var(--roboto);
    color: var(--title-color);
  }
  span {
    font: normal 600 14px/18px var(--roboto);
    color: var(--text-color);
  }
`;

export const PatientSection = styled.div`
  span {
    font: normal 500 13px/20px var(--roboto);
    color: var(--text-color2);
  }
`;

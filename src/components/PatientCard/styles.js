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
    font: normal 600 14px/18px var(--roboto);
    color: var(--title-color);
  }
  span {
    font: normal 400 13px/13px var(--roboto);
    color: var(--title-color);
  }
`;

export const PatientSection = styled.div`
  span {
    font: normal 400 15px/16px var(--roboto);
    color: var(--text-color);
    position: relative;
    flex-grow: 1;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    max-width: 90%;
  }
`;

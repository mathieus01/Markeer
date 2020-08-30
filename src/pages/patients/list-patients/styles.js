import styled from 'styled-components';

export const Container = styled.div`
  max-height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;

  @media (min-width: 1440px) {
    padding-right: 4rem !important;
    padding-left: 4rem !important;
  }

  @media (min-width: 1024px) and (max-width: 1439px) {
    padding-right: 4rem !important;
    padding-left: 4rem !important;
  }

  .active {
    border-bottom: 3px solid var(--primary-color);
    color: var(--title-color) !important;
  }
  .patients-filter {
    span {
      font: normal 500 14px/18px var(--roboto);
      color: #8a8f9d;
      width: fit-content;
      cursor: pointer;
    }
  }
  .patients-list {
    max-height: 83vh;
    overflow: auto;
    margin-bottom: 0;
  }

  .patients-item {
    cursor: pointer;
  }

  .patient-avatar {
    height: 4rem;
    width: 4rem;
    object-fit: cover;

    @media (min-width: 768px) and (max-width: 1024px) {
      height: 3rem;
      width: 3rem;
    }
  }

  .patient-info {
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
  }

  .detail-patient {
    height: 83vh !important;
  }

  .detail-info {
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
  }
  .detail-content {
    span {
      font: normal 400 15px/18px var(--roboto);
      color: var(--text-color);
    }
  }

  .surgery-item {
    border-bottom: 1px solid #eff0f4;

    .surgery-type {
      border-left: 3px solid var(--primary-color);
      border-radius: 1.5px;
    }

    strong {
      font: normal 500 16px/20px var(--roboto);
      color: var(--title-color);
    }
    p {
      font: normal 400 14px/18px var(--roboto);
      margin: 0;
      color: var(--text-color);
    }
    small {
      font: normal 300 13px/20px var(--roboto);
      color: #8a8f9d;
    }
    span {
      font: normal 400 14px/18px var(--roboto);
      color: var(--text-color);
    }
  }

  @media (max-width: 430px) {
    .detail-info {
      p {
        font: normal 400 30px/34px var(--roboto);
      }
    }
  }
`;

export const ListPatientTitle = styled.div`
  border-bottom: 1px solid #eff2f7;
  min-height: fit-content;
`;

export const PageTitle = styled.div`
  padding-top: 2rem;
  padding-bottom: 1.5rem;

  @media (max-width: 1439px) {
    color: var(--text-color-white);
    padding-top: 0.5rem;

    svg {
      color: var(--text-color-white);
    }
  }
`;

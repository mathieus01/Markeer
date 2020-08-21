import styled from 'styled-components';

export const Container = styled.div`
  max-height: 94vh;
  overflow: auto;

  @media (min-width: 1248px) {
    padding-right: 9rem !important;
    padding-left: 9rem !important;
  }

  @media (min-width: 1024px) and (max-width: 1247px) {
    padding-right: 4rem !important;
    padding-left: 4rem !important;
  }

  .card-description {
    strong {
      font: normal bold 16px/20px var(--roboto);
      color: #262d41;
    }
    span {
      font: normal 500 14px/18px var(--roboto);
      color: #8a8f9d;
    }
  }

  .chart-header {
    border-bottom: 2px solid #f5f5f8;

    .chart-title {
      strong {
        font: normal bold 16px/20px var(--roboto);
        color: #262d41;
      }
    }
    .chart-order {
      span {
        font: normal 500 14px/18px var(--roboto);
        color: #8a8f9d;
      }
    }
  }

  .gender-header {
    border-bottom: 2px solid #f5f5f8;
    strong {
      font: normal bold 16px/20px var(--roboto);
      color: #262d41;
    }
  }
  .time-header {
    border-bottom: 2px solid #f5f5f8;
    strong {
      font: normal bold 16px/20px var(--roboto);
      color: #262d41;
    }
    span {
      font: normal 500 14px/18px var(--roboto);
      color: #8a8f9d;
    }
  }
  .division-header {
    border-bottom: 2px solid #f5f5f8;
    strong {
      font: normal bold 16px/20px var(--roboto);
      color: #262d41;
    }
  }
  .month-header {
    border-bottom: 2px solid #f5f5f8;
    strong {
      font: normal bold 16px/20px var(--roboto);
      color: #262d41;
    }
  }

  .division-list {
    list-style-type: none;

    .division-item {
      .label {
        svg {
          margin-right: 10px;
          transition: color 0.8s cubic-bezier(0.5, 0.01, 0.52, 1);
        }

        span {
          font: normal 400 15px/20px var(--roboto);
          transition: color 0.8s cubic-bezier(0.5, 0.01, 0.52, 1);
        }
      }
      strong {
        font: normal 500 15px/20px var(--roboto);
      }
    }
  }
`;

import styled from 'styled-components';

export const ListSurgeries = styled.ul``;

export const SurgeryItem = styled.li`
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
    color: var(--text-color2);
  }
`;

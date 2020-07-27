import styled from 'styled-components';

export const Container = styled.div``;

export const List = styled.ul`
  list-style-type: none;
  margin-bottom: 10px;
  max-height: 165px;
  overflow-y: auto;
`;
export const Item = styled.li`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #eff2f7 !important;

  span {
    font: normal 400 14px/13px var(--roboto);
    color: var(--title-color);

    &:last-child {
      font: normal 400 13px/13px var(--roboto);
      color: var(--title-color2);
    }
  }
`;

export const ProcedureInput = styled.input`
  display: block;
  width: 100%;
  height: calc(1.5em + 1.5rem + 2px);
  padding: 0.75rem 1.25rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #8492a6;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #e0e6ed;
  border-radius: 0.25rem;
  -webkit-box-shadow: inset 0 1px 1px rgba(31, 45, 61, 0.075);
  box-shadow: inset 0 1px 1px rgba(31, 45, 61, 0.075);
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;

  &:focus {
    color: #8492a6;
    background-color: #fff;
    border-color: #05aaff;
    outline: 0;
    -webkit-box-shadow: inset 0 1px 1px rgba(31, 45, 61, 0.075), 0 0 20px rgba(5, 170, 255, 0.1);
    box-shadow: inset 0 1px 1px rgba(31, 45, 61, 0.075), 0 0 20px rgba(5, 170, 255, 0.1);
  }
`;

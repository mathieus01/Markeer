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
`;

export const Input = styled.input`
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

import styled from 'styled-components';

export const SelectCustomize = styled.select`
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
  border: none !important;
  border-left: 2px solid var(--primary-color) !important;
  border-bottom: 1px solid #f0f0f4 !important;
  border-radius: 2px;
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;

  &:focus {
    color: #8492a6;
    background-color: #fff;
    border-color: #05aaff;
    outline: 0;
  }
`;

export const Error = styled.span`
  font-size: 13px;
`;

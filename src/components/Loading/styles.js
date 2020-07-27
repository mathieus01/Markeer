import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  position: relative;
  z-index: 1000;
  display: flex;
  justify-content: center;

  .lds-dual-ring {
    display: inline-block;
    position: absolute;
    width: 80px;
    height: 80px;
  }
  .lds-dual-ring:after {
    content: ' ';
    display: block;
    width: 48px;
    height: 48px;
    margin: 8px;
    border-radius: 50%;
    border: 3px solid black;
    border-color: black transparent black transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }
  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

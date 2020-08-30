import styled, { css } from 'styled-components';

export const Container = styled.aside`
  display: flex;
  flex-direction: column;
  padding: 25px 0px;
  height: 100vh;
  width: 13rem;
  background: var(--primary-color);

  @media (max-width: 1225px) {
    position: absolute;
    z-index: 42;
  }

  @media (max-width: 425px) {
    box-shadow: 10px 0px 26px -15px rgba(0, 0, 0, 0.8);
    height: 94vh;
  }
`;

export const UserArea = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding-top: 0.7rem;
  padding-bottom: 1.5rem;

  img {
    height: 35px;
    width: 35px;
    background-color: rgba(0, 92, 215, 1);
    border-radius: 50%;
    padding: 3px;
    margin-right: 0.5rem;
  }

  span {
    font: normal 600 1rem/1rem 'Nunito';
    color: var(--text-color-white);
  }
  small {
    font: normal 600 0.875rem/0.875rem 'Nunito';
    color: var(--text-color-white);
    cursor: pointer;
  }
`;

export const Logo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px 10px !important;
  width: 100%;

  img {
    height: 30px;
    width: 30px;
    background: #fff;
    border-radius: 50%;
    padding: 1px;
    margin-bottom: 0.2rem;
  }

  span {
    font: normal 600 22px/22px 'Kaushan Script';
    letter-spacing: 1.5px;
    color: var(--text-color-white);
  }
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0px;
  background: url(/static/media/doctor.f9d50483.png) no-repeat 50% 90%;
  background-size: 200px;
`;

export const List = styled.ul`
  padding: 2.5rem 0rem;
  list-style-type: none;
`;

export const Item = styled.li`
  padding: 0.8rem 0px;

  span {
    font: normal 300 13px/13px var(--roboto);
    color: var(--text-color-white);
    margin-top: 5px;
  }

  svg {
    color: var(--text-color-white) !important;
    margin-right: 1rem;
  }

  a {
    display: flex;
    justify-content: start;
    align-items: center;
  }

  ${(props) =>
    props.isSelected &&
    css`
      border-left: 3px solid #fff !important;
      background: #004dd3 !important;
    `}
`;

import styled, { css } from 'styled-components';

export const Container = styled.aside`
  display: flex;
  flex-direction: column;
  padding: 25px 0px;
  height: 100vh;
  width: 4vw;
  background: var(--primary-color);

  @media (min-width: 1024px) and (max-width: 1248px) {
    min-width: 8vw;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    min-width: 10vw;
  }

  @media (max-width: 767px) {
    min-width: 18vw;
  }
`;

export const Logo = styled.div`
  display: flex;
  padding: 0px 10px !important;
  flex-direction: column;
  width: 100%;

  img {
    height: 40px;
    width: 40px;
    background: #fff;
    border-radius: 50%;
    padding: 3px;
  }

  span {
    font: normal 600 15px/16px 'Nunito';
    letter-spacing: 2px;
    color: var(--text-color-white);
    margin-top: 10px;
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
  margin-bottom: 1rem;
  padding: 0.5rem 0px;

  span {
    font: normal 300 10px/12px var(--roboto);
    color: var(--text-color-white);
    margin-top: 5px;
  }

  svg {
    color: var(--text-color-white) !important;
  }

  a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  ${(props) =>
    props.isSelected &&
    css`
      border-left: 3px solid #fff !important;
      background: #004dd3 !important;
    `}
`;

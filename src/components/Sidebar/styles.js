import styled from 'styled-components';

export const Container = styled.aside`
  display: flex;
  flex-direction: column;
  padding: 25px 5px;
  height: 100vh;
  min-width: 4vw;
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
  flex-direction: column;
  width: 100%;

  img {
    height: 45px;
    width: 45px;
    background: #fff;
    border-radius: 50%;
    padding: 3px;
  }

  span {
    font: normal 600 16px/24px 'Kaushan Script';
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
  margin-bottom: 1.5rem;

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
`;

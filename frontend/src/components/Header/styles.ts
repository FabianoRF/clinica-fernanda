import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.header`
  background: #ff0088;
  height: 120px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  > div {
    flex: 1;
    max-width: 1200px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  color: #fff;

  h1 {
    font-family: Norican;
    font-size: 46px;
  }
  span {
    margin-top: -10px;
  }
`;

export const HeaderOptions = styled.div`
  display: flex;
  justify-content: center;

  a {
    text-decoration: none;
    color: #fff;
    font-weight: 500;
    font-size: 22px;
    transition: color 0.2s;

    & + a {
      margin-left: 30px;
    }

    &:hover {
      color: ${shade(0.1, '#fff')};
    }
  }
`;

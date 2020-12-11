import styled from 'styled-components';
import { shade } from 'polished';

export const Content = styled.main`
  max-width: 1100px;
  margin: 0 auto;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    padding: 20px 0 20px;

    div {
      display: flex;
      justify-content: start;
      align-items: center;
      width: 100%;

      background: #ffbad3;
      border-radius: 20px;
      padding: 20px;

      input {
        margin-left: 30px;
        color: #fff;
        width: 100%;
        font-size: 20px;

        border: 0;
        background: transparent;

        &::placeholder {
          color: #fff;
        }
      }
    }

    button {
      background: #9abc9f;
      border: 0;
      padding: 20px 25px;
      margin-left: 20px;
      color: #fff;
      font-size: 22px;
      border-radius: 20px;
      transition: background 0.2s;

      &:hover {
        background-color: ${shade(0.2, '#9abc9f')};
      }
    }
  }
`;

export const Table = styled.main`
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  background: rgba(255, 186, 211, 0.15);

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  padding: 20px;

  div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 12px;
    margin-top: 12px;

    border-top: 2px solid #ffbad3;

    span {
      font-size: 18px;
    }

    button {
      display: flex;
      align-items: center;

      background: #ff0088;
      border: 0;
      padding: 10px;
      margin-left: 20px;
      color: #fff;
      font-size: 18px;
      font-weight: 500;
      border-radius: 20px;
      transition: background 0.2s;

      &:hover {
        background-color: ${shade(0.2, '#ff0088')};
      }

      svg {
        margin-right: 5px;
      }
    }
  }
`;

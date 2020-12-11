import styled from 'styled-components';
import { shade } from 'polished';

export const Content = styled.main`
  max-width: 900px;
  margin: 10px auto;

  h1,
  h2,
  h3,
  h4 {
    color: #ff0088;
  }

  form {
    margin-top: 40px;
    width: 100%;

    section {
      margin-top: 40px;

      h2 {
        padding-bottom: 20px;
      }
      span {
        margin-top: 10px;
      }

      & + section {
        padding-top: 10px;
        border-top: 2px solid #ffbad3;
      }
    }

    > div {
      display: flex;
      justify-content: center;
      button {
        background: #ff0088;
        padding: 15px 20px;
        border-radius: 20px;
        border: 0;
        margin: 20px auto;

        color: #fff;
        font-weight: 500;
        font-size: 22px;
        transition: background 0.3s;

        &:hover {
          background: #ffbad3;
        }
      }
    }

    .checkbox-section {
      max-width: 600px;
      margin: 0 auto;
    }

    #grid3x1 {
      display: grid;
      grid-template-columns: 3fr 1fr;

      div + div {
        padding-left: 10px;
      }
    }

    #grid1x1 {
      display: grid;
      grid-template-columns: 1fr 1fr;

      div + div {
        padding-left: 10px;
      }
    }

    #group {
      padding: 13px 0;

      input {
        margin: 0 5px;
      }
    }
  }
`;

export const Footer = styled.footer`
  width: 100%;
  background-color: #ff0088;
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 10px;
    background: transparent;
    color: #fff;
    border: 0;

    font-weight: 500;
    font-size: 18px;

    &:hover {
      background: ${shade(0.2, '#ff0088')};
    }
  }
`;

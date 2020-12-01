import styled from 'styled-components';
import { shade } from 'polished';

export const Content = styled.main`
  max-width: 900px;
  margin: 10px auto;

  h2,
  h3 {
    color: #ff0088;
  }

  form {
    margin-top: 40px;

    section {
      margin-top: 40px;

      h3 {
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

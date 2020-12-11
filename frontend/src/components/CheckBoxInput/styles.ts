import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    padding: 5px;
  }

  div {
    label {
      padding: 0 20px;

      input {
        margin-right: 5px;
      }
    }
  }
`;

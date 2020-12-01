import styled, { css } from 'styled-components';

interface ContainerProps {
  isGroup?: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  display: flex;
  flex-direction: column;

  span {
    padding-right: 20px;
    margin-bottom: 10px;
    margin-left: 5px;
  }

  textarea {
    resize: none;
    padding: 10px;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;

    border: 1px solid #b4b4b4;
    border-radius: 20px;
  }
`;

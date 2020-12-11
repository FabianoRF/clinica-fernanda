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

  ${props =>
    props.isGroup
      ? css`
          flex-direction: row;
          align-items: center;

          input {
            border: 0;
            border-bottom: 1px solid #b4b4b4;
            flex: 1;
          }
        `
      : css`
          input {
            border-radius: 10px;
            border: 0;
            padding: 7px;

            border: 1px solid #b4b4b4;
          }
        `}
`;

import styled, { css } from 'styled-components';
import { buttonColor } from '../../styles/color';
import FontSize from '../../styles/FontSize';

const { big, medium } = FontSize;
const commonStyle = css`
  width: 100%;
  border-radius: 3px;
  cursor: pointer;
`;

export const BigButton = styled.button`
  font-size: ${big};
  height: 45px;
  ${commonStyle}

  ${({ color }) =>
    buttonColor[color] &&
    css`
      background: ${buttonColor[color][0]};
      color: ${buttonColor[color][1]};
      border: 1px solid ${buttonColor[color][2]};
    `}
`;

export const MidButton = styled.button`
  font-size: ${medium};
  height: 40px;
  ${commonStyle}

  ${({ color }) =>
    buttonColor[color] &&
    css`
      background: ${buttonColor[color][0]};
      color: ${buttonColor[color][1]};
      border: 1px solid ${buttonColor[color][2]};
    `}
`;

export const ButtonGroup = styled.div`
  display: flex;
  width: ${({ width }) => (width ? `${width}px` : `100%`)};
  margin: 20px auto;
  button {
    width: 0;
    flex-grow: 1;
  }

  button + button {
    margin-left: 5px;
  }
`;

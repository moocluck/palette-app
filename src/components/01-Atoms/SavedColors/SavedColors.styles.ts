import styled, { css } from 'styled-components';
import { typography } from '../../../styles/settings.typography.styles';  

export interface SwatchProps {
  background: string,
  foreground: string
}

const SwatchStyles = styled.button<SwatchProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  margin-right: 12px;
  border-radius: 4px;
  font-size: ${typography.body.size.large};
  font-variation-settings: "wght" ${typography.weight.bold};
  line-height: 1;
  vertical-align: middle;
  cursor: pointer;
  appearance: none;

  &:last-child {
    margin-right: 0;
  }

  ${props => props.background && css`
    background-color: ${props.background};
  `}

  ${props => props.foreground && css`
    border: 1px solid ${props.foreground};
    color: ${props.foreground};
  `}
`;

export default SwatchStyles;

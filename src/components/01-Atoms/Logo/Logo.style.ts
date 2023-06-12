import styled, { css } from 'styled-components';

export interface SvgProps {
  color: string
}

const SvgStyles = styled.svg<SvgProps>`
  
  ${props => props.color && css`
    fill: ${props.color};
  `}
`;

export default SvgStyles;
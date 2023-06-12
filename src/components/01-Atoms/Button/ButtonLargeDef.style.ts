import styled, { css } from 'styled-components';
import { typography } from '../../../styles/settings.typography.styles';

export interface ButtonLargeProps {
  color: string,
  width?: string,
}

export const ButtonLargeDef = styled.button<ButtonLargeProps>`
display: block;
padding: 12px 20px;
border-radius: 8px;
font-size: ${typography.body.size.xlarge};
font-variation-settings: "wght" ${typography.weight.semibold};
background-color: #1B1B1F;
color: #F2F0F4;


  ${props => !!props.width && css`
    width: ${props.width};
    padding: 0;

    height: 38px;

    display: flex;
    justify-content: center;
    align-items: center;
  `}
`;
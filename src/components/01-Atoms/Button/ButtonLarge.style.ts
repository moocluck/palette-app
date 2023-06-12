import styled, { css } from 'styled-components';
import { colors } from '../../../styles/settings.colors.styles';
import { typography } from '../../../styles/settings.typography.styles';

export interface ButtonLargeProps {
  color: string,
  width?: string,
}

export const ButtonLarge = styled.button<ButtonLargeProps>`
display: block;
padding: 12px 20px;
border-radius: 8px;
font-size: ${typography.body.size.xlarge};
font-variation-settings: "wght" ${typography.weight.semibold};


  ${props => !!props.width && css`
    width: ${props.width};
    padding: 0;

    height: 38px;

    display: flex;
    justify-content: center;
    align-items: center;
  `}

  ${props => props.color === '#222222' && css`
    background-color: ${props.color};
    color: ${colors.light}
  `}

  ${props => props.color === '#ffffff' && css`
    background-color: ${props.color};
    color: ${colors.dark}
  `}

  ${props => props.color !== '#222222' && props.color !== '#ffffff' && css`
    background-color: ${props.color};
    color: var(--background);
  `}
`;
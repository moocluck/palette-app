import styled, { css } from 'styled-components';
import { colors } from '../../../styles/settings.colors.styles';
import { typography } from '../../../styles/settings.typography.styles';

export interface ButtonXLargeProps {
  color: string
}

export const Button2XLarge = styled.button<ButtonXLargeProps>`
  display: block;
  width: 100%;
  padding: 16px 28px;;
  border-radius: 8px;
  font-size: ${typography.body.size.xlarge};
  font-variation-settings: "wght" ${typography.weight.semibold};

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

export const Button2XLargeTransparent = styled.button<ButtonXLargeProps>`
  display: block;
  width: 100%;
  padding: 16px 28px;;
  border-radius: 8px;
  font-size: ${typography.body.size.xlarge};
  font-variation-settings: "wght" ${typography.weight.semibold};
  
  ${props => props.color === '#222222' && css`
    background-color: #transparent;
    color: ${colors.dark}
  `}

  ${props => props.color === '#ffffff' && css`
    background-color: #transparent;
    color: ${colors.light}
  `}

  ${props => props.color !== '#222222' && props.color !== '#ffffff' && css`
    background-color: #transparent;
    color: ${colors.dark};
  `}
`;

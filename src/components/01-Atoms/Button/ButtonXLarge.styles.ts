import styled, { css } from 'styled-components';
import { colors } from '../../../styles/settings.colors.styles';
import { typography } from '../../../styles/settings.typography.styles';
import { minWidth } from '../../../styles/settings.breakpoints.styles';
import spacing from '../../../styles/settings.spacing.styles';

export interface ButtonXLargeProps {
  color: string
}

export const ButtonXLarge = styled.button<ButtonXLargeProps>`
  display: block;
  width: 100%;
  margin-bottom: ${spacing.margin * 1.5}px;
  padding: ${(spacing.padding * 1.3).toFixed(0)}px ${spacing.padding * 1.5}px;
  border-radius: 8px;
  font-size: ${typography.body.size.xlarge};
  font-variation-settings: "wght" ${typography.weight.medium};

  ${minWidth(768, () => css`
    display: inline-block;
    width: auto;
    margin-bottom: 0;
    vertical-align: middle;

    &:first-child {
      margin-right: ${spacing.margin}px;
    }
  `)}

  ${minWidth(992, () => css`
    &:first-child {
      margin-right: ${spacing.margin * 2}px;
    }
  `)}

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

export const CopyButton = styled.button`
  position: absolute;
  top: 50%;
  right: 0;
  width: 25px;
  height: 25px;
  border: none;
  outline: none;
  transform : translateY(-50%);

  &:active svg,
  &:focus svg {
    outline: -webkit-focus-ring-color auto 5px;
    outline-offset: -2px;
  }

  ${minWidth(640, () => css`
    width: 30px;
    height: 30px;
  `)}
`;

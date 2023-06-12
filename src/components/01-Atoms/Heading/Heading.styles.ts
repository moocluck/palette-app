import styled, { css } from 'styled-components';
import { typography } from '../../../styles/settings.typography.styles';

export interface HeadingProps {
  weight?: string,
  grade?: boolean,
  sgrade?: boolean,
  noMargin?: boolean,
  xsmall?: boolean,
  small?: boolean,
  medium?: boolean,
  large?: boolean,
  xlarge?: boolean
}

export const Heading1 = styled.h1<HeadingProps>`
  font-family: var(--font);

  ${props => !props.grade && css`
    font-variation-settings: "wght" ${typography.weight.bold};
    line-height: ${typography.lineHeight.heading};
  `}

  ${props => props.xsmall && css`
    font-size: ${typography.heading.size.xsmall};
    line-height: 28px;
  `}

  ${props => props.small && css`
    font-size: ${typography.heading.size.small};
    line-height: 32px;
  `}

  ${props => props.medium && css`
    font-size: ${typography.heading.size.medium};
    line-height: 36px;
  `}

  ${props => props.large && css`
    font-size: ${typography.heading.size.large};
    line-height: 40px;
  `}

  ${props => props.xlarge && css`
    font-size: ${typography.heading.size.xlarge};
    line-height: 44px;
  `}

  ${props => props.grade && css`
    color: var(--foreground);
    font-size: ${typography.heading.size.grade};
    font-weight: 700;
    line-height: 0.85;
  `}

  ${props => props.weight && css`
  font-variation-settings: "wght" ${props.weight};
  `}
`;

export const Heading2 = Heading1.withComponent('h2');
export const Heading3 = Heading1.withComponent('h3');
export const Heading4 = Heading1.withComponent('h4');
export const Heading5 = Heading1.withComponent('h5');
export const Span = Heading1.withComponent('span');

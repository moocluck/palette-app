import styled, { css } from 'styled-components';
import { typography } from '../../../styles/settings.typography.styles';

export interface LabelProps {
  medium?: boolean,
  bold?: boolean,
  heading?: boolean,
  select?: boolean
}

const Label = styled.label<LabelProps>`
  display: inline-block;
  color: inherit;
  cursor: pointer;

  ${props => props.medium && css`
    font-variation-settings: "wght" ${typography.weight.medium};
  `}

  ${props => props.bold && css`
    font-variation-settings: "wght" ${typography.weight.bold};
  `}

  ${props => props.heading && css`
    font-size: ${typography.heading.size.medium};
  `}

  ${props => props.select && css`
    font-size: ${typography.heading.size.small};
  `}
`;

export default Label;

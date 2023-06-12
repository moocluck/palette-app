import styled, { css } from 'styled-components';
import { typography } from '../../../styles/settings.typography.styles';
import { minWidth } from '../../../styles/settings.breakpoints.styles';
import spacing from '../../../styles/settings.spacing.styles';

export interface RatioProps {
  color: string | undefined
}

const RatioStyles = styled.span<RatioProps>`
  display: inline-block;
  margin-right: ${spacing.margin}px;
  margin-left: ${spacing.margin}px;
  font-size: ${typography.heading.size.medium};
  font-variation-settings: "wght" ${typography.weight.medium};
  line-height: 1;

  ${props => props.color && css`
    color: ${props.color};
  `}

  ${minWidth(768, () => css`
    margin-right: ${spacing.margin * 2}px;
    margin-left: ${spacing.margin * 2}px;
    font-size: ${typography.heading.size.sgrade};
  `)}
`;

export default RatioStyles;

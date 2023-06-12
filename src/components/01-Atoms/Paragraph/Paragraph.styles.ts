import styled, { css } from 'styled-components';
import { typography } from '../../../styles/settings.typography.styles';

export interface ParagraphProps {
  weight?: string,
  small?: boolean,
  medium?: boolean,
  large?: boolean,
  xlarge?: boolean
}

export const Paragraph = styled.p<ParagraphProps>`
  font-family: var(--font);
  color: #1B1B1F;

  ${props => props.small && css`
    font-size: ${typography.body.size.small};
    line-height: 12px;
  `}

  ${props => props.medium && css`
    font-size: ${typography.body.size.medium};
    line-height: 16px;
  `}

  ${props => props.large && css`
    font-size: ${typography.body.size.large};
    line-height: 18px;
  `}

  ${props => props.xlarge && css`
    font-size: ${typography.body.size.xlarge};
    line-height: 20px;
  `}

  ${props => props.weight && css`
    font-variation-settings: "wght" ${props.weight};
  `}
`;

export default Paragraph;
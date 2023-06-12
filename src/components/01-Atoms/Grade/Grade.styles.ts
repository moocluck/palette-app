import styled, { css } from 'styled-components';
import { typography } from '../../../styles/settings.typography.styles';
import { minWidth } from '../../../styles/settings.breakpoints.styles';

const Grade = styled.h1`
  width: 65%;
  color: inherit;
  font-size: ${typography.heading.size.medium};
  font-variation-settings: "wght" ${typography.weight.medium};
  line-height: 1;
  word-break: break-word;
  margin-bottom: 0px;

  ${minWidth(375, () => css`
    width: 80%;
    font-size: ${typography.heading.size.small};

  `)}

  ${minWidth(640, () => css`
    word-break: normal;
  `)}

  ${minWidth(768, () => css`
    width: auto;
  `)}
`;

export default Grade;

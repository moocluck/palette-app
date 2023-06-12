import styled, { css } from 'styled-components';
import { minWidth } from './settings.breakpoints.styles';

export const Container = styled.div`
  position: relative;
  padding-right: 5vw;
  padding-left: 5vw;
  

  ${minWidth(992, () => css`
    max-width: 1664px;
    margin: 0 auto;
    padding-right: 128px;
    padding-left: 128px;
  `)}
`;

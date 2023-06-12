import styled from 'styled-components';
import { CSSProperties } from 'react';

export interface ButtonLargeProps {
  color: string
}

const HeaderColorStyles = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 32px 0px;
  gap: 32px;

  border-bottom: 1px solid #C5C6D0;

  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
`;

export const linkStyles: CSSProperties = {
  textDecoration: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

export const divStyles: CSSProperties = {
  textDecoration: 'none',
  gap: '32px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

export const imgStyles: CSSProperties ={

};

export default HeaderColorStyles;

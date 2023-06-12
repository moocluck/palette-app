import { CSSProperties } from 'react';

export const divStyles: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
  width: '100%',
};

export const labelStyles: CSSProperties = {
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '16px',
  lineHeight: '20px',

  color: '#44464F',
};

export const inputStyles: CSSProperties = {
  padding: '12px 4px',
  borderBottom: '1px solid #757780',
  fontWeight: 500,
  fontSize: 24,
  lineHeight: '36px',
  color: '#1B1B1F',
  outline: 'none',
};

export const placeholderStyles: CSSProperties = {
  fontWeight: 500,
  fontSize: 24,
  lineHeight: '36px',
  color: '#44464F',
};

export const ellipsisStyles: CSSProperties = {
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
}

import IconStyles from './Icon.styles';
import { useColourContrast } from '../../05-Contexts/Context';

export function Clipboard() {
  const { colorState } = useColourContrast();

  return (
    <IconStyles xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true"><path fill={colorState} fillRule="nonzero" d="M3.429 19.2h6.857v1.6H3.429v-1.6zM12 9.6H3.429v1.6H12V9.6zm3.429 4.8v-3.2L10.286 16l5.143 4.8v-3.2H24v-3.2h-8.571zm-7.715-1.6H3.43v1.6h4.285v-1.6zM3.43 17.6h4.285V16H3.43v1.6zm15.428 1.6h1.714v3.2c-.034.448-.188.832-.514 1.12-.326.288-.72.448-1.2.48H1.714C.771 24 0 23.28 0 22.4V4.8c0-.88.771-1.6 1.714-1.6h5.143c0-1.776 1.526-3.2 3.429-3.2 1.903 0 3.428 1.424 3.428 3.2h5.143c.943 0 1.714.72 1.714 1.6v8h-1.714V8H1.714v14.4h17.143v-3.2zM3.43 6.4h13.714c0-.88-.772-1.6-1.714-1.6h-1.715C12.771 4.8 12 4.08 12 3.2c0-.88-.771-1.6-1.714-1.6S8.57 2.32 8.57 3.2c0 .88-.771 1.6-1.714 1.6H5.143c-.943 0-1.714.72-1.714 1.6z" /></IconStyles>
  );
}

export function Chevron() {
  const { colorState } = useColourContrast();

  return (
    <IconStyles select xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 20 20" aria-hidden="true"><path fill={colorState} d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></IconStyles>
  );
}

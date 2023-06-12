import { memo } from 'react';
import Badge from '../../01-Atoms/Badge/Badge.styles';
import Grade from '../../01-Atoms/Grade/Grade.styles';
import Result from '../../02-Molecules/Result/Result.styles';
import WcagStyles from './Wcag.styles';
import { useColourContrast } from '../../05-Contexts/Context';

export interface WcagProps {
  id: string
}

function Wcag(props: WcagProps) {
  const { level, colorState } = useColourContrast();
  const { AALarge, AAALarge, AA, AAA } = level;

  return (
    <WcagStyles {...props} color={colorState}>
      <Result>
        <Grade aria-hidden="true">AA Large</Grade>
        <Badge color={colorState} aria-hidden="true">
          {AALarge}
        </Badge>
      </Result>

      <Result>
        <Grade aria-hidden="true">AAA Large</Grade>
        <Badge color={colorState} aria-hidden="true">
          {AAALarge}
        </Badge>
      </Result>

      <Result>
        <Grade aria-hidden="true">AA Normal</Grade>
        <Badge color={colorState} aria-hidden="true">
          {AA}
        </Badge>
      </Result>

      <Result>
        <Grade aria-hidden="true">AAA Normal</Grade>
        <Badge color={colorState} aria-hidden="true">
          {AAA}
        </Badge>
      </Result>
    </WcagStyles>
  );
}

export default memo(Wcag);

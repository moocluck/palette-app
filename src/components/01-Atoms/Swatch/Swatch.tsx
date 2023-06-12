import React, { Fragment, memo } from 'react';
import SwatchStyles from './Swatch.styles';
import { ButtonXLarge } from '../Button/ButtonXLarge.styles';
import { useColourContrast } from '../../05-Contexts/Context';
import { hexToHsl } from '../../Utils';

function Swatch() {
  const { colors, colorState, reverseColors, saveColors, updateView, updatePath } = useColourContrast();

  function appendColors(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    const target = event.target as HTMLButtonElement;
    const background = hexToHsl(target.getAttribute('data-background') as string);
    const foreground = hexToHsl(target.getAttribute('data-foreground') as string);

    if (updateView && updatePath) {
      updateView(background as number[], foreground as number[]);
      updatePath(background as number[], foreground as number[]);
    }
  }

  const renderSwatch = ({ background, foreground }: CC.ColorsProps, index: number) => (
    <SwatchStyles
      key={index}
      background={background}
      foreground={foreground}
      data-background={background}
      data-foreground={foreground}
      onClick={appendColors}
      aria-label={`Swatch: Background = ${background}. Foreground = ${foreground}. Click/Tap to apply these colour values.`}
    >
      Aa
    </SwatchStyles>
  );

  return (
    <Fragment>
      <ButtonXLarge type="button" color={colorState as string} onClick={reverseColors}>Перевернуть цвета</ButtonXLarge>
      <ButtonXLarge type="button" color={colorState as string} onClick={saveColors}>Сохранить пару</ButtonXLarge>

      {colors && colors.map((color, index) => renderSwatch(color, index))}
    </Fragment>
  );
}

export default memo(Swatch);

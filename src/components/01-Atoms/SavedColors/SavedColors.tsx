import { Fragment, memo } from "react";
import SwatchStyles from "./SavedColors.styles";
import { useColourContrast } from "../../05-Contexts/Context";

function SavedColors() {
  const { colors } = useColourContrast();

  const renderSwatch = (
    { background, foreground }: CC.ColorsProps,
    index: number
  ) => (
    <SwatchStyles
      key={index}
      background={background}
      foreground={foreground}
      data-background={background}
      data-foreground={foreground}
      aria-label={`Swatch: Background = ${background}. Foreground = ${foreground}. Click/Tap to apply these colour values.`}
    >
      Aa
    </SwatchStyles>
  );

  return (
    <Fragment>
      {colors && colors.map((color, index) => renderSwatch(color, index))}
    </Fragment>
  );
}

export default memo(SavedColors);

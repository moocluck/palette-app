import { memo } from "react";
import SelectStyles, { SelectWrapper } from "./SelectDefault.styles";
import { Chevron } from "../Icon/Icon";
import { useColourContrast } from "../../05-Contexts/Context";

import {
  divStyles,
  labelStyles,
  inputStyles,
  placeholderStyles,
  ellipsisStyles,
} from "../InputDefault/InputDefault.styles";

function SelectDefault({ id, value, onChange, options, renderOption, label }) {
  return (
    <div>
      <label htmlFor={id} style={labelStyles}>
        {label}
      </label>
      <SelectWrapper>
        <SelectStyles value={value} id={id} onChange={onChange}>
          {options &&
            options.map((option, index) => renderOption(option, index))}
        </SelectStyles>
        <Chevron />
      </SelectWrapper>
    </div>
  );
}

export default memo(SelectDefault);

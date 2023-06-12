import React from "react";
import { Link } from "react-router-dom";
import Paragraph from "../Paragraph/Paragraph.styles";
import { linkStyles } from "./ButtonBack.styles";

const ButtonBack = () => {
  return (
    <Link to="/" style={linkStyles}>
      <img src="/images/icons/chevron-left.svg" alt="Иконка назад" />
      <Paragraph>Назад</Paragraph>
    </Link>
  );
};

export default ButtonBack;

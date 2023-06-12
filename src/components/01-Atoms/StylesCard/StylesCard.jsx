import { memo } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Item } from "./StylesCard.styles";
import { useColourContrast } from "../../05-Contexts/Context";
import Paragraph from "../Paragraph/Paragraph.styles";

const StylesCard = ({ size, font, ratio, weight, onClick }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) {
        onClick({size, font, ratio, weight});
    }

    navigate(`/typographic-scale/${size}/${ratio}/${font}/${weight}`);
  }

  return (
    <div onClick={handleClick}>
      <Container>
        <Item>
          <Paragraph large>Базовый размер</Paragraph>
          <Paragraph xlarge weight="500">
            {size}
          </Paragraph>
        </Item>
        <Item>
          <Paragraph large>Font from Google</Paragraph>
          <Paragraph xlarge weight="500">
            {font}
          </Paragraph>
        </Item>
        <Item>
          <Paragraph large>Шкала</Paragraph>
          <Paragraph xlarge weight="500">
            {ratio}
          </Paragraph>
        </Item>
        <Item>
          <Paragraph large>Толщина</Paragraph>
          <Paragraph xlarge weight="500">
            {weight}
          </Paragraph>
        </Item>
      </Container>
    </div>
  );
};

export default memo(StylesCard);

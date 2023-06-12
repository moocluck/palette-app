import GlobalStyles from "../../styles/settings.global.styles";
import { Main } from "../../styles/generic.main.styles";
import { Span } from "../01-Atoms/Heading/Heading.styles";
import Ratio from "../01-Atoms/Ratio/Ratio";
import Label from "../01-Atoms/Label/Label.styles";
import Input from "../01-Atoms/Input/Input";
import { Heading1 } from "../01-Atoms/Heading/Heading.styles";
import { BlockSection, BlockDiv } from "../02-Molecules/Block/Block.styles";
import Controls from "../02-Molecules/Controls/Controls";
import Footer from "../02-Molecules/Footer/Footer";
import Flex, {
  JustifyContentProps,
  AlignItemsProps,
} from "../02-Molecules/Flex/Flex.styles";
import Wcag from "../03-Organisms/Wcag/Wcag";
import Swatch from "../01-Atoms/Swatch/Swatch";
import ColourContrastProvider from "../05-Contexts/Context";
import HeaderColor from "../02-Molecules/HeaderColor/HeaderColor";
import { Link } from "react-router-dom";
import { Wrapper } from "../../styles/wrapper.styles";
import { Button2XLarge } from "../01-Atoms/Button/Button2XLarge.styles";
import { useEffect, useLayoutEffect } from "react";
import { getDoc, doc } from "firebase/firestore";
import { auth, db } from "../../firebaseConfig";

function ColourContrastChecker() {
  return (
    <Wrapper>
      <ColourContrastProvider>
        <GlobalStyles />

        <HeaderColor />

        <Main>
          <span>
            <Link to="/">На главную</Link>
          </span>

          <Heading1 weight="500" xlarge>
            Проверка цветового контраста
          </Heading1>

          <section>
            <BlockSection flex spaceBetween>
              <div>
                <Span grade noMargin>
                  Aa
                </Span>
                <Ratio />
              </div>
              <Wcag id="grades" />
            </BlockSection>

            <Flex
              justify={JustifyContentProps["between"]}
              align={AlignItemsProps["center"]}
            >
              <BlockDiv inputs>
                <Label medium htmlFor="background">
                  Цвет заднего плана
                </Label>
                <Input id="background" name="background" />
                <Controls id="background" name="background" />
              </BlockDiv>

              <BlockDiv inputs>
                <Label medium htmlFor="foreground">
                  Цвет переднего плана
                </Label>
                <Input id="foreground" name="foreground" />
                <Controls id="foreground" name="foreground" />
              </BlockDiv>
            </Flex>

            <Flex align={AlignItemsProps["center"]}>
              <Swatch />
            </Flex>
          </section>
        </Main>

        <Footer />
      </ColourContrastProvider>
    </Wrapper>
  );
}

export default ColourContrastChecker;

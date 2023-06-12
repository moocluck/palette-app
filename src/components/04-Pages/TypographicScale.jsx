import GlobalStylesDef from "../../styles/settings.globaldef.styles";
import { Main } from "../../styles/generic.main.styles";
import Label from "../01-Atoms/Label/Label.styles";
import Input from "../01-Atoms/Input/Input";
import { Heading1 } from "../01-Atoms/Heading/Heading.styles";
import { BlockDiv } from "../02-Molecules/Block/Block.styles";
import Controls from "../02-Molecules/Controls/Controls";
import Footer from "../02-Molecules/Footer/Footer";
import Flex, {
  JustifyContentProps,
  AlignItemsProps,
} from "../02-Molecules/Flex/Flex.styles";
import Swatch from "../01-Atoms/Swatch/Swatch";
import ColourContrastProvider, {
  useColourContrast,
} from "../05-Contexts/Context";
import Header from "../02-Molecules/Header/Header";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Wrapper } from "../../styles/wrapper.styles";
import { useEffect, useState } from "react";
import InputDefault from "../01-Atoms/InputDefault/InputDefault";
import Select from "../01-Atoms/Select/Select";
import SelectDefault from "../01-Atoms/SelectDefault/SelectDefault";
import WebFont from "webfontloader";
import { ButtonLargeDef } from "../01-Atoms/Button/ButtonLargeDef.style";
import { auth } from "../../firebaseConfig";
import StylesCardStyles from "../01-Atoms/StylesCard/StylesCard.jsx";
import { updateDoc, doc } from "firebase/firestore";
import { db } from "../../firebaseConfig";

const INITIAL_BASE_FONT_SIZE = 16;
const INITIAL_RATIO = 1.25;
const INITIAL_FONT_FAMILY = "Inter";
const INITIAL_PREVIEW_TEXT =
  "Съешь ещё этих мягких французских булок, да выпей чаю";
const INITIAL_WEIGHT = "400";
const INITIAL_UP_COUNT = 4;
const INITIAL_DOWN_COUNT = 3;

const TYPE_ARGUMENTS_KEY = "typeArguments";

function TypographicScale() {
  const isAuthenticated = auth.currentUser;

  const navigate = useNavigate();

  const {
    baseSize: baseSizeParam,
    ratio: ratioParam,
    font: fontParam,
    weight: weightParam,
  } = useParams();

  const [fonts, setFonts] = useState([]);
  const [baseSize, setBaseSize] = useState(INITIAL_BASE_FONT_SIZE);
  const [ratio, setRatio] = useState(INITIAL_RATIO);
  const [currentFont, setCurrentFont] = useState(INITIAL_FONT_FAMILY);
  const [currentWeight, setCurrentWeight] = useState(INITIAL_WEIGHT);
  const [previewText, setPreviewText] = useState(INITIAL_PREVIEW_TEXT);
  const [previewTextUp, setPreviewTextUp] = useState([]);
  const [previewTextDown, setPreviewTextDown] = useState([]);

  const [previewUpCount, setPreviewUpCount] = useState(INITIAL_UP_COUNT);
  const [previewDownCount, setPreviewDownCount] = useState(INITIAL_DOWN_COUNT);

  const [savedStyles, setSavedStyles] = useState([]);

  useEffect(() => {
    const stylesInLocalStorage =
      JSON.parse(localStorage.getItem(TYPE_ARGUMENTS_KEY)) || [];

    setSavedStyles(stylesInLocalStorage);
  }, []);

  // Если юзер пришел по прямому url
  useEffect(() => {
    if (baseSizeParam && ratioParam && fontParam && weightParam) {
      setBaseSize(baseSizeParam);
      setRatio(ratioParam);
      setCurrentFont(fontParam);
      setCurrentWeight(weightParam);
    }
  }, [baseSizeParam, ratioParam, fontParam, weightParam]);

  // Базовый размер шрифта
  const handleBaseSizeChange = (event) => {
    const value = event.target.value;

    setBaseSize(value);

    setParams({
      sizeToChange: value,
    });
  };

  // Коэфициент шрифта
  const handleRatioChange = (event) => {
    const value = event.target.value;

    setRatio(value);

    setParams({
      ratioToChange: value,
    });
  };

  const ratioOptions = [
    {
      value: 1.067,
      text: "Minor Second",
    },
    {
      value: 1.125,
      text: "Major Second",
    },
    {
      value: 1.2,
      text: "Minior Third",
    },
    {
      value: 1.25,
      text: "Major Third",
    },
    {
      value: 1.333,
      text: "Perfect Fourth",
    },
    {
      value: 1.414,
      text: "Augmented Fourth",
    },
    {
      value: 1.5,
      text: "Perfect Fifth",
    },
    {
      value: 1.618,
      text: "Golden Ratio",
    },
  ];

  const renderRatioOptions = ({ value, text }, index) => (
    <option key={index} value={value}>{`${value} — ${text}`}</option>
  );

  // Семейство шрифта
  const handleChangeFont = ({ target }) => {
    const head = document.querySelector("head");
    const fontLinkTag = head.querySelector('link[rel="stylesheet"]');
    const option = target.options[target.selectedIndex];
    const font = option.value;
    const fontWeight = option.getAttribute("data-font-weight");

    setCurrentFont(font);

    setParams({
      fontToChange: font,
    });

    WebFont.load({
      google: { families: [`${font}:${fontWeight}`] },
      fontloading: () => {
        document.documentElement.className = "";
        if (fontLinkTag !== null) head.removeChild(fontLinkTag);
      },
      fontactive: () => {
        document.body.style.setProperty("--copy", `${font}, sans-serif`);
      },
    });
  };

  const renderFontOptions = ({ family, variant }, index) => (
    <option key={index} value={family} data-font-weight={variant}>
      {family}
    </option>
  );

  // Вес шрифта
  const handleChangeWeight = (event) => {
    const value = event.target.value;

    setCurrentWeight(value);

    setParams({
      weightToChange: value,
    });
  };

  const weightOptions = ["400", "500", "600", "700"];

  const renderWeightOptions = (weight, index) => (
    <option key={index} value={weight}>
      {weight}
    </option>
  );

  // Превью текста
  const handlePreviewTextChange = (event) => {
    const value = event.target.value;

    setPreviewText(value);
  };

  // Сброс
  const handleClearClick = () => {
    setBaseSize(INITIAL_BASE_FONT_SIZE);
    setRatio(INITIAL_RATIO);
    setCurrentFont(INITIAL_FONT_FAMILY);
    setCurrentWeight(INITIAL_WEIGHT);
    setPreviewText(INITIAL_PREVIEW_TEXT);
    setPreviewUpCount(INITIAL_UP_COUNT);
    setPreviewDownCount(INITIAL_DOWN_COUNT);

    navigate("/typographic-scale");
  };

  // Сохранение в бд
  const addTypeArgumentsMap = async (resultStyles) => {
    await updateDoc(doc(db, "Settings", auth?.currentUser?.uid), {
      TypeArguments: resultStyles,
    });
  };

  // Сохранение
  const handleSaveClick = () => {
    if (!isAuthenticated) {
      alert("Для сохранения необходимо авторизоваться");

      return;
    }

    // Запись сохраненных стилей в localStorage
    const stylesInLocalStorage =
      JSON.parse(localStorage.getItem(TYPE_ARGUMENTS_KEY)) || [];

    const newStyle = {
      "Base size": baseSize,
      Font: currentFont,
      Ratio: ratio,
      Weight: currentWeight,
    };

    // Не сохранять, если такие стили уже были
    let isEqual = stylesInLocalStorage.reduce((acc, item) => {
      if (
        item["Base size"] === baseSize &&
        item.Font === currentFont &&
        item.Ratio === ratio &&
        item.Weight === currentWeight
      ) {
        return true;
      }

      return false;
    }, false);

    if (isEqual) return;
    // / Не сохранять, если такие стили уже были

    const resultStyles = [...stylesInLocalStorage, newStyle];

    localStorage.setItem(TYPE_ARGUMENTS_KEY, JSON.stringify(resultStyles));
    // / Запись сохраненных стилей в localStorage

    setSavedStyles(resultStyles);

    // / Добавление параметорв в БД
    addTypeArgumentsMap(resultStyles);
  };

  const handleSizeUpClick = () => {
    setPreviewUpCount((prev) => prev + 1);
  };

  const handleDeleteClickUp = () => {
    setPreviewUpCount((prev) => prev - 1);
  };

  const handleSizeDownClick = () => {
    setPreviewDownCount((prev) => prev + 1);
  };

  const handleDeleteClickDown = () => {
    setPreviewDownCount((prev) => prev - 1);
  };

  // в приоритете сначала стили из аргументов,
  // если нет аргументов, то берутся параметры из url
  // если нет из параметров из url, то выставляются значения из стейта
  const setParams = ({
    sizeToChange,
    fontToChange,
    weightToChange,
    ratioToChange,
  }) => {
    navigate(
      `/typographic-scale/${sizeToChange || baseSizeParam || baseSize}/${
        ratioToChange || ratioParam || ratio
      }/${fontToChange || fontParam || currentFont}/${
        weightToChange || weightParam || currentWeight
      }`
    );
  };

  useEffect(() => {
    // Получение опций шрифтов
    const localFonts = JSON.parse(localStorage.getItem("fonts"));

    setFonts(localFonts);
  }, []);

  useEffect(() => {
    let lastSizeUp = baseSize;

    const upPreview = Array.from({ length: previewUpCount }).map(() => {
      const newSize = lastSizeUp * ratio;

      lastSizeUp = newSize;

      return {
        size: Math.round(newSize),
      };
    });

    setPreviewTextUp(upPreview.slice().sort((a, b) => b.size - a.size));

    let lastSizeDown = baseSize;

    const downPreview = Array.from({ length: previewDownCount }).map(() => {
      const newSize = lastSizeDown / ratio;

      lastSizeDown = newSize;

      return {
        size: Math.round(newSize),
      };
    });

    setPreviewTextDown(downPreview);
  }, [
    baseSize,
    ratio,
    currentFont,
    currentWeight,
    previewText,
    previewUpCount,
    previewDownCount,
  ]);

  const renderPreviewText = ({ font, weight, size, text }, idx) => {
    return (
      <div
        key={idx}
        style={{
          fontSize: `${size}px`,
          fontFamily: font,
          fontWeight: weight,
          maxWidth: "750px",

          display: "flex",
          alignItems: "center",
          gap: "16px",
          margin: "24px 0",
        }}
      >
        <div
          style={{
            fontFamily: "Inter",
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "12px",
            lineHeight: "16px",
            color: "#44464F",
          }}
        >
          {size}px
        </div>
        <div
          style={{
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            overflow: "hidden",
          }}
        >
          {previewText}
        </div>
      </div>
    );
  };

  return (
    <ColourContrastProvider>
      <GlobalStylesDef />

      <Wrapper>
        <Header />

        <Main>
          <span>
            <Link to="/">На главную</Link>
          </span>

          <Heading1 weight="500" xlarge>
            Типографическая шкала
          </Heading1>

          <section>
            <div style={{ display: "flex", gap: "40px" }}>
              <div
                className=""
                style={{
                  flex: 2,
                  display: "flex",
                  flexDirection: "column",
                  gap: "32px",
                }}
              >
                <InputDefault
                  id="bazeSize"
                  label="Базовый размер"
                  value={baseSize}
                  onChange={handleBaseSizeChange}
                />

                <SelectDefault
                  id="ratio"
                  label="Шкала"
                  value={ratio}
                  options={ratioOptions}
                  onChange={handleRatioChange}
                  renderOption={renderRatioOptions}
                />

                <div style={{ display: "flex", gap: "24px" }}>
                  <div style={{ flex: 1 }}>
                    {!!fonts.length && (
                      <SelectDefault
                        id="fonts"
                        label="Font from Google Fonts"
                        value={currentFont}
                        options={fonts}
                        onChange={handleChangeFont}
                        renderOption={renderFontOptions}
                      />
                    )}
                  </div>
                  <div style={{ flex: 1 }}>
                    <SelectDefault
                      id="weight"
                      label="Толщина"
                      value={currentWeight}
                      options={weightOptions}
                      onChange={handleChangeWeight}
                      renderOption={renderWeightOptions}
                    />
                  </div>
                </div>

                <InputDefault
                  isEllipsis
                  id="previewText"
                  label="Предпросмотр текста"
                  value={previewText}
                  onChange={handlePreviewTextChange}
                />

                <div style={{ display: "flex", gap: "24px" }}>
                  <ButtonLargeDef onClick={handleClearClick}>
                    Сбросить
                  </ButtonLargeDef>
                  <ButtonLargeDef onClick={handleSaveClick}>
                    Сохранить шкалу
                  </ButtonLargeDef>
                </div>
              </div>

              <div className="" style={{ flex: 4 }}>
                <div
                  style={{
                    display: "flex",
                    gap: "16px",
                  }}
                >
                  <ButtonLargeDef width="42px" onClick={handleSizeUpClick}>
                    +
                  </ButtonLargeDef>

                  {previewUpCount > INITIAL_UP_COUNT && (
                    <ButtonLargeDef width="42px" onClick={handleDeleteClickUp}>
                      -
                    </ButtonLargeDef>
                  )}
                </div>

                <div>
                  {previewTextUp.map((item, idx) => {
                    const { size } = item;

                    return renderPreviewText(
                      {
                        font: currentFont,
                        weight: currentWeight,
                        size,
                        text: previewText,
                      },
                      `${idx}-${size}`
                    );
                  })}

                  {renderPreviewText(
                    {
                      font: currentFont,
                      weight: currentWeight,
                      size: baseSize,
                      text: previewText,
                    },
                    "base"
                  )}

                  {previewTextDown.map((item, idx) => {
                    const { size } = item;

                    return renderPreviewText(
                      {
                        font: currentFont,
                        weight: currentWeight,
                        size,
                        text: previewText,
                      },
                      `${idx}-${size}`
                    );
                  })}
                </div>

                <div
                  style={{
                    display: "flex",
                    gap: "16px",
                  }}
                >
                  <ButtonLargeDef width="42px" onClick={handleSizeDownClick}>
                    +
                  </ButtonLargeDef>
                  {previewDownCount > INITIAL_DOWN_COUNT && (
                    <ButtonLargeDef
                      width="42px"
                      onClick={handleDeleteClickDown}
                    >
                      -
                    </ButtonLargeDef>
                  )}
                </div>
              </div>
            </div>

            {!!savedStyles?.length && (
              <div style={{ marginTop: "72px" }}>
                <Heading1 medium weight="500">
                  Сохраненные параметры стилей текста
                </Heading1>

                <div
                  style={{
                    display: "grid",
                    gap: "24px",
                    gridTemplateColumns: "1fr 1fr 1fr",
                    margin: "32px 0 48px",
                  }}
                >
                  {savedStyles.map((item, idx) => {
                    return (
                      <StylesCardStyles
                        key={idx}
                        size={item["Base size"]}
                        font={item.Font}
                        weight={item.Weight}
                        ratio={item.Ratio}
                      />
                    );
                  })}
                </div>
              </div>
            )}
          </section>
        </Main>

        <Footer />
      </Wrapper>
    </ColourContrastProvider>
  );
}

export default TypographicScale;

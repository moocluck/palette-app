import GlobalStylesDef from "../../styles/settings.globaldef.styles";
import { Wrapper } from "../../styles/wrapper.styles";
import { Main } from "../../styles/generic.main.styles";
import { Heading1, Heading2 } from "../01-Atoms/Heading/Heading.styles";
import Footer from "../02-Molecules/Footer/Footer";
import Header from "../02-Molecules/Header/Header";
import { Link } from "react-router-dom";
import ColourContrastProvider from "../05-Contexts/Context";
import { useEffect, useState } from "react";
import StylesCardStyles from "../01-Atoms/StylesCard/StylesCard.jsx";
import SavedColors from "../01-Atoms/SavedColors/SavedColors";

const TYPE_ARGUMENTS_KEY = "typeArguments";

function SavedStyles() {
  const [savedStyles, setSavedStyles] = useState([]);

  useEffect(() => {
    const stylesInLocalStorage =
      JSON.parse(localStorage.getItem(TYPE_ARGUMENTS_KEY)) || [];

    setSavedStyles(stylesInLocalStorage);
  }, []);

  return (
    <Wrapper>
      <ColourContrastProvider>
        <GlobalStylesDef />

        <Header />

        <Main>
          <span>
            <Link to="/">На главную</Link>
          </span>

          <Heading1 weight="500" xlarge>
            Сохраненные стили
          </Heading1>

          <section
            style={{ display: "flex", gap: "32px", flexDirection: "column" }}
          >
            <Heading2 weight="500" medium>
              Пары цветов с контрасностью
            </Heading2>
            <div>
              <SavedColors />
            </div>
          </section>

          {!!savedStyles?.length && (
            <section
              style={{ display: "flex", gap: "32px", flexDirection: "column" }}
            >
              <Heading1 medium weight="500">
                Сохраненные параметры стилей текста
              </Heading1>

              <div
                style={{
                  display: "grid",
                  gap: "24px",
                  gridTemplateColumns: "1fr 1fr 1fr",
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
            </section>
          )}
        </Main>

        <Footer />
      </ColourContrastProvider>
    </Wrapper>
  );
}

export default SavedStyles;

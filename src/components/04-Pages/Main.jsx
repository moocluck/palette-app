import GlobalStylesDef from "../../styles/settings.globaldef.styles";
import { Wrapper } from "../../styles/wrapper.styles";
import { Main } from "../../styles/generic.main.styles";
import { Heading1 } from "../01-Atoms/Heading/Heading.styles";
import Footer from "../02-Molecules/Footer/Footer";
import Header from "../02-Molecules/Header/Header";
import CardsContainer from "../02-Molecules/CardsContainer/CardsContainer";
import { Button2XLarge } from "../01-Atoms/Button/Button2XLarge.styles";

function Main() {
  return (
    <Wrapper>
      <GlobalStylesDef />
      <Header />

      <Main>
        <Heading1 weight="500" xlarge>
          Инструменты
        </Heading1>

        <section>
          <CardsContainer></CardsContainer>
        </section>
      </Main>

      <Footer />
    </Wrapper>
  );
}

export default Main;

import GlobalStylesDef from "../../styles/settings.globaldef.styles";
import { Wrapper } from "../../styles/wrapper.styles";
import { Main } from "../../styles/generic.main.styles";
import { Heading1 } from "../01-Atoms/Heading/Heading.styles";
import ButtonBack from "../01-Atoms/ButtonBack/ButtonBack";
import InputDefault from "../01-Atoms/InputDefault/InputDefault";
import {
  formStyles,
  controlsStyles,
  mainStyles,
} from "../../styles/authorization.styles";
import { ButtonLarge } from "../01-Atoms/Button/ButtonLarge.style";
import {
  Button2XLarge,
  Button2XLargeTransparent,
} from "../01-Atoms/Button/Button2XLarge.styles";
import { useNavigate } from "react-router-dom";
import RegistrationForm from "../02-Molecules/RegistrationForm/RegistrationForm";
import RegistrationFormStyles from "../02-Molecules/RegistrationForm/RegistrationFrom.styles";

function Registration() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/authorization");
  };

  return (
    <Wrapper>
      <GlobalStylesDef />
      <Main style={mainStyles}>
        <section style={formStyles}>
          <ButtonBack />

          <Heading1 weight="500" xlarge>
            Регистрация в Palette App
          </Heading1>

          <section style={controlsStyles}>
            <RegistrationForm />
            <Button2XLargeTransparent
              type="button"
              color={"#1B1B1F"}
              onClick={handleNavigate}
            >
              Уже есть аккаунт?
            </Button2XLargeTransparent>
          </section>
        </section>
      </Main>
    </Wrapper>
  );
}

export default Registration;

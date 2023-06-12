import { Link } from "react-router-dom";
import HeaderColorStyles, { linkStyles, divStyles } from "./HeaderColor.styles";
import { ButtonLarge } from "../../01-Atoms/Button/ButtonLarge.style";
import Logo from "../../01-Atoms/Logo/Logo";
import { useColourContrast } from "../../05-Contexts/Context";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../firebaseConfig";
import { signOut } from "firebase/auth";
import SavedIcon from "../../01-Atoms/SavedIcon/SavedIcon";

function Header() {
  const { colorState } = useColourContrast();
  const navigate = useNavigate();
  const isAuthenticated = auth.currentUser;

  const handleNavigate = () => {
    navigate("/authorization");
  };

  // Функция для выхода из авторизации
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <HeaderColorStyles>
      <Link to="/" style={linkStyles}>
        <Logo />
      </Link>
      {isAuthenticated ? (
        // Отображение иконки для авторизованных пользователей
        <div style={divStyles}>
          <Link to="/saved-styles" style={linkStyles}>
            <SavedIcon color={colorState} />
          </Link>

          <ButtonLarge type="button" color={colorState} onClick={handleLogout}>
            Выйти
          </ButtonLarge>
        </div>
      ) : (
        // Отображение кнопки "Войти" для неавторизованных пользователей
        <ButtonLarge type="button" color={colorState} onClick={handleNavigate}>
          Войти
        </ButtonLarge>
      )}
    </HeaderColorStyles>
  );
}

export default Header;

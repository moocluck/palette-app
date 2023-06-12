import { Link } from "react-router-dom";
import HeaderStyles, { linkStyles, divStyles } from "./Header.styles";
import { ButtonLarge } from "../../01-Atoms/Button/ButtonLarge.style";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../firebaseConfig";
import { signOut } from "firebase/auth";
import { useState } from "react";
import { ButtonLargeDef } from "../../01-Atoms/Button/ButtonLargeDef.style";

function Header() {
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
    <HeaderStyles>
      <Link to="/" style={linkStyles}>
        <img src="/images/Logo.svg" alt="Логотип" />
      </Link>

      {isAuthenticated ? (
        // Отображение иконки для авторизованных пользователей
        <div style={divStyles}>
          <Link to="/saved-styles" style={linkStyles}>
            <img src="/images/icons/Save-01.svg" alt="Иконка" />
          </Link>

          <ButtonLargeDef type="button" color="#1B1B1F" onClick={handleLogout}>
            Выйти
          </ButtonLargeDef>
        </div>
      ) : (
        // Отображение кнопки "Войти" для неавторизованных пользователей
        <ButtonLargeDef type="button" color="#1B1B1F" onClick={handleNavigate}>
          Войти
        </ButtonLargeDef>
      )}
    </HeaderStyles>
  );
}

export default Header;

import firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig, app, auth, db } from "../../../firebaseConfig";
import { Button2XLarge } from "../../01-Atoms/Button/Button2XLarge.styles";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useContext, useState, useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
import InputDefault from "../../01-Atoms/InputDefault/InputDefault";
import AuthorizationFormStyles from "./AuthorizationForm.styles";
import Paragraph from "../../01-Atoms/Paragraph/Paragraph.styles";
import { AuthContext } from "../../05-Contexts/AuthContext";
import { doc, getDoc } from "firebase/firestore";

function AuthorizationForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const { dispatch } = useContext(AuthContext);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Успешная авторизация пользователя
        const user = userCredential.user;
        dispatch({ type: "LOGIN", payload: user });
        navigate("/"); // Перенаправление на главную страницу после успешной авторизации
        const ref = doc(db, "Settings", auth.currentUser.uid);
        const docSnap = getDoc(ref).then((response) => {
          localStorage.setItem(
            "colors",
            JSON.stringify(response.data().Colors)
          );
          localStorage.setItem(
            "typeArguments",
            JSON.stringify(response.data().TypeArguments)
          );
        });
      })
      .catch((error) => {
        // Ошибка при авторизации пользователя
        console.error("Sign in error:", error);
        setErrorMessage("Ошибка при авторизации пользователя");
      });
  };

  return (
    <AuthorizationFormStyles>
      <InputDefault
        label="E-mail"
        id="E-mail"
        type="email"
        placeholder="palettedesign@gmail.com"
        onChange={handleEmailChange}
      />

      <InputDefault
        label="Пароль"
        id="password"
        type="password"
        placeholder="••••••••"
        onChange={handlePasswordChange}
      />

      {errorMessage && <Paragraph>{errorMessage}</Paragraph>}

      <Button2XLarge type="submit" color={"#1B1B1F"} onClick={handleSignIn}>
        Войти
      </Button2XLarge>
    </AuthorizationFormStyles>
  );
}

export default AuthorizationForm;

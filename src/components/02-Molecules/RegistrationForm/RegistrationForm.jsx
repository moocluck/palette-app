import firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig, app, db, auth } from "../../../firebaseConfig";
import { Button2XLarge } from "../../01-Atoms/Button/Button2XLarge.styles";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc, addDoc, collection, getDoc } from "firebase/firestore";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import InputDefault from "../../01-Atoms/InputDefault/InputDefault";
import RegistrationFormStyles from "./RegistrationFrom.styles";
import { AuthContext } from "../../05-Contexts/AuthContext";

function RegistrationForm() {
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

  const initSettingsUserDoc = async (uid) => {
    try {
      await setDoc(doc(db, "Settings", uid), {
        Colors: [],
        TypeArguments: [],
      });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const handleSignUp = async () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Успешная авторизация пользователя
        const user = userCredential.user;
        dispatch({ type: "LOGIN", payload: user });
        initSettingsUserDoc(user.uid);
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
    <RegistrationFormStyles>
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

      <Button2XLarge type="submit" color={"#1B1B1F"} onClick={handleSignUp}>
        Зарегистрироваться
      </Button2XLarge>
    </RegistrationFormStyles>
  );
}

export default RegistrationForm;

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Main from "./04-Pages/Main";
import ColourContrastChecker from "./04-Pages/ColourContrastChecker";
import TypographicScale from "./04-Pages/TypographicScale";
import SavedStyles from "./04-Pages/SavedStyles";
import Authorization from "./04-Pages/Authorization";
import Registration from "./04-Pages/Registration";
import { AuthContext } from "./05-Contexts/AuthContext";
import { useContext } from "react";
import { auth } from "../firebaseConfig";

const Router = () => {
  const { currentUser } = useContext(AuthContext);

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/" />;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route
          path="/:background/:foreground"
          element={<ColourContrastChecker />}
        />
        <Route path="/typographic-scale/:baseSize/:ratio/:font/:weight" element={<TypographicScale />} />
        <Route path="/typographic-scale" element={<TypographicScale />} />
        <Route
          path="/saved-styles"
          element={
            <RequireAuth>
              <SavedStyles />
            </RequireAuth>
          }
        />
        <Route path="/authorization" element={<Authorization />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

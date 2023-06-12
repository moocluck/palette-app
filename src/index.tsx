import { createRoot } from "react-dom/client";
import Router from "./components/Router";
import registerServiceWorker from "./registerServiceWorker";
import { AuthContextProvider } from "./components/05-Contexts/AuthContext";

const container = document.querySelector("#main");
const root = createRoot(container!);

root.render(
  <AuthContextProvider>
    <Router />
  </AuthContextProvider>
);

registerServiceWorker();

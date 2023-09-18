import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import { AuthContextProvider } from "./context/AuthContext.tsx";
import { RecipeContextProvider } from "./context/RecipeContext.tsx";
import { ShowLoginContextProvider } from "./context/ShowLogin.tsx";
import { SaveContextProvider } from "./context/SaveContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <AuthContextProvider>
      <RecipeContextProvider>
        <ShowLoginContextProvider>
          <SaveContextProvider>
            <App />
          </SaveContextProvider>
        </ShowLoginContextProvider>
      </RecipeContextProvider>
    </AuthContextProvider>
  </BrowserRouter>
);

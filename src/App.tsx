import { StyledEngineProvider } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ResponsiveAppBar from "./components/appbar";
import { APP_PATH } from "./constant/app.path";
import "./index.css";
import { ThemeProvider, createMuiTheme } from "@mui/material";

function App() {
  const theme = createMuiTheme({
    typography: {
      fontFamily: "americana-std",
    },
  });
  return (
    <StyledEngineProvider>
      <ThemeProvider theme={theme}>
        <div className="App">
          <BrowserRouter basename="">
            <ResponsiveAppBar />
            <Routes>
              <Route path={"/"} element={<APP_PATH.LANDING.element />}></Route>
              <Route
                path={APP_PATH.ABOUT_US.path}
                element={<APP_PATH.ABOUT_US.element />}
              ></Route>
              <Route
                path={APP_PATH.CONTRACT_US.path}
                element={<APP_PATH.CONTRACT_US.element />}
              ></Route>
              <Route
                path={APP_PATH.OFFICIAL_STORE.path}
                element={<APP_PATH.OFFICIAL_STORE.element />}
              ></Route>
              <Route
                path={APP_PATH.SETONESELFON.path}
                element={<APP_PATH.SETONESELFON.element />}
              ></Route>
              <Route
                path={APP_PATH.PRODUCT.path}
                element={<APP_PATH.PRODUCT.element />}
              ></Route>
              <Route
                path={APP_PATH.ALL_PRODUCT.path}
                element={<APP_PATH.ALL_PRODUCT.element />}
              ></Route>
              <Route
                path={APP_PATH.PRODUCT_DETAIL.path}
                element={<APP_PATH.PRODUCT_DETAIL.element />}
              ></Route>
            </Routes>
          </BrowserRouter>
        </div>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;

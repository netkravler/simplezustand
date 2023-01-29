import { ThemeProvider } from "styled-components";
import { MainTheme } from "./Styles/Themes/MainTheme";
import { GlobalStyles } from "./Styles/Global";
import { Toggler } from "./Components/DarkmodeSwitch/Toggler";
import { useDarkmodeStore } from "./Components/DarkmodeSwitch/useDarkmodeStore";
import Modal from "./Components/Modal/Modal";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./Components/Partials/Header";
import Footer from "./Components/Partials/Footer";
import FlashMessages from "./Components/FlashMessages/FlashMessages";

function App() {
  /** get value of theme from the themestore */
  const { mode } = useDarkmodeStore();

  /**set theme to dark or light */
  const themeMode = mode === "light" ? "light" : "dark";

  return (
    <ThemeProvider theme={MainTheme({ themeMode })}>
      <Toggler />
      <Modal />
      <FlashMessages />
      <GlobalStyles />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </ThemeProvider>
  );
}

export default App;

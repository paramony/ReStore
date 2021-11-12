import { Container, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { useState } from "react";
import { Route } from "react-router-dom";
import AboutPage from "../../features/about/AboutPage";
import Catalog from "../../features/catalog/Catalog";
import ProductDetails from "../../features/catalog/ProductDetails";
import ContactPage from "../../features/contact/ContactPage";
import HomePage from "../../features/home/HomePage";
import Header from "./Header";



function App() {

  const [darkMode, setDarkMode] = useState(false)
  const palletType = darkMode ? 'dark' : 'light'
  const theme = createTheme({
    palette: {
      mode: palletType,
      background: {
        default: palletType === 'light' ? '#eaeaea' : '#121212'
      }
    }
  })
  function handleThemeChange() {
    setDarkMode(!darkMode)
  }
  return (
    <ThemeProvider theme={theme} >
      <CssBaseline />
      <Header handleThemeChange={handleThemeChange} darkMode={darkMode} />
      <Container>

        <Route exact path='/' component={HomePage} />
        <Route exact path='/catalog' component={Catalog} />
        <Route path='/catalog/:id' component={ProductDetails} />
        <Route path='/about' component={AboutPage} />
        <Route path='/contact' component={ContactPage} />

      </Container>
    </ThemeProvider>
  );
}

export default App;

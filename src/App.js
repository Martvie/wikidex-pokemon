import { Home } from "./pages/Home";
import GlobalStyles from "./styles/global";
import { MyThemeProvider, Theme } from "./contexts/themeContext";

function App() {
  return (
    <MyThemeProvider>
      <Theme>
        <div className="App">

          <GlobalStyles />
          <Home />

        </div>
      </Theme>
    </MyThemeProvider>
  );
}

export default App;

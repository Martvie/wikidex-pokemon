import { Home } from "./pages/home";
import GlobalStyles from "./global";
import { PokeTypes } from "./components/Poke-types";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Home/>
  
    </div>
  );
}

export default App;

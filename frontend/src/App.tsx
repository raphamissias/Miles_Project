import "./App.css";
import "./styles/input.css";
import "./styles/label.css";
import "./styles/button.css";
import "./styles/text.css";
import Header from "./components/Header";
import { RoutesMain } from "./routes/RoutesMain";

function App() {
  return (
    <>
      <Header />
      <RoutesMain />
    </>
  );
}

export default App;

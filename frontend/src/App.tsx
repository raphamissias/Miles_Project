import "./App.css";
import "./styles/input.module.css";
import "./styles/label.module.css";
import "./styles/button.module.css";
import "./styles/text.module.css";
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

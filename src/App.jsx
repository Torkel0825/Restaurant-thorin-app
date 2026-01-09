import MaimeMenue from "./components/MaimeMenue.jsx";
import meny from "./data/meny.jsx";
import "./App.css";

function App() {
  return (
    <>
      <MaimeMenue meny={meny} />
    </>
  );
}

export default App;

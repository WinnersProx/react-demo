import "./App.css";
import { AlertDemo } from "./components/AlertDemo";
import PdfDemo from "./components/PdfDemo";

function App() {
  return (
    <>
      <div className="App">
        <h4>Short React Demos Under /Components</h4>
      </div>

      <PdfDemo />

      <AlertDemo />
    </>
  );
}

export default App;

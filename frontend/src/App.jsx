import './App.css';
import { createRoot } from "react-dom/client";

function App() {
  return (
    <div className="App">
      <p>yo whaddup</p>
    </div>
  );
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
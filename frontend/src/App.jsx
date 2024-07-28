import { createRoot } from "react-dom/client";

function App() {
  console.log('hmmm');
  return (
    <div className="App">
      <h1>YO WHADDUP this a websiteee
      </h1>
    </div>
  );
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
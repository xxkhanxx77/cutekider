import Container from "@mui/material/Container";
import { useState } from "react";
import "./App.css";
import Product from "./components/product/index";
import Landing from "./components/landing/index";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Landing />
      <div>NEW ARRIVAL</div>
      <Product />

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;

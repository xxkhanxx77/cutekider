import Container from "@mui/material/Container";
import { useState } from "react";
import "./App.css";
import Product from "./components/product/index";
import Landing from "./components/landing/index";
import ResponsiveAppBar from "./components/appbar";

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <div style={{ padding: 20 }}>
        <Landing />
        <div>NEW ARRIVAL</div>
        {/* <Product /> */}

        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </div>
  );
}

export default App;

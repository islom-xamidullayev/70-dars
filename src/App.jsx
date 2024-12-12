import axios from "axios";
import { useEffect, useState } from "react";
import Products from "./components/Card";
import "./app.css";
import I18 from "./components/i18/i18";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Product from "./components/Card/products";


function App() {
  return (
    <div className="App">
      <I18/>
      <Routes>
          <Route index element={<Products />} />
          <Route path="/card/product/:id" element={<Product />} />
     </Routes>
      
    </div>
  );
}

export default App;

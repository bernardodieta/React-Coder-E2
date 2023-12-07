import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/pages/Layout/Layout.js";
import Home from "./components/pages/Home/Home.js";
import CategoryMen from "./components/pages/Categorys/CategoryMen"
import CategoryWoman from "./components/pages/Categorys/CategoryWoman"
import CategoryElectronic from "./components/pages/Categorys/CategoryElectronic"
import ProductDetailUrl from "./components/pages/Categorys/ProductDetailUrl.js";



function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/categoryman" element={<CategoryMen />} />
          <Route path="/categorywoman" element={<CategoryWoman />} />
          <Route path="/categoryelectronic" element={<CategoryElectronic />} />
          <Route path="/categoryelectronic/:productId" element={<ProductDetailUrl />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

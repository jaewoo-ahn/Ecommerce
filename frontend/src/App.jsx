import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import { Login, Cart, Product, Category, Home } from "./pages";

function App() {
  return (
    <main className="bg-primary text-tertiary">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Category />} />
          <Route path="/" element={<Category />} />
          <Route path="/" element={<Category />} />
          <Route path="/" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/" element={<Cart />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;

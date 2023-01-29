import "./App.css";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import { Route, Routes } from "react-router-dom";
import Products from "./components/Products";
import SingleProduct from "./components/SingleProduct";
import Cart from "./components/Cart";
import Login from "./components/Login";
import { Register } from "./components/Register";
import Contact from "./components/Contact";
import PrivateRoute from "./components/PrivateRoute";
import Checkout from "./components/Checkout/Checkout";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route
          exact
          path="/products"
          element={
            <PrivateRoute>
              <Products />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/products/:id"
          element={
            <PrivateRoute>
              <SingleProduct />
            </PrivateRoute>
          }
        />
        <Route exact path="/cart" element={<Cart />} />
        <Route
          exact
          path="/checkout"
          element={
            <PrivateRoute>
              <Checkout />
              </PrivateRoute>
          }
        />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;

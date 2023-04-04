import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Authentication/Login";
import Signup from "./components/Authentication/Signup";
import HomePage from "./components/Home";
import Games from "./components/Games";
import Checkout from "./components/Checkout";
import CartProvider from "./components/CartContext";
import Confirm from "./components/Confirm";
import { Auth0Provider} from "@auth0/auth0-react";

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Auth0Provider
    domain="dev-32zr27wj6sjglj8v.us.auth0.com"
    clientId="lQTCntH0ECjdR8JoTNOlDUgl4IOLezmj"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }} >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Checkout" element={<Checkout />} />
          <Route path="/Confirm" element={<Confirm />} />
          <Route path="/Games" element={<Games />} />
        </Routes>
      </Auth0Provider>  
      </BrowserRouter>
    </>
  );
};
const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <CartProvider>
    <App />
  </CartProvider>
);

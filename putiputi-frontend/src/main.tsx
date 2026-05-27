import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { CartProvider } from "./context/CartContext";
import { WishlistProvider } from "./context/WishlistContext";
import { AuthProvider } from "./context/AuthContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>

    <CartProvider>
      <WishlistProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </WishlistProvider>
    </CartProvider>

  </React.StrictMode>
);
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import Container from "./Container";

import {
  ShoppingCart,
  Menu,
  X,
  Heart,
  User,
  LogOut,
} from "lucide-react";

import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";
import { useAuth } from "../../context/AuthContext";

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const { cartItems } = useCart();
  const { wishlistItems } = useWishlist();

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const [isOpen, setIsOpen] = useState(false);

  const handleUserClick = () => {
    if (isAuthenticated) {
      navigate("/account");
    } else {
      navigate("/login");
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md border-b z-50">
      <Container>
        <div className="h-16 flex items-center justify-between">

          {/* LOGO */}
          <Link to="/" className="text-2xl font-extrabold">
            PutiPuti<span className="text-pink-500">.</span>
          </Link>

          {/* RIGHT SIDE */}
          <div className="flex items-center">

            {/* DESKTOP NAV */}
            <nav className="hidden md:flex items-center gap-10 mr-8">
              <Link to="/" className="text-gray-600 hover:text-pink-500">
                Home
              </Link>

              <Link to="/products" className="text-gray-600 hover:text-pink-500">
                Products
              </Link>
            </nav>

            {/* ICONS */}
            <div className="flex items-center gap-5">

              {/* WISHLIST */}
              <Link to="/wishlist" className="relative">
                <Heart size={24} className="hover:text-pink-500 transition" />

                {wishlistItems.length > 0 && (
                  <span className="absolute -top-2 -right-3 bg-pink-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {wishlistItems.length}
                  </span>
                )}
              </Link>

              {/* CART */}
              <Link to="/cart" className="relative">
                <ShoppingCart size={26} className="hover:text-pink-500 transition" />

                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-3 bg-pink-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </Link>

              {/* USER ICON (FIX FLOW HERE) */}
              <button onClick={handleUserClick}>
                <User size={24} className="hover:text-pink-500 transition" />
              </button>

              {/* LOGOUT (only when login) */}
              {isAuthenticated && (
                <button
                  onClick={logout}
                  className="text-gray-600 hover:text-red-500"
                >
                  <LogOut size={22} />
                </button>
              )}

              {/* MOBILE MENU */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden"
              >
                {isOpen ? <X size={30} /> : <Menu size={30} />}
              </button>

            </div>
          </div>
        </div>
      </Container>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <Container>
            <nav className="flex flex-col py-6 gap-5">

              <Link onClick={() => setIsOpen(false)} to="/">
                Home
              </Link>

              <Link onClick={() => setIsOpen(false)} to="/products">
                Products
              </Link>

              <Link onClick={() => setIsOpen(false)} to="/wishlist">
                Wishlist
              </Link>

              <Link onClick={() => setIsOpen(false)} to="/cart">
                Cart
              </Link>

              {/* AUTH FLOW MOBILE */}
              {isAuthenticated ? (
                <>
                  <Link onClick={() => setIsOpen(false)} to="/account">
                    Account
                  </Link>

                  <button
                    onClick={() => {
                      logout();
                      setIsOpen(false);
                    }}
                    className="text-left text-red-500"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link onClick={() => setIsOpen(false)} to="/login">
                    Login
                  </Link>

                  <Link onClick={() => setIsOpen(false)} to="/register">
                    Register
                  </Link>
                </>
              )}
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
};

export default Navbar;
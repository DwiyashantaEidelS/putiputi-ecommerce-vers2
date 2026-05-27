import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";

import type { Product } from "../types/product";

type WishlistContextType = {
  wishlistItems: Product[];

  toggleWishlist: (
    product: Product
  ) => void;

  isInWishlist: (
    id: number
  ) => boolean;
};

const WishlistContext =
  createContext<WishlistContextType | null>(
    null
  );

export const WishlistProvider = ({
  children,
}: {
  children: ReactNode;
}) => {

  const [wishlistItems, setWishlistItems] =
    useState<Product[]>([]);

  const toggleWishlist = (
    product: Product
  ) => {

    setWishlistItems((prev) => {

      const exists = prev.find(
        (item) => item.id === product.id
      );

      if (exists) {
        return prev.filter(
          (item) => item.id !== product.id
        );
      }

      return [...prev, product];
    });
  };

  const isInWishlist = (id: number) => {
    return wishlistItems.some(
      (item) => item.id === id
    );
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlistItems,
        toggleWishlist,
        isInWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {

  const context =
    useContext(WishlistContext);

  if (!context) {
    throw new Error(
      "useWishlist must be used within WishlistProvider"
    );
  }

  return context;
};
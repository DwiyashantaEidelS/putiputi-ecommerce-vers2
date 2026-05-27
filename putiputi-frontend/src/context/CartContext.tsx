import {
    createContext,
    useContext,
    useState,
} from "react";

import type { CartItem } from "../types/carts";
import type { Product } from "../types/product";

type CartContextType = {
    cartItems: CartItem[];
    addToCart: (product: Product) => void;
    increaseQuantity: (productId: number) => void;
    decreaseQuantity: (productId: number) => void;
    removeFromCart: (productId: number) => void;
};

const CartContext = createContext<CartContextType | null>(null);

export const CartProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {

    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    const addToCart = (product: Product) => {

        setCartItems((prev) => {

            const existingItem = prev.find(
                (item) => item.product.id === product.id
            );

            if (existingItem) {
                return prev.map((item) =>
                    item.product.id === product.id
                        ? {
                            ...item,
                            quantity: item.quantity + 1,
                        }
                        : item
                );
            }

            return [
                ...prev,
                {
                    product,
                    quantity: 1,
                },
            ];
        });
    };

    const increaseQuantity = (productId: number) => {
        setCartItems((prev) =>
            prev.map((item) =>
                item.product.id === productId
                    ? {
                        ...item,
                        quantity: item.quantity + 1,
                    }
                    : item
            )
        );
    };

    const decreaseQuantity = (productId: number) => {

        setCartItems((prev) =>
            prev
                .map((item) =>
                    item.product.id === productId
                        ? {
                            ...item,
                            quantity: item.quantity - 1,
                        }
                        : item
                )
                .filter((item) => item.quantity > 0)
        );
    };

    const removeFromCart = (productId: number) => {

        setCartItems((prev) =>
            prev.filter(
                (item) => item.product.id !== productId
            )
        );
    };

    return (
        <CartContext.Provider
            value={{
                cartItems,
                addToCart,
                increaseQuantity,
                decreaseQuantity,
                removeFromCart,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {

    const context = useContext(CartContext);

    if (!context) {
        throw new Error("useCart must be used within CartProvider");
    }

    return context;
};
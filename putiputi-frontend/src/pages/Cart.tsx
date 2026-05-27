import Container from "../components/layout/Container";
import Button from "../components/ui/Button";
import toast from "react-hot-toast";
import { useCart } from "../context/CartContext";
import { ShoppingBag } from "lucide-react";
import { formatCurrency } from "../utils/formatCurrency";

const Cart = () => {

  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart();

  const totalPrice = cartItems.reduce(
    (total, item) =>
      total + item.product.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <section
        className="
        min-h-screen
        flex
        items-center
        justify-center
        pt-24
        pb-16
      "
      >

        <div className="text-center max-w-md px-6">

          {/* ICON */}
          <div
            className="
            w-28
            h-28
            mx-auto
            rounded-full
            bg-pink-100
            flex
            items-center
            justify-center
            mb-8
          "
          >

            <ShoppingBag
              size={52}
              className="text-pink-500"
            />

          </div>

          {/* TITLE */}
          <h1
            className="
            text-3xl
            lg:text-4xl
            font-bold
            text-black
          "
          >
            Your Cart Is Empty
          </h1>

          {/* DESCRIPTION */}
          <p
            className="
            text-gray-500
            mt-5
            leading-relaxed
          "
          >
            Looks like you haven't added
            any beautiful flowers yet.
          </p>

          {/* BUTTON */}
          <Button 
          to="/products"
          className="mt-8">
            Continue Shopping
          </Button>

        </div>

      </section>
    );
  }

  return (
    <section className="pt-32 pb-20">

      <Container>

        {/* HEADING */}
        <div className="mb-12">

          <p className="text-pink-500 uppercase tracking-[0.2em] font-semibold">
            Shopping Cart
          </p>

          <h1 className="text-5xl font-bold mt-3">
            Your Cart Items
          </h1>

        </div>

        {/* LAYOUT */}
        <div className="grid lg:grid-cols-[1fr_380px] gap-10">

          {/* CART ITEMS */}
          <div className="space-y-6">

            {cartItems.map((item) => (

              <div
                key={item.product.id}
                className="
                  flex
                  gap-6
                  border
                  rounded-3xl
                  p-6
                  bg-white
                "
              >

                {/* IMAGE */}
                <div
                  className="
                    w-32
                    h-32
                    bg-[#fff]
                    rounded-2xl
                    overflow-hidden
                    shrink-0
                  "
                >

                  <img
                    // src={item.product.image}
                    src={`http://127.0.0.1:8000${item.product.image}`}
                    alt={`http://127.0.0.1:8000${item.product.image}`}
                    className="
                      w-full
                      h-full
                      object-contain
                      p-3
                    "
                  />

                </div>

                {/* CONTENT */}
                <div className="flex-1">

                  <div className="flex justify-between">

                    <div>

                      <p className="text-pink-500 text-sm">
                        {item.product.category}
                      </p>

                      <h2 className="text-2xl font-bold mt-1">
                        {item.product.name}
                      </h2>

                    </div>

                    <button
                      onClick={() => {
                        removeFromCart(item.product.id);

                        toast.success(
                          `${item.product.name} removed`
                        );
                      }}
                      className="
                        text-sm
                        text-red-500
                        hover:text-red-600
                      "
                    >
                      Remove
                    </button>

                  </div>

                  <p className="text-gray-500 mt-3 text-sm leading-relaxed">
                    {item.product.description}
                  </p>

                  {/* BOTTOM */}
                  <div className="flex items-center justify-between mt-6">

                    <div className="text-2xl font-bold text-pink-500">
                      {formatCurrency(item.product.price)}
                    </div>

                    {/* QUANTITY */}
                    <div
                      className="
                        flex
                        items-center
                        border
                        rounded-full
                        overflow-hidden
                      "
                    >

                      <button
                        onClick={() =>
                          decreaseQuantity(item.product.id)
                        }
                        className="
                          w-11
                          h-11
                          hover:bg-gray-100
                          transition
                        "
                      >
                        -
                      </button>

                      <span className="w-12 text-center font-medium">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() =>
                          increaseQuantity(item.product.id)
                        }
                        className="
                          w-11
                          h-11
                          hover:bg-gray-100
                          transition
                        "
                      >
                        +
                      </button>

                    </div>

                  </div>

                </div>

              </div>

            ))}

          </div>

          {/* ORDER SUMMARY */}
          <div
            className="
              border
              rounded-3xl
              p-8
              h-fit
              sticky
              top-32
              bg-white
            "
          >

            <h2 className="text-3xl font-bold">
              Order Summary
            </h2>

            <div className="space-y-5 mt-8">

              <div className="flex justify-between text-gray-500">
                <span>Subtotal</span>
                <span>{formatCurrency(totalPrice)}</span>
              </div>

              <div className="flex justify-between text-gray-500">
                <span>Shipping</span>
                <span>Free</span>
              </div>

              <div className="border-t pt-5 flex justify-between">

                <span className="text-xl font-semibold">
                  Total
                </span>

                <span className="text-3xl font-bold text-pink-500">
                  {formatCurrency(totalPrice)}
                </span>

              </div>

            </div>

            <Button
              variant="primary"
              className="w-full mt-8"
            >
              Proceed To Checkout
            </Button>

          </div>

        </div>

      </Container>

    </section>
  );
};

export default Cart;
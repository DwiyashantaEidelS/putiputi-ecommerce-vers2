import { useParams } from "react-router-dom";
import { products } from "../data/products";
import Container from "../components/layout/Container";
import Button from "../components/ui/Button";
import { useCart } from "../context/CartContext";
import { Heart } from "lucide-react";
import { useState } from "react";
import { formatCurrency } from "../utils/formatCurrency";

const ProductDetailPage = () => {

  const { id } = useParams();

  const { addToCart } = useCart();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="p-10">
        Product not found
      </div>
    );
  }

  return (
    <section className="pt-32 pb-20">

      <Container>

        {/* BREADCRUMB */}
        <p className="text-gray-400 mb-10">
          Home / Products / {product.name}
        </p>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* IMAGE */}
          <div
            className="
              bg-[#fff]
              rounded-3xl
              overflow-hidden
              border
            "
          >

            <img
              src={product.image}
              alt={product.name}
              className="
                w-full
                h-[500px]
                object-contain
                p-10
              "
            />

          </div>

          {/* CONTENT */}
          <div className="max-w-xl">

            {/* CATEGORY */}
            <p
              className="
                text-pink-500
                font-semibold
                uppercase
                tracking-widest
                text-sm
              "
            >
              {product.category}
            </p>

            {/* TITLE */}
            <h1 className="text-5xl font-bold mt-4 leading-tight">
              {product.name}
            </h1>

            {/* DESCRIPTION */}
            <p className="text-gray-500 leading-8 mt-6">
              {product.description}
            </p>

            {/* PRICE */}
            <div className="mt-8 flex items-center gap-4">

              <span className="text-4xl font-bold text-pink-500">
                {formatCurrency(product.price)}
              </span>

              {/* <span className="text-gray-400 line-through">
                Rp 350000
              </span> */}

            </div>

            {/* BUTTONS */}
            <div
              className="
                flex
                flex-col
                sm:flex-row
                items-start
                sm:items-center
                gap-4
                mt-10
              "
            >

              {/* QUANTITY */}
              <div
                className="
                  flex
                  items-center
                  border
                  rounded-2xl
                  overflow-hidden
                  w-fit
                "
              >

                <button
                  onClick={() =>
                    setQuantity((prev) =>
                      prev > 1 ? prev - 1 : 1
                    )
                  }
                  className="
                    px-5
                    py-4
                    hover:bg-gray-100
                    transition
                  "
                >
                  -
                </button>

                <span
                  className="
                    px-6
                    font-semibold
                  "
                >
                  {quantity}
                </span>

                <button
                  onClick={() =>
                    setQuantity((prev) => prev + 1)
                  }
                  className="
                    px-5
                    py-4
                    hover:bg-gray-100
                    transition
                  "
                >
                  +
                </button>

              </div>

              {/* ADD TO CART */}
              <Button
                variant="primary"
                onClick={() => {

                  for (let i = 0; i < quantity; i++) {
                    addToCart(product);
                  }

                }}
              >
                Add {quantity} To Cart
              </Button>

              {/* WISHLIST */}
              <button
                className="
                  w-14
                  h-14
                  rounded-2xl
                  border
                  flex
                  items-center
                  justify-center
                  hover:bg-pink-500
                  hover:text-white
                  transition
                  shrink-0
                "
              >
                <Heart size={20} />
              </button>

            </div>

            {/* EXTRA INFO */}
            <div className="mt-12 space-y-4">

              <div className="flex justify-between border-b pb-3">
                <span className="text-gray-500">
                  Material
                </span>

                <span className="font-medium">
                  Artificial Flower
                </span>
              </div>

              <div className="flex justify-between border-b pb-3">
                <span className="text-gray-500">
                  Delivery
                </span>

                <span className="font-medium">
                  Free Shipping
                </span>
              </div>

              <div className="flex justify-between border-b pb-3">
                <span className="text-gray-500">
                  Availability
                </span>

                <span className="font-medium text-green-600">
                  In Stock
                </span>
              </div>

            </div>

          </div>

        </div>

      </Container>

    </section>
  );
};

export default ProductDetailPage;
import type { Product } from "../../types/product";
import { Link } from "react-router-dom";

import { Heart } from "lucide-react";

import toast from "react-hot-toast";

import Button from "../ui/Button";

import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";

import { formatCurrency } from "../../utils/formatCurrency";
import { truncateText } from "../../utils/truncateText";

type ProductCardProps = {
  product: Product;
};

const ProductCard = ({
  product,
}: ProductCardProps) => {

  const {
    toggleWishlist,
    isInWishlist,
  } = useWishlist();

  const { addToCart } = useCart();

  return (
    <article
      className="
        bg-white
        rounded-3xl
        overflow-hidden
        border
        hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)]
        transition-all
        duration-300
        group
      "
    >

      {/* IMAGE SECTION */}
      <Link to={`/products/${product.id}`}>

        <div
          className="
            relative
            h-[220px]
            lg:h-[260px]
            bg-white
            overflow-hidden
          "
        >

          {/* HEART BUTTON */}
          <button
            onClick={(e) => {

              e.preventDefault();
              e.stopPropagation();

              toggleWishlist(product);

            }}
            className={`
              absolute
              top-5
              right-5
              w-10
              h-10
              rounded-full
              shadow-md
              flex
              items-center
              justify-center
              z-10
              transition
              hover:scale-105

              ${isInWishlist(product.id)
                ? "bg-pink-500 text-white"
                : "bg-white text-black"
              }
            `}
          >
            <Heart size={18} />
          </button>

          {/* PRODUCT IMAGE */}
          <img
            src={`http://127.0.0.1:8000${product.image}`}
            alt={product.name}
            className="
              w-full
              h-full
              object-contain
              p-4
              lg:p-6
              group-hover:scale-105
              transition
              duration-500
            "
          />

        </div>

      </Link>

      {/* CONTENT */}
      <div
        className="
          p-4
          lg:p-6
          border-t
          border-gray-100
        "
      >

        {/* CATEGORY */}
        <p
          className="
            text-pink-500
            text-sm
            font-medium
          "
        >
          {product.category}
        </p>

        {/* TITLE */}
        <h3
          className="
            text-xl
            lg:text-2xl
            font-bold
            mt-2
          "
        >
          {product.name}
        </h3>

        {/* DESCRIPTION */}
        <p
          className="
            text-gray-500
            mt-2
            leading-relaxed
            text-sm
          "
        >
          {truncateText(product.description, 80)}
        </p>

        {/* PRICE + BUTTON */}
        <div
          className="
            flex
            items-center
            justify-between
            mt-7
            gap-4
          "
        >

          <span
            className="
              text-pink-500
              font-bold
              text-xl
            "
          >
            {formatCurrency(product.price)}
          </span>

          <Button
            variant="primary"
            onClick={() => {

              addToCart(product);

              toast.success(
                `${product.name} added to cart`
              );

            }}
          >
            Add To Cart
          </Button>

        </div>

      </div>

    </article>
  );
};

export default ProductCard;
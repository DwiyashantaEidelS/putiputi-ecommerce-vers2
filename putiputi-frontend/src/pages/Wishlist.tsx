import Container from "../components/layout/Container";

import ProductGrid from "../components/product/ProductGrid";

import Button from "../components/ui/Button";

import { useWishlist } from "../context/WishlistContext";

import { Link } from "react-router-dom";

const Wishlist = () => {

  const { wishlistItems } = useWishlist();

  if (wishlistItems.length === 0) {

    return (
      <section className="pt-36 pb-24">

        <Container>

          <div className="text-center max-w-xl mx-auto">

            <h1 className="text-4xl font-bold">
              Wishlist is Empty
            </h1>

            <p className="text-gray-500 mt-4 leading-relaxed">
              Save your favorite flowers and
              come back later to shop them.
            </p>

            <Link to="/products">

              <Button
                variant="primary"
                className="mt-8"
              >
                Explore Products
              </Button>

            </Link>

          </div>

        </Container>

      </section>
    );
  }

  return (
    <section className="pt-36 pb-24">

      <Container>

        {/* HEADING */}
        <div className="text-center mb-14">

          <p
            className="
              text-pink-500
              uppercase
              tracking-[5px]
              font-semibold
            "
          >
            Your Favorites
          </p>

          <h1
            className="
              text-4xl
              lg:text-5xl
              font-extrabold
              mt-4
            "
          >
            Wishlist
          </h1>

        </div>

        <ProductGrid
          products={wishlistItems}
        />

      </Container>

    </section>
  );
};

export default Wishlist;
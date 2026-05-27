import { useEffect, useState } from "react";

import ProductGrid from "../product/ProductGrid";

import Container from "../layout/Container";

import { Link } from "react-router-dom";

import Button from "../ui/Button";

import { getProducts } from "../../services/productApi";

import type { Product } from "../../types/product";

const FeaturedProducts = () => {

  const [products, setProducts] = useState<Product[]>([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchProducts = async () => {

      try {

        const data = await getProducts();

        setProducts(data);

      } catch (error) {

        console.log(error);

      } finally {

        setLoading(false);

      }

    };

    fetchProducts();

  }, []);

  const featuredProducts = products.slice(0, 3);

  return (
    <section className="py-24">

      <Container>

        {/* HEADING */}
        <div className="text-center mb-12">

          <p
            className="
              text-pink-500
              font-semibold
              uppercase
              tracking-widest
            "
          >
            Best Sellers
          </p>

          <h2
            className="
              text-4xl
              font-bold
              mt-3
            "
          >
            Featured Products
          </h2>

          <p
            className="
              text-gray-500
              mt-4
              max-w-2xl
              mx-auto
            "
          >
            Explore our most popular artificial flower
            collections loved by customers.
          </p>

        </div>

        {/* LOADING */}
        {loading ? (

          <p className="text-center text-gray-500">
            Loading products...
          </p>

        ) : (

          <ProductGrid
            products={featuredProducts}
          />

        )}

        {/* BUTTON */}
        <div className="text-center mt-14">

          <Link to="/products">

            <Button variant="secondary">
              View All Products
            </Button>

          </Link>

        </div>

      </Container>

    </section>
  );
};

export default FeaturedProducts;
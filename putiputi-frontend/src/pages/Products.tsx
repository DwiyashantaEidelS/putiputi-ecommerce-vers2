import ProductGrid from "../components/product/ProductGrid";
import { useEffect, useState } from "react";

import Container from "../components/layout/Container";
import ProductCardSkeleton from "../components/skeleton/ProductCardSkeleton";

import { getProducts } from "../services/productApi";

import type { Product } from "../types/product";

const Products = () => {

  const [loading, setLoading] = useState(true);

  const [products, setProducts] = useState<Product[]>([]);

  const [search, setSearch] = useState("");

  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    "Bouquet",
    "Vase Flower",
    "Decoration",
  ];

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

  const filteredProducts = products.filter((product) => {

    const matchSearch =
      product.name
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchCategory =
      activeCategory === "All" ||
      product.category === activeCategory;

    return matchSearch && matchCategory;

  });

  return (
    <section className="pt-36 pb-24">

      <Container>

        {/* HEADING */}
        <div className="text-center mb-10">

          <p
            className="
              text-pink-500
              font-semibold
              uppercase
              tracking-[5px]
            "
          >
            Our Collection
          </p>

          <h1
            className="
              text-3xl
              sm:text-4xl
              lg:text-5xl
              font-extrabold
              mt-5
            "
          >
            All Products
          </h1>

          <p
            className="
              text-gray-500
              mt-6
              max-w-2xl
              mx-auto
              leading-relaxed
            "
          >
            Discover beautiful artificial flowers
            crafted for decoration, gifts,
            and memorable moments.
          </p>

        </div>

        {/* FILTER + SEARCH */}
        <div className="mb-10 max-w-3xl mx-auto">

          {/* CATEGORY FILTER */}
          <div
            className="
              flex
              flex-wrap
              gap-3
              mb-8
              justify-center
            "
          >

            {categories.map((category) => (

              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`
                  px-5
                  py-3
                  rounded-full
                  border
                  transition
                  text-sm
                  font-medium

                  ${activeCategory === category
                    ? "bg-pink-500 text-white border-pink-500"
                    : "bg-white text-gray-600 border-gray-200 hover:border-pink-500 hover:text-pink-500"
                  }
                `}
              >
                {category}
              </button>

            ))}

          </div>

          {/* SEARCH */}
          <input
            type="text"
            placeholder="Search flowers..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="
              w-full
              border
              border-gray-200
              rounded-2xl
              px-5
              py-4
              outline-none
              focus:border-pink-500
              focus:ring-4
              focus:ring-pink-100
              transition
            "
          />

        </div>

        {/* LOADING */}
        {loading ? (

          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-3
              gap-6
            "
          >

            {[...Array(6)].map((_, index) => (
              <ProductCardSkeleton key={index} />
            ))}

          </div>

        ) : filteredProducts.length > 0 ? (

          <ProductGrid products={filteredProducts} />

        ) : (

          /* EMPTY STATE */
          <div className="text-center py-20">

            <h2 className="text-2xl font-bold">
              Product Not Found
            </h2>

            <p className="text-gray-500 mt-3">
              Try searching with another keyword.
            </p>

          </div>

        )}

      </Container>

    </section>
  );
};

export default Products;
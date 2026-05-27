const ProductCardSkeleton = () => {
  return (
    <div
      className="
        bg-white
        rounded-3xl
        border
        overflow-hidden
        animate-pulse
      "
    >

      {/* IMAGE */}
      <div
        className="
          h-[260px]
          bg-gray-200
        "
      />

      {/* CONTENT */}
      <div className="p-6">

        <div
          className="
            h-4
            w-24
            bg-gray-200
            rounded
          "
        />

        <div
          className="
            h-7
            w-3/4
            bg-gray-200
            rounded
            mt-4
          "
        />

        <div
          className="
            h-4
            w-full
            bg-gray-200
            rounded
            mt-5
          "
        />

        <div
          className="
            h-4
            w-5/6
            bg-gray-200
            rounded
            mt-3
          "
        />

        <div
          className="
            flex
            items-center
            justify-between
            mt-8
          "
        >

          <div
            className="
              h-6
              w-24
              bg-gray-200
              rounded
            "
          />

          <div
            className="
              h-12
              w-32
              bg-gray-200
              rounded-full
            "
          />

        </div>

      </div>

    </div>
  );
};

export default ProductCardSkeleton;
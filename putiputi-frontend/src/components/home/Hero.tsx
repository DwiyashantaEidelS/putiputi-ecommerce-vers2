import Button from "../ui/Button";
import heroImage from "../../assets/hero.jpg";

import Container from "../layout/Container";

const Hero = () => {
  return (
    <section
      className="
        min-h-screen
        bg-cover
        bg-center
        relative
      "
      style={{
        backgroundImage: `
          linear-gradient(
            to right,
            rgba(255,255,255,0.97),
            rgba(255,255,255,0.78),
            rgba(255,255,255,0.28)
          ),
          url(${heroImage})
        `,
      }}
    >

      <Container>

        <div
          className="
            min-h-screen
            flex
            items-center
            lg:items-start
            pt-0
            lg:pt-52
          "
        >

          <div
            className="
              max-w-md
              md:max-w-xl
              lg:max-w-2xl
            "
          >

            {/* LABEL */}
            <p
              className="
                uppercase
                tracking-[3px]
                sm:tracking-[5px]
                text-pink-500
                font-semibold
                text-xs
                sm:text-sm
                mb-4
              "
            >
              Artificial Flower Shop
            </p>

            {/* TITLE */}
            <h1
              className="
                text-3xl
                sm:text-4xl
                md:text-5xl
                lg:text-7xl
                font-extrabold
                leading-tight
                text-black
              "
            >
              Elegant Flowers
              <br />
              For Every Moment
            </h1>

            {/* DESCRIPTION */}
            <p
              className="
                text-gray-600
                text-sm
                sm:text-base
                lg:text-xl
                leading-relaxed
                mt-6
                max-w-xl
              "
            >
              Beautiful artificial flower arrangements
              crafted to bring elegance and warmth into
              your home, workspace, and special moments.
            </p>

            {/* BUTTON */}
            <div className="mt-8">

              <Button
                variant="primary"
                className="
                  px-5
                  py-3
                  text-sm
                  sm:text-base
                "
              >
                Shop Now
              </Button>

            </div>

          </div>

        </div>

      </Container>

    </section>
  );
};

export default Hero;
import { Sprout, Heart, Gift } from "lucide-react";

const Features = () => {
  return (
    <section className="py-10 px-6">

      <div className="grid md:grid-cols-3 gap-8">

        <div className="text-center p-6 rounded-2xl shadow-sm">
          <Sprout className="mx-auto text-pink-500 mb-4" size={40} />

          <h3 className="font-bold text-xl text-black">
            High Quality
          </h3>

          <p className="text-gray-500 mt-2">
            Looks like real flowers
          </p>
        </div>

        <div className="text-center p-6 rounded-2xl shadow-sm">
          <Heart className="mx-auto text-pink-500 mb-4" size={40} />

          <h3 className="font-bold text-xl text-black">
            Handcrafted
          </h3>

          <p className="text-gray-500 mt-2">
            Made with love & detail
          </p>
        </div>

        <div className="text-center p-6 rounded-2xl shadow-sm">
          <Gift className="mx-auto text-pink-500 mb-4" size={40} />

          <h3 className="font-bold text-xl text-black">
            Perfect Gift
          </h3>

          <p className="text-gray-500 mt-2">
            For any occasion
          </p>
        </div>

      </div>

    </section>
  );
};

export default Features;
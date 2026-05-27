import {
  Globe,
  Mail,
  Phone,
} from "lucide-react";

import Container from "./Container";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#fff2f7] border-t">
      
      <Container>

        <div
          className="
            py-12
            grid
            gap-12
            md:grid-cols-2
            lg:grid-cols-4
          "
        >

          {/* BRAND */}
          <div>
            <Link
              to="/"
              className="text-3xl font-extrabold"
            >
              PutiPuti
              <span className="text-pink-500">.</span>
            </Link>

            <p className="text-gray-500 mt-5 leading-relaxed">
              Elegant artificial flowers crafted to make every moment beautiful.
            </p>
          </div>

          {/* NAVIGATION */}
          <div>
            <h3 className="font-bold text-lg mb-5">
              Navigation
            </h3>

            <div className="flex flex-col gap-3">
              <Link className="text-gray-500 hover:text-pink-500" to="/">
                Home
              </Link>

              <Link className="text-gray-500 hover:text-pink-500" to="/products">
                Products
              </Link>

              <Link className="text-gray-500 hover:text-pink-500" to="/cart">
                Cart
              </Link>
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="font-bold text-lg mb-5">
              Contact
            </h3>

            <div className="flex flex-col gap-3 text-gray-500">
              <p>Malang, Indonesia</p>
              <p>hello@putiputi.com</p>
              <p>+62 812 3456 7890</p>
            </div>
          </div>

          {/* SOCIAL */}
          <div>
            <h3 className="font-bold text-lg mb-5">
              Follow Us
            </h3>

            <div className="flex gap-4">
              <a
                href="#"
                className="w-11 h-11 rounded-full bg-white border flex items-center justify-center hover:bg-pink-500 hover:text-white transition"
              >
                <Globe size={20} />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-white border flex items-center justify-center hover:bg-pink-500 hover:text-white transition"
              >
                <Mail size={20} />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-white border flex items-center justify-center hover:bg-pink-500 hover:text-white transition"
              >
                <Phone size={20} />
              </a>
            </div>
          </div>

        </div>

        {/* COPYRIGHT */}
        <div className="border-t py-6 text-center text-gray-500 text-sm">
          © 2026 PutiPuti. All rights reserved.
        </div>

      </Container>

    </footer>
  );
};

export default Footer;
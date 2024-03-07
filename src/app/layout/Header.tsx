"use client";
import { MdPhone, MdEmail } from "react-icons/md";
import { FaInstagram, FaWhatsapp, FaFacebook } from "react-icons/fa";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white">
      <div className="container mx-auto px-4">
        <div className="flex w-full">
          <div className="w-full max-w-[20%]">
            <h1 className="text-2xl font-bold">Fresh</h1>
          </div>

          <div className="flex flex-col w-full max-w-[80%]">
            <div className="flex justify-between items-center ">
              <div className="flex space-x-4">
                <div className="flex items-center space-x-2">
                  <div className="text-blue-500 text-xl">
                    <MdEmail />
                  </div>

                  <a
                    href="mailto:obrtzaciscenjefresh@gmail.com"
                    className="text-sm hover:text-blue-500 hover:underline transition-colors"
                  >
                    obrtzaciscenjefresh@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="text-blue-500 text-xl">
                    <MdPhone />
                  </div>

                  <a
                    href="Tel:+385922416743"
                    className="text-sm hover:text-blue-500 hover:underline transition-colors"
                  >
                    + 385 (92) 241-6743
                  </a>
                </div>
              </div>

              <div className="flex gap-2">
                <a
                  href="https://api.whatsapp.com/send?phone=385922416743"
                  target="_blank"
                  className="text-3xl text-[#25D366] hover:text-[#075E54] hover:underline transition-colors"
                >
                  <FaWhatsapp />
                </a>
                <a
                  href="https://www.instagram.com/fresh_obrt_za_ciscenje/"
                  target="_blank"
                  className="text-[22px] instagram rounded-md text-white p-[4px] hover:text-opacity-75"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61554058824757"
                  target="_blank"
                  className="text-3xl text-[#4267B2] hover:text-opacity-75 hover:underline transition-colors"
                >
                  <FaFacebook />
                </a>
              </div>
            </div>

            <div>
              <nav>
                <ul className="flex space-x-4">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/about">About</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

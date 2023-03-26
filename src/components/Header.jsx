import Image from "next/image";
import heroImage from "../assets/heroImage.webp";

import { Button, Typography } from "@/client/material-tailwind";


import QuiSommeNous from "./QuiSommeNous";
import PourquoiNousChoisir from "./PourquoiNousChoisir";

import { motion } from "framer-motion";

import logo1 from "../assets/pic1.png";
import logo2 from "../assets/pic2.png";
import logo3 from "../assets/pic3.png";
import logo4 from "../assets/pic4.png";
import logo5 from "../assets/pic5.png";

import LanguageSwitcher from "@/i18n/LanguageSwitcher";
import { withTranslation } from "react-i18next";
import ModalHeader from "@/shared/components/ModalHeader";

function Header({ t }) {


  return (
    <>
      <ModalHeader />
      <div className="bg-white relative pt-24 dark:bg-[#0a0c0f]">
        <main>
          <div>
            {/* Hero card */}
            <div className="relative">
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100 dark:bg-primary-dark" />
              <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="relative flex flex-col items-center justify-center shadow-xl md:h-[600px] h-screen dark:shadow-[#0a0c0f] sm:overflow-hidden sm:rounded-2xl">
                  <div className="absolute inset-0">
                    <Image
                      className="h-full w-full object-cover"
                      placeholder="blur"
                      src={heroImage}
                      alt="People working on laptops"
                    />
                    <div className="absolute inset-0 bg-black/50 mix-blend-multiply" />
                    <div className="absolute top-0 left-0 w-full h-36 bg-gradient-to-b from-black/80 to-transparent mix-blend-multiply" />
                  </div>
                  <motion.div
                    initial={{ y: -40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="relative px-4 py-16 text-center sm:px-6 sm:py-24 lg:py-32 lg:px-8"
                  >
                    <Typography
                      variant="h1"
                      color="white"
                      className="uppercase"
                    >
                      {t("header title")}
                    </Typography>
                    <Typography className="mt-4" variant="lead" color="white">
                      {t("header subtitle")}
                    </Typography>

                    <LanguageSwitcher />

                    <Typography variant="lead" className="text-gray-300">
                      Choisissez votre langue
                    </Typography>
                    <div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
                      <div className="flex md:space-x-6 space-x-0 md:space-y-0 space-y-5 md:flex-row flex-col items-center justify-center">
                        <label
                          htmlFor="my-modal-Header"
                          className="btn btn-primary text-[12px] text-white btn-wide"
                        >
                          Réserver
                        </label>

                        <a href="tel:+212660303334">
                          <Button color="white" className="block text-blue-700 py-4 btn-wide">
                            Appellez-Nous
                          </Button>
                        </a>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
            {/** Logos */}
            {/* Logo cloud */}
            <div className="bg-gray-100 dark:bg-primary-dark pb-6">
              <div className="mx-auto max-w-7xl pb-6 pt-10 px-4 sm:px-6 lg:px-8">
                <div className="mt-6 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
                  <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                    <Image
                      className="h-16 w-48 -m-2"
                      src={logo1}
                      alt="toyota"
                    />
                  </div>
                  <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                    <Image
                      id="qui_nous_sommes"
                      className="h-16 w-40 -mt-1.5"
                      src={logo2}
                      alt="hyundai"
                    />
                  </div>
                  <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                    <Image
                      className="md:h-10 h-9 md:w-32 w-20 mt-1.5"
                      src={logo3}
                      alt="audit"
                    />
                  </div>
                  <div className="col-span-1 flex justify-center md:col-span-2 md:col-start-2 lg:col-span-1">
                    <Image
                      className="h-10 md:w-32 w-28 mt-1.5"
                      src={logo4}
                      alt="dacia"
                    />
                  </div>
                  <div className="col-span-2 flex justify-center md:col-span-2 md:col-start-4 lg:col-span-1">
                    <Image className="h-12 w-40" src={logo5} alt="renault" />
                  </div>
                </div>
              </div>
            </div>

            {/* Qui Some Nous */}
            <div className="bg-gray-100 dark:bg-primary-dark lg:pb-12 pb-6">
              <div className="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
                <QuiSommeNous />
                <PourquoiNousChoisir />
              </div>
            </div>
          </div>

          {/* More main page content here... */}
        </main>
      </div>
    </>
  );
}

export default withTranslation()(Header);

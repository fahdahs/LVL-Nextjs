import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import heroImage from "../assets/heroImage.webp";

import { Button, Tooltip, Typography } from "@/client/material-tailwind";
// FLAGS
import maroc from "../assets/morocco.png";
import france from "../assets/france.png";
import uk from "../assets/united-kingdom.png";

import { useTypewriter, Cursor } from "react-simple-typewriter";

import QuiSommeNous from "./QuiSommeNous";
import PourquoiNousChoisir from "./PourquoiNousChoisir";
import { setOpen } from "@/app/factor-slice";
import Modal from "@/shared/Modal";

export default function HeroSection() {
  const [text] = useTypewriter({
    words: ["Seulment dans notre agence", "Location de voiture laayoune"],
    loop: false,
    typeSpeed: 50,
    delaySpeed: 1700,
    deleteSpeed: 25,
  });
  const dispatch = useDispatch();

  return (
    <>
      <Modal />
      <div className="bg-white relative pt-24 dark:bg-[#0a0c0f]">
        <main>
          <div>
            {/* Hero card */}
            <div className="relative">
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100 dark:bg-primary-dark" />
              <div className="mx-auto max-w-full sm:px-6 lg:px-8">
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
                  <div className="relative px-4 py-16 text-center sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                    <Typography
                      variant="h1"
                      color="white"
                      className="md:text-5xl text-3xl"
                    >
                      À Partir de 195 Dhs Par jour !
                    </Typography>
                    <Typography
                      className="h-12 mt-6 md:text-3xl text-lg"
                      variant="h2"
                      color="white"
                    >
                      <span>{text}</span>
                      <Cursor cursorColor="#1e88e5" cursorStyle="_" />
                    </Typography>

                    <div className="w-full mb-4 flex items-center justify-center mt-5 space-x-8">
                      <div className="flex justify-center items-center w-full space-x-8">
                        <Tooltip content="العربية">
                          <span className="h-[34px] w-[34px] scale-100 hover:scale-105 cursor-pointer">
                            <Image
                              src={maroc}
                              alt="location-voiture-laayoune-arabic"
                            />
                          </span>
                        </Tooltip>
                        <Tooltip content="English">
                          <span className="h-8 w-8 scale-100 hover:scale-105 cursor-pointer">
                            <Image
                              src={uk}
                              alt="location-voiture-laayoune-English"
                            />
                          </span>
                        </Tooltip>
                        <Tooltip content="Français">
                          <span className="h-8 w-8 scale-100 hover:scale-105 cursor-pointer">
                            <Image
                              src={france}
                              alt="location-voiture-laayoune-Français"
                            />
                          </span>
                        </Tooltip>
                      </div>
                    </div>

                    <Typography variant="lead" className="text-gray-300">
                      Choisissez votre langue
                    </Typography>
                    <div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
                      <div className="space-y-4 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5 sm:space-y-0">
                        <Tooltip content="Réservez maintenant en seulement 2 clics!">
                          <Button
                            onClick={() => dispatch(setOpen(true))}
                            color="white"
                            ripple={false}
                            className="text-[#1e88e5] block w-full py-4"
                          >
                            Réserver
                          </Button>
                        </Tooltip>

                        <Tooltip content="Avez-vous des questions? N’hésitez pas à demander">
                          <Button className="block w-full py-4">
                            Appellez-Nous
                          </Button>
                        </Tooltip>
                      </div>
                    </div>
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

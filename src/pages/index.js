import Head from "next/head";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";

import Categories from "@/components/Categories";
import Card from "@/shared/Card";
import Cta from "@/components/Cta";
import { Typography } from "@/client/material-tailwind";

import { groq } from "next-sanity";
import { client } from "@/utils/sanity-client";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import Modal from "@/shared/components/Modal";

import { AiOutlineWhatsApp } from "react-icons/ai";
import { motion } from "framer-motion";



//QUERY
const query = groq`*[_type == "cars"]{
  id,
  "slug": slug.current ,
  title,
  seats,
  doors,
  bags,
  price,
  "image": image.asset->url
}`;

export async function getStaticProps() {
  const cars_data = await client.fetch(query);
  return { props: { cars_data, conditionData } };
}

export default function Home({ cars_data, conditionData }) {
  const [show, setShow] = useState(false);

  const transitionNavbar = () =>
    window.scrollY > 200 ? setShow(true) : setShow(false);

  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);
    return () => window.addEventListener("scroll", transitionNavbar);
  }, []);

  return (
    <>
      <Head>
        <title>
          Location de voiture à Laayoune | LOCATION DE VOITURE LAAYOUNE
        </title>
        <meta
          name="description"
          content="Quelque soit la voiture souhaité, Location de voiture laayoune vous garantit les meilleurs tarifs en ligne pour votre voiture louée à Laayoune avec un prix raisonnable à partir de 195.00 MAD, et vous disposez d'un large choix de véhicule avec un GPS gratuit et un siège bébé à 40.00 MAD par jour pour la période de votre choix quelque soit longue ou courte."
        />
        <meta
          name="keywords"
          content="location, voiture, Laayoune, entreprise, agence, jetSahara, jet Sahara, Location de voiture laayoune"
        />
        <link
          rel="canonical"
          href="https://www.example.com/#conditions_de_location"
        />
        <meta
          property="og:title"
          content="Location de voiture à Laayoune | LOCATION DE VOITURE LAAYOUNE"
        />
        <meta
          property="og:description"
          content="Quelque soit la voiture souhaité, Location de voiture laayoune vous garantit les meilleurs tarifs en ligne pour votre voiture louée à Laayoune avec un prix raisonnable à partir de 195.00 MAD, et vous disposez d'un large choix de véhicule avec un GPS gratuit et un siège bébé à 40.00 MAD par jour pour la période de votre choix quelque soit longue ou courte."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.example.com/location-voiture-laayoune"
        />
        <meta
          property="og:image"
          content="https://www.example.com/images/voiture-laayoune.jpg"
        />
        <meta property="og:image:alt" content="Voiture à Laayoune" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Location de voiture à Laayoune | LOCATION DE VOITURE LAAYOUNE"
        />
        <meta
          name="twitter:description"
          content="Quelque soit la voiture souhaité, Location de voiture laayoune vous garantit les meilleurs tarifs en ligne pour votre voiture louée à Laayoune avec un prix raisonnable à partir de 195.00 MAD, et vous disposez d'un large choix de véhicule avec un GPS gratuit et un siège bébé à 40.00 MAD par jour pour la période de votre choix quelque soit longue ou courte."
        />
        <meta
          name="twitter:image"
          content="https://www.example.com/images/voiture-laayoune.jpg"
        />
        <meta name="twitter:image:alt" content="location Voiture à Laayoune" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="dark:bg-[#0a0c0f] relative overflow-x-hidden">
        <motion.a
          whileHover={{ scale: 1.1 }}
          href="https://wa.me/212660303334"
          className={`fixed z-[99] flex items-center justify-center bottom-6 right-6 h-[50px] w-[50px] rounded-full p-2 shadow-lg bg-[#25D366] ${
            show ? "block" : "hidden"
          }`}
        >
          <AiOutlineWhatsApp className="w-6 h-6 text-white" />
        </motion.a>
        <Modal />
        <Navbar />
        <Header />
        <Categories>
          <>
            {cars_data.map((car) => (
              <Card key={car.id} {...car} />
            ))}
            <Modal />
          </>
        </Categories>
        <Cta />
        <section
          id="conditions_de_location"
          className="w-full pt-24 relative md:pb-52 pb-8"
        >
          <div className="space-y-4 max-w-5xl mx-auto dark:bg-[#0a0c0f] mb-24 md:text-center text-start px-4">
            <motion.div
              initial={{ y: 200, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
            >
              <Typography
                variant="h5"
                className="text-blue-600 dark:text-blue-500 mb-2.5 dark:text-500"
              >
                Condition
              </Typography>
              <Typography
                variant="h2"
                className="capitalize md:text-5xl text-3xl text-gray-900 dark:text-gray-100 mb-4 font-bold"
              >
                Location de voiture laayoune conditions
              </Typography>
              <Typography
                variant="lead"
                className="mx-auto mt-5 pb-12 max-w-prose text-gray-500 dark:text-gray-300"
              >
                Agence – Aéroport de Laâyoune
              </Typography>
            </motion.div>
          {/** Conditions start*/}

          
          {/** Conditions end */}
            <svg
              id="contacts"
              className="absolute w-screen -bottom-3 left-0"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
            >
              <path
                className="fill-gray-100 dark:fill-primary-dark"
                fillOpacity="1"
                d="M0,128L60,117.3C120,107,240,85,360,85.3C480,85,600,107,720,138.7C840,171,960,213,1080,218.7C1200,224,1320,192,1380,176L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
              ></path>
            </svg>
          </div>
        </section>
        <Contact />
        <Footer />
      </main>
    </>
  );
}

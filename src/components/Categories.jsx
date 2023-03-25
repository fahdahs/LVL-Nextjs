import { Typography } from "@/client/material-tailwind";
import { motion } from "framer-motion";

export default function Categories({ children }) {
  return (
    <div className="bg-gray-100 overflow-x-hidden dark:bg-primary-dark pt-8 pb-8 md:pb-24 relative">
      <motion.div
        initial={{ y: 200, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="mb-24 md:text-center text-start px-4"
      >
        <Typography
          variant="h5"
          className="text-blue-600 dark:text-blue-500 mb-2.5 dark:text-500"
        >
          Catégories
        </Typography>
        <Typography
          variant="h2"
          className="capitalize md:text-5xl text-3xl text-gray-900 dark:text-gray-100 mb-4 font-bold"
        >
          Catégories des véhicules
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto mt-5 max-w-prose text-gray-500 dark:text-gray-300"
        >
          vous pouvez être sûr que vous bénéficierez d{"'"}un service de qualité
          supérieure et d{"'"}un véhicule en parfait état pour votre voyage.
        </Typography>
      </motion.div>
      <ul
        role="list"
        className="grid lg:mb-52 mb-24 max-w-7xl px-4 mx-auto grid-cols-1 lg:gap-12 gap-4 md:grid-cols-2 lg:grid-cols-3"
      >
        {children}
      </ul>
      <svg
        className="absolute w-screen bottom-0 left-0"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          className="fill-white dark:fill-[#0a0c0f]"
          fillOpacity="1"
          d="M0,128L60,117.3C120,107,240,85,360,85.3C480,85,600,107,720,138.7C840,171,960,213,1080,218.7C1200,224,1320,192,1380,176L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
}

import { BiCar, BiEdit, BiLike } from "react-icons/bi";
import { GiGps } from "react-icons/gi";
import { MdOutlineLocalOffer } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";

import { Autoplay, FreeMode } from "swiper";
import { Typography } from "@/client/material-tailwind";
import { motion } from "framer-motion";

export default function PourquoiNousChoisir() {
  return (
    <div className="mt-32">
      <div className="-mx-4 flex flex-wrap">
        <div className="w-full px-4">
          <motion.div
            initial={{ y: 200, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{once:true}}
            className="mb-12 md:text-center text-start lg:mb-20"
          >
            <Typography
              variant="h5"
              className="text-blue-600 dark:text-blue-500 mb-2.5 dark:text-500"
            >
              Pourquoi nous choisir
            </Typography>
            <Typography
              variant="h2"
              className="capitalize md:text-5xl text-3xl text-gray-900 dark:text-gray-100 mb-4 font-bold"
            >
              Location de Voiture Laayoune
            </Typography>
            <Typography
              variant="lead"
              className="mx-auto md:text-base mt-5 max-w-prose text-gray-500 dark:text-gray-300"
            >
              Si vous choisissez notre service de location de voiture,vous avez
              opté pour un service de qualité supérieure.ous nous engageons à
              vous fournir une expérience de location de voiture facile,
              pratique et sans tracas.
            </Typography>
          </motion.div>
        </div>
      </div>
      <div className="item-center justify-center gap-8 text-center sm:flex">
        <Swiper
          breakpoints={{
            540: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, FreeMode]}
          className="mySwiper"
        >
          <SwiperSlide className="w-full px-4 py-6 mt-6 rounded-lg sm:w-1/2 md:w-1/2 lg:w-1/4 dark:bg-primary-dark-light">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center w-12 h-12 mx-auto text-white dark:bg-blue-500 bg-blue-600 rounded-md">
                <BiCar className="text-[25px]" />
              </div>
            </div>
            <h3 className="py-4 text-2xl font-semibold text-gray-700 sm:text-xl dark:text-white">
              Livraison gratuite des voitures
            </h3>
            <Typography
              variant="small"
              className="text-gray-500 dark:text-gray-300"
            >
              Laayoune Voiture Location la meilleur agence de location de
              voiture à Laayoune vous offre La livraison gratuite des voitures
              et 4×4 dans l’aéroport de Laâyoune Hassan 1er ( Location des
              meilleurs voitures à partir 195.00 Dhs par jour )
            </Typography>
          </SwiperSlide>
          <SwiperSlide className="w-full px-4 py-6 mt-6 rounded-lg sm:w-1/2 md:w-1/2 lg:w-1/4 dark:bg-primary-dark-light">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center w-12 h-12 mx-auto text-white dark:bg-blue-500 bg-blue-600 rounded-md">
                <BiLike className="text-[25px]" />
              </div>
            </div>
            <h3 className="py-4 text-2xl font-semibold text-gray-700 sm:text-xl dark:text-white">
              Un grand choix de véhicules
            </h3>
            <Typography
            id="réservation"
              variant="small"
              className="text-gray-500 dark:text-gray-300"
            >
              Nous offrons un grand choix de véhicules récents, quelques soient
              vos besoins, votre budget ou vos préférences. Pour plus de
              renseignements, veuillez consulter notreguide de véhicules,
            </Typography>
          </SwiperSlide>
          <SwiperSlide className="w-full px-4 py-6 mt-6 rounded-lg sm:w-1/2 md:w-1/2 lg:w-1/4 dark:bg-primary-dark-light">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center w-12 h-12 mx-auto text-white dark:bg-blue-500 bg-blue-600 rounded-md">
                <GiGps className="text-[25px]" />
              </div>
            </div>
            <h3 className="py-4 text-2xl font-semibold text-gray-700 sm:text-xl dark:text-white">
              GPS Gratuit avec votre location
            </h3>
            <Typography
              variant="small"
              className="text-gray-500 dark:text-gray-300"
            >
              GPS Gratuit avec votre location de voiture Locationvoiturealaayoune.com, La plupart
              de nos véhicules sont équipées d’un GPS gratuit. Assurez-vous
              d’avoir sélectionné GPS gratuit lors de la réservation
            </Typography>
          </SwiperSlide>
          <SwiperSlide className="w-full px-4 py-6 mt-6 rounded-lg sm:w-1/2 md:w-1/2 lg:w-1/4 dark:bg-primary-dark-light">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center w-12 h-12 mx-auto text-white dark:bg-blue-500 bg-blue-600 rounded-md">
                <MdOutlineLocalOffer className="text-[25px]" />
              </div>
            </div>
            <h3 className="py-4 text-2xl font-semibold text-gray-700 sm:text-xl dark:text-white">
              Tarifs Compétitifs
            </h3>
            <Typography
              variant="small"
              className="text-gray-500 dark:text-gray-300"
            >
              Profitez de nos excellents tarifs, pour une location de véhicule,
              personnelle ou professionnelle, et d’une qualité de service hors
              pair ( Location des meilleurs voitures à partir 195.00 Dhs par
              jour )
            </Typography>
          </SwiperSlide>
          <SwiperSlide className="w-full px-4 py-6 mt-6 rounded-lg sm:w-1/2 md:w-1/2 lg:w-1/4 dark:bg-primary-dark-light">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center w-12 h-12 mx-auto text-white dark:bg-blue-500 bg-blue-600 rounded-md">
                <BiEdit className="text-[25px]" />
              </div>
            </div>
            <h3 className="py-4 text-2xl font-semibold text-gray-700 sm:text-xl dark:text-white">
              Annulation - Modification
            </h3>
            <Typography
              variant="small"
              className="text-gray-500 dark:text-gray-300"
            >
              Annulation et modification gratuites, Si vous n’êtes pas sûr de
              vos dates, vous pouvez choisir l’option Payer plus tard, qui vous
              permet de modifier ou annuler votre réservation à tout moment sans
              frais.
            </Typography>
          </SwiperSlide>
          <SwiperSlide className="w-full px-4 py-6 mt-6 rounded-lg sm:w-1/2 md:w-1/2 lg:w-1/4 dark:bg-primary-dark-light">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center w-12 h-12 mx-auto text-white dark:bg-blue-500 bg-blue-600 rounded-md">
                <BsTelephone className="text-[25px]" />
              </div>
            </div>
            <h3 className="py-4 text-2xl font-semibold text-gray-700 sm:text-xl dark:text-white">
              Assistance téléphonique 7/7jours
            </h3>
            <Typography
              variant="small"
              className="text-gray-500 dark:text-gray-300"
            >
              Nous nous engageons à fournir à nos clients un service haut de
              gamme et une assistance téléphonique 7 jour / 7 jour. Si vous avez
              besoin d’aide n’hésitez pas à nous contacter à ce numéro:+212
              679-232-802
            </Typography>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

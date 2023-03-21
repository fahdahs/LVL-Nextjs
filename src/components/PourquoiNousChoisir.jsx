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
import { Typography } from "@material-tailwind/react";

const dataFeatures = [
  {
    icon: <BiCar className="text-[25px]" />,
    title: "Livraison gratuite des voitures",
    textBody:
      "Laayoune Voiture Location la meilleur agence de location de voiture à Laayoune vous offre La livraison gratuite des voitures et 4×4 dans l’aéroport de Laâyoune Hassan 1er ( Location des meilleurs voitures à partir 195.00 Dhs par jour )",
  },
  {
    icon: <BiLike className="text-[25px]" />,
    title: "Un grand choix de véhicules",
    textBody:
      "Nous offrons un grand choix de véhicules récents, quelques soient vos besoins, votre budget ou vos préférences. Pour plus de renseignements, veuillez consulter notreguide de véhicules.",
  },
  {
    icon: <GiGps className="text-[25px]" />,
    title: "GPS Gratuit avec votre location",
    textBody:
      "GPS Gratuit avec votre location de voiture jet sahara, La plupart de nos véhicules sont équipées d’un GPS gratuit. Assurez-vous d’avoir sélectionné GPS gratuit lors de la réservation",
  },
  {
    icon: <MdOutlineLocalOffer className="text-[25px]" />,
    title: "Tarifs Compétitifs",
    textBody:
      "Profitez de nos excellents tarifs, pour une location de véhicule, personnelle ou professionnelle, et d’une qualité de service hors pair ( Location des meilleurs voitures à partir 195.00 Dhs par jour )",
  },
  {
    icon: <BiEdit className="text-[25px]" />,
    title: "Annulation - Modification",
    textBody:
      "Annulation et modification gratuites, Si vous n’êtes pas sûr de vos dates, vous pouvez choisir l’option Payer plus tard, qui vous permet de modifier ou annuler votre réservation à tout moment sans frais.",
  },
  {
    icon: <BsTelephone className="text-[25px]" />,
    title: "Assistance téléphonique 7/7jours",
    textBody:
      "Nous nous engageons à fournir à nos clients un service haut de gamme et une assistance téléphonique 7 jour / 7 jour. Si vous avez besoin d’aide n’hésitez pas à nous contacter à ce numéro:+212 679-232-802",
  },
];
//     {
//       icon: <MdOutlineLocalOffer className="text-primary text-[37px]" />,
//       title: "Tarifs Compétitifs",
//       textBody:
//         "Profitez de nos excellents tarifs, pour une location de véhicule, personnelle ou professionnelle, et d’une qualité de service hors pair ( Location des meilleurs voitures à partir 195.00 Dhs/j )",
//     },
//     {
//       icon: <BiEdit className="text-primary text-[37px]" />,
//       title: "Annulation - Modification",
//       textBody:
//         "Annulation et modification gratuites, Si vous n’êtes pas sûr de vos dates, vous pouvez choisir l’option Payer plus tard, qui vous permet de modifier ou annuler votre réservation à tout moment sans frais.",
//     },
//     {
//       icon: <BsTelephone className="text-primary text-[37px]" />,
//       title: "Assistance téléphonique 7/7jours",
//       textBody:
//         "Nous nous engageons à fournir à nos clients un service haut de gamme et une assistance téléphonique 7j/7j. Si vous avez besoin d’aide n’hésitez pas à nous contacter à ce numéro:+212 679-232-802",
//     },
//   ];

export default function PourquoiNousChoisir() {
  return (
    <div className="mt-40 p-4">
      <div className="-mx-4 flex flex-wrap">
        <div className="w-full px-4">
          <div className="mx-auto mb-12 flex items-center flex-col justify-center text-center lg:mb-20 px-8">
            <span className="text-blue-700 dark:text-blue-500 mb-2 block md:text-lg text-sm font-semibold ">
              Pourquoi nous choisir
            </span>
            <h2 className="capitalize text-gray-900 dark:text-gray-100 mb-4 text-3xl font-bold sm:text-4xl md:text-[40px]">
              Location Voiture Laayoune
            </h2>
            <p className="mx-auto mt-5 max-w-prose text-xl text-gray-500 dark:text-gray-300">
              Si vous choisissez notre service de location de voiture,vous avez
              opté pour un service de qualité supérieure.ous nous engageons à
              vous fournir une expérience de location de voiture facile,
              pratique et sans tracas.
            </p>
          </div>
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
          {dataFeatures.map((item, key) => (
            <SwiperSlide
              className="w-full px-4 py-6 mt-6 rounded-lg sm:w-1/2 md:w-1/2 lg:w-1/4 dark:bg-primary-dark-light"
              key={key}
            >
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-12 h-12 mx-auto text-white dark:bg-blue-500 bg-blue-600 rounded-md">
                  {item.icon}
                </div>
              </div>
              <h3 className="py-4 text-2xl font-semibold text-gray-700 sm:text-xl dark:text-white">
                {item.title}
              </h3>
              <Typography variant="small" className="text-gray-500 dark:text-gray-300">
                {item.textBody}
              </Typography>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

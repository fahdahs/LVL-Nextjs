import { BiCar, BiEdit, BiLike } from "react-icons/bi";
import { GiGps } from "react-icons/gi";
import { MdOutlineLocalOffer } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
//TRANSLATION 
import {t} from 'i18next';
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
              {t('whyChoosingUsSmallTitle')}
            </Typography>
            <Typography
              variant="h2"
              className="capitalize md:text-5xl text-3xl text-gray-900 dark:text-gray-100 mb-4 font-bold"
            >
              {t('whyChoosingUsBigTitle')}
            </Typography>
            <Typography
              variant="lead"
              className="mx-auto md:text-base mt-5 max-w-prose text-gray-500 dark:text-gray-300"
            >
              {t('whyChoosingUsContent')}
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
            {t('whyChoosingUsCardOneTitle')}
            </h3>
            <Typography
              variant="small"
              className="text-gray-500 dark:text-gray-300"
            >
              {t('whyChoosingUsCardOne')}
            </Typography>
          </SwiperSlide>
          <SwiperSlide className="w-full px-4 py-6 mt-6 rounded-lg sm:w-1/2 md:w-1/2 lg:w-1/4 dark:bg-primary-dark-light">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center w-12 h-12 mx-auto text-white dark:bg-blue-500 bg-blue-600 rounded-md">
                <BiLike className="text-[25px]" />
              </div>
            </div>
            <h3 className="py-4 text-2xl font-semibold text-gray-700 sm:text-xl dark:text-white">
            {t('whyChoosingUsCardTwoTitle')}
            </h3>
            <Typography
            id="réservation"
              variant="small"
              className="text-gray-500 dark:text-gray-300"
            >
              {t('whyChoosingUsCardTwo')}
            </Typography>
          </SwiperSlide>
          <SwiperSlide className="w-full px-4 py-6 mt-6 rounded-lg sm:w-1/2 md:w-1/2 lg:w-1/4 dark:bg-primary-dark-light">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center w-12 h-12 mx-auto text-white dark:bg-blue-500 bg-blue-600 rounded-md">
                <GiGps className="text-[25px]" />
              </div>
            </div>
            <h3 className="py-4 text-2xl font-semibold text-gray-700 sm:text-xl dark:text-white">
            {t('whyChoosingUsCardThreeTitle')}
            </h3>
            <Typography
              variant="small"
              className="text-gray-500 dark:text-gray-300"
            >
              {t('whyChoosingUsCardThree')}
            </Typography>
          </SwiperSlide>
          <SwiperSlide className="w-full px-4 py-6 mt-6 rounded-lg sm:w-1/2 md:w-1/2 lg:w-1/4 dark:bg-primary-dark-light">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center w-12 h-12 mx-auto text-white dark:bg-blue-500 bg-blue-600 rounded-md">
                <MdOutlineLocalOffer className="text-[25px]" />
              </div>
            </div>
            <h3 className="py-4 text-2xl font-semibold text-gray-700 sm:text-xl dark:text-white">
            {t('whyChoosingUsCardFourTitle')}
            </h3>
            <Typography
              variant="small"
              className="text-gray-500 dark:text-gray-300"
            >
              {t('whyChoosingUsCardFour')}
            </Typography>
          </SwiperSlide>
          <SwiperSlide className="w-full px-4 py-6 mt-6 rounded-lg sm:w-1/2 md:w-1/2 lg:w-1/4 dark:bg-primary-dark-light">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center w-12 h-12 mx-auto text-white dark:bg-blue-500 bg-blue-600 rounded-md">
                <BiEdit className="text-[25px]" />
              </div>
            </div>
            <h3 className="py-4 text-2xl font-semibold text-gray-700 sm:text-xl dark:text-white">
            {t('whyChoosingUsCardFiveTitle')}
            </h3>
            <Typography
              variant="small"
              className="text-gray-500 dark:text-gray-300"
            >
              {t('whyChoosingUsCardFive')}
            </Typography>
          </SwiperSlide>
          <SwiperSlide className="w-full px-4 py-6 mt-6 rounded-lg sm:w-1/2 md:w-1/2 lg:w-1/4 dark:bg-primary-dark-light">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center w-12 h-12 mx-auto text-white dark:bg-blue-500 bg-blue-600 rounded-md">
                <BsTelephone className="text-[25px]" />
              </div>
            </div>
            <h3 className="py-4 text-2xl font-semibold text-gray-700 sm:text-xl dark:text-white">
            {t('whyChoosingUsCardSixTitle')}
            </h3>
            <Typography
              variant="small"
              className="text-gray-500 dark:text-gray-300"
            >
              {t('whyChoosingUsCardSix')}
            </Typography>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

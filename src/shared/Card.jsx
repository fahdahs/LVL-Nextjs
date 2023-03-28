import { GiGymBag, GiCarDoor, GiCarSeat, GiCarKey } from "react-icons/gi";
import { FaPhoneAlt } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { motion as m } from "framer-motion";
import ImageUrlBuilder from "@sanity/image-url";

import { client } from "@/utils/sanity-client";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { setIdCar } from "@/config/factor-slice";
import { t } from "i18next";

const builder = ImageUrlBuilder(client);

export default function Card({
  id,
  image,
  title,
  price,
  seats,
  doors,
  bags,
  slug,
}) {
  const dispatch = useDispatch();
  return (
    <m.li
      initial={{
        opacity: 0,
        translateX: 50,
        translateY: -50,
      }}
      whileInView={{
        opacity: 1,
        translateX: 0,
        translateY: 0,
      }}
      transition={{
        duration: 0.1,
        delay: 0.2,
      }}
      viewport={{ once: true }}
      className="col-span-1 w-full flex flex-col dark:divide-primary-dark/50 rounded-lg bg-white dark:bg-primary-dark-light text-center mx-auto shadow cursor-pointer transition-all hover:shadow-xl dark:shadow-[#0a0c0f]"
    >
      <div className="flex flex-1 w-full flex-col py-8 px-2">
        <Image
          className="mx-auto w-4/6 flex-shrink-0 rounded-3xl"
          src={builder.image(image).url()}
          width={260}
          height={260}
          alt={slug}
        />
        <h3 className="mt-6 text-xl font-bold text-gray-900 dark:text-gray-100">
          {title}
        </h3>
        <dl className="mt-1 flex flex-grow flex-col justify-between">
          <dd className="flex space-x-1 py-2 justify-center">
            {[1, 2, 3, 4, 5].map((item) => (
              <AiFillStar key={item} className="text-yellow-300" />
            ))}
          </dd>
          <dd className="text-gray-500 dark:text-gray-50 uppercase">
            {t('categoriesCardPrice1')} <span className="font-semibold text-gray-600 dark:text-white">{price} {t('categoriesCardPrice3')}</span>{" "}
            {t('categoriesCardPrice2')}
          </dd>
          <dd className="mt-3 flex justify-center space-x-2.5">
            <span className="rounded-full flex justify-center items-center bg-blue-100 px-2 py-1 text-xs font-medium text-blue-800">
              <GiCarSeat className="mr-2" />
              <span>{seats} {t('categoriesChoiceOne')}</span>
            </span>
            <span className="rounded-full flex justify-center bg-blue-100 px-2 py-1 text-xs font-medium text-blue-800">
              <GiGymBag className="mr-2" />
              <span>{bags} {t('categoriesChoiceTwo')}</span>
            </span>
            <span className="rounded-full flex justify-center bg-blue-100 px-2 py-1 text-xs font-medium text-blue-800">
              <GiCarDoor className="mr-2" />
              <span>{doors} {t('categoriesChoiceThree')}</span>
            </span>
          </dd>
        </dl>
      </div>
      <div className="flex flex-col px-6 items-center justify-center pb-4">
        <label
          onClick={() => dispatch(setIdCar(id))}
          htmlFor="my-modal-categorie"
          className="btn btn-primary text-white text-[12px] btn-block"
        >
          <GiCarKey className="h-5 w-5" />
          <span className="ml-2">{t('categoriesReserveBtn')}</span>
        </label>
        <a className="hover:animate-pulse" href="tel:212660303334">
        <button
          className="flex items-center justify-center mt-2 py-2.5 gap-3 btn-block text-blue-600 dark:text-blue-400 text-[12px] font-bold"
        >
          <FaPhoneAlt  className="h-4 w-4" />
          {t('categoriesContactBtn')}
        </button>
        </a>
      </div>
    </m.li>
  );
}

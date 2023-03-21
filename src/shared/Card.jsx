import { GiGymBag, GiCarDoor, GiCarSeat, GiCarKey } from "react-icons/gi";
import { FaPhoneAlt } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { motion as m } from "framer-motion";
import ImageUrlBuilder from "@sanity/image-url";
import { Button } from "@/client/material-tailwind";

import { client } from "@/utils/sanity-client";
import Image from "next/image";

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
      whileHover={{
        scale: 1.03,
        transition: {
          delay: 0.1,
        },
      }}
      className="col-span-1 flex flex-col dark:divide-primary-dark/50 rounded-lg bg-white dark:bg-primary-dark-light text-center mx-auto shadow cursor-pointer transition-all hover:shadow-xl dark:shadow-[#0a0c0f]"
    >
      <div className="flex flex-1 flex-col py-8 px-2 h-12">
        <Image
          className="mx-auto w-full flex-shrink-0 rounded-3xl"
          src={builder.image(image).url()}
          width={300}
          height={300}
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
            de <span className="font-semibold text-gray-600">{price} DHS</span>{" "}
            PAR JOUR
          </dd>
          <dd className="mt-3 flex justify-center space-x-2.5">
            <span className="rounded-full flex justify-center items-center bg-blue-100 px-2 py-1 text-xs font-medium text-blue-800">
              <GiCarSeat className="mr-2" />
              <span>{seats} Seats</span>
            </span>
            <span className="rounded-full flex justify-center bg-blue-100 px-2 py-1 text-xs font-medium text-blue-800">
              <GiGymBag className="mr-2" />
              <span>{bags} Bags</span>
            </span>
            <span className="rounded-full flex justify-center bg-blue-100 px-2 py-1 text-xs font-medium text-blue-800">
              <GiCarDoor className="mr-2" />
              <span>{doors} Doors</span>
            </span>
          </dd>
        </dl>
      </div>
      <div className="flex flex-col w-full items-center justify-center pb-4">
        <Button
          onClick={() => {}}
          className="flex items-center justify-center py-4 gap-3 w-[85%]"
        >
          <GiCarKey strokeWidth={2} className="h-5 w-5" />
          Réserve
        </Button>
        <Button
          color="green"
          className="flex items-center justify-center py-4 mt-2.5 gap-3 w-[85%]"
        >
          <FaPhoneAlt strokeWidth={2} className="h-4 w-4" />
          Contact
        </Button>
      </div>
    </m.li>
  );
}

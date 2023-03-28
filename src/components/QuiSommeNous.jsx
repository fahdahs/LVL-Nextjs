import { Typography } from "@/client/material-tailwind";
import Image from "next/image";
//TRANSLATION
import {t} from 'i18next';
import image_1 from "../assets/1.jpg";
import image_3 from "../assets/3.jpg";
import image_2 from "../assets/2.webp";
import image_4 from "../assets/4.jpg";
import { motion } from "framer-motion";

export default function QuiSommeNous() {
  return (
    <>
      <div className="relative">
        <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div className="ml-auto lg:col-start-2 lg:max-w-2xl">
            <Typography variant="h4" className="text-blue-700 dark:text-500">
              
              {t('whoWeAreSmallTitle')}
            </Typography>
            <Typography
              variant="h4"
              className="mt-2 font-bold leading-8 text-gray-900 dark:text-white sm:text-3xl sm:leading-9"
            >
              {t('whoWeAreBigTitle')}

            </Typography>
            <Typography
              variant="lead"
              className="mt-4 text-base text-gray-500 dark:text-gray-300"
            >
              {t('whoWeAreContent')}

            </Typography>
            <ul className="gap-6 mt-8 md:grid md:grid-cols-2">
              <li className="mt-6 lg:mt-0">
                <div className="flex">
                  <span className="flex items-center justify-center flex-shrink-0 w-6 h-6 text-white bg-blue-600 rounded-full dark:bg-blue-500 drark:bg-transparent">
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <span className="ml-4 text-base font-medium leading-6 text-gray-500 dark:text-gray-200">
                  {t('whoWeAreOfferOne')}
                  </span>
                </div>
              </li>
              <li className="mt-6 lg:mt-0">
                <div className="flex">
                  <span className="flex items-center justify-center flex-shrink-0 w-6 h-6 text-white bg-blue-600 rounded-full dark:bg-blue-500 drark:bg-transparent">
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <span className="ml-4 text-base font-medium leading-6 text-gray-500 dark:text-gray-200">
                  {t('whoWeAreOfferTwo')}
                  </span>
                </div>
              </li>
              <li className="mt-6 lg:mt-0">
                <div className="flex">
                  <span className="flex items-center justify-center flex-shrink-0 w-6 h-6 text-white bg-blue-600 rounded-full dark:bg-blue-500 drark:bg-transparent">
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <span className="ml-4 text-base font-medium leading-6 text-gray-500 dark:text-gray-200">
                  {t('whoWeAreOfferThree')}
                  </span>
                </div>
              </li>
              <li className="mt-6 lg:mt-0">
                <div className="flex">
                  <span className="flex items-center justify-center flex-shrink-0 w-6 h-6 text-white bg-blue-600 rounded-full dark:bg-blue-500 drark:bg-transparent">
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <span className="ml-4 text-base font-medium leading-6 text-gray-500 dark:text-gray-200">
                  {t('whoWeAreOfferFour')}
                  </span>
                </div>
              </li>
            </ul>
          </div>
          <div className="relative mt-10 lg:-mx-4 relative-20 lg:mt-0 lg:col-start-1">
            <div className="relative space-y-4">
              <motion.div
                initial={{ x: -30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                className="flex items-end justify-center space-x-4 lg:justify-start"
              >
                <Image
                  className="w-32 rounded-lg shadow-lg md:w-56"
                  width={400}
                  height={400} // Added height property
                  src={image_1}
                  alt="location de voiture laayoune agence" // Changed alt text to a descriptive string
                />
                <Image
                  className="w-40 rounded-lg shadow-lg md:w-64"
                  width={400}
                  height={400} // Added height property
                  src={image_2}
                  alt="location de voiture laayoune aéroport laayoune" // Changed alt text to a descriptive string
                />
              </motion.div>
              <motion.div
                initial={{ x: 30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                className="flex items-start justify-center ml-12 space-x-4 lg:justify-start"
              >
                <Image
                  className="w-24 bg-gray-50 rounded-lg shadow-lg md:w-40"
                  width={400}
                  height={400} // Added height property
                  src={image_4}
                  alt="location de voiture laayoune agence véchule" // Changed alt text to a descriptive string
                />
                <Image
                  className="w-32 rounded-lg shadow-lg md:w-56"
                  width={400}
                  height={400} // Added height property
                  src={image_3}
                  id="services"
                  alt="location de voiture laayoune agence jet Sahara" // Changed alt text to a descriptive string
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

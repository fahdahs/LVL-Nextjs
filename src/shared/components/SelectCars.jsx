import { Fragment, useEffect, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { useDispatch, useSelector } from "react-redux";
//translation 
import {t} from 'i18next';
import carImage from "@/assets/clio 4 diesel.jpg"

import Image from "next/image";

import { StarIcon } from "@heroicons/react/24/solid";
import { setIdCar } from "@/config/factor-slice";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function SelectCars() {
  const dispatch = useDispatch();

  const car = {title: "Clio 4 diesel", price: 219, image: carImage, id: 15, slug: "Clio-4-Diesel"}
  const carsData = useSelector((state) => state.data)

  const [selected, setSelected] = useState(car);

  useEffect(() => {
    dispatch(setIdCar(selected.id))
  }, [selected, dispatch]);

  return (
    <div className="mb-2">
      <Listbox value={selected} onChange={setSelected}>
        {({ open }) => (
          <>
            <div className="mb-6">
              <div className="flex md:flex-row flex-col pt-4 items-center justify-between">
                <h2 className="text-lg text-start md:mb-0 mb-4 font-bold text-gray-900 dark:text-gray-100">
                  {selected?.title}
                </h2>

                <section aria-labelledby="information-heading">
                  <h3 id="information-heading" className="sr-only">
                    Product information
                  </h3>

                  <div className="flex items-center text-end">
                    <p className="text-gray-900 dark:text-gray-300">
                      {selected?.price} {t('pricePerDay')}
                    </p>

                    <div className="ml-4 border-l border-gray-300 pl-4">
                      <h4 className="sr-only">Reviews</h4>
                      <div className="flex items-center">
                        <div className="flex items-center">
                          {[0, 1, 2, 3, 4].map((rating) => (
                            <StarIcon
                              key={rating}
                              className="h-4 w-4 flex-shrink-0 text-yellow-400"
                              aria-hidden="true"
                            />
                          ))}
                        </div>
                        <p className="sr-only">5 out of 5 stars</p>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
            <Listbox.Label className="block text-gray-700 font-semibold text-sm mb-2 dark:text-gray-50 text-start">
              {t('ChooseCar')}
            </Listbox.Label>
            <div className="relative mt-1">
              <Listbox.Button className="relative w-full cursor-default rounded-md border border-gray-300 dark:bg-primary-dark-light dark:border-primary-dark dark:text-gray-200 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm">
                <span className="flex items-center">
                  <Image
                    src={selected?.image}
                    width={120}
                    height={120}
                    alt={selected?.slug}
                    className="h-7 w-10 flex-shrink-0 rounded-full"
                  />
                  <span className="ml-3 block truncate">{selected?.title}</span>
                </span>
                <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                  <ChevronUpDownIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </span>
              </Listbox.Button>

              <Transition
                show={open}
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm dark:bg-primary-dark-light">
                  {carsData.map((car) => (
                    <Listbox.Option
                      key={car.id}
                      className={({ active }) =>
                        classNames(
                          active ? "text-white bg-blue-600" : "text-gray-900 dark:text-gray-200",
                          "relative cursor-default select-none py-2 pl-3 pr-9"
                        )
                      }
                      value={car}
                    >
                      {({ selected, active }) => (
                        <>
                          <div className="flex items-center">
                            <Image
                              src={car.image}
                              width={300}
                              height={300}
                              alt={car.slug}
                              className="h-7 w-10 flex-shrink-0 rounded-md"
                            />
                            <span
                              className={classNames(
                                selected ? "font-semibold dark:text-blue-300" : "font-normal",
                                "ml-3 block truncate"
                              )}
                            >
                              {car.title}
                            </span>
                          </div>

                          {selected ? (
                            <span
                              className={classNames(
                                active ? "text-white" : "text-blue-600",
                                "absolute inset-y-0 right-0 flex items-center pr-4"
                              )}
                            >
                              <CheckIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </>
        )}
      </Listbox>
    </div>
  );
}
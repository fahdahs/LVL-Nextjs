import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useSelector, useDispatch } from "react-redux";
import { setOpen } from "@/app/factor-slice";
import Image from "next/image";

import car from "../assets/dacia duster 4x4 automatique.jpg";
import FirstForm from "./FirstForm";

const product = {
  name: "Everyday Ruck Snack",
  price: "$220",
  rating: 3.9,
  href: "#",
  imageSrc: car,
  imageAlt:
    "Interior of light green canvas bag with padded laptop sleeve and internal organization pouch.",
  sizes: [
    { name: "18L", description: "Perfect for a reasonable amount of snacks." },
    { name: "20L", description: "Enough room for a serious amount of snacks." },
  ],
};

export default function Modal() {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.modal.isOpen);

  const handleOpen = () => {
    dispatch(setOpen(!open));
  };

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={handleOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 hidden bg-black backdrop-blur-sm bg-opacity-75 transition-opacity md:block" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
              enterTo="opacity-100 translate-y-0 md:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 md:scale-100"
              leaveTo="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
            >
              <Dialog.Panel className="flex w-full transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl">
                <div className="relative flex w-full items-center overflow-hidden bg-white px-4 pt-14 pb-8 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                  <button
                    type="button"
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-8 lg:right-8"
                    onClick={() => handleOpen()}
                  >
                    <span className="sr-only">Close</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>

                  <div className="grid w-full grid-cols-1 items-start gap-y-8 gap-x-6 sm:grid-cols-12 lg:gap-x-8">
                    <div className="sm:col-span-4 lg:col-span-5">
                      <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg bg-white">
                        <Image
                          src={product.imageSrc}
                          alt={product.imageAlt}
                          width={400}
                          height={400}
                          className="object-cover object-center"
                        />
                      </div>
                      <p className="absolute top-4 left-4 text-center sm:static sm:mt-6">
                        <a
                          href={product.href}
                          className="font-medium text-blue-600 hover:text-blue-500"
                        >
                          View full details
                        </a>
                      </p>
                    </div>
                    <FirstForm />
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

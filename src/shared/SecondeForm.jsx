import { Input, Typography } from "@/client/material-tailwind";
import {
  setActiveForm,
  setAdress,
  setAgence,
  setCompleteReserve,
  setEmail,
  setFullName,
  setMobile,
  setReset,
} from "@/config/factor-slice";
import { MdOutlineDone } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

import emailjs from "emailjs-com";
import { useEffect, useState } from "react";

const CONFIRMATION_STATES = {
  NONE: "none",
  PENDING: "pending",
  SUCCESS: "success",
  ERROR: "error",
};

export default function SecondForm() {
  const [confirmation, setConfirmation] = useState(CONFIRMATION_STATES.NONE);
  const dispatch = useDispatch();
  const factore = useSelector((state) => state.factore);
  const {
    priceTotal,
    fullName,
    address,
    mobile,
    agence,
    email,
    days,
    dateStart,
    dateEnd,
    carName,
    gps: hasGps,
    seatBaby: hasSeatBaby,
  } = factore;


  useEffect(() => {
    if (confirmation === CONFIRMATION_STATES.PENDING) {
      emailjs
        .send(
          "service_efarc4k",
          "template_e1dzfvd",
          {
            fullName,
            email,
            mobile,
            address,
            carName,
            dateStart,
            dateEnd,
            days,
            priceTotal,
            agence,
            gps: hasGps ? "avec GPS Choisi" : "sans GPS",
            seatBaby: hasSeatBaby ? "avec Siége bébé" : "sans Siége bébé",
          },
          "AYrkx1jjG82zspr1b"
        )
        .then(
          (response) => {
            console.log("Email sent", response.status, response.text);
            setConfirmation(CONFIRMATION_STATES.SUCCESS);
          },
          (error) => {
            console.log("Email failed to send", error);
            setConfirmation(CONFIRMATION_STATES.ERROR);
          }
        );
    }
  }, [
    confirmation,
    fullName,
    email,
    mobile,
    address,
    carName,
    dateStart,
    dateEnd,
    days,
    priceTotal,
    agence,
    hasGps,
    hasSeatBaby,
  ]);

  const handleConfirmation = () => {
    if (fullName && address && mobile) {
      setConfirmation(CONFIRMATION_STATES.PENDING);
    }
  };

  return (
    <div className="mt-2.5">
      {confirmation === CONFIRMATION_STATES.SUCCESS && (
        <div className="alert alert-success shadow-sm py-2.5">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="text-gray-50 stroke-current flex-shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="text-sm text-white">Reservation Compléte!</span>
          </div>
        </div>
      )}
      {confirmation === CONFIRMATION_STATES.ERROR && (
        <div className="alert alert-error shadow-sm py-2.5">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current flex-shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="text-sm">Error! Reservation non Compléte.</span>
          </div>
        </div>
      )}
      {confirmation === CONFIRMATION_STATES.PENDING && (
        <div className="alert shadow-sm bg-gray-100 py-2.5 dark:bg-blue-gray-600 dark:text-gray-100">
          <div>
            <span class="flex-shrink-0 h-5 w-5 block rounded-full border-4 border-t-blue-300 animate-spin"></span>
            <span className="text-sm">S{"'"}il vous plaît, attendez</span>
          </div>
        </div>
      )}
      {confirmation === CONFIRMATION_STATES.NONE && (
        <div className="alert shadow-sm py-2.5 bg-gray-100 dark:bg-blue-gray-600 dark:text-gray-100">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info flex-shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          <span className="text-sm">Vérifiez bien vos informations.</span>
        </div>
      </div>
      )}
      <div className="md:px-6 px-2">
        <Typography
          variant="lead"
          className="flex items-center md:justify-start justify-center gap-4 mt-4"
        >
          <span className="text-gray-900 dark:text-gray-50 text-sm md:text-base">
            Prix Total :{" "}
          </span>
          <span className="text-blue-600 dark:text-blue-400">
            {priceTotal} Dhs TTC
          </span>
        </Typography>
        <select
          defaultValue="agence Laayoune"
          onChange={(event) => dispatch(setAgence(event.target.value))}
          className="select select-bordered w-full mt-4 dark:bg-primary-dark-light dark:text-gray-100"
        >
          <option value="Agence Laayoune">Agence Laayoune</option>
          <option value="Aéroport Laayoune">Aéroport Laayoune</option>
        </select>
        <div className="mt-4 space-y-4">
          <Input
            value={fullName}
            onChange={(event) => dispatch(setFullName(event.target.value))}
            label="Nom Compléte"
            className="dark:bg-primary-dark-light dark:text-gray-100"
          />
          <Input
            value={mobile}
            onChange={(event) => dispatch(setMobile(event.target.value))}
            label="Numéro de téléphone"
            className="dark:bg-primary-dark-light dark:text-gray-100"
          />
          <Input
            value={email}
            onChange={(event) => dispatch(setEmail(event.target.value))}
            type="email"
            label="Email"
            className="dark:bg-primary-dark-light dark:text-gray-100"
          />
          <Input
            value={address}
            onChange={(event) => dispatch(setAdress(event.target.value))}
            label="Adresse - Ville"
            className="dark:bg-primary-dark-light dark:text-gray-100"
          />
        </div>
        <div className="mt-5">
          <Typography
            variant="h6"
            className="text-gray-900 dark:text-gray-50 text-sm"
          >
            Paiment à La Livraison
          </Typography>
          <Typography
            variant="paragraph"
            className="text-gray-700 dark:text-gray-300 text-sm"
          >
            Payer en argent comptant à la livraison.
          </Typography>
        </div>
        <div className="modal-action">
          <div className="flex flex-col w-full md:mt-4 mt-1.5 justify-center items-center space-y-4">
            <button
              onClick={() => handleConfirmation()}
              className="btn btn-primary text-white btn-block text-[12px]"
            >
              Réserver
            </button>
            <button
              onClick={() => {
                dispatch(setReset());
                dispatch(setActiveForm(1))
              }}
              className="btn btn-ghost btn-block text-[12px] dark:text-gray-500"
            >
              Annuler
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

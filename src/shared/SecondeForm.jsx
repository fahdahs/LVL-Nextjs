import { Button, Input, Typography } from "@/client/material-tailwind";
import {
  setActiveForm,
  setAdress,
  setAgence,
  setEmail,
  setFullName,
  setMobile,
  setReset,
} from "@/config/factor-slice";
import { MdOutlineDone } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";


export default function SecondeForm() {
  const dispatch = useDispatch();
  const priceTotal = useSelector((state) => state.factore.priceTotal);
  return (
    <div className="px-6">
      <Typography
        variant="lead"
        className="flex items-center justify-start gap-4 mt-6"
      >
        <MdOutlineDone className="h-9 w-9 text-green-800 bg-green-50 rounded-full p-2 dark:bg-transparent dark:text-light-green-600" />
        <span className="text-gray-900 dark:text-gray-50">Prix Total : </span>
        <span className="text-blue-600 dark:text-blue-400">
          {priceTotal} Dhs TTC
        </span>
      </Typography>
      <select
        onChange={(event) => dispatch(setAgence(event.target.value))}
        className="select select-bordered w-full mt-6 dark:bg-primary-dark-light dark:text-gray-100"
      >
        <option disabled selected>
          Choisissez un bureau
        </option>
        <option value="Agence Laayoune">
          Agence Laayoune
        </option>
        <option value="Aéroport Laayoune">Aéroport Laayoune</option>
      </select>
      <div className="mt-4 space-y-4">
        <Input
          onChange={(event) => dispatch(setFullName(event.target.value))}
          label="Nom Compléte"
          className="dark:bg-primary-dark-light dark:text-gray-100"
        />
        <Input
          onChange={(event) => dispatch(setMobile(event.target.value))}
          label="Numéro de téléphone"
          className="dark:bg-primary-dark-light dark:text-gray-100"
        />
        <Input
          onChange={(event) => dispatch(setEmail(event.target.value))}
          type="email"
          label="Email"
          className="dark:bg-primary-dark-light dark:text-gray-100"
        />
        <Input
          onChange={(event) => dispatch(setAdress(event.target.value))}
          label="Adresse - Ville"
          className="dark:bg-primary-dark-light dark:text-gray-100"
        />
      </div>
      <div className="mt-5">
        <Typography variant="h6" className="text-gray-900 dark:text-gray-50">
          Paiment à La Livraison
        </Typography>
        <Typography
          variant="paragraph"
          className="text-gray-700 dark:text-gray-300"
        >
          Payer en argent comptant à la livraison.
        </Typography>
      </div>
      <div className="modal-action">
        <div className="flex flex-col w-full mt-4 justify-center items-center space-y-4">

        <label className="btn btn-primary text-white btn-block text-[12px]" htmlFor="my-modal-categorie">
          Réserve
        </label>
        <button
          onClick={() => {
            dispatch(setActiveForm(1));
            dispatch(setReset());
          }}
          className="btn btn-ghost btn-block text-[12px] dark:text-gray-500"
        >
          Précédant
        </button>
        </div>
      </div>
    </div>
  );
}

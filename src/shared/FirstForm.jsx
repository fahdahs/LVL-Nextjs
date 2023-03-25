import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@/client/material-tailwind";
import {
  calcPriceTotal,
  setActiveForm,
  setCarName,
  setCarPrice,
  setDateEnd,
  setDateStart,
  setDays,
  setGps,
  setReset,
  setSeatBaby,
} from "@/config/factor-slice";

export default function FirstForm({ children, carName, carPrice }) {
  const dispatch = useDispatch();
  const [daysValue, setDaysValue] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [isSeatBaby, setIsSeatBaby] = useState(false);
  const [isGps, setIsGps] = useState(false);
  const [border, setBorder] = useState(
    "dark:border-primary-dark/60 border-gray-300"
  );

  useEffect(() => {
    dispatch(setSeatBaby(isSeatBaby));
    dispatch(setGps(isGps));
  }, [dispatch, isSeatBaby, isGps]);

  // Update the redux store on change of days, seatBaby or dates
  useEffect(() => {
    dispatch(setCarName(carName));
    dispatch(setCarPrice(carPrice));
    dispatch(setDays(daysValue));
  }, [dispatch, carName, carPrice, daysValue]);

  // Calculate the duration between start and end dates
  useEffect(() => {
    if (startDate && endDate) {
      const startDateObj = new Date(startDate);
      const endDateObj = new Date(endDate);
      const durationMs = endDateObj.getTime() - startDateObj.getTime();
      const durationDays = Math.floor(durationMs / (1000 * 60 * 60 * 24));
      setDaysValue(durationDays);
    }
  }, [startDate, endDate]);

  // Handle the change of start date
  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
    dispatch(setDateStart(event.target.value));
  };

  // Handle the change of end date
  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
    dispatch(setDateEnd(event.target.value));
  };

  // Handle the click of the Suivant button
  const handleNext = () => {
    const startDateObj = new Date(startDate);
    const endDateObj = new Date(endDate);
    if (startDate && endDate && endDateObj.getTime() > startDateObj.getTime()) {
      dispatch(setActiveForm(2));
      dispatch(calcPriceTotal());
    } else {
      setBorder("border-red-600");
    }
  };

  return (
    <div className="flex-shrink-0 px-6 my-6 relative w-full h-full">
      <div className="flex flex-col w-full border-opacity-50 my-4">
        <div className="divider text-sm text-gray-600">Assurez-vous que les informations sont correctes</div>
      </div>
      <div className="justify-center">
        {/* Select the car */}
        {children}

        {/* Input fields for start and end dates */}
        <div className="mb-5">
          <label
            htmlFor="date-start"
            className="block text-gray-700 font-semibold mb-2 dark:text-gray-50"
          >
            Départ
          </label>
          <input
            type="date"
            id="date-start"
            name="date-start"
            className={`w-full px-4 py-2 border rounded-md focus:outline-none dark:bg-primary-dark-light dark:text-gray-50 ${border}`}
            onChange={handleStartDateChange}
            value={startDate}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="date-end"
            className="block text-gray-700 font-semibold mb-2"
          >
            Retour
          </label>
          <input
            type="date"
            id="date-end"
            name="date-end"
            className={`w-full border px-4 py-2 rounded-md focus:outline-none dark:bg-primary-dark-light dark:text-gray-50 ${border}`}
            onChange={handleEndDateChange}
            value={endDate}
          />
        </div>
        {/* Checkboxes for GPS and seat baby */}
        <fieldset className="space-y-5">
          <legend className="sr-only">Notifications</legend>
          <div className="relative flex items-start">
            <div className="flex h-5 items-center">
              <input
                onChange={() => setIsSeatBaby((prev) => !prev)}
                id="seat"
                type="checkbox"
                className="checkbox dark:checkbox-primary dark:bg-primary-dark-light"
              />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="seat" className="label-text dark:text-gray-50">
                Siége Bébé
              </label>
              <span className="text-gray-500 dark:text-gray-300 block">
                40.00 Dhs/Jour
              </span>
            </div>
          </div>
          <div className="relative flex items-start">
            <div className="flex h-5 items-center">
              <input
                onChange={() => setIsGps((prev) => !prev)}
                id="gps"
                type="checkbox"
                className="checkbox dark:checkbox-primary dark:bg-primary-dark-light"
              />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="gps" className="label-text dark:text-gray-50">
                GPS Gratuit
              </label>
              <span className="text-gray-500 block dark:text-gray-300">
                0.00 Dhs/Jour
              </span>
            </div>
          </div>
        </fieldset>
        <a href="#" className="sr-only">
          Plus d{"'"}informations ?
        </a>

        {/* Reserve and Cancel buttons */}
        <div className="flex flex-col w-full mt-10 space-y-4 justify-center items-center">
          <button
            onClick={handleNext}
            className="btn btn-primary btn-block text-[12px] text-white"
          >
            Reserve
          </button>
          <div className="modal-action w-full">
            <label
              onClick={() => dispatch(setReset())}
              htmlFor="my-modal-categorie"
              className="btn btn-ghost btn-block text-[12px] dark:text-gray-500"
            >
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

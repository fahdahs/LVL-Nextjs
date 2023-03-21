import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modal: {
    isOpen: false,
    activeForm: 1,
    confermation: false,
  },
  factore: {
    priceCar: 0,
    priceSeatBaby: 40,
    days: 0,
    priceTotal: 0,
    days: 0,
    seatBaby: false,
    gps: false,
    fullName: "",
    dateStart: "",
    dateEnd: "",
    mobile: "",
    address: "",
    email: "",
    carName: "",
    agence: "",
  },
};

// Define the navigation slice with a single reducer for updating the selected link
const factoreSlice = createSlice({
  name: "factoreSlice",
  initialState,
  reducers: {
    setOpen(state, action) {
      state.modal.isOpen = action.payload;
    },
    setActiveForm(state, action) {
      state.modal.activeForm = action.payload;
    },
    setInfoFirstForm(state, action) {},
    setInfoSecondForm(state, action) {},
    calcPriceTotal(state, action) {
      state.factore.seatBaby
        ? parseInt(state.factore.priceCar) * parseInt(state.factore.days) +
          parseInt(state.factore.priceSeatBaby) * parseInt(state.factore.days)
        : parseInt(state.factore.priceCar) * parseInt(state.factore.days);
    },
    setReset: (state, action) => {
      return {
        modal: {
          isOpen: false,
          activeForm: 1,
          confermation: false,
        },
        factore: {
          priceCar: 0,
          priceSeatBaby: 40,
          days: 0,
          priceTotal: 0,
          days: 0,
          seatBaby: false,
          gps: false,
          fullName: "",
          dateStart: "",
          dateEnd: "",
          mobile: "",
          address: "",
          email: "",
          carName: "",
          agence: "",
        },
      };
    },
  },
});

// Export the action creator for updating the selected link
export const {
  setOpen,
  setActiveForm,
  setInfoFirstForm,
  setInfoSecondForm,
  setReset,
} = factoreSlice.actions;

// Export the reducer for the navigation slice
export default factoreSlice.reducer;

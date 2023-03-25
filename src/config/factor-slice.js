import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modals: {
    activeForm: 1,
    confermation: false,
  },
  factore: {
    carPrice: 0,
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
  data: [],
};

// Define the navigation slice with a single reducer for updating the selected link
const factoreSlice = createSlice({
  name: "factore",
  initialState,
  reducers: {
    setActiveForm: (state, action) => {
      state.modals.activeForm = action.payload;
    },
    calcPriceTotal: (state, action) => {
      state.factore.priceTotal = state.factore.seatBaby
        ? parseInt(state.factore.carPrice) * parseInt(state.factore.days) +
          parseInt(state.factore.priceSeatBaby) * parseInt(state.factore.days)
        : parseInt(state.factore.carPrice) * parseInt(state.factore.days);
    },
    setReset: (state, action) => {
      return {
        ...state,
        modal: {
          activeForm: 1,
          confermation: false,
        },
        factore: {
          carPrice: 0,
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
    setData: (state, action) => {
      state.data = action.payload;
    },
    setIdCar: (state, action) => {
      state.id = action.payload;
    },
    setCarName: (state, action) => {
      state.factore.carName = action.payload;
    },
    setCarPrice: (state, action) => {
      state.factore.carPrice = action.payload;
    },
    setSeatBaby: (state, action) => {
      state.factore.seatBaby = action.payload;
    },
    setGps: (state, action) => {
      state.factore.gps = action.payload;
    },
    setDays: (state, action) => {
      state.factore.days = action.payload;
    },
    setDateEnd: (state, action) => {
      state.factore.dateEnd = action.payload
    },
    setDateStart: (state, action) => {
      state.factore.dateStart = action.payload
    },
    setFullName: (state, action) => {
      state.factore.fullName = action.payload
    },
    setEmail: (state, action) => {
      state.factore.email = action.payload
    },
    setAdress: (state, action) => {
      state.factore.address = action.payload
    },
    setMobile: (state, action) => {
      state.factore.mobile = action.payload
    },
    setAgence: (state, action) => {
      state.factore.agence = action.payload
    }
  },
});

// Export the action creator for updating the selected link
export const {
  setActiveForm,
  setReset,
  setData,
  setIdCar,
  setCarName,
  setCarPrice,
  setSeatBaby,
  setGps,
  setDays,
  calcPriceTotal,
  setDateEnd,
  setDateStart,
  setFullName,
  setMobile,
  setAdress,
  setEmail,
  setAgence
} = factoreSlice.actions;

// Export the reducer for the navigation slice
export default factoreSlice.reducer;

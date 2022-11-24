import { createSlice } from "@reduxjs/toolkit";

const initialStateObject = {
   data: []
};

export const selectData = (state) => state.crypto.data;

export const cryptoSlice = createSlice({
   name: "crypto",
   initialState: initialStateObject,
   reducers: {
      setCryptoData: (state, action) => {
         return {
            data: action.payload
         };
      },
   },
});

export const {
   setCryptoData
} = cryptoSlice.actions;

export default cryptoSlice.reducer;

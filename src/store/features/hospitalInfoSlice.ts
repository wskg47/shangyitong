import { createSlice } from "@reduxjs/toolkit";
import type { HospitalBookingRule, HospitalInfo } from "@/API/hospital/type";

const initialState = {
  hospital: {} as HospitalInfo,
  bookingRule: {} as HospitalBookingRule,
};

const hospitalInfoSlice = createSlice({
  name: "hospitalInfo",
  initialState,
  reducers: {
    setHospitalInfo(state, { payload }) {
      state.hospital = payload.hospital;
      state.bookingRule = payload.bookingRule;
    },
  },
});

export const { setHospitalInfo } = hospitalInfoSlice.actions;
export default hospitalInfoSlice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface HomeState {
  hospitalLevel: string;
  districtCode: string;
}
const initialState: HomeState = {
  hospitalLevel: "",
  districtCode: "",
};
const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    setHospitalLevel: (state, action: PayloadAction<string>) => {
      state.hospitalLevel = action.payload;
    },
    setDistrictCode: (state, action: PayloadAction<string>) => {
      state.districtCode = action.payload;
    },
  },
});
export const { setHospitalLevel, setDistrictCode } = homeSlice.actions;
export default homeSlice.reducer;

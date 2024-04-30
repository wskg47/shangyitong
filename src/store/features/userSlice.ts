import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/store";

interface UserState {
  userName: string;
}
const initialState: UserState = {
  userName: "codeEasy",
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<string>) => {
      state.userName = action.payload;
    },
    removeUser: (state) => {
      state.userName = "";
    },
  },
});
export const { setUser, removeUser } = userSlice.actions;
export const selectUser = (state: RootState) => state.user.userName;
export default userSlice.reducer;

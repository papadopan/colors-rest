import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ColorBase {
  name: string;
  hex: string;
}

export interface CounterState {
  colors: ColorBase[];
}

const initialState: CounterState = {
  colors: [],
};

export const counterSlice = createSlice({
  name: "colors",
  initialState,
  reducers: {
    addColor: (state, action: PayloadAction<ColorBase>) => {
      state.colors.push(action.payload);
    },
    removeColor: (state, { payload }: PayloadAction<ColorBase>) => {
      state.colors.filter((item) => item.name !== payload.name);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addColor, removeColor } = counterSlice.actions;

export default counterSlice.reducer;

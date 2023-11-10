import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCarwashItem } from "../../apis/carwashes";

export const getCarwashItemThunk = createAsyncThunk(
  "carwash/getCarwash",
  async (carwashId, { rejectWithValue }) => {
    try {
      const response = await getCarwashItem(carwashId);
      return response.data.response;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const carwashSlice = createSlice({
  name: "carwash",
  initialState: {
    id: 0,
    name: "",
    monthlySales: 0,
    monthlyReservations: 0,
    optime: null,
    bayReservationList: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(getCarwashItemThunk.pending, (state) => {
      state.isLoading = true;
    }),
      builder.addCase(getCarwashItemThunk.fulfilled, (state, action) => {
        state.id = action.payload.id;
        state.name = action.payload.name;
        state.monthlySales = action.payload.monthlySales;
        state.monthlyReservations = action.payload.monthlyReservations;
        state.optime = action.payload.optime;
        state.bayReservationList = action.payload.bayReservationList;
        state.isLoading = false;
      }),
      builder.addCase(getCarwashItemThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload.error;
      });
  },
});

export default carwashSlice.reducer;

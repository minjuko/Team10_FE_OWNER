import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCarwashItem } from "../../apis/carwashes";

export const getCarwashItemThunk = createAsyncThunk(
  "carwash/getCarwash",
  async (payload, { rejectWithValue }) => {
    try {
      const carwashId =
        typeof payload === "object" ? payload.carwashId : payload;
      const selectedDate =
        typeof payload === "object" ? payload.selectedDate : undefined;
      const response = await getCarwashItem(carwashId, selectedDate);
      return response.data.response;
    } catch (error) {
      return rejectWithValue(
        error.response?.data ?? { error: { message: error.message } },
      );
    }
  },
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
  reducers: {},
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
        state.error = action.payload?.error ?? action.error;
      });
  },
});

export default carwashSlice.reducer;

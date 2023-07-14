import { createSlice } from '@reduxjs/toolkit';
import { REQUEST_STATE } from '../utils';
import { addItemAsync, getItemsAsync, deleteItemAsync, addUnitAsync } from './thunks';

const INITIAL_STATE = {
  list: [],
  getItems: REQUEST_STATE.IDLE,
  addItem: REQUEST_STATE.IDLE,
  deleteItem: REQUEST_STATE.IDLE,
  addUnit: REQUEST_STATE.IDLE,
  error: null,
};

const itemsSlice = createSlice({
  name: 'items',
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getItemsAsync.pending, (state) => {
        state.getItems = REQUEST_STATE.PENDING;
        state.error = null;
      })
      .addCase(getItemsAsync.fulfilled, (state, action) => {
        state.getItems = REQUEST_STATE.FULFILLED;
        state.list = action.payload;
      })
      .addCase(getItemsAsync.rejected, (state, action) => {
        state.getItems = REQUEST_STATE.REJECTED;
        state.error = action.error;
      })
      .addCase(addItemAsync.pending, (state) => {
        state.addItem = REQUEST_STATE.PENDING;
        state.error = null;
      })
      .addCase(addItemAsync.fulfilled, (state, action) => {
        state.addItem = REQUEST_STATE.FULFILLED;
        state.list.push(action.payload);
      })
      .addCase(addItemAsync.rejected, (state, action) => {
        state.addItem = REQUEST_STATE.REJECTED;
        state.error = action.error;
      })
      .addCase(deleteItemAsync.pending, (state) => {
        state.deleteItem = REQUEST_STATE.PENDING;
        state.error = null;
      })
      .addCase(deleteItemAsync.fulfilled, (state, action) => {
        state.deleteItem = REQUEST_STATE.FULFILLED;
        state.list = state.list.filter((item) => item.id !== action.payload);
      })
      .addCase(deleteItemAsync.rejected, (state, action) => {
        state.deleteItem = REQUEST_STATE.REJECTED;
        state.error = action.error;
      })
      .addCase(addUnitAsync.pending, (state) => {
        state.addUnit = REQUEST_STATE.PENDING;
        state.error = null;
      })
      .addCase(addUnitAsync.fulfilled, (state, action) => {
        state.addUnit = REQUEST_STATE.FULFILLED;
        // Update the unit count of the corresponding item in the list
        const id = action.payload.id;
        const unitsToAdd = action.payload.unitsToAdd;
        const itemIndex = state.list.findIndex((item) => item.id === id);
        if (itemIndex !== -1) {
          state.list[itemIndex].unitsRemaining += unitsToAdd;
        }
      })
      .addCase(addUnitAsync.rejected, (state, action) => {
        state.addUnit = REQUEST_STATE.REJECTED;
        state.error = action.error;
      });
  },
});

export default itemsSlice.reducer;

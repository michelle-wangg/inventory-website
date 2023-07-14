import { createAsyncThunk } from '@reduxjs/toolkit';
import { actionTypes } from './actionTypes';
import ItemService from './service';

export const getItemsAsync = createAsyncThunk(
  actionTypes.GET_ITEMS,
  async (options) => {
    return await ItemService.getItems(options);
  }
);

export const addItemAsync = createAsyncThunk(
  actionTypes.ADD_ITEM,
  async (item) => {
    return await ItemService.addItem({ item });
  }
);

export const deleteItemAsync = createAsyncThunk(
  actionTypes.DELETE_ITEM,
  async (id) => {
    await ItemService.deleteItem(id);
    return id;
  }
);

export const addUnitAsync = createAsyncThunk(
  actionTypes.ADD_UNIT,
  async (id) => {
    await ItemService.addUnit(id);
    return id;
  }
);

export const subtractUnitAsync = createAsyncThunk(
  actionTypes.SUBTRACT_UNIT,
  async (id) => {
    await ItemService.subtractUnit(id);
    return id;
  }
);

export const searchItemsAsync = createAsyncThunk(
  actionTypes.SEARCH_ITEMS,
  async (query) => {
    return await ItemService.searchItems(query);
  }
);

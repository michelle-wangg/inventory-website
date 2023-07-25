import itemsReducer from '../items/reducer';
import { addItemAsync, getItemsAsync, deleteItemAsync, addUnitAsync } from '../items/thunks';
import { REQUEST_STATE } from '../utils';

describe('items reducer', () => {
  const initialState = {
    list: [],
    getItems: REQUEST_STATE.IDLE,
    addItem: REQUEST_STATE.IDLE,
    deleteItem: REQUEST_STATE.IDLE,
    addUnit: REQUEST_STATE.IDLE,
    error: null,
  };

  it('should handle initial state', () => {
    expect(itemsReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle getItemsAsync.pending', () => {
    expect(
      itemsReducer(initialState, getItemsAsync.pending())
    ).toEqual({
      ...initialState,
      getItems: REQUEST_STATE.PENDING,
      error: null,
    });
  });

  it('should handle getItemsAsync.fulfilled', () => {
    const fetchedItems = [{ _id: 'test-id-1', name: 'Item 1', description: 'Description 1', price: 10 }];
    expect(
      itemsReducer(initialState, getItemsAsync.fulfilled(fetchedItems))
    ).toEqual({
      ...initialState,
      getItems: REQUEST_STATE.FULFILLED,
      list: fetchedItems,
    });
  });

  it('should handle getItemsAsync.rejected', () => {
    const error = new Error('Error adding units');
    const rejectedAction = getItemsAsync.rejected(error);
    expect(
      itemsReducer(initialState, rejectedAction)
    ).toEqual({
      ...initialState,
      getItems: REQUEST_STATE.REJECTED,
      error: rejectedAction.error,
    });
  });

  it('should handle addItemAsync.pending', () => {
    expect(
      itemsReducer(initialState, addItemAsync.pending())
    ).toEqual({
      ...initialState,
      addItem: REQUEST_STATE.PENDING,
      error: null,
    });
  });

  it('should handle addItemAsync.fulfilled', () => {
    const itemToAdd = { _id: 'test-id-1', name: 'New Item', description: 'Description', price: 10 };
    expect(
      itemsReducer(initialState, addItemAsync.fulfilled(itemToAdd))
    ).toEqual({
      ...initialState,
      addItem: REQUEST_STATE.FULFILLED,
      list: [...initialState.list, itemToAdd],
    });
  });

  it('should handle addItemAsync.rejected', () => {
    const error = new Error('Error adding item');
    const rejectedAction = addItemAsync.rejected(error);;
    expect(
      itemsReducer(initialState, rejectedAction)
    ).toEqual({
      ...initialState,
      addItem: REQUEST_STATE.REJECTED,
      error: rejectedAction.error,
    });
  });

  it('should handle deleteItemAsync.pending', () => {
    expect(
      itemsReducer(initialState, deleteItemAsync.pending())
    ).toEqual({
      ...initialState,
      deleteItem: REQUEST_STATE.PENDING,
      error: null,
    });
  });

  it('should handle deleteItemAsync.fulfilled', () => {
    const itemIdToDelete = 'test-id-1';
    const stateWithItems = {
      ...initialState,
      list: [
        { _id: 'test-id-1', name: 'Item 1', description: 'Description 1', price: 10 },
        { _id: 'test-id-2', name: 'Item 2', description: 'Description 2', price: 20 },
      ],
    };
    expect(
      itemsReducer(stateWithItems, deleteItemAsync.fulfilled(itemIdToDelete))
    ).toEqual({
      ...initialState,
      deleteItem: REQUEST_STATE.FULFILLED,
      list: [{ _id: 'test-id-2', name: 'Item 2', description: 'Description 2', price: 20 }],
    });
  });

  it('should handle deleteItemAsync.rejected', () => {
    const error = new Error('Error deleting item');
    const rejectedAction = deleteItemAsync.rejected(error);
    expect(
      itemsReducer(initialState, rejectedAction)
    ).toEqual({
      ...initialState,
      deleteItem: REQUEST_STATE.REJECTED,
      error: rejectedAction.error,
    });
  });

  it('should handle addUnitAsync.pending', () => {
    expect(
      itemsReducer(initialState, addUnitAsync.pending())
    ).toEqual({
      ...initialState,
      addUnit: REQUEST_STATE.PENDING,
      error: null,
    });
  });

  it('should handle addUnitAsync.fulfilled', () => {
    const itemId = 'test-id-1';
    const unitsToAdd = 1;
    const stateWithItems = {
      ...initialState,
      list: [
        { _id: 'test-id-1', name: 'Item 1', description: 'Description 1', price: 10, unitsRemaining: 10 },
        { _id: 'test-id-2', name: 'Item 2', description: 'Description 2', price: 20, unitsRemaining: 15 },
      ],
    };
    expect(
      itemsReducer(stateWithItems, addUnitAsync.fulfilled({ itemId, unitsToAdd }))
    ).toEqual({
      ...initialState,
      addUnit: REQUEST_STATE.FULFILLED,
      list: [
        { _id: 'test-id-1', name: 'Item 1', description: 'Description 1', price: 10, unitsRemaining: 11 },
        { _id: 'test-id-2', name: 'Item 2', description: 'Description 2', price: 20, unitsRemaining: 15 },
      ],
    });
  });

  it('should handle addUnitAsync.rejected', () => {
    const error = new Error('Error adding units');
    const rejectedAction = addUnitAsync.rejected(error);
    expect(
      itemsReducer(initialState, rejectedAction)
    ).toEqual({
      ...initialState,
      addUnit: REQUEST_STATE.REJECTED,
      error: rejectedAction.error,
    });
  });

});

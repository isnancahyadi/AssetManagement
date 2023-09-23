import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import config from '../../../config';

const initialState = {
  data: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

export const getUser = createAsyncThunk('auth/getUser', async (_, thunkAPI) => {
  try {
    const {data} = await axios.get(config.REACT_APP_PROFILE);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue('Server Error');
  }
});

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    reset: () => initialState,
  },
  extraReducers: builder => {
    builder.addCase(getUser.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.isLoading = true;
      state.isSuccess = true;
      state.data = action.payload;
    });
    builder.addCase(getUser.rejected, state => {
      state.isLoading = false;
      state.isError = true;
      state.message = 'error';
    });
  },
});

export const {reset} = userSlice.actions;

export default userSlice.reducer;

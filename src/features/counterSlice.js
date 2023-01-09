import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'entry',
  initialState: {
    value: '',
  },
  reducers: {
    input: (state, action) => {
      if (['*', '+', '-', '/'].includes(state.value.charAt(state.value.length-1)) && ['*', '+', '-', '/'].includes(action.payload)) {
        state.value = state.value.slice(0, state.value.length-1)+action.payload
      } else {
        state.value += action.payload
      }
    },
    reset: (state) => {
      state.value = ''
    },
  },
})

// Action creators are generated for each case reducer function
export const { input, reset } = counterSlice.actions
export const selectEntry = (state) => state.entry.value

export default counterSlice.reducer
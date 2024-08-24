import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  language: 'english',
}

const preferencesSlice = createSlice({
  name:'preferences',
  initialState,
  reducers:{
    setLanguage: (state, action) => {
      state.language = action.payload
    },
    resetPreferences: () => initialState
  }
})

export default preferencesSlice.reducer

export const { setLanguage , resetPreferences } = preferencesSlice.actions
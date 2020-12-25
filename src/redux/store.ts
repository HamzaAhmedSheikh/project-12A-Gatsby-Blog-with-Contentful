import { createSlice, configureStore} from "@reduxjs/toolkit"

const authPage = createSlice({
  name: "Auth Page",
  initialState: {login: false},
  reducers: {
    setLoggedIn: (state, action) => {
        state.login=action.payload
    },
  },
})

const store = configureStore({ reducer: authPage.reducer });




export const { setLoggedIn } = authPage.actions;


export { store, authPage };
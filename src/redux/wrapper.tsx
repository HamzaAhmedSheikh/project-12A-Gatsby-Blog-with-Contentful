import { store } from "./store"
import { Provider } from "react-redux"
import React from "react"

export default ({ element }) => <Provider store={store}>{element}</Provider>
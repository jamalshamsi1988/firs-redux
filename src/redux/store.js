import { configureStore } from '@reduxjs/toolkit'

import reducer from "./counter/counterReducer";


const store = configureStore({reducer:reducer});

export default store;
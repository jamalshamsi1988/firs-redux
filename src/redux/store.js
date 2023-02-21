import {configureStor} from "@reduxjs/toolkit";

import reducer from "./counter/counterReducer";

const store = configureStor(reducer);

export default store;
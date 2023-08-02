

import { createStore,applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import { commonReducer } from "./redux/CommonReducer";

const logger = createLogger();
const store = createStore(commonReducer , applyMiddleware(thunk,logger));
export default store;
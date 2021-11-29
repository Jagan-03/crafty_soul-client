import { combineReducers } from "redux";

import cart from "./cart";
import collection from "./collection";
import orders from "./order";
import auth from "./auth";

export default combineReducers({"cart" : cart, "collection" : collection, auth, orders});
import INITIAL_STATE from "../public/INITIAL_STATE";
import { storeDataReducer, groupDataReducer, departmentDataReducer, getSearchDataReducer, createCouponReducer, createUpcReducer, getProductReducer, getMemberReducer, getDeptStoreReducer, getBydeptStore } from "./Reducers";

const reducers = {
    DEPARTMENT_DATA_START: departmentDataReducer,
    DEPARTMENT_DATA_SUCCESS: departmentDataReducer,
    DEPARTMENT_DATA_FAILURE: departmentDataReducer,

    STORE_DATA_START: storeDataReducer,
    STORE_DATA_SUCCESS: storeDataReducer,
    STORE_DATA_FAILURE: storeDataReducer,

    GROUP_DATA_START: groupDataReducer,
    GROUP_DATA_SUCCESS: groupDataReducer,
    GROUP_DATA_FAILURE: groupDataReducer,
   
    SEARCH_DATA_START:getSearchDataReducer,
  SEARCH_DATA_SUCCESS:getSearchDataReducer,

  SEARCH_DATA_FAILURE:getSearchDataReducer,
  CREATE_COUPON_START :createCouponReducer,
  CREATE_COUPON_SUCCESS :createCouponReducer,
  CREATE_COUPON_FAILURE :createCouponReducer,

  CREATE_UPC_START:createUpcReducer,
  CREATE_UPC_SUCCESS:createUpcReducer,
  CREATE_UPC_FAILURE:createUpcReducer,
  
  GET_PRODUCT_START:getProductReducer,
  GET_PRODUCT_SUCCESS:getProductReducer,
  GET_PRODUCT_FAILURE:getProductReducer,

  GET_MEMBER_START:getMemberReducer,
  GET_MEMBER_SUCCESS:getMemberReducer,
  GET_MEMBER_FAILURE:getMemberReducer,

  DEPT_STORE_DATA_START:getDeptStoreReducer,
  DEPT_STORE_DATA_SUCCESS:getDeptStoreReducer,
  DEPT_STORE_DATA_FAILURE:getDeptStoreReducer,
  GET_DEPT_STORE_START:getBydeptStore,
  GET_DEPT_STORE_SUCCESS:getBydeptStore,
  GET_DEPT_STORE_FAILURE:getBydeptStore,
}

export const commonReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;
    const reducer = reducers[type];
    return reducer ? reducer(state,payload) : state;
}

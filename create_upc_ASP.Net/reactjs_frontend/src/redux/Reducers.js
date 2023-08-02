export const departmentDataReducer=(state,payload)=>{
    return {
        ...state,
        departmentData:payload && payload.data && payload.data,
        departmentMessage:payload && payload.message && payload.message,
        departmentLoading:payload && payload.loading && payload.loading,
    }
}

export const storeDataReducer=(state,payload)=>{
    return {
        ...state,
        storeData:payload && payload.data && payload.data,
        storeMessage:payload && payload.message && payload.message,
        storeLoading:payload && payload.loading && payload.loading,
    }
}

export const groupDataReducer=(state,payload)=>{
    return {
        ...state,
        groupData:payload && payload.data && payload.data,
        groupMessage:payload && payload.message && payload.message,
        groupLoading:payload && payload.loading && payload.loading,
    }
}

export const getSearchDataReducer=(state,payload)=>{
    return {
        ...state,
        searchData:payload && payload.data && payload.data,
        searchMessage:payload && payload.message && payload.message,
        searchLoading:payload && payload.loading && payload.loading,
    }
}
export const createCouponReducer=(state,payload)=>{
        return {
            ...state,
            createCouponData:payload && payload.data && payload.data,
            createCouponMessage:payload && payload.message && payload.message,
            createCouponLoading:payload && payload.loading && payload.loading,
        }
 }
export const createUpcReducer =(state,payload)=>{
    return {
        ...state,
        createUpcData:payload && payload.data && payload.data,
        createUpcMessage: payload && payload.message && payload.message,
        createUpcLoading:payload && payload.loading && payload.loading,
    }
}
export const getProductReducer=(state,payload)=>{
    return {
        ...state,
        getProductData:payload && payload.data && payload.data,
        getProductMessage: payload && payload.message && payload.message,
        getProductLoading:payload && payload.loading && payload.loading,
    }
}

export const getMemberReducer=(state,payload)=>{
    return{
        ...state,
        getMemberData:payload && payload.data && payload.data,
        getMemberMessage:payload && payload.message && payload.message,
        getMemberLoading:payload && payload.loading && payload.loading,
    }
}


export const getDeptStoreReducer=(state,payload)=>{
    return{
        ...state,
    getDeptStoreData:payload && payload.data && payload.data,
    getDeptStoreMessage:payload && payload.message && payload.message,
    getDeptStoreLoading:payload && payload.loading && payload.loading,
    }
}

export const getBydeptStore=(state,payload)=>{
   return {
    ...state,
    getByDeptStoreData:payload && payload.data && payload.data,
    getByDeptStoreMessage:payload && payload.message && payload.message,
    getByDeptStoreLoading:payload && payload.loading && payload.loading,
   }
}
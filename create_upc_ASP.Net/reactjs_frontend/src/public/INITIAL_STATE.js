const INITIAL_STATE ={
    departmentData:{},
    departmentMessage:"",
    departmentLoading:false,

    storeData:[],
    storeMessage:"",
    storeLoading:false,

    groupData:[],
    groupMessage:"",
    groupLoading:false,

    searchData:[],
    searchMessage:"",
    searchLoading:false,

    createCouponData:[],
    createCouponMessage:"",
    createCouponLoading:false,

    createUpcData:[],
    createUpcMessage:"",
    createUpcLoading:false,

    // get by ProductName
    getProductData:[],
    getProductMessage:"",
    getProductLoading:false,
// get by upc
    getMemberData:[],
    getMemberMessage:"",
    getMemberLoading:false,
// get store all 
    getDeptStoreData:[],
    getDeptStoreMessage:"",
    getDeptStoreLoading:false,
// get by dept stroe
    getByDeptStoreData:[],
    getByDeptStoreMessage:"",
    getByDeptStoreLoading:false,
}

export default INITIAL_STATE;
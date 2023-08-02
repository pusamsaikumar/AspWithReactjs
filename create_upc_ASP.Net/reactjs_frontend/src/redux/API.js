import axios from "axios";
import { SearchDataAction, createCouponAction, createUpcAction, departmentDataAction, getBydeptStoreAction, getDeptStoreAction, getMemberAction, getProductAction, groupDataAction, storeDataAction } from "./Actions";
import * as Constants from './Constants';


export const getDepartments= () => async (dispatch)=>{
        dispatch(departmentDataAction(Constants.DEPARTMENT_DATA_START,{},"",true));
        var config ={
            method:"get",
            //url:"https://azureapifortest.azurewebsites.net/api/Departments/DepartmentList"
            url:"https://yfhscgmmu3.execute-api.us-east-1.amazonaws.com/data/getclientdepts",
        }
  await axios(config)
        .then((response) => {
            dispatch(departmentDataAction(Constants.DEPARTMENT_DATA_SUCCESS,
                    // response.data.departments,
                    response.data.Message,
                    "Successful",
                    false
                ))
        })
        
        .catch( error => {
            // if(error.response && error.response.status === 400){
            //     dispatch(departmentDataAction(Constants.DEPARTMENT_DATA_FAILURE,{},error.response.data.Message,false))
            // } else if(error.response && error.response.status === 404){
            //     dispatch(departmentDataAction(Constants.DEPARTMENT_DATA_FAILURE,{},error.response.data.Message,false))
            // } else if(error.response && error.response.status === 403){
            //     dispatch(departmentDataAction(Constants.DEPARTMENT_DATA_FAILURE,{},"Session has expired!",false))
            // }
            
            // else{
            //         dispatch(departmentDataAction(Constants.DEPARTMENT_DATA_FAILURE,{},'Internal server error.',false))
            // }
        })

}

export const getStroes =() => async (dispatch) =>{
    dispatch(storeDataAction(Constants.STORE_DATA_START,{},"",true));
    var config = {
        method:"get",
      //  url:"https://azureapifortest.azurewebsites.net/api/Stores/StoresList"
        url:"https://yfhscgmmu3.execute-api.us-east-1.amazonaws.com/data/Dummy",
    }
    await axios(config)
    .then((response) => {
        dispatch(storeDataAction(
            Constants.STORE_DATA_SUCCESS,
            //response.data.storesdata,
            response.data.Message,
            "Successful",
            false
            ))
    })
    .catch((error) => {})
}

export const getGroups =() => async (dispatch)=>{
    dispatch(groupDataAction(Constants.GROUP_DATA_START,{},"",false));
    var config ={
        method:"get",
        url:"https://azureapifortest.azurewebsites.net/api/Groups/Groups"
    }
    await axios(config).then((response) => {
        dispatch(groupDataAction(
            Constants.GROUP_DATA_SUCCESS,
            response.data.groups,
            "Successful",
                false
            ))
    }).catch((error) => {
        dispatch(groupDataAction(Constants.GROUP_DATA_FAILURE,{},error.response,false))
    })
}

export const getSearchData=()=> async(dispatch)=>{
    dispatch(SearchDataAction(Constants.SEARCH_DATA_START,{},"",true));
    var config={
        method:"get",
       // url:"https://yfhscgmmu3.execute-api.us-east-1.amazonaws.com/data/getsearchresult"
       url:"https://localhost:7023/api/FilterData/GetsearchData"
    }
    await axios(config).then((response) => {
        dispatch(SearchDataAction(
            Constants.SEARCH_DATA_SUCCESS,
           // response.data.Message,
           response.data.Filters,
            "Successful",
            false
        ))
    }).catch((error) => {})
}

export const getbyProduct=(productName)=> async (dispatch) =>{
    dispatch(getProductAction(Constants.GET_PRODUCT_START,{},"",true));
    
    var config={
        method:'get',
        url:`https://localhost:7023/api/FilterData/GetByName?name=${productName}`
    }
    await axios(config).then((response) => {
        dispatch(getProductAction(
            Constants.GET_PRODUCT_SUCCESS,
            response.data.Filters,
            "Successful",
            false
        ))
    }).catch((error) => {})
}

export const getByMember=(member)=> async (dispatch)=>{
    dispatch(getMemberAction(Constants.GET_MEMBER_START,{},"",true));
    var config={
        method:"get",
        url:`https://localhost:7023/api/FilterData/GetByUpcs?memberNumber=${member}`
    }
    await axios(config)
    .then((response)=>{
        dispatch(getMemberAction(Constants.GET_MEMBER_SUCCESS,  response.data.Filters,"Successful",false));
    })
    .catch((err)=>{})
}

export const getBydeptStore =(deptStore)=>async (dispatch)=>{
    dispatch(getBydeptStoreAction(Constants.GET_DEPT_STORE_START,{},"",true));
    var config={
        method:"get",
        url:`https://localhost:7023/api/FilterData/GetByStore?store=${deptStore}`
    }
    await axios(config).then((response) => {
        dispatch(getBydeptStoreAction(
            Constants.GET_DEPT_STORE_SUCCESS,
            response.data.Filters,
            "Successful",
            false
            ))
    }).catch((err)=>{})
}

export const getDeptStores=()=>  async (dispatch) =>{
        dispatch(getDeptStoreAction(Constants.DEPT_STORE_DATA_START,{},"",true));
        var config = {
            method:"get",
            url:"https://localhost:7023/api/Dept/GetDeptStore"
        }
    await axios(config)
    .then((response) => {
        dispatch(getDeptStoreAction(Constants.DEPT_STORE_DATA_SUCCESS,
                response.data,
                "Successful",
                false
            ))
   
    }).catch((error)=>{})
}   

export const createBasketCoupon=(info)=> async(dispatch)=>{
    dispatch(createCouponAction(Constants.CREATE_COUPON_START,{},"",true));
    let body={
        "Title": info.title,
        "Details": info.details,
        "OtherDetails": info.otherDetails,
        "MinPurchaseAmount": info.minPurchaseAmount  ? parseInt(info.minPurchaseAmount) : 0,
        "CustomerSavings": info.customerSavings ? parseInt(info.customerSavings) : 0,
        "PerSavings": info.savings === true ? 1 : 0,
        "DealOfWeek": info.dealofWeek === true ? 1 : 0,
        "Recurring": info.recurring === true ? 1 : 0,
        "RecuringFrom": info.recurring === true ?  info.recuringfrom : "2023-07-18T11:57",
        "OfferValidFrom": info.offerValidfrom,
        "OfferTo": info.to,
        "Image": info.image.toString(),
        "UseMajorDepartment": info.major === true ? 1 : 0,
        "DeptAll": info.departmentAll === true ? 1 : 0,
        "DeptInclude":info.departmentInclude === true ? 1 : 0,
        "DeptExclude": info.departmentExclude === true ? 1 : 0,
        "Departments": info.departments.map((each) => {return each.label}).toString(),
        "Groups": info.groups.map((each) => {return each.label}).toString(),
        "GroupAll": info.groupsAll === true ? 1 : 0,
        "GroupInclude": info.groupsInclude === true ? 1 : 0,
        "GroupExclude":info.groupsExclude === true ? 1 : 0,
        "Stores": info.stores.map((each) => {return each.label}).toString(),
        "StoresAll": info.storesAll === true ? 1 : 0,
        "StoresInclude": info.storesInclude === true ? 1 : 0,

        "StoresExclude": info.storesExclude === true ? 1 : 0,
    };
    var config ={
        method:"POST",
        url:'https://localhost:7117/api/Coupon/CreateCoupon',
        data:body
    }
    await axios(config)
    .then((response)=>{
        dispatch(createCouponAction(
            Constants.CREATE_COUPON_SUCCESS,
            response.data,
            "Successful",
            false
        ))
    })
    .catch()
}

export const GetUpcs=(info)=>async(dispatch)=>{
    dispatch(createUpcAction(Constants.CREATE_UPC_START,{},"",true));
    let body={
        "Title": info.title,
        "Details": info.details,
        "OtherDetails": info.otherDetails,
        "MinPurchaseAmount": info.minPurchaseAmount  ? parseInt(info.minPurchaseAmount) : 0,
        "CustomerSavings": info.customerSavings ? parseInt(info.customerSavings) : 0,
        "PerSavings": info.savings === true ? 1 : 0,
        "DealOfWeek": info.dealofWeek === true ? 1 : 0,
        "Recurring": info.recurring === true ? 1 : 0,
        "RecuringFrom": info.recurring === true ?  info.recuringfrom : "",
        "CouponLimit": info.couponlimit ? parseInt(info.couponlimit) : 0,
        "OfferValidFrom": info.offerValidfrom,
        "OfferTo": info.to,
        "Image": info.image.toString(),
        "Upcs":info.upcExcel,
        "Groups": info.groups.map((each) => {return each.label}).toString(),
        "GroupAll": info.groupsAll === true ? 1 : 0,
        "GroupInclude": info.groupsInclude === true ? 1 : 0,
        "GroupExclude":info.groupsExclude === true ? 1 : 0,
        "Stores": info.stores.map((each) => {return each.label}).toString(),
        "StoresAll": info.storesAll === true ? 1 : 0,
        "StoresInclude": info.storesInclude === true ? 1 : 0,

        "StoresExclude": info.storesExclude === true ? 1 : 0,
    };
    var config = {
        method:"POST",
        url:"https://localhost:7023/api/Upc/CreateCoupon",
        data:body
    }

   await axios(config)
    .then((response) =>{
        dispatch(createUpcAction(
            Constants.CREATE_UPC_SUCCESS,
            response.data,
            "Successful",
            false
            ))
    })
    .catch((error) => {

    })
}
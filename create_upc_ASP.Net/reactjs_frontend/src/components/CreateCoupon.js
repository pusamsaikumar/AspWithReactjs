import React, { useState,useEffect } from 'react';
import { Form,Row } from 'react-bootstrap';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4  from './Step4';
import { useDispatch, useSelector } from 'react-redux';
import { getDepartments, getDeptStores, getGroups, getSearchData, getStroes, getbyProduct } from '../redux/API';
import usePrevious from '../public/PreviouValue';
import { FaHeadSideVirus } from 'react-icons/fa';
import * as XLSX from "xlsx";

const CreateCoupon = () => {
   
    
    
    const [value,setValue] = useState({
        basketRadio:false,
        upcRadio:false,
        purchaseupcsRadio:false,
        crossSellRadio:false,

        // step1 basket input values:
        title:'',
        details:"",
        otherDetails:"",
        minPurchaseAmount:0,
        customerSavings:0,
        savings:false,
        dealofWeek:false,
        recurring:false,
        recuringfrom:"",
        recuringto:"",
        offerValidfrom:'',
        to:'',
        image:'',
        
        upcExcel:"",

        departments:[],
        departmentsData:[],
        major:false,
        departmentAll:false,
        departmentInclude:false,
        departmentExclude:false,

        groups:"",
        groupsAll:false,
        groupsInclude:false,
        groupsExclude:false,

        stores:'',
        storesAll:false,
        storesInclude:false,
        storesExclude:false,

        //upc
        couponlimit:0,
        upcDeptStroeData:[],
        upc:"",
        proudctName:"", 
        
        upcVal:"",
        searchVal:''
    });

    const [dropdown,setDropdown] = useState({
      departments:[],
      stores:[],
      groups:[],
      upcDeptStore:[]
    });

     console.log("value",value)

   
    const [basketRadio,setBasketRadio] = useState(false);
    const [upcRadio,setUpcRadio]    = useState(false);
    const [purchaseRadio,setPurchaseRadio]=useState(false);
    const [crossSellRadio,setCrosssellRadio] = useState(false);
    const [checkRadio, setCheckRadio] = useState(false);

    const departmentData = useSelector((state) => state.departmentData);
    const departmentMessage = useSelector((state) => state.departmentMessage);
    const PrevoiusDepartmentMessage = usePrevious(departmentMessage);
    const storeData = useSelector((state) => state.storeData);
    const storeMessage = useSelector((state) => state.storeMessage);
    const PreviousStoreMessage = usePrevious(storeMessage);
    const groupData = useSelector((state) => state.groupData);
    const groupMessage = useSelector((state)=> state.groupMessage);
    const PreviousGroupMessage = usePrevious(groupMessage)

    // const searchData = useSelector((state) => state.searchData);
    // const searchMessage = useSelector((state)=> state.searchMessage );
    //const PreviousSearchMessage = usePrevious(searchMessage);

    const getProductData = useSelector((state)=>state.getProductData);

  // get dept store data: step2 and step3
  const getDeptStoreData = useSelector((state) => state.getDeptStoreData);
  const getDeptStoreMessage = useSelector((state)=> state.getDeptStoreMessage);
  const PrevDeptStoreMessage = usePrevious(getDeptStoreMessage);

 

    const dispatch = useDispatch();      
    //   console.log("dept",departmentData);
    //   console.log("stores",storeData);
    //   console.log("groups",groupData);
    //   console.log("dropdwon",dropdown)
   
   
    
      const [checkDept,setCheckDept] = useState(false);
      
      const [includeCheck,setIncludeCheck] = useState(false);
      const [excludeCheck,setExcludeCheck] = useState(false);

      const [allStores,setAllStores] = useState(false);
      const[includeStores,setIncludeStores] = useState(false);
      const[excludeStore,setExcludeStore] = useState(false);

      const [groupsCheckall,setGroupsCheckall] = useState(false);
      const [groupsInclude,setGroupsInclude] = useState(false);
      const [groupsExclude,setGroupsExclude] = useState(false);
      const[savingCheck,setSavingCheck] = useState(false);
      const [dealOfWeekCheck,setDealofWeekCheck] = useState(false);
      const [recuringCheck,setRecuringCheck] = useState(false);


      // hanldeSavingCheck
    const handleSaving=(e,name) =>{
        if(e.target.checked === true){
            setSavingCheck(true);
            setDealofWeekCheck(false);
            setRecuringCheck(false);
            setValue({
                ...value,
                savings:true,
                dealofWeek:false,
                recurring:false,
                [name]:e.target.checked
            })
        } else{
            setSavingCheck(false);
           
        }
        setSavingCheck(e.target.checked);
          setRecuringCheck(false);
       
         setDealofWeekCheck(false);
    }

    const handleDealOfWeek=(e,name) =>{
        if(e.target.checked === true){
            setSavingCheck(false);
            setDealofWeekCheck(true);
            setRecuringCheck(false);
            setValue({
                ...value,
                savings:false,
                dealofWeek:true,
                recurring:false,
                [name]:e.target.checked
            })
        } else{
            //setSavingCheck(false);
            setDealofWeekCheck(false);
            // setRecuringCheck(false);  
        }
        setDealofWeekCheck(e.target.checked);
        setSavingCheck(false);
         setRecuringCheck(false);
    }

    const handleRecurig=(e,name) =>{
        if(e.target.checked === true){
            setSavingCheck(false);
            setDealofWeekCheck(false);
            setRecuringCheck(true);
            setValue({
                ...value,
                savings:false,
                dealofWeek:false,
                recurring:true,
                [name]:e.target.checked
            })
        } else {
           
            setRecuringCheck(true);
        }
        setRecuringCheck(e.target.checked);
        setSavingCheck(false);
        setDealofWeekCheck(false);
    }

//for groups:
const handleGroupscheck =(e,name)=>{
    if(e.target.checked === true){
        setGroupsCheckall(true);
        setGroupsInclude(false);
        setGroupsExclude(false);
        value.groups = dropdown.groups;
        handleMultiSelectInput(value.groups,"groups");
        setValue(
            {
                ...value,
                
                groupsAll:true,
                groupsInclude:false,
                groupsExclude:false,
            
                [name]:e.target.checked
            }
        )
        
    } else{
        value.groups=[];
        handleMultiSelectInput(value.groups,"groups");
    }
    setGroupsCheckall(e.target.checked);
    setGroupsInclude(false);
    setGroupsExclude(false);
}

const handleGroupsInclude =(e,name)=>{
    if(e.target.checked === true){
        setGroupsCheckall(false);
        setGroupsInclude(true);
        setGroupsExclude(false);
        value.groups = dropdown.groups;
        handleMultiSelectInput(value.groups,"groups");
        setValue(
            {
                ...value,
                groups:[],
                groupsAll:true,
                groupsInclude:false,
                groupsExclude:false,
            
                [name]:e.target.checked
            }
        )
        
    } else{
        value.groups=[];
        handleMultiSelectInput(value.groups,"groups");
    }
    setGroupsCheckall(false);
    setGroupsInclude(e.target.checked);
    setGroupsExclude(false);
}

const handleGroupsExclude =(e,name)=>{
    if(e.target.checked === true){
        setGroupsCheckall(false);
        setGroupsInclude(false);
        setGroupsExclude(true);
        value.groups = dropdown.groups;
        handleMultiSelectInput(value.groups,"groups");
        setValue(
            {
                ...value,
                groups:[],
                groupsAll:false,
                groupsInclude:false,
                groupsExclude:true,
            
                [name]:e.target.checked
            }
        )
        
    } else{
        value.groups=[];
        handleMultiSelectInput(value.groups,"groups");
    }
    setGroupsCheckall(false);
    setGroupsInclude(false);
    setGroupsExclude(e.target.checked);
}

// for stores:
const handleStroecheck =(e,name)=>{
    if(e.target.checked === true){
        setAllStores(true);
        setIncludeStores(false);
        setExcludeStore(false);
        value.stores = dropdown.stores;
        handleMultiSelectInput(value.stores,"stores");
        setValue(
            {
                ...value,
                //stores:[],
                storesAll:true,
                storesInclude:false,
                storesExclude:false,
            
                [name]:e.target.checked
            }
        )
        
    } else{
        value.stores=[];
        handleMultiSelectInput(value.stores,"stores");
    }
    setAllStores(e.target.checked);
    setExcludeStore(false);
    setIncludeStores(false);
}

const handleStroeInclude=(e,name)=>{
    if(e.target.checked === true){
        setAllStores(false);
        setIncludeStores(true);
        setExcludeStore(false);
        value.stores = dropdown.stores;
        handleMultiSelectInput(value.stores,"stores");
        setValue(
            {
                ...value,
                stores:[],
                storesAll:false,
                storesInclude:true,
                storesExclude:false,
            
                [name]:e.target.checked
            }
        )
        
    } else{
        value.stores=[];
        handleMultiSelectInput(value.stores,"stores");
    }
    setAllStores(false);
    setExcludeStore(false);
    setIncludeStores(e.target.checked);
}

const handleStroeExclude =(e,name)=>{
    if(e.target.checked === true){
        setAllStores(false);
        setIncludeStores(false);
        setExcludeStore(true);
        value.stores = dropdown.stores;
        handleMultiSelectInput(value.stores,"stores");
        setValue(
            {
                ...value,
                stores:[],
                storesAll:false,
                storesInclude:false,
                storesExclude:true,
            
                [name]:e.target.checked
            }
        )
        
    } else{
        value.stores=[];
        handleMultiSelectInput(value.stores,"stores");
    }
    setAllStores(false);
    setExcludeStore(e.target.checked);
    setIncludeStores(false);
}


// for departments:
      const hanldeDeptCheck=(e,name)=>{
        if(e.target.checked === true){
            setCheckDept(true);
            setIncludeCheck(false);
            setExcludeCheck(false);
          value.departments = dropdown?.departments;
          handleMultiSelectInput(value.departments,"departments");
          
          setValue(
             {...value,
              departmentAll:true,
              departmentInclude:false,
              departmentExclude:false,
              [name] : e.target.checked}
          )
        } else{
            value.departments =[];
          handleMultiSelectInput(value.departments,"departments");
        }
        setIncludeCheck(false);
        setExcludeCheck(false);
        setCheckDept(e.target.checked)
      }


      const  handleDepartmentAll=(e,name)=>{
        if(e.target.checked){
            setValue((value) =>{
                return {
                    ...value,
                    departmentAll:true,
                    departmentInclude:false,
                    departmentExclude:false,
                [name] :e.target.checked
                }
            })
            //setCheckDept(false);
        }
    }
    const  handleDepartmentInclude=(e,name)=>{
       if(e.target.checked === true){
      
        setIncludeCheck(true);
        setExcludeCheck(false);
       setCheckDept(false);
        setValue(
            {...value,
                departments:[],
             departmentAll:false,
             departmentInclude:true,
             departmentExclude:false,
            
             [name] : e.target.checked
            
            }
         )
       }
       setCheckDept(false);
       setExcludeCheck(false);
       setIncludeCheck(e.target.checked);
    }

    //   const handleChangeImg = event => {
    //     const fileUploaded = event.target.files[0];
    //     info.image = fileUploaded;
    //     // props.handleFile(fileUploaded);
    //   };

      // image base64 convert 
      const [baseImage,setBaseImage] = useState("");
    const convertBase64 = (file) => {
        return new Promise((resolve, reject) => {
          const fileReader = new FileReader();
          fileReader.readAsDataURL(file);
    
          fileReader.onloadend = () => {
            resolve(fileReader.result);
          };
    
          fileReader.onerror = (error) => {
            reject(error);
          };
        });
      };
    
      const handleChangeImage = async (event,name) => {
        const file = event.target.files[0];
        const base64 = await convertBase64(file);
        value.image = base64;
        setBaseImage(base64);
      };
    
      const handleDepartmentExclude=(e,name)=>{

        if(e.target.checked === true){
            setCheckDept(false);
            setIncludeCheck(false);
            setExcludeCheck(true);
            setValue(
                {...value,
                    departments:[],
                 departmentAll:false,
                 departmentInclude:false,
                 departmentExclude:true,
                
                 [name] : e.target.checked}
             )
           }
           setExcludeCheck(e.target.checked);
           setCheckDept(false);
      
       setIncludeCheck(false);
    }

    
      const handleImage = (e,name)=>{
      const file =    e.target.files[0]?.name;
     
            setValue({
                ...value, image:file
            })
      }

      const copyUpcsExcel =(e,name)=>{
        const file = e.target.files[0];
        setValue({
            ...value,
            upcExcel:file
            // details:file
        })
      }
 

  
//   const  handleDepartmentInclude=(e,name)=>{
//        if(e.target.checked) {
//         setValue((value) =>{
//             return {
//                 ...value,
//                 departmentAll:false,
//                 departmentInclude:true,
//                 departmentExclude:false,
//                 //departments:[],
//                 [name] :e.target.checked
//             }
//         })
//        // setCheckDept(false);
//        }
//     }
//    const handleDepartmentExclude=(e,name)=>{
//        if(e.target.checked){
//         setValue((value) =>{
//             return {
//                 ...value,
//                 departmentAll:false,
//                 departmentInclude:false,
//                 departmentExclude:true,
//                 //departments:[],
//                 [name]:e.target.checked
//             }
//         })
//        }
//     }
        const handleChange=(e,name) =>{
            setFormError((prev) =>{
                return {...prev,[name] :''}
            });
        }
const handleMultiSelectInput=(e,name)=>{
    setValue({
        ...value,
        [name]:e
    })
}
    const [formError,setFormError] = useState({
        title:'',
        details:"",
        otherDetails:"",
        minPurchaseAmount:"",
        customerSavings:"",
        savings:false,
        dealofWeek:false,
        recurring:false,
        offerValidfrom:'',
        to:'',
        departments:"",
        groups:''
        
    })
    const handleRadio=(e,name)=>{
        if(e.target.checked){
            setValue((value) =>{
                return {...value,
                        basketRadio:true,
                        upcRadio:false,
                        purchaseupcsRadio:false,
                        crossSellRadio:false,
                    [name]:e.target.checked}
            })
            setBasketRadio(true);
            setCheckRadio(true);
        }



    }
    const handleUpc=(e,name)=>{
        if(e.target.checked){
            setValue((value) =>{
                return {...value,
                        basketRadio:false,
                        upcRadio:true,
                        purchaseupcsRadio:false,
                        crossSellRadio:false,
                    [name]:e.target.checked}
            })
            setUpcRadio(true);
            setCheckRadio(true);
        }
        


    }
    const handlePurchaseUpcs=(e,name)=>{
        if(e.target.checked){
            setValue((value) =>{
                return {...value,
                        basketRadio:false,
                        upcRadio:false,
                        purchaseupcsRadio:true,
                        crossSellRadio:false,
                    [name]:e.target.checked}
            })
            setPurchaseRadio(true);
            setCheckRadio(true);
        }
        


    }
    const handleCrosssell=(e,name)=>{
        if(e.target.checked){
            setValue((value) =>{
                return {...value,
                        basketRadio:false,
                        upcRadio:false,
                        purchaseupcsRadio:false,
                        crossSellRadio:true,
                    [name]:e.target.checked}
            })
            setCrosssellRadio(true);
            setCheckRadio(true);
        }
    }

    const handleInputChange=(e,name)=>{
        
        setValue((value) => {
            return {...value,[name] : e.target.value}
        })
    }
    const handleInputNumberChange=(e,name)=>{
    
        setValue((value) => {
            return {...value,[name] : e.target.value.replace(/\D/g,"")}
        })
    }


    const [data,setData] = useState([]);
    const [header,setHeader] = useState([]);
  
  
    
    const fileUpload= (e) => {
      e.preventDefault();
      if (e.target.files) {
          const reader = new FileReader();
          reader.onload = (e) => {
              const data = e.target.result;
              const workbook = XLSX.readFile(data, {type:"binary"});
              const sheetName = workbook.SheetNames[0];
              const worksheet = workbook.Sheets[sheetName];
              const json = XLSX.utils.sheet_to_json(worksheet);
              const head = XLSX.utils.sheet_to_json(worksheet,{header:1});
              
            //   console.log("head",head.map((each) => each))
            //   console.log("json",json)
            
              setData(json);
              setHeader(head);
            let filterVal;
              // with header
              if(json.length > 0 && head.length > 0)  {
                 filterVal = json?.map(each => each.upc);
                setValue({
                  ...value,
                 upcExcel:filterVal
                 //details:filterVal
                })
              }
              if(head.length > 0 && json.length === 0){
              filterVal = head.map((each) => each);
                setValue({
                  ...value,
                  upcExcel:filterVal
                  //details:filterVal
                })
              }
            
             
          };
          reader.readAsArrayBuffer(e.target.files[0]);
      }
      
  }
   

    useEffect(()=>{
        dispatch(getDepartments());
        dispatch(getStroes());
        dispatch(getGroups());
       // dispatch(getSearchData());
        dispatch(getDeptStores())
       },[dispatch])


    useEffect(()=>{
        //----------- department section---------
       if(PrevoiusDepartmentMessage !== departmentMessage && departmentMessage){
            if(departmentMessage === "Successful"){
                let arr = departmentData && departmentData.map((i) =>{
                   // return i;
                   return {value:i.StoreId,label:i.StoreName};
                });
              //  console.log("dept",arr);
                dropdown.departments = arr;
                setDropdown({
                    ...dropdown,
                    departments:arr
                })
            }
       };

       //------------- Dept stroe section in Step2 and step3
       if(PrevDeptStoreMessage != getDeptStoreMessage && getDeptStoreMessage){
                if(getDeptStoreMessage === "Successful"){
                    let arr = getDeptStoreData && getDeptStoreData?.DeptStores?.map((each) =>{
                        return {
                            value:each.StoreId,label:each.StoreName
                        }
                    });
                    dropdown.upcDeptStore = arr;
                   setDropdown({
                    ...dropdown,
                    upcDeptStore:arr
                   })
                }
       }

        // --------------- groups section---------
        if(PreviousGroupMessage !== groupMessage && groupMessage){
            if(groupMessage ===  "Successful"){
                let arr = groupData && groupData.map((i)=>{
                    return {value:i.id,label:i.name};
                });
             //   console.log("agrrou" , arr);
                dropdown.groups =arr;
                setDropdown({
                    ...dropdown,
                    groups:arr
                })
            }
        }

        // ----------- stroes section ---------
        if(PreviousStoreMessage !== storeMessage && storeMessage){
            if(storeMessage === "Successful"){
                let arr = storeData && storeData.map((i)=>{
                   // return i;
                   return {value:i.StoreId,label:i.StoreName};
                });
                //console.log("str",arr)
                dropdown.stores = arr;
                setDropdown({
                    ...dropdown,
                    stores:arr

                })
            }
        }
    },[
      
        departmentMessage,
        groupMessage,
        storeMessage,
        getDeptStoreMessage,
        PrevoiusDepartmentMessage,
        PreviousGroupMessage,
        PreviousStoreMessage,
        PrevDeptStoreMessage,
    ]);


    
  const commaSeparatedValue = (e,name) =>{
    if(e.key === "Space" || e.keyCode === 32 || e.key === "Enter" || e.keyCode === 13)
    {
    

      let commaVal;
      if(value.upcExcel.includes(",") === true && value.upcExcel.includes(" ") === true ){
        const spitVal =value.upcExcel?.split(",");
         commaVal = spitVal.map((each) => each.trim());
      // const someText = commaVal?.replace(/(\r\n|\n|\r)/gm, "");
  
        setValue({
          ...value,
        [name] : commaVal,
        })
        
      }
      if(value.details.includes(",") === false && value.details.includes(" ") === true ){
        const spitVal = value.upcExcel?.split(" ");
        commaVal = spitVal.join(",");
        setValue({
          ...value,
        [name] : commaVal,
        })
      }

    
    }
    
  
    
  }


  const [displaySearch, setDisplaySearch] = useState(false);
  


  const handleSearchDisplay = (e ) =>{

     if(displaySearch === false){
        

        
    //   const getSearchData = searchData?.length > 0 && searchData?.map((each) => each.MemberNumber);
    //   const getUpcs = getSearchData?.toString()
    //   //console.log("get search",getSearchData.toString())

    //   value.searchVal = getUpcs;
    //   setValue({
    //     ...value,
    //     searchVal:getUpcs,
    //   })
  
      setDisplaySearch(true);
     }
  }
  return (
    <div className='container bg-light'>
        <h2>
            {/* <span onClick={()=> setCheckRadio(false)} >Create Coupon</span> */}
            <span  >Create Coupon</span>
        </h2>
        <div>
             {/* <p onClick={()=> setCheckRadio(false)}><b>Coupon</b><span>Types</span></p> */}
             <p><b>Coupon</b><span>Types</span></p>
             {
                // checkRadio === false && (
                    
                    <div className='container'>
                    <Row className="row g-3">
                        <Form.Group>
                            <Form.Check 
                             type='radio'
                            
                             inline
                             name="basket"
                             id="basket"
                             label="Basket Deal"
                             value={value.basketRadio}
                             checked={value.basketRadio == true}
                             onChange={(e) => handleRadio(e,"basket")}
    
                            />
                              <Form.Check 
                             type='radio'
                             inline
                             name="upc"
                             id="upc"
                             label="UPC Promotion"
                             value={value.upcRadio}
                             checked={value.upcRadio == true ? true : false}
                             onChange={(e)=> handleUpc(e,"upc")}
                            />
     
                            <Form.Check 
                             type='radio'
                             inline
                             name="purchaseupcs"
                             id="purchaseupcs"
                             label="Free Item with Additional Purchase"
                             value={value.purchaseupcsRadio}
                             checked={value.purchaseupcsRadio == true ? true : false }
                             onChange={e => handlePurchaseUpcs(e,"purchaseupcs")}
                            />
                             <Form.Check 
                             type='radio'
                             inline
                             name="crosssell"
                             id="crosssell"
                             label="Cross sell Promotions"
                             value={value.crossSellRadio}
                             checked={value.crossSellRadio == true ? true : false}
                             onChange={e => handleCrosssell(e,"crosssell")}
                             
                            />
                        </Form.Group>
    
                       
                    </Row>
                </div>
                
             }
          

            <hr />
            <div>

            </div>
        </div>
        {
            value.basketRadio === true && (
            <Step1 
            info={value} 
            setInfo={setValue}
            handleChange={handleChange}
            handleImage={handleImage}
            formError={formError}
            setFormError={setFormError}
            handleInputChange={handleInputChange}
            handleDepartmentAll={handleDepartmentAll}
            handleDepartmentInclude={handleDepartmentInclude}
            handleDepartmentExclude={handleDepartmentExclude}
            handleMultiSelectInput={ handleMultiSelectInput}
            checkDept={checkDept}
          
            handleInputNumberChange={handleInputNumberChange}
           
           //dropdown={departmentData}
            dropdown ={dropdown.departments}
            hanldeDeptCheck={ hanldeDeptCheck}
            handleChangeImage={ handleChangeImage}
            includeCheck={includeCheck}
            excludeCheck={excludeCheck}

            dropdownStores={dropdown.stores}

           handleStorescheck={handleStroecheck}
           handleStoreInclude={handleStroeInclude}
           handleStoreExclude={handleStroeExclude}
           allStores={allStores}
           includeStores={includeStores}
           excludeStore={excludeStore}
           
           dropdownGroups ={dropdown.groups}
           groupsCheckall ={groupsCheckall}
           groupsInclude ={groupsInclude}
           groupsExclude = {groupsExclude}
           handleGroupscheck ={handleGroupscheck}
           handleGroupsInclude = {handleGroupsInclude}
           handleGroupsExclude = {handleGroupsExclude}
           
           handleSaving = { handleSaving }
           handleDealOfWeek = {handleDealOfWeek}
           handleRecurig={handleRecurig}
            savingCheck={savingCheck}
            dealOfWeekCheck={dealOfWeekCheck}
            recuringCheck={recuringCheck }

            />)
        }
        {
            value.upcRadio === true && <Step2
            info={value} 
            setInfo={setValue}
            handleChange={handleChange}
            formError={formError}
           
            setFormError={setFormError}
            handleInputChange={handleInputChange}
            handleDepartmentAll={handleDepartmentAll}
            handleDepartmentInclude={handleDepartmentInclude}
            handleDepartmentExclude={handleDepartmentExclude}
            handleMultiSelectInput={ handleMultiSelectInput}
            upcDropdown = {dropdown.departments}
            checkDept={checkDept}
            // dropdown ={dropdown.departments}
            dropdown={ departmentData?.departments}
            hanldeDeptCheck={ hanldeDeptCheck}
            handleChangeImage={ handleChangeImage}
            baseImage={baseImage}
            handleInputNumberChange={ handleInputNumberChange}

            // for groups
            dropdownGroups ={dropdown.groups}
            groupsCheckall ={groupsCheckall}
            groupsInclude ={groupsInclude}
            groupsExclude = {groupsExclude}
            handleGroupscheck ={handleGroupscheck}
            handleGroupsInclude = {handleGroupsInclude}
            handleGroupsExclude = {handleGroupsExclude}
             //for stores
             dropdownStores={dropdown.stores}

           handleStorescheck={handleStroecheck}
           handleStoreInclude={handleStroeInclude}
           handleStoreExclude={handleStroeExclude}
           allStores={allStores}
           includeStores={includeStores}
           excludeStore={excludeStore}

           handleSaving = { handleSaving }
           handleDealOfWeek = {handleDealOfWeek}
           handleRecurig={handleRecurig}
            savingCheck={savingCheck}
            dealOfWeekCheck={dealOfWeekCheck}


            recuringCheck={recuringCheck }
            data = {data}
            fileUpload = {fileUpload}
            head = {header}
            commaSeparatedValue = {commaSeparatedValue}
          // displaySearch ={displaySearch}
           // handleSearchDisplay = { handleSearchDisplay}

            // upc stores:
                deptStores = {dropdown.upcDeptStore}
            />
        }
        {
            value.purchaseupcsRadio === true && <Step3 
            
            // upc stores:
            deptStores = {dropdown.upcDeptStore}

            info={value} 
            setInfo={setValue}
            handleChange={handleChange}
            formError={formError}
            setFormError={setFormError}
            handleInputChange={handleInputChange}
            handleDepartmentAll={handleDepartmentAll}
            handleDepartmentInclude={handleDepartmentInclude}
            handleDepartmentExclude={handleDepartmentExclude}
            handleMultiSelectInput={ handleMultiSelectInput}
            checkDept={checkDept}
            dropdown ={dropdown.departments}
            hanldeDeptCheck={ hanldeDeptCheck}
            handleChangeImage={ handleChangeImage}
            baseImage={baseImage}
            handleInputNumberChange={ handleInputNumberChange}
             // for groups
             dropdownGroups ={dropdown.groups}
             groupsCheckall ={groupsCheckall}
             groupsInclude ={groupsInclude}
             groupsExclude = {groupsExclude}
             handleGroupscheck ={handleGroupscheck}
             handleGroupsInclude = {handleGroupsInclude}
             handleGroupsExclude = {handleGroupsExclude}
              //for stores
              dropdownStores={dropdown.stores}
 
            handleStorescheck={handleStroecheck}
            handleStoreInclude={handleStroeInclude}
            handleStoreExclude={handleStroeExclude}
            allStores={allStores}
            includeStores={includeStores}
            excludeStore={excludeStore}

            
           handleSaving = { handleSaving }
           handleDealOfWeek = {handleDealOfWeek}
           handleRecurig={handleRecurig}
            savingCheck={savingCheck}
            dealOfWeekCheck={dealOfWeekCheck}
            recuringCheck={recuringCheck }


            copyUpcsExcel = {copyUpcsExcel}

            data = {data}
            fileUpload = {fileUpload}
            head = {header}
            commaSeparatedValue = {commaSeparatedValue}

         //   searchData = {searchData}
           displaySearch ={displaySearch}
           handleSearchDisplay = { handleSearchDisplay}
            />
        }
        {
            value.crossSellRadio === true && <Step4
            
             dropDown={dropdown.stores}
            />
        }
    </div>
  )
}

export default CreateCoupon
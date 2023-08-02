import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Form, Button, Image, Table } from 'react-bootstrap';
import { IoFingerPrint } from 'react-icons/io5';
import { FaSearch } from "react-icons/fa";
import { useDispatch,useSelector } from 'react-redux';
import { GetUpcs, createBasketCoupon, getByMember, getBydeptStore, getbyProduct ,getSearchData} from '../redux/API';
import Select from "react-select";

const Step3 = (
  {
    deptStores,
    info,
    setInfo,
    handleChange,
    formError,
    setFormError,
    handleInputChange,
    handleInputNumberChange,
    handleDepartmentAll,
    handleDepartmentInclude,
    handleDepartmentExclude,
    handleMultiSelectInput,
    checkDept,
    dropdown,
    hanldeDeptCheck,
    handleChangeImage,
    baseImage,

    groupsCheckall,
    groupsInclude,
    groupsExclude,
    handleGroupscheck,
    handleGroupsInclude,
    handleGroupsExclude,
    dropdownGroups,

    dropdownStores,

    handleStorescheck,
    handleStoreInclude,
    handleStoreExclude,
    allStores,
    includeStores,
    excludeStore,
    upcDropdown,

    handleSaving,
    handleDealOfWeek,
    handleRecurig,

    savingCheck,
    dealOfWeekCheck,
    recuringCheck,

    copyUpcsExcel,
    data,
    fileUpload,
    head,
    commaSeparatedValue,
   // searchData,
   // displaySearch,
    //handleSearchDisplay,
  }
) => {

  const hiddenFileInput = React.useRef(null);

  const handleClick = event => {
    hiddenFileInput.current.click();
  };
  // const handleChangeImg = event => {
  //   const fileUploaded = event.target.files[0];
  //   info.image = fileUploaded;
  //   // props.handleFile(fileUploaded);
  // };

  const [step, setStep] = useState(1);

  const [flow, setFlow] = useState("");


  const [searchDatalist,setSearchDatalist] = useState([]);
  const createUpcData= useSelector((state) => state.createUpcData);
  const createUpcMessage = useSelector((state) => state.createUpcMessage);

  const  getProductData = useSelector((state) => state.getProductData);
  const getProductMessage = useSelector((state)=>state.getProductMessage);
  const getMemberData = useSelector((state)=>state.getMemberData);
  const getMemberMessage = useSelector((state)=>state.getMemberMessage);

  const getByDeptStoreData = useSelector((state) => state.getByDeptStoreData);
  const  getByDeptStoreMessage = useSelector((state) => state.getByDeptStoreMessage);

   const searchData = useSelector((state) => state.searchData);
  const searchMessage = useSelector((state)=> state.searchMessage );
  
  const [displaySearch, setDisplaySearch] = useState(false);
  const [dept,setDept] = useState(false);
  const [product,setProduct] = useState(false);
  const [upcs,setUpcs] = useState(false);
  const [getAll,setGetAll] = useState(false);

  console.log("dept",dept);
 

  const dispatch = useDispatch();



 
 useEffect(()=>{
    if(searchMessage === "Successful" && getAll === true){
      setSearchDatalist(searchData);
      setDept(false);
      setInfo(({
        ...info,
         upcDeptStroeData:[],
         proudctName:"",
         upcVal:""
       }));
    }
     if(getByDeptStoreMessage === "Successful" && dept === true){
      setSearchDatalist(getByDeptStoreData);
      setInfo(({
        ...info,
         upcDeptStroeData:[],
         proudctName:"",
         upcVal:""
       }));
    }
    if(getProductMessage ===  "Successful" && product === true){
    setSearchDatalist(getProductData);
    setInfo(({
      ...info,
       upcDeptStroeData:[],
       proudctName:"",
       upcVal:""
     }));
    }
    if(getMemberMessage === "Successful" && upcs === true){
      setSearchDatalist(getMemberData);
      setInfo(({
        ...info,
         upcDeptStroeData:[],
         proudctName:"",
         upcVal:""
       }));
    }
   
 },[searchMessage,getByDeptStoreMessage,getProductMessage,getMemberMessage]);




  const handleSearchDisplay = (e ) =>{
e.preventDefault();
    
      if(info.upcDeptStroeData.length > 0 && dept === false ||
        
        info.upcDeptStroeData.length > 0 && dept === true){
        let getStore=info.upcDeptStroeData?.map((each) => each.label).toString();
       dispatch(getBydeptStore(getStore));
       setDept(true);
       setGetAll(false);
    
       setProduct(false);
       setUpcs(false);
   
          
      }
        if(info.proudctName!=="" && product === false ||info.proudctName!=="" && product === true ){
        
          setProduct(true);
         dispatch(getbyProduct(info.proudctName));
         setGetAll(false);
         setDept(false);
    
      setUpcs(false);
      
      }
         if(info.upcVal !== "" && upcs === false || info.upcVal !== "" && upcs === true){
        dispatch(getByMember(info.upcVal));
        setUpcs(true);
        setDept(false);
      setProduct(false);
      setGetAll(false);
      
      
        
      }
      if(  info.upcDeptStroeData.length == 0 && 
        info.proudctName == "" &&
         info.upcVal == "" && 
         getAll === false ||
         info.upcDeptStroeData.length == 0 && 
        info.proudctName == "" &&
         info.upcVal == "" && 
         getAll === true
        
         ){
      dispatch(getSearchData()); 
      setGetAll(true);
      setDept(false);
      setProduct(false);
      setUpcs(false)

      }
         
  }

  //   const fileUpload= (e) => {
  //     e.preventDefault();
  //     if (e.target.files) {
  //         const reader = new FileReader();
  //         reader.onload = (e) => {
  //             const data = e.target.result;
  //             const workbook = XLSX.readFile(data, {type:"binary"});
  //             const sheetName = workbook.SheetNames[0];
  //             const worksheet = workbook.Sheets[sheetName];
  //             const json = XLSX.utils.sheet_to_json(worksheet);
  //             const head = XLSX.utils.sheet_to_json(worksheet,{header:1});

  //             console.log("head",head.map((each) => each))
  //             console.log("json",json)

  //             setData(json);
  //             setHeader(head);
  //             let arr = [];
  //             // with header
  //             if(json.length > 0) {
  //               setInfo({
  //                 ...info,
  //                 upcExcel:json.map(each => each.upc)
  //               })
  //             }
  //             if(head.length > 0){
  //               setInfo({
  //                 ...info,
  //                 upcExcel:head.map((each) => each)
  //               })
  //             }


  //         };
  //         reader.readAsArrayBuffer(e.target.files[0]);
  //     }

  // }



  const handleStep = (value) => {
    if (value === "next") {
      setFlow(value);
      setStep(step + 1);
    } else {
      setFlow("previous");
      setStep(step - 1);
    }
  }


  const hanldeStep1Next = () => {
    if (info.title === ""
      || info.details === ""
      // || info.otherDetails === ""
      || info.minPurchaseAmount === 0
      || info.customerSavings === 0
      || info.offerValidfrom === ""
      || info.to === ""
      || info.customerSavings === ""
      || info.minPurchaseAmount === ""
    ) {

      if (info.title === "") {
        setFormError((prev) => {
          return {
            ...prev,
            title: 'Please Enter Title Name'
          }
        })
      }
      if (info.details === "") {
        setFormError((prev) => {
          return {
            ...prev,
            details: 'Please Enter Details'
          }
        })
      }
      if (info.otherDetails === "") {
        setFormError((prev) => {
          return {
            ...prev,
            otherDetails: 'Please Enter Other Details'
          }
        })
      }
      if (info.minPurchaseAmount === 0 || info.minPurchaseAmount === "") {
        setFormError((prev) => {
          return {
            ...prev,
            minPurchaseAmount: 'Please Enter Minimum Purchase Amount'
          }
        })
      }
      if (info.customerSavings === 0 || info.customerSavings === "") {
        setFormError((prev) => {
          return {
            ...prev,
            customerSavings: 'Please Enter Customer Savings'
          }
        })
      }
      if (info.offerValidfrom === "") {
        setFormError((prev) => {
          return {
            ...prev,
            offerValidfrom: 'Please Enter Offer Valid from'
          }
        })
      }
      if (info.offerValidfrom === "") {
        setFormError((prev) => {
          return {
            ...prev,
            offerValidfrom: 'Please Enter Offer Valid from'
          }
        })
      }
      if (info.to === "") {
        setFormError((prev) => {
          return { ...prev, to: "Please Enter To date" }
        })
      }

    } else {
      handleStep("next")
    }
  };
  const handleStep2Next = () => {
    if (info.departments.length === 0) {
      setFormError((prev) => {
        return { ...prev, departments: "Please Enter Departments" }
      })
    } else {
      handleStep("next");
    }
  }
  const handleSte3Next = () => {
    if (info.groups.length === 0) {
      setFormError((prev) => {
        return { ...prev, groups: "Please Enter Groups" }
      })
    } else {
      handleStep("next");
    }
  }


  const handleStep4Next = () => {
    if (info.stores.length === 0) {
      setFormError((prev) => {
        return { ...prev, stores: "Please Enter Stores" }
      })
    } else {
      handleStep("next");
    }
  }



  // const commaSeparatedValue = (e,name) =>{
  //   if(e.key === "Space" || e.keyCode === 32 || e.key === "Enter" || e.keyCode === 13)
  //   {


  //     let commaVal;
  //     if(info.details.includes(",") === true && info.details.includes(" ") === true ){
  //       const spitVal =info.upcExcel?.split(",");
  //        commaVal = spitVal.map((each) => each.trim());
  //     // const someText = commaVal?.replace(/(\r\n|\n|\r)/gm, "");

  //       setInfo({
  //         ...info,
  //       [name] : commaVal,
  //       })

  //     }
  //     if(info.details.includes(",") === false && info.details.includes(" ") === true ){
  //       const spitVal = info.upcExcel?.split(" ");
  //       commaVal = spitVal.join(",");
  //       setInfo({
  //         ...info,
  //       [name] : commaVal,
  //       })
  //     }


  //   }



  // }



  // const handleSearchDisplay = ( ) =>{

  //    if(displaySearch === false){
  //     const getSearchData = searchData?.map((each) => each.MemberNumber);
  //     const getUpcs = getSearchData.toString()
  //     //console.log("get search",getSearchData.toString())

  //     info.searchVal = getUpcs;
  //     setInfo({
  //       ...info,
  //       searchVal:getUpcs,
  //     })
  //     setDisplaySearch(true);
  //    }
  // }

  return (
    <div className='container bg-white' style={{ height: "100%" }} >
      <div>
        <p>Create <b>UPC</b> Promotion</p>
        <div className='mt-30'>
          <Container fluid>
            <Row>
              <Col xs={12} lg={12}>
                <ul
                  className="nav"
                  id="pills-tab"
                  role="tablist"
                >
                  <li
                    role="presentation"
                    className={`${step === 1 ? "active" : "completed"}`}
                  >
                    <span

                      className={`${step === 1 ? "activeColor" : "Circle"} `}
                    >
                      1
                    </span>
                    <span
                      // style={{fontSize:"20px"}}
                      onClick={() => setStep(1)} >
                      General
                    </span>
                  </li>
                  <li

                    className={`${step === 2 ? "active" : "completed"}`}
                    role="presentation"  >
                    <span
                      className={`${step === 2 ? "activeColor" : "Circle"} `}
                    >
                      2
                    </span>
                    <span
                      // style={{fontSize:"20px"}}
                      onClick={() => setStep(2)} >
                      Choose Free Item
                    </span>
                  </li>
                  <li
                    className={`${step === 3 ? "active" : "completed"}`}
                    role="presentation"  >
                    <span
                      //   style={{fontSize:"20px"}}
                      className={`${step === 3 ? "activeColor" : "Circle"} `}
                    >
                      3
                    </span>
                    <span
                      //style={{fontSize:"20px"}}
                      onClick={() => setStep(3)} >
                      Groups
                    </span>
                  </li>

                  <li
                    className={`${step === 4 ? "active" : "completed"}`}
                    role="presentation"  >
                    <span
                      //  style={{fontSize:"20px"}}
                      className={`${step === 4 ? "activeColor" : "Circle"} `}
                    >
                      4
                    </span>
                    <span
                      onClick={() => setStep(4)} >
                      Stores
                    </span>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </div>

        {
          step === 1 && (

            <>
              <div style={{ backgroundColor: "white", marginTop: "30px", padding: '10px' }}>

                <Col className=' mt-30'>
                  <Row>
                    <Col style={{ border: '1px dashed lightgrey', padding: '10px', marginRight: "10px", marginBottom: "50px" }}>
                      <Col style={{ marginBottom: "10px" }}>
                        <Form.Group>
                          <Form.Label>Title <span style={{ color: "red" }}>*</span></Form.Label>
                          <Form.Control
                            type='text'
                            placeholder=' Title'
                            name="title"
                            value={info.title}
                            onChange={(e) => {
                              handleChange("title");
                              handleInputChange(e, "title");
                            }}
                          />
                        </Form.Group>
                        {
                          formError.title && info.title === "" && (
                            <p style={{ color: 'red' }}>{formError.title}</p>
                          )
                        }
                      </Col>
                      <Col style={{ marginBottom: "10px" }}>
                        <Form.Group>
                          <Form.Label>Details <span style={{ color: "red" }}>*</span></Form.Label>
                          <Form.Control
                            as='textarea'
                            placeholder='Details'
                            name="details"
                            value={info.details}
                            style={{ height: "120px", resize: "none" }}
                            onChange={(e) => {
                              handleChange("details");
                              handleInputChange(e, "details");
                            }}

                          />
                        </Form.Group>
                        {
                          formError.details && info.details === "" && (
                            <p style={{ color: "red" }}>{formError.details}</p>
                          )
                        }
                      </Col>
                      <Col style={{ marginBottom: "10px" }}>
                        <Form.Group>
                          {/* <Form.Label>Other Details <span style={{ color: "red" }}>*</span></Form.Label> */}
                          <Form.Label>Other Details</Form.Label>
                          <Form.Control
                            as='textarea'
                            placeholder='Other Details'
                            style={{ height: "120px", resize: "none" }}
                            name="otherDetails"
                            value={info.otherDetails}
                            onChange={(e) => {
                              handleChange("otherDetails");
                              handleInputChange(e, "otherDetails");
                            }}

                          />
                        </Form.Group>
                        {/* {
                          formError.otherDetails && info.otherDetails === "" && (
                            <p style={{ color: 'red' }}>{formError.otherDetails}</p>
                          )
                        } */}
                      </Col>




                    </Col>
                    <Col style={{ border: '1px dashed lightgrey', padding: '10px', marginRight: "10px" }}>
                      <Col style={{ marginBottom: "10px" }}>
                        <Form.Group>
                          <Form.Label>Minimum Purchase Amount <span style={{ color: "red" }}>*</span></Form.Label>
                          <Form.Control
                            type='number'
                            // type="text"
                            name="minPurchaseAmount"
                            value={info.minPurchaseAmount}
                            min={0}
                            onChange={(e) => {
                              handleChange("minPurchaseAmount");
                              handleInputChange(e, "minPurchaseAmount");
                              // handleInputNumberChange(e, "minPurchaseAmount");
                            }}

                          />
                        </Form.Group>
                        {
                          formError.minPurchaseAmount && info.minPurchaseAmount === 0 && (
                            <p style={{ color: 'red' }}>{formError.minPurchaseAmount}</p>
                          )
                        }
                      </Col>
                      <Col style={{ marginBottom: "10px" }}>
                        <Form.Group>
                          <Form.Label>Customer Savings  <span style={{ color: "red" }}>*</span></Form.Label>
                          <Form.Control
                            type='number'
                            //type="text"
                            name="customerSavings"
                            value={info.customerSavings}
                            min={0}
                            onChange={(e) => {
                              handleChange("customerSavings");
                              handleInputChange(e, "customerSavings");
                              // handleInputNumberChange(e, "customerSavings");

                            }}

                          />
                        </Form.Group>
                        {
                          formError.customerSavings && info.customerSavings === 0 && (
                            <p style={{ color: "red" }}>{formError.customerSavings}</p>
                          )
                        }
                      </Col>
                      <Col style={{ marginBottom: "30px", marginTop: "40px" }}>
                        <Form.Group>
                          <Form.Check // prettier-ignore
                            type="switch"
                            id="custom-switch"
                            label="% Savings"
                            name={"savings"}
                            style={{ margin: '10px' }}
                            checked={savingCheck}
                            onChange={(e) => handleSaving(e, "savings")}
                          />
                          <Form.Check // prettier-ignore
                            type="switch"
                            id="custom-switch"
                            label="Deal of the Week "
                            style={{ margin: '10px' }}
                            checked={dealOfWeekCheck}
                            name="dealofweek"
                            onChange={(e) => {
                              handleDealOfWeek(e, "dealofweek")
                            }}
                          />
                          {/* <Form.Check // prettier-ignore
                            type="switch"
                            id="custom-switch"
                            label="Recurring"
                            style={{ margin: '10px' }}
                          /> */}
                        </Form.Group>
                      </Col>
                      <Col style={{ marginBottom: "10px", marginTop: "40px" }}>
                        <Form.Group>
                          <Form.Label>Coupon Limit</Form.Label>
                          <Form.Control
                            type='number'
                            // type="text"
                            name="couponlimit"
                            value={info.couponlimit}
                            min={0}
                            onChange={(e) => {
                              handleInputChange(e, "couponlimit");
                              //  handleInputNumberChange(e, "couponlimit");
                            }
                            }


                          />
                        </Form.Group>
                        <p style={{ fontWeight: '500', color: "darkgray", marginTop: "20px", marginBottom: "10px" }}>NOTE: Coupon limit is number of redemptions allowed for customer transactions. </p>
                      </Col>


                    </Col>
                    <Col style={{ border: '1px dashed lightgrey', padding: '10px', marginBottom: "180px" }}>
                      <Col style={{ marginBottom: "10px" }}>
                        <Form.Group>
                          <Form.Label>Offer Valid from <span style={{ color: "red" }}>*</span></Form.Label>
                          <Form.Control
                            type="datetime-local"
                            name="offerValidfrom"
                            value={info.offerValidfrom}
                            onChange={(e) => {
                              handleChange("offerValidfrom");
                              handleInputChange(e, "offerValidfrom");
                            }}


                          />

                        </Form.Group>
                        {
                          formError.offerValidfrom && info.offerValidfrom === "" && (
                            <p style={{ color: "red" }}>{formError.offerValidfrom}</p>
                          )
                        }
                      </Col>
                      <Col style={{ marginBottom: "10px" }}>

                        <Form.Group>
                          <Form.Label>To <span style={{ color: "red" }}>*</span></Form.Label>
                          <Form.Control
                            type="datetime-local"
                            name="to"
                            value={info.to}
                            onChange={(e) => {
                              handleChange("to");
                              handleInputChange(e, "to");
                            }}
                          />

                        </Form.Group>
                        {
                          formError.to && info.to === "" && (
                            <p style={{ color: "red" }}>{formError.to}</p>
                          )
                        }
                      </Col>
                      <Col style={{ marginTop: '20px', marginBottom: "10px" }}>
                        <Form.Group>
                          <Row className='col-8 g-1'>
                            <Col className='col-7'>
                              <Form.Label>Image Upload</Form.Label>
                              {/* <Form.Control type="file" /> */}
                              {/* <Form.Control type="File" name="fileToUpload" id="fileToUpload" /> */}


                              <Button variant='secondary' style={{ display: "block" }} onClick={handleClick}>
                                Select Image
                              </Button>
                              <Form.Control
                                type="file"
                                id="image"
                                ref={hiddenFileInput}
                                onChange={(e) => handleChangeImage(e)}
                                style={{ display: 'none' }}
                              />
                            </Col>
                            <Col style={{ marginTop: '10px' }}>
                              <Image src={
                                baseImage !== "" ? baseImage : info.image
                              }
                                alt={""}
                                //  width={100} height={100}
                                className='image'

                              />
                            </Col>
                          </Row>


                        </Form.Group>
                      </Col>



                    </Col>
                  </Row>
                </Col>

              </div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: 'flex-end' }} >
                <Button
                  //size='lg'
                  style={{ marginRight: '20px', marginBottom: "20px", width: "100px" }}
                  type="submit"
                  variant='secondary'
                  onClick={() => {
                    //handleStep("next")
                    hanldeStep1Next();
                  }}
                >
                  Next

                </Button>
              </div>
            </>

          )
        }
        {
          step === 2 && (
            <>

              <div style={{ marginTop: '30px' }}>
                <Row className='col-12 g-2 p-3'>
                  <Col lg={3} style={{ backgroundColor: "#ffff", padding: '10px', border: '1px dashed lightgrey' ,marginBottom:'300px'}}>
                    <Row style={{ marginBottom: "10px", marginTop: '10px' }}>
                      <Col>
                        <Form.Label style={{ fontWeight: '500', fontSize: '16px', color: 'black' }}>  Selected UPCs</Form.Label>
                      </Col>
                      <Col style={{ display: "flex", alignItems: 'center', justifyContent: 'end' }}>
                        <Button
                         variant='success'
                          onClick={handleClick}
                          
                          >Copy from file</Button>
                        <Form.Control
                          type="file"
                          id="upcExcel"
                          accept='*'
                          ref={hiddenFileInput}
                          style={{display:"none"}}
                          onChange={(e)=>{
                          // copyUpcsExcel(e);
                           fileUpload(e);
                          }}
                        />
                      </Col>
                    </Row>
                    <p style={{ fontWeight: '500', fontSize: '14px', color: 'grey' }}>Enter multiple UPCs seperated by comma or copy from excel file.</p>
                    <Form.Control
                      as="textarea"
                      style={{ height: "350px" ,resize:"none"}}
                      value={info.upcExcel}
                      name="upcExcel"
                      // cols={30}
                      // rows={5}
                      onChange={(e)=>{
                        handleInputChange(e,"upcExcel");
                      }}
                      onKeyDown={(e) =>{
                        
                        commaSeparatedValue(e, "upcExcel")
                      }}

                     
                    />
                  </Col>
                  <Col style={{ backgroundColor: "#fff", marginLeft: "20px", border: '1px dashed lightgrey', padding: '10px',marginBottom:"250px" }}>
                    <p style={{ fontWeight: '400', fontSize: '16px', color: 'grey' }}>Search and Add UPCs to coupon</p>

                    <Form.Group>
                      <Form.Check
                        type='switch'
                        id="majorDepartments"
                        name="majorDepartments"
                        label="Use Major Departments"
                        style={{ fontWeight: '400', fontSize: '18px', color: 'grey' }}

                      />
                    </Form.Group>

                    <Row className='col-12 g-3'>
                      <Col lg={4}>
                      <Form.Group >
                          <Form.Label>Department</Form.Label>
                          <Select

                            isMulti
                         
                            options={deptStores}
                         
                            value={info.upcDeptStroeData}
                            style={{ height: info.upcDeptStroeData.length > 0 ? "80px" : "52px" }}
                            name='upcDeptStroeData'
                            className='react-select-container select'
                            isDisabled={info.proudctName || info.upcVal}
                            onChange={(e) => {
                              handleMultiSelectInput(e, "upcDeptStroeData");
                             // handleOnChangeDept(e,"upcDeptStroeData");
                            }}
                          />
                        </Form.Group>
                      </Col>

                      <Col lg={4}>
                        <Form.Label>Product Name</Form.Label>
                        <Form.Control type='text' placeholder='Product Name' 
                        disabled={info.upcVal !=="" || info.upcDeptStroeData.length !==0}
                       
                        name ='proudctName' 
                        value={info.proudctName}
                      
                        
                          onChange={(e) =>{handleInputChange(e, "proudctName");
                       //  handleOnChangeProduct(e,"productName");
                        } }
                        />
                      </Col>
                      <Col lg={3}>

                        <Form.Group>

                          <Form.Label>UPC</Form.Label>
                          <Form.Control type='text' placeholder='UPC' name='upcVal' value={info.upcVal}
                            disabled={info.proudctName !=="" || info.upcDeptStroeData.length !==0}
                       
                         
                            onChange={(e) => {
                              handleInputChange(e, "upcVal");
                              //handleOnChangeUpcs(e,"upcVal")

                          }}
                          />
                        </Form.Group>
                      </Col>

                      <Col>
                        <Button type='submit' style={{ marginTop: "32px", marginLeft: '-10px' }} onClick={(e) => handleSearchDisplay(e)}>

                          <FaSearch />
                        </Button>
                      </Col>
                    </Row>
                    {
                     // displaySearch === true &&
                       searchDatalist.length > 0 ?
                       (
                        <Row style={{marginTop:"20px",marginBottom:"20px"}}>

                            {/* <Form.Group>
                              <Form.Control 
                               as={"textarea"}
                               name = "searchVal"
                               value={info.searchVal}
                               style={{height:"300px",resize:"none"}}
                               

                              
                              
                              />
                            </Form.Group> */}

                            <Table responsive="sm"> 
                               <thead>
                                  <tr>
                                    <th>USER ID</th>
                                    <th>User Name</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Member Number</th>
                                    <th>Preferred Store</th>
                                    <th>Product Name</th>
                                  </tr>
                               </thead>
                               <tbody>
                                      {
                                       
                                            // searchData.length > 0  && searchData.map((each) => {
                                              searchDatalist?.length > 0 && searchDatalist?.map((each) => {
                                          return searchDatalist.length > 0 ?  <tr key={each.UserID}>
                                          <td>{each.UserID}</td>
                                          <td>{each.UserName}</td>
                                          <td>{each.FirstName}</td>
                                          <td>{each.LastName}</td>
                                          <td>{each.MemberNumber}</td>
                                          <td>{each.PreferredStore}</td>
                                          <td>{each.ProductName}</td>
                                      </tr> : <tr>No data found</tr>
                                        })
                                      }
                               </tbody>
                            </Table>
                           
                        

                        </Row>
                      )   : (
                        <>
                  {dept == false && product == false && upcs == false && getAll === false ?  null : "No Records" }
                        </>
                      )
                    }

                
                  </Col>


                </Row>
              </div>

              <div style={{ display: "flex", alignItems: "center", justifyContent: 'space-between',marginBottom:"10px" }} >
                <Button
                  //size='lg'
                  style={{ marginRight: '20px', marginBottom: "20px", width: "100px" }}
                  type="submit"
                  variant='secondary'
                  onClick={() => {
                    handleStep("previous")
                  }}
                >
                  Back

                </Button>
                <Button
                  // size='lg'
                  variant='secondary'
                  style={{ marginRight: '20px', marginBottom: "20px", width: "100px" }}
                  type="submit"
                  onClick={() => {
                    handleStep("next")
                    //  handleStep2Next();
                  }}
                >
                  Next

                </Button>

              </div>
            </>
          )
        }
        {
          step === 3 && (
            <>

              {/* <div style={{ marginTop: '30px' }}>
                <Row className='col-10 g-2'>
                  <Col lg={1} style={{ padding: '10px' }}>
                    <Form.Label>Groups <span style={{ color: 'red', paddingLeft: '10px' }}>*</span></Form.Label>
                  </Col>
                  <Col lg={2}>
                    <Form.Group>
                      <Form.Check // prettier-ignore
                        type="switch"
                        id="custom-switch"
                        label="ALL"
                        style={{ margin: '10px' }}
                      />
                      <Form.Check // prettier-ignore
                        type="switch"
                        id="custom-switch"
                        label="Include"
                        style={{ margin: '10px' }}
                      />
                      <Form.Check // prettier-ignore
                        type="switch"
                        id="custom-switch"
                        label="Exclude"
                        style={{ margin: '10px' }}
                      />
                    </Form.Group>
                  </Col>
                  <Col lg={5} style={{ backgroundColor: '#fff' }}>
                    <Form.Control as="textarea" style={{ height: '100px' }} />
                    <p style={{ color: 'red' }}>Note: You cannot change groups later this coupon.</p>
                  </Col>
                </Row>
                

              </div> */}

              <div style={{ marginTop: '30px' }}>
                <Row className='col-10 g-3'>

                  <Col lg={2} >
                    <Form.Label style={{ marginTop: "30px" }}>Groups <span style={{ color: 'red', paddingTop: '30px', marginTop: "-10px" }}>*</span></Form.Label>
                  </Col>
                  <Col lg={2}>
                    <Form.Group style={{ marginTop: "30px" }}>
                      <Form.Check // prettier-ignore
                        type="switch"
                        id="custom-switch"
                        name="groupsAll"
                        //  className='form-switch'
                        checked={groupsCheckall}
                        label="All"
                        onChange={(e) => {
                          //handleDepartmentAll(e,"departmentAll");
                          handleGroupscheck(e, "groupsAll");
                        }}
                        style={{ margin: '10px' }}
                      />
                      <Form.Check // prettier-ignore
                        type="switch"
                        id="custom-switch"
                        name="groupsInclude"
                        checked={groupsInclude}
                        label="Include"
                        onChange={(e) => handleGroupsInclude(e, "groupsInclude")}
                        style={{ margin: '10px' }}
                      />
                      <Form.Check // prettier-ignore
                        type="switch"
                        id="groupsExclude"
                        name='groupsExclude'
                        label="Exclude"
                        checked={groupsExclude}
                        onChange={(e) => handleGroupsExclude(e, "groupsExclude")}
                        style={{ margin: '10px' }}
                      />
                    </Form.Group>
                  </Col>

                  <Col lg={5} style={{ backgroundColor: '#fff' }}>
                    {/* <Row>
                   
                     <Form.Check // prettier-ignore
                      size={"lg"}
                      type="switch"
                      id="custom-switch"
                      label="Use Major Departments"
                      style={{marginTop:"-20px"}}
                      
                    />
                   
                    </Row> */}
                    {/* <Form.Control as={"textarea"} /> */}
                    <Row style={{ marginTop: '30px' }}>

                      <Select

                        isMulti
                        options={dropdownGroups}
                        value={info.groups}
                        name='groups'
                        className='react-select-container select'
                        onChange={(e) => {
                          handleMultiSelectInput(e, "groups");
                        }}
                      />
                      <p style={{ color: 'red' }}>Note: You cannot change groups later this coupon.</p>
                      {
                        formError.groups && info.groups.length === 0 && (
                          <p style={{ color: "red" }}>{formError.groups}</p>
                        )
                      }

                    </Row>

                  </Col>

                </Row>

              </div>

              <div style={{ display: "flex", alignItems: "center", justifyContent: 'space-between', marginTop: "180px" }} >
                <Button
                  //size='lg'
                  style={{ marginRight: '20px', marginBottom: "20px", width: "100px" }}
                  type="submit"
                  variant='secondary'
                  onClick={() => {
                    handleStep("previous")

                  }}
                >
                  Back

                </Button>
                <Button
                  //size='lg'
                  style={{ marginRight: '20px', marginBottom: "20px", width: "100px" }}
                  variant='secondary'
                  type="submit"
                  onClick={() => {
                    //  handleStep("next")
                    handleSte3Next()
                  }}
                >
                  Next

                </Button>

              </div>
            </>
          )
        }
        {
          step === 4 && (
            <>
              {/* <div style={{ marginTop: '30px' }}>
                <Row className='col-10 g-2'>
                  <Col lg={1} style={{ padding: '10px' }}>
                    <Form.Label>Stores <span style={{ color: 'red', paddingLeft: '10px' }}>*</span></Form.Label>
                  </Col>
                  <Col lg={2}>
                    <Form.Group>
                      <Form.Check // prettier-ignore
                        type="switch"
                        id="custom-switch"
                        label="ALL"
                        style={{ margin: '10px' }}
                      />
                      <Form.Check // prettier-ignore
                        type="switch"
                        id="custom-switch"
                        label="Include"
                        style={{ margin: '10px' }}
                      />
                      <Form.Check // prettier-ignore
                        type="switch"
                        id="custom-switch"
                        label="Exclude"
                        style={{ margin: '10px' }}
                      />
                    </Form.Group>
                  </Col>
                  <Col lg={5} style={{ backgroundColor: '#fff' }}>
                    <Form.Control as="textarea" style={{ height: '100px' }} />
                  </Col>
                </Row>
              </div> */}
              <div style={{ marginTop: '30px' }}>
                <Row className='col-10 g-3'>

                  <Col lg={2} style={{ paddingLeft: '20px' }}>
                    <Form.Label>Stores <span style={{ color: 'red' }}>*</span></Form.Label>
                  </Col>
                  <Col lg={2}>
                    <Form.Group>
                      <Form.Check // prettier-ignore
                        type="switch"
                        id="custom-switch"
                        name="storesAll"
                        //  className='form-switch'
                        checked={allStores}
                        label="All"
                        onChange={(e) => {
                          //handleDepartmentAll(e,"departmentAll");
                          handleStorescheck(e, "storesAll");
                        }}
                        style={{ margin: '10px' }}
                      />
                      <Form.Check // prettier-ignore
                        type="switch"
                        id="custom-switch"
                        name="storesInclude"
                        checked={includeStores}
                        label="Include"
                        onChange={(e) => handleStoreInclude(e, "storesInclude")}
                        style={{ margin: '10px' }}
                      />
                      <Form.Check // prettier-ignore
                        type="switch"
                        id="storesExclude"
                        name='storesExclude'
                        label="Exclude"
                        checked={excludeStore}
                        onChange={(e) => handleStoreExclude(e, "storesExclude")}
                        style={{ margin: '10px' }}
                      />
                    </Form.Group>
                  </Col>

                  <Col lg={5} style={{ backgroundColor: '#fff' }}>
                    {/* <Form.Control as={"textarea"} /> */}
                    <Select
                      isMulti
                      options={dropdownStores}
                      value={info.stores}
                      name='stores'
                      className='react-select-container select'
                      onChange={(e) => {
                        handleMultiSelectInput(e, "stores");
                      }}
                    />
                    {
                      formError.stores && info.stores.length === 0 && (
                        <p style={{ color: "red" }}>{formError.stores}</p>
                      )
                    }
                  </Col>

                </Row>

              </div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: 'space-between', marginTop: "180px" }} >

                <Button
                  //size='lg'
                  style={{ marginRight: '20px', marginBottom: "20px", width: "100px" }}
                  type="submit"
                  variant='secondary'
                  onClick={() => {
                    handleStep("previous")
                  }}
                >
                  Back

                </Button>
                <Button
                  // size='lg'
                  style={{ marginRight: '20px', marginBottom: "20px" }}
                  variant='secondary'
                  type="submit"
                  onClick={() => {
                    // handleStep("next")
                    handleStep4Next()
                  }}
                >
                  Create Coupon

                </Button>

              </div>
            </>
          )
        }

      </div>
    </div>
  )
}

export default Step3
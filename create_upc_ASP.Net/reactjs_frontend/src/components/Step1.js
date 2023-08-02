import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Form, Button, Tab } from 'react-bootstrap';
import Select from "react-select";
import { useDispatch,useSelector } from 'react-redux';
import { createBasketCoupon } from '../redux/API';

import { ToastContainer, toast } from 'react-toastify';
const Step1 = (
  {
    info,
    setInfo,
    handleChange,
    handleImage,
    formError,
    setFormError,
    handleInputNumberChange,
    handleInputChange,
    handleDepartmentAll,
    handleDepartmentInclude,
    handleDepartmentExclude,
    handleMultiSelectInput,
    checkDept,
    dropdown,
    hanldeDeptCheck,
    includeCheck,
    excludeCheck,
    dropdownStores,

    handleStorescheck,
    handleStoreInclude,
    handleStoreExclude,
    allStores,
    includeStores,
    excludeStore,

    groupsCheckall,
    groupsInclude,
    groupsExclude,
    handleGroupscheck,
    handleGroupsInclude,
    handleGroupsExclude,
    dropdownGroups,

    handleSaving,
    handleDealOfWeek,
    handleRecurig,

    savingCheck,
    dealOfWeekCheck,
    recuringCheck,
    handleChangeImage

  }
) => {



  const hiddenFileInput = React.useRef(null);
  const createCouponData = useSelector((state) => state.createCouponData);
  const createCouponMessage = useSelector((state) => state.createCouponMessage);
 

  const dispatch = useDispatch();

  const handleClick = event => {
    hiddenFileInput.current.click();
  };


  const [step, setStep] = useState(1);

  const [flow, setFlow] = useState("");




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
      || info.otherDetails === ""
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


  const handleStep3Next = () => {
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
    
      dispatch(createBasketCoupon(info));
      if(createCouponMessage ===  "Successful"){
        toast.success("Created Coupon successfully.")
      } else if(createCouponMessage !==  "Successful") {
        toast.error("failed")
      }
    }
  }




  return (

    <div className='container bg-white'>
      <ToastContainer />
      <p>Create <b>Basket</b> Deal</p>
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
                    Departments
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

              <Col>
                <Row>

                  <Col style={{ border: '1px dashed lightgrey', padding: '10px', marginRight: "10px" }}>
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
                          style={{ height: "100px", resize: 'none' }}
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
                        <Form.Label>Other Details <span style={{ color: "red" }}>*</span></Form.Label>
                        <Form.Control
                          as='textarea'
                          placeholder='Other Details'
                          style={{ height: "100px", resize: 'none' }}
                          name="otherDetails"
                          value={info.otherDetails}
                          onChange={(e) => {
                            handleChange("otherDetails");
                            handleInputChange(e, "otherDetails");
                          }}

                        />
                      </Form.Group>
                      {
                        formError.otherDetails && info.otherDetails === "" && (
                          <p style={{ color: 'red' }}>{formError.otherDetails}</p>
                        )
                      }
                    </Col>

                    {/* 
                      <Col>
                      </Col> */}

                  </Col>
                  <Col style={{ border: '1px dashed lightgrey', padding: '10px', marginRight: "10px", marginBottom: "80px" }}>
                    <Col style={{ marginBottom: "10px" }}>
                      <Form.Group>
                        <Form.Label>Minimum Purchase Amount <span style={{ color: "red" }}>*</span></Form.Label>
                        <Form.Control
                          type='number'
                          name="minPurchaseAmount"
                          value={info.minPurchaseAmount}
                          min={0}
                          onChange={(e) => {
                            handleChange("minPurchaseAmount");
                            handleInputChange(e, "minPurchaseAmount");
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
                          name="customerSavings"
                          value={info.customerSavings}
                          onChange={(e) => {
                            handleChange("customerSavings");
                            handleInputChange(e, "customerSavings");
                          }}

                        />
                      </Form.Group>
                      {
                        formError.customerSavings && info.customerSavings === 0 && (
                          <p style={{ color: "red" }}>{formError.customerSavings}</p>
                        )
                      }
                    </Col>
                    <Col style={{ marginBottom: "10px" }}>
                      <Form.Group>
                        <Form.Check // prettier-ignore
                          type="switch"
                          id="custom-switch"
                          name='savings'
                          label="% Savings"
                          style={{ margin: '10px' }}
                          checked={savingCheck}
                          onChange={(e) => {
                            handleSaving(e, "savings")
                          }}
                        />
                        <Form.Check // prettier-ignore
                          type="switch"
                          id="custom-switch"
                          name="dealofweek"
                          label="Deal of the Week "
                          style={{ margin: '10px' }}
                          checked={dealOfWeekCheck}
                          onChange={(e) => {
                            handleDealOfWeek(e, "dealofweek")
                          }}
                        />
                        <Form.Check // prettier-ignore
                          type="switch"
                          id="recuring"
                          name="recuring"
                          label="Recurring"
                          style={{ margin: '10px' }}
                          checked={recuringCheck}
                          onChange={(e) => {
                            handleRecurig(e, "recuring")
                          }}
                        />
                      </Form.Group>
                    </Col>
                    {
                      recuringCheck === true && (
                        <Col style={{ marginBottom: "10px", marginTop: '20px' }}>
                          <Form.Label>Recurring From</Form.Label>
                          <Form.Control
                            type="datetime-local"
                            name="recuringfrom"
                            value={info.recuringfrom}
                            //defaultValue={"2023-07-18T11:57"}
                            onChange={(e) => {
                              handleInputChange(e, "recuringfrom")
                            }}

                          ></Form.Control>
                        </Col>

                      )
                    }


                  </Col>
                  <Col style={{ border: '1px dashed lightgrey', padding: '10px', marginBottom: "100px" }}>
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
                    <Col style={{ marginBottom: "10px" }}>
                      <Form.Group>
                        <Form.Label>Image Upload</Form.Label>
                        <Button variant='secondary' style={{ display: "block" }} onClick={handleClick}>
                          Select Image
                        </Button>
                        <Form.Control
                          type="file"
                          id="image"
                          ref={hiddenFileInput}
                          onChange={(e) => handleImage(e)}
                          style={{ display: 'none' }}
                        />

                      </Form.Group>
                    </Col>



                  </Col>
                </Row>
              </Col>

            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: 'flex-end' }} >
              <Button
                // size='lg'
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

            <div style={{ marginTop: '10px' }}>

              {/* <Col>

                    <Form.Check // prettier-ignore
                      size={"lg"}
                      type="switch"
                      id="custom-switch"
                      label="Use Major Departments"

                    />
                  </Col> */}

              {/* <Form.Check // prettier-ignore
                      size={"lg"}
                      type="switch"
                      id="custom-switch"
                      label="Use Major Departments"
                      style={{marginLeft:'430px'}}
                      
                /> */}
            </div>
            <div style={{ marginTop: '30px' }}>
              <Row className='col-10 g-3'>

                <Col lg={2} >
                  <Form.Label style={{ marginTop: "30px" }}>Departments <span style={{ color: 'red', paddingTop: '30px', marginTop: "-10px" }}>*</span></Form.Label>
                </Col>
                <Col lg={2}>
                  <Form.Group style={{ marginTop: "30px" }}>
                    <Form.Check // prettier-ignore
                      type="switch"
                      id="custom-switch"
                      name="departmentsAll"
                      //  className='form-switch'
                      checked={checkDept}
                      label="All"
                      onChange={(e) => {
                        //handleDepartmentAll(e,"departmentAll");
                        hanldeDeptCheck(e, "departmentsAll");
                      }}
                      style={{ margin: '10px' }}
                    />
                    <Form.Check // prettier-ignore
                      type="switch"
                      id="custom-switch"
                      name="departmentInclude"
                      checked={includeCheck}
                      label="Include"
                      onChange={(e) => handleDepartmentInclude(e, "departmentInclude")}
                      style={{ margin: '10px' }}
                    />
                    <Form.Check // prettier-ignore
                      type="switch"
                      id="custom-switch"
                      name='departmentExclude'
                      label="Exclude"
                      checked={excludeCheck}
                      onChange={(e) => handleDepartmentExclude(e, "departmentExclude")}
                      style={{ margin: '10px' }}
                    />
                  </Form.Group>
                </Col>

                <Col lg={5} style={{ backgroundColor: '#fff' }}>
                  <Row>

                    <Form.Check // prettier-ignore
                      size={"lg"}
                      type="switch"
                      id="custom-switch"
                      label="Use Major Departments"
                      style={{ marginTop: "-20px" }}

                    />

                  </Row>
                  {/* <Form.Control as={"textarea"} /> */}
                  <Row style={{ marginTop: '20px' }}>

                    <Select

                      isMulti
                      options={dropdown}
                      value={info.departments}
                      name='departments'
                      className='react-select-container select'
                      onChange={(e) => {
                        handleMultiSelectInput(e, "departments");
                      }}
                    />
                    {
                      formError.departments && info.departments.length === 0 && (
                        <p style={{ color: "red" }}>{formError.departments}</p>
                      )
                    }

                  </Row>

                </Col>

              </Row>

            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: 'space-between' }} >
              <Button
                // size='lg'
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
                style={{ marginRight: '20px', marginBottom: "20px", width: "100px" }}
                type="submit"
                variant='secondary'
                onClick={() => {
                  //handleStep("next")
                  handleStep2Next();
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

            {/* <div style={{ margin: "10px" }} >
                <Row className='col-7 g-3'>

                  <Col className='col-2'>
                    <Form.Label>Groups <span style={{ color: 'red' }}>*</span></Form.Label>
                  </Col>
                  <Col className='co1-1'>
                    <Form.Check // prettier-ignore
                      size={"lg"}
                      type="switch"
                      id="custom-switch"
                      label="All"
                    />
                    <Form.Check // prettier-ignore
                      size={"lg"}
                      type="switch"
                      id="custom-switch"
                      label="Include"
                    />
                    <Form.Check // prettier-ignore
                      size={"lg"}
                      type="switch"
                      id="custom-switch"
                      label="Exclude"
                    />
                  </Col>
                  <Col md={{ span: 7, offset: -3 }}>
                    <Form.Control as={"textarea"} />
                  </Col>

                </Row>
                <Col md={{ span: 4, offset: 3 }} >
                  <p style={{ color: 'red' }}>Note: You cannot change groups later this coupon.</p>
                </Col>


              </div> */}
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
                type="submit"
                variant='secondary'
                onClick={() => {
                  //handleStep("next")
                  handleStep3Next()
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

            {/* <div style={{ margin: "10px" }} >
                <Row className='col-7 g-3'>

                  <Col className='col-2'>
                    <Form.Label>Stores <span style={{ color: 'red' }}>*</span></Form.Label>
                  </Col>
                  <Col className='co1-1'>
                    <Form.Check // prettier-ignore
                      size={"lg"}
                      type="switch"
                      id="custom-switch"
                      label="All"
                    />
                    <Form.Check // prettier-ignore
                      size={"lg"}
                      type="switch"
                      id="custom-switch"
                      label="Include"
                    />
                    <Form.Check // prettier-ignore
                      size={"lg"}
                      type="switch"
                      id="custom-switch"
                      label="Exclude"
                    />
                  </Col>
                  <Col md={{ span: 7, offset: -3 }}>
                    <Form.Control as={"textarea"} />
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
                // size='lg'
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

                style={{ marginRight: '20px', marginBottom: "20px" }}
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
  )
}

export default Step1
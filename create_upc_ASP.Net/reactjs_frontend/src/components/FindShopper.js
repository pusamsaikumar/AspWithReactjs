import React,{useState,useEffect} from "react";
import { Button, Col, Form, Row } from 'react-bootstrap'
import Paginate from './Paginate'

const dummy = [
    {
        first_name: 'saikumar',
        last_name: 'pusam',
        username: "sai@gmail.com",
        membernumber: "546464889498",
        prefferedstore: 'martins first shop',
        phone:"995968555",
        zipcode:"507134",
        startDate:'17-06-2023',
        endDate:'25-10-2023'
    

    },
    {
        first_name: 'vinay',
        last_name: 'kumar',
        username: "vinay@gmail.com",
        membernumber: "85479567845",
        prefferedstore: 'secod shop',
        phone:"8574784588",
        zipcode:"507174",
        startDate:'18-06-2023',
        endDate:'27-10-2023'

    },
    {
        first_name: 'vijaykumar',
        last_name: 'vijay',
        username: "vijay@gmail.com",
        membernumber: "47854447188",
        prefferedstore: 'vijay shop',
        phone:"74581558810",
        zipcode:"507122",
        startDate:'19-07-2023',
        endDate:'24-10-2023'

    },
    {
        first_name: 'saikumar',
        last_name: 'pusam',
        username: "sai@gmail.com",
        membernumber: "546464889498",
        prefferedstore: 'martins first shop',
        phone:"995968555",
        zipcode:"507134",
        startDate:'17-06-2023',
        endDate:'25-10-2023'
    

    },
    {
        first_name: 'vinaykumar',
        last_name: 'pusam',
        username: "sai@gmail.com",
        membernumber: "546464889498",
        prefferedstore: 'martins first shop',
        phone:"995968555",
        zipcode:"507134",
        startDate:'17-06-2023',
        endDate:'25-10-2023'

    },
    {
        first_name: 'vijaykumar',
        last_name: 'pusam',
        username: "sai@gmail.com",
        membernumber: "546464889498",
        prefferedstore: 'martins first shop',
        phone:"995968555",
        zipcode:"507134",
        startDate:'17-06-2023',
        endDate:'25-10-2023'
    },
    {
        first_name: 'saikumar',
        last_name: 'pusam',
        username: "sai@gmail.com",
        membernumber: "546464889498",
        prefferedstore: 'martins first shop',
        phone:"995968555",
        zipcode:"507134",
        startDate:'17-06-2023',
        endDate:'25-10-2023'
    

    },
    {
        first_name: 'vinaykumar',
        last_name: 'pusam',
        username: "sai@gmail.com",
        membernumber: "546464889498",
        prefferedstore: 'martins first shop',
        phone:"995968555",
        zipcode:"507134",
        startDate:'17-06-2023',
        endDate:'25-10-2023'

    },
    {
        first_name: 'vijaykumar',
        last_name: 'pusam',
        username: "sai@gmail.com",
        membernumber: "546464889498",
        prefferedstore: 'martins first shop',
        phone:"995968555",
        zipcode:"507134",
        startDate:'17-06-2023',
        endDate:'25-10-2023'
    },
    {
        first_name: 'saikumar',
        last_name: 'pusam',
        username: "sai@gmail.com",
        membernumber: "546464889498",
        prefferedstore: 'martins first shop',
        phone:"995968555",
        zipcode:"507134",
        startDate:'17-06-2023',
        endDate:'25-10-2023'
    

    },
    {
        first_name: 'vinaykumar',
        last_name: 'pusam',
        username: "sai@gmail.com",
        membernumber: "546464889498",
        prefferedstore: 'martins first shop',
        phone:"995968555",
        zipcode:"507134",
        startDate:'17-06-2023',
        endDate:'25-10-2023'

    },
    {
        first_name: 'vijaykumar',
        last_name: 'pusam',
        username: "sai@gmail.com",
        membernumber: "546464889498",
        prefferedstore: 'martins first shop',
        phone:"995968555",
        zipcode:"507134",
        startDate:'17-06-2023',
        endDate:'25-10-2023'
    },
    {
        first_name: 'saikumar',
        last_name: 'pusam',
        username: "sai@gmail.com",
        membernumber: "546464889498",
        prefferedstore: 'martins first shop',
        phone:"995968555",
        zipcode:"507134",
        startDate:'17-06-2023',
        endDate:'25-10-2023'
    

    },
    {
        first_name: 'vinaykumar',
        last_name: 'pusam',
        username: "sai@gmail.com",
        membernumber: "546464889498",
        prefferedstore: 'martins first shop',
        phone:"995968555",
        zipcode:"507134",
        startDate:'17-06-2023',
        endDate:'25-10-2023'

    },
    {
        first_name: 'vijaykumar',
        last_name: 'pusam',
        username: "sai@gmail.com",
        membernumber: "546464889498",
        prefferedstore: 'martins first shop',
        phone:"995968555",
        zipcode:"507134",
        startDate:'17-06-2023',
        endDate:'25-10-2023'
    },
    {
        first_name: 'saikumar',
        last_name: 'pusam',
        username: "sai@gmail.com",
        membernumber: "546464889498",
        prefferedstore: 'martins first shop',
        phone:"995968555",
        zipcode:"507134",
        startDate:'17-06-2023',
        endDate:'25-10-2023'
    

    },
    {
        first_name: 'vinaykumar',
        last_name: 'pusam',
        username: "sai@gmail.com",
        membernumber: "546464889498",
        prefferedstore: 'martins first shop',
        phone:"995968555",
        zipcode:"507134",
        startDate:'17-06-2023',
        endDate:'25-10-2023'

    },
    {
        first_name: 'vijaykumar',
        last_name: 'pusam',
        username: "sai@gmail.com",
        membernumber: "546464889498",
        prefferedstore: 'martins first shop',
        phone:"995968555",
        zipcode:"507134",
        startDate:'17-06-2023',
        endDate:'25-10-2023'
    },
    {
        first_name: 'saikumar',
        last_name: 'pusam',
        username: "sai@gmail.com",
        membernumber: "546464889498",
        prefferedstore: 'martins first shop',
        phone:"995968555",
        zipcode:"507134",
        startDate:'17-06-2023',
        endDate:'25-10-2023'
    

    },
    {
        first_name: 'vinaykumar',
        last_name: 'pusam',
        username: "sai@gmail.com",
        membernumber: "546464889498",
        prefferedstore: 'martins first shop',
        phone:"995968555",
        zipcode:"507134",
        startDate:'17-06-2023',
        endDate:'25-10-2023'

    },
    {
        first_name: 'vijaykumar',
        last_name: 'pusam',
        username: "sai@gmail.com",
        membernumber: "546464889498",
        prefferedstore: 'martins first shop',
        phone:"995968555",
        zipcode:"507134",
        startDate:'17-06-2023',
        endDate:'25-10-2023'
    },
    {
        first_name: 'saikumar',
        last_name: 'pusam',
        username: "sai@gmail.com",
        membernumber: "546464889498",
        prefferedstore: 'martins first shop',
        phone:"995968555",
        zipcode:"507134",
        startDate:'17-06-2023',
        endDate:'25-10-2023'
    

    },
    {
        first_name: 'vinaykumar',
        last_name: 'pusam',
        username: "sai@gmail.com",
        membernumber: "546464889498",
        prefferedstore: 'martins first shop',
        phone:"995968555",
        zipcode:"507134",
        startDate:'17-06-2023',
        endDate:'25-10-2023'

    },
    {
        first_name: 'vijaykumar',
        last_name: 'pusam',
        username: "sai@gmail.com",
        membernumber: "546464889498",
        prefferedstore: 'martins first shop',
        phone:"995968555",
        zipcode:"507134",
        startDate:'17-06-2023',
        endDate:'25-10-2023'
    },
    {
        first_name: 'saikumar',
        last_name: 'pusam',
        username: "sai@gmail.com",
        membernumber: "546464889498",
        prefferedstore: 'martins first shop',
        phone:"995968555",
        zipcode:"507134",
        startDate:'17-06-2023',
        endDate:'25-10-2023'
    

    },
    {
        first_name: 'vinaykumar',
        last_name: 'pusam',
        username: "sai@gmail.com",
        membernumber: "546464889498",
        prefferedstore: 'martins first shop',
        phone:"995968555",
        zipcode:"507134",
        startDate:'17-06-2023',
        endDate:'25-10-2023'

    },
    {
        first_name: 'vijaykumar',
        last_name: 'pusam',
        username: "sai@gmail.com",
        membernumber: "546464889498",
        prefferedstore: 'martins first shop',
        phone:"995968555",
        zipcode:"507134",
        startDate:'17-06-2023',
        endDate:'25-10-2023'
    },
    {
        first_name: 'saikumar',
        last_name: 'pusam',
        username: "sai@gmail.com",
        membernumber: "546464889498",
        prefferedstore: 'martins first shop',
        phone:"995968555",
        zipcode:"507134",
        startDate:'17-06-2023',
        endDate:'25-10-2023'
    

    },
    {
        first_name: 'vinaykumar',
        last_name: 'pusam',
        username: "sai@gmail.com",
        membernumber: "546464889498",
        prefferedstore: 'martins first shop',
        phone:"995968555",
        zipcode:"507134",
        startDate:'17-06-2023',
        endDate:'25-10-2023'

    },
    {
        first_name: 'vijaykumar',
        last_name: 'pusam',
        username: "sai@gmail.com",
        membernumber: "546464889498",
        prefferedstore: 'martins first shop',
        phone:"995968555",
        zipcode:"507134",
        startDate:'17-06-2023',
        endDate:'25-10-2023'
    },
    {
        first_name: 'saikumar',
        last_name: 'pusam',
        username: "sai@gmail.com",
        membernumber: "546464889498",
        prefferedstore: 'martins first shop',
        phone:"995968555",
        zipcode:"507134",
        startDate:'17-06-2023',
        endDate:'25-10-2023'
    

    },
    {
        first_name: 'vinaykumar',
        last_name: 'pusam',
        username: "sai@gmail.com",
        membernumber: "546464889498",
        prefferedstore: 'martins first shop',
        phone:"995968555",
        zipcode:"507134",
        startDate:'17-06-2023',
        endDate:'25-10-2023'

    },
    {
        first_name: 'vijaykumar',
        last_name: 'pusam',
        username: "sai@gmail.com",
        membernumber: "546464889498",
        prefferedstore: 'martins first shop',
        phone:"995968555",
        zipcode:"507134",
        startDate:'17-06-2023',
        endDate:'25-10-2023'
    },
    {
        first_name: 'saikumar',
        last_name: 'pusam',
        username: "sai@gmail.com",
        membernumber: "546464889498",
        prefferedstore: 'martins first shop',
        phone:"995968555",
        zipcode:"507134",
        startDate:'17-06-2023',
        endDate:'25-10-2023'
    

    },
    {
        first_name: 'vinaykumar',
        last_name: 'pusam',
        username: "sai@gmail.com",
        membernumber: "546464889498",
        prefferedstore: 'martins first shop',
        phone:"995968555",
        zipcode:"507134",
        startDate:'17-06-2023',
        endDate:'25-10-2023'

    },
    {
        first_name: 'vijaykumar',
        last_name: 'pusam',
        username: "sai@gmail.com",
        membernumber: "546464889498",
        prefferedstore: 'martins first shop',
        phone:"995968555",
        zipcode:"507134",
        startDate:'17-06-2023',
        endDate:'25-10-2023'
    },
    {
        first_name: 'saikumar',
        last_name: 'pusam',
        username: "sai@gmail.com",
        membernumber: "546464889498",
        prefferedstore: 'martins first shop',
        phone:"995968555",
        zipcode:"507134",
        startDate:'17-06-2023',
        endDate:'25-10-2023'
    

    },
    {
        first_name: 'vinaykumar',
        last_name: 'pusam',
        username: "sai@gmail.com",
        membernumber: "546464889498",
        prefferedstore: 'martins first shop',
        phone:"995968555",
        zipcode:"507134",
        startDate:'17-06-2023',
        endDate:'25-10-2023'

    },
    {
        first_name: 'vijaykumar',
        last_name: 'pusam',
        username: "sai@gmail.com",
        membernumber: "546464889498",
        prefferedstore: 'martins first shop',
        phone:"995968555",
        zipcode:"507134",
        startDate:'17-06-2023',
        endDate:'25-10-2023'
    },
    {
        first_name: 'saikumar',
        last_name: 'pusam',
        username: "sai@gmail.com",
        membernumber: "546464889498",
        prefferedstore: 'martins first shop',
        phone:"995968555",
        zipcode:"507134",
        startDate:'17-06-2023',
        endDate:'25-10-2023'
    

    },
    {
        first_name: 'vinaykumar',
        last_name: 'pusam',
        username: "sai@gmail.com",
        membernumber: "546464889498",
        prefferedstore: 'martins first shop',
        phone:"995968555",
        zipcode:"507134",
        startDate:'17-06-2023',
        endDate:'25-10-2023'

    },
    {
        first_name: 'vijaykumar',
        last_name: 'pusam',
        username: "sai@gmail.com",
        membernumber: "546464889498",
        prefferedstore: 'martins first shop',
        phone:"995968555",
        zipcode:"507134",
        startDate:'17-06-2023',
        endDate:'25-10-2023'
    },
    {
        first_name: 'saikumar',
        last_name: 'pusam',
        username: "sai@gmail.com",
        membernumber: "546464889498",
        prefferedstore: 'martins first shop',
        phone:"995968555",
        zipcode:"507134",
        startDate:'17-06-2023',
        endDate:'25-10-2023'
    

    },
    {
        first_name: 'vinaykumar',
        last_name: 'pusam',
        username: "sai@gmail.com",
        membernumber: "546464889498",
        prefferedstore: 'martins first shop',
        phone:"995968555",
        zipcode:"507134",
        startDate:'17-06-2023',
        endDate:'25-10-2023'

    },
    {
        first_name: 'vijaykumar',
        last_name: 'pusam',
        username: "sai@gmail.com",
        membernumber: "546464889498",
        prefferedstore: 'martins first shop',
        phone:"995968555",
        zipcode:"507134",
        startDate:'17-06-2023',
        endDate:'25-10-2023'
    },
    {
        first_name: 'saikumar',
        last_name: 'pusam',
        username: "sai@gmail.com",
        membernumber: "546464889498",
        prefferedstore: 'martins first shop',
        phone:"995968555",
        zipcode:"507134",
        startDate:'17-06-2023',
        endDate:'25-10-2023'
    

    },
    {
        first_name: 'vinaykumar',
        last_name: 'pusam',
        username: "sai@gmail.com",
        membernumber: "546464889498",
        prefferedstore: 'martins first shop',
        phone:"995968555",
        zipcode:"507134",
        startDate:'17-06-2023',
        endDate:'25-10-2023'

    },
    {
        first_name: 'vijaykumar',
        last_name: 'pusam',
        username: "sai@gmail.com",
        membernumber: "546464889498",
        prefferedstore: 'martins first shop',
        phone:"995968555",
        zipcode:"507134",
        startDate:'17-06-2023',
        endDate:'25-10-2023'
    },

]



const FindShopper = () => {

     const [data , setData] = useState(dummy);

    //const totalRecordsLength = data?.Message?.totalcount;
    const totalRecordsLength = data.length;
//const totalRecordsLength = 10;

    const [itemOffset, setItemOffset] = useState(0);
    const limitPerPage = 5; //Limit Value

    //const pageCount = Math.ceil(totalRecordsLength / limitPerPage);

    const [sortItem,setSortItem]=useState("");
    //const [sortOder,setSortOrder]=useState(0);


    const endOffset = itemOffset + limitPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = data.slice(itemOffset, endOffset);

  const pageCount = Math.ceil(data.length / limitPerPage);
    
    const handlePageClick = (event) => {
      const newOffset = event.selected * limitPerPage;
      setItemOffset(newOffset);
    //   if(sortdesc==1){
    //     dispatch(ruleListData(limitPerPage, newOffset,sortItem,0));
    //   }else{
    //     dispatch(ruleListData(limitPerPage, newOffset,sortItem,1));
    //   }
    };
    const [searchParams,setSearchParams] = useState("");

    const handleFilter=(e)=>{
        
    
            let newData = data.filter((row) => {
                return `${row.first_name}`.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())
            })
            setData(newData);
            setSearchParams(e.target.value);
    }

    return (
        <div>
            <h2>Find Shopper:</h2>
            <div>
                <Col className="col-12" xs={12}>
                    <Row>
                        <Col lg={2}>
                            <Form.Label>User Name</Form.Label>
                            <Form.Control
                                type='text'
                                placeholder='User Name'

                            >

                            </Form.Control>
                        </Col>

                        <Col lg={2} >
                            <Form.Label>Member Number</Form.Label>
                            <Form.Control
                                type='text'
                                placeholder='Member Number'

                            >

                            </Form.Control>
                        </Col>
                        <Col lg={2}>
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control
                                type='text'
                                placeholder='User Name'

                            >

                            </Form.Control>
                        </Col>
                        <Col lg={2}>
                            <Form.Label>Zipcode </Form.Label>
                            <Form.Control
                                type='text'
                                placeholder='User Name'

                            >

                            </Form.Control>
                        </Col>

                        < Col lg={4}>
                            <Form.Label>
                                Stores
                            </Form.Label>
                            <Form.Select aria-label="Default select example">
                                <option>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                        </Col>

                    </Row>
                </Col>

                <Col lg={12}>
                    <Row>
                        <Col lg={2}>
                            <Form.Label>Fist Name</Form.Label>
                            <Form.Control
                                type='text'
                                placeholder='First Name'

                            >

                            </Form.Control>
                        </Col>

                        <Col lg={2} >
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control
                                type='text'
                                placeholder='Last Name'

                            >

                            </Form.Control>
                        </Col>
                        <Col lg={2}>
                            <Form.Label>Signup From Data</Form.Label>
                            <Form.Control
                                type='date'
                                placeholder='User Name'

                            >

                            </Form.Control>
                        </Col>
                        <Col lg={2}>
                            <Form.Label>Signup To Date </Form.Label>
                            <Form.Control
                                type='date'
                                placeholder='User Name'

                            >

                            </Form.Control>
                        </Col>
                    </Row>
                </Col>
                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                        <Button>
                            Remove
                        </Button>  <Button>
                            Search
                        </Button>
                    </Col>
                </Row>


            </div>
            <div style={{display:'flex',flexDirection:'row',justifyContent:'flex-end'}}>
                <button>Create Group</button>
                    <div style={{display:'flex',flexDirection:'row',justifyContent:'flex-end'}} >
                        <Form.Label>Search:</Form.Label>
                        <input type="text" placeholder="search..." value={searchParams}  onChange={handleFilter} />
                    </div>
            </div>
            <div>
 
                <table className="table">
                      <thead>
                        <th><Form.Check></Form.Check></th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>User Name</th>
                        <th>Member Number</th>
                        <th>Preffered Store</th>
                        <th style={{ textAlign: "center" }}>Actions</th>
                      </thead>
                      <tbody>
                        {/* {
                            (data?.length || currentItems) > 0 ? (<>
                            {data?.slice(itemOffset, endOffset).map((each) => (
                                <tr>
                                    <td>
                                        <Form.Check/>
                                    </td>
                                <td>
                                    {each.first_name}
                                </td>
                                <td>{each.last_name}</td>
                                <td>{each.username}</td>
                                <td>{each.membernumber}</td>
                                <td>{each.prefferedstore}</td>
                                </tr>
                            ))}
                            </>) : <></>
                        } */}

{data?.map((each) => (
                                <tr>
                                    <td>
                                        <Form.Check/>
                                    </td>
                                <td>
                                    {each.first_name}
                                </td>
                                <td>{each.last_name}</td>
                                <td>{each.username}</td>
                                <td>{each.membernumber}</td>
                                <td>{each.prefferedstore}</td>
                                </tr>
                            ))}
                      </tbody>
                </table>
            </div>
            <div>

            <Paginate
                handlePageClick={handlePageClick}
                pageCount={parseInt(pageCount)}
              />
            </div>

        </div>
    )
}

export default FindShopper
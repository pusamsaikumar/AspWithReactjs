import React,{useState} from 'react';
import { Form ,Option} from 'react-bootstrap';
import Select from "react-select"
const Step4 = ({
  dropDown
}) => {
  const [selectOption,setSelectOption] =useState("");
  const [openDropdown ,setOpenDropdown] = useState(false);
  console.log(selectOption)
  return (
    <div>Step4

      <hr/>
      <h3>Select The dropdown values inside a textarea</h3>
      <Form.Group>
        <Form.Label>Departments</Form.Label>
        <Form.Control
         as="textarea"
         value={selectOption.length > 1 ? selectOption?.map((each) => (each.label)) : selectOption.label} 
         onClick={() => setOpenDropdown(true)}
         onChange={() => setOpenDropdown(false)}
        >
          

        </Form.Control>
        {
          openDropdown === true &&  (
          //  <Form.Group>
          <Select
          isMulti  
          name="stores" 
          options={dropDown} 
          onChange={(e) =>{
            setSelectOption(e);
           e.taget === null && setOpenDropdown(false)
        
          
          }} className='form-control' styles={{display:"none"}} />
     //   </Form.Group>
          )
        } 

        
      </Form.Group>
    </div>
  )
}

export default Step4
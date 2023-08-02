import React from 'react';
import axios from 'axios';
import { useEffect,useState } from 'react';

const Todo = () => {
const [dataval,setDataval] = useState([]);
const [desc,setDesc] = useState("");
    useEffect(() =>{
       gettodo();
      },[]);

const gettodo=()=>{
  axios.get("http://localhost:5080/api/Todos/GetNotes")
  .then((res) =>{
    console.log(res);
    setDataval(res.data)
  })
  .catch((err) =>{
    console.log(err)
  })
}
  const data = new  FormData();
  data.append('newNotes',desc)
    
      const addtodo =async(e)=>{

        var config={
            method:"post",
            url:"http://localhost:5080/api/Todos/NewNotes",
             headers:{
             
              "Content-Type":"multipart/form-data"
             },
             data:data       
        }
       await axios(config)
       .then(response =>{
        gettodo();
        console.log("res sata",response);
       })
      
       .catch();
       setDesc("");
      }
const deletetodo= async(e,id)=>{
  e.preventDefault();
    var config={
      method:'delete',
      url:`http://localhost:5080/api/Todos/DeleteNotes?id=${id}`
    }
    await axios(config).then(response =>{
      console.log("dete",response.data);
      gettodo()
    } ).catch();
   
}
  return (
    <div>
        <p>Todo list</p>
        <input type="text" value={desc} placeholder='please enter text' onChange={(e)=> setDesc(e.target.value)} /> 
        <button onClick={(e) => addtodo(e)}>Add Todo</button>
        {
            dataval.length && dataval.map((each) => {
                return <div style={{display:'flex',alignItems:"center",justifyContent:"flex-start",marginTop:"10px"}}>
                   <div style={{display:"flex",marginRight:"10px"}}>
                   <p>{each.description}</p>
                    <button onClick={(e) => deletetodo(e,each.id)} style={{width:"100px" ,marginLeft:"20px"}}>delete</button>

                   </div>
                </div>
            })
        }
    </div>
  )
}

export default Todo

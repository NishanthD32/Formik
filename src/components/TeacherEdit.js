import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppState } from "../Context/AppProvider";
import Base from "../BasePage/Base";
import { Api2 } from "../Api/Api";
import { editedTeacherSchema } from "../schema/Schema";
import { useFormik } from "formik";

export default function TeacherEdit(){
  const {id}= useParams();
  const navigate = useNavigate();
  const {secondData, setSecondData} = AppState()


  
  const{values, handleChange, handleSubmit, handleBlur, errors, touched,} = useFormik({
    initialValues:{
        name:"",
        batch:"",
        email:"",
        phone:"",
        education:"",
    },
    validationSchema : editedTeacherSchema,
    onSubmit:(editTeachers) =>{
        console.log(editTeachers)
        editteacher(editTeachers)

    }
})
  



  
  useEffect(()=>{
    console.log("id : ", id)
    const selectedteacher = secondData.find((teacher, index)=>teacher.id === id);
  
  
}, [])

async function editteacher(editTeachers){

  const responce = await fetch(`${Api2}/${id}`,{
    method:"PUT",
    body:JSON.stringify(editTeachers),
    headers:{
      "Content-Type":"application/json"
    }
  })
  const data = await responce.json()
  const editIndex =  secondData.findIndex((teacher, index) => teacher.id ===id);
  secondData[editIndex]= data
  setSecondData([...secondData])
  navigate('/teacherlist/')
}

  

    return(
<Base>
<h1 className="p-5"> Teacher Edit Page</h1>
        <div className="form-control">
      <form onSubmit={handleSubmit}>
           <label className="input-group p-1">
           <span>Name</span>
           <input type="text" placeholder="Enter Name" className="input input-bordered" value={values.name} onChange={handleChange} name="name" onBlur={handleBlur}/>
           </label>
           {touched.name && errors.name ? <div className="text-red-300">{errors.name}</div> :""}
           <label className="input-group p-1">
           <span>Batch</span>
           <input type="text" placeholder="Enter Batch" className="input input-bordered" value={values.batch} onChange={handleChange} name="batch" onBlur={handleBlur}/>
           </label>
           {touched.batch && errors.batch ? <div className="text-red-300">{errors.batch}</div> :""}
           <label className="input-group p-1">
           <span>Email</span>
           <input type="text" placeholder="Enter Email" className="input input-bordered" value={values.email} onChange={handleChange} name="email" onBlur={handleBlur}/>
           </label>
           {touched.email && errors.email ? <div className="text-red-300">{errors.email}</div> :""}
           <label className="input-group p-1">
           <span>Phone</span>
           <input type="number" placeholder="Enter Phone No" className="input input-bordered" value={values.phone} onChange={handleChange} name="phone" onBlur={handleBlur}/>
           </label>
           {touched.phone && errors.phone ? <div className="text-red-300">{errors.phone}</div> :""}
           <label className="input-group p-1">
           <span>Eduction</span>
           <input type="text" placeholder="Enter Education" className="input input-bordered" value={values.education} onChange={handleChange} name="education" onBlur={handleBlur}/>
           </label>
           {touched.education && errors.education ? <div className="text-red-300">{errors.education}</div> :""}
           <button className="bg-base-200 m-5 p-2 rounded" type="submit">Edit Teacher</button>
           </form>
</div>
 
</Base>
    )
}
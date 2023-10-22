import { useEffect, useState } from "react";
import Base from "../BasePage/Base";
import { useNavigate, useParams } from "react-router-dom";
import CrumBar from "./CrumBar";
import { AppState } from "../Context/AppProvider";
import { Api } from "../Api/Api";
import { useFormik } from "formik";
import { editStudentSchema } from "../schema/Schema";

export default function EditStudent({CrumState, setCrumState}){

    const{values, handleChange, handleSubmit, handleBlur, errors, touched,} = useFormik({
        initialValues:{
            name:"",
            batch:"",
            email:"",
            phone:"",
            education:"",
        },
        validationSchema : editStudentSchema,
        onSubmit:(editStudents) =>{
            console.log(editStudents)
            editStudent(editStudents)

        }
    })

    const {data, setData} = AppState();

    const {id}= useParams();

    const navigate = useNavigate()

  

    useEffect(()=>{
        console.log("id : ", id)
        const selectedStudent = data.find((stud, index)=>stud.id === id);
    
    
    
    }, [])

    async function editStudent(editStudents){
        
        const responce = await fetch(`${Api}/${id}`,{
            method:"PUT",
            body:JSON.stringify(editStudents),
            headers:{
                "Content-Type":"application/json"
            },
        })
        const data1 = await responce.json();
        console.log(data1)
        const editIndex =  data.findIndex((stud, index) => stud.id === id);
        data[editIndex]= data1
        setData([...data])
        navigate('/student/all')

    }

    return(
        <Base>
        <CrumBar
        CrumState={CrumState}
        setCrumState={setCrumState}/>
        <h1 className="p-5"> Student Edit Page</h1>
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
           <input type="text" placeholder="Enter Email" className="input input-bordered"value={values.email} onChange={handleChange} name="email" onBlur={handleBlur}/>
           </label>
           {touched.email && errors.email ? <div className="text-red-300">{errors.email}</div> :""}
           <label className="input-group p-1">
           <span>Phone</span>
           <input type="number" placeholder="Enter Phone No" className="input input-bordered"value={values.phone} onChange={handleChange} name="phone" onBlur={handleBlur}/>
           </label>
           {touched.phone && errors.phone ? <div className="text-red-300">{errors.phone}</div> :""}
           <label className="input-group p-1">
           <span>Eduction</span>
           <input type="text" placeholder="Enter Education" className="input input-bordered" value={values.education} onChange={handleChange} name="education" onBlur={handleBlur}/>
           </label>
           {touched.education && errors.education ? <div className="text-red-300">{errors.education}</div> :""}
           <button className="bg-base-200 m-5 p-2 rounded" type="submit" >Edit Student</button>
  </form>
</div>
  
        </Base>
    )
}
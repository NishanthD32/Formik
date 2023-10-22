import { useState } from "react";
import Base from "../BasePage/Base";
import { AppState } from "../Context/AppProvider";
import { Api2 } from "../Api/Api";
import { useFormik } from "formik";
import { teacherSchema } from "../schema/Schema";

export default function AddNewTeacher(){
    const {secondData, setSecondData} = AppState()

    const {values, handleChange, handleSubmit, handleBlur, errors, touched,} = useFormik({
         initialValues:{
            name: "",
            batch: "",
            email: "",
            phone: "",
            education: "",
         },
         validationSchema :teacherSchema,
         onSubmit:(newTeacher) =>{
            console.log(newTeacher)
            addnewteacher(newTeacher)
         }
    })

    // const [name, setName]= useState("");
    // const[batch, setBatch]= useState("");
    // const[email, setEmail]= useState("");
    // const[phone, setPhone]= useState("");
    // const[education, setEducation]= useState("");

   async function addnewteacher(newTeacher){
        // const newTeacherObj= {
           
        //     name: name,
        //     batch: batch,
        //     email: email,
        //     phone: phone,
        //     education: education
        // }
        const responce = await fetch(Api2,{
            method:"POST",
            body: JSON.stringify(newTeacher),
            headers:{
                "Content-Type":"application/json"
            },
        })
        const data = await responce.json();
       console.log(data)
    
        setSecondData([...secondData, data])
        values.name=""
        values.batch= ""
        values.email=""
        values.phone=""
        values.education=""
    }


    return(
        <Base>
         <h1 className="p-5">Add New Teacher</h1>
        <div className="form-control">
          <form onSubmit={handleSubmit}>
           <label className="input-group p-1">
           <span>Name</span>
           <input type="text" placeholder="Enter Name" className="input input-bordered" value={values.name} onChange={handleChange} onBlur={handleBlur} name="name"/>
           </label>
           {touched.name && errors.name ? <div className="text-red-300">{errors.name}</div> :""}
           <label className="input-group p-1">
           <span>Batch</span>
           <input type="text" placeholder="Enter Batch" className="input input-bordered" value={values.batch} onChange={handleChange} onBlur={handleBlur} name="batch"/>
           </label>
           {touched.batch && errors.batch ? <div className="text-red-300">{errors.batch}</div> :""}
           <label className="input-group p-1">
           <span>Email</span>
           <input type="text" placeholder="Enter Email" className="input input-bordered"value={values.email} onChange={handleChange} onBlur={handleBlur} name="email"/>
           </label>
           {touched.email && errors.email ? <div className="text-red-300">{errors.email}</div> :""}
           <label className="input-group p-1">
           <span>Phone</span>
           <input type="number" placeholder="Enter Phone No" className="input input-bordered"value={values.phone} onChange={handleChange} onBlur={handleBlur} name="phone"/>
           </label>
           <label className="input-group p-1">
           {touched.phone && errors.phone ? <div className="text-red-300">{errors.phone}</div> :""}
           <span>Eduction</span>
           <input type="text" placeholder="Enter Education" className="input input-bordered" value={values.education} onChange={handleChange} onBlur={handleBlur} name="education"/>
           </label>
           {touched.education && errors.education ? <div className="text-red-300">{errors.education}</div> :""}
           <button className="bg-base-200 m-5 p-2 rounded" type="submite">Add Teacher</button>
  </form>
</div>

        </Base>
    )
}
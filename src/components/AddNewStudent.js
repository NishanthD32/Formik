import { useState } from "react";
import Base from "../BasePage/Base";
import { AppState } from "../Context/AppProvider";
import { Api } from "../Api/Api";
import { useFormik } from "formik";
import { studentSchema } from "../schema/Schema";


export default function AddNewStudent(){
    const {values, handleChange, handleSubmit, handleBlur, errors, touched,} = useFormik({
        initialValues:{
            name: "",
            batch:"",
            email:"",
            phone:"",
            education:"",
        },
        validationSchema : studentSchema,
        onSubmit:(newStudent) =>{
            console.log(newStudent)
            addnewstudent(newStudent)
        }
    })

    const {data, setData} = AppState();

    
    // const [name, setName]= useState("");
    // const[batch, setBatch]= useState("");
    // const[email, setEmail]= useState("");
    // const[phone, setPhone]= useState("");
    // const[education, setEducation]= useState("");



   async function addnewstudent(newStudent){
        // const newStudentObj= {
           
        //     name: name,
        //     batch: batch,
        //     email: email,
        //     phone: phone,
        //     education: education,
        // }

        const responce = await fetch(Api,{
            method:"POST",
            body: JSON.stringify(newStudent),
            headers:{
                "Content-Type":"application/json"
            },
        })
        const data1 = await responce.json();
        // console.log(data1)
        setData([...data, data1])
        values.name= ""
        values.batch= ""
        values.email= ""
        values.phone= ""
        values.education= ""
        // setName("")
        // setBatch("")
        // setEmail("")
        // setPhone("")
        // setEducation("")
    }
    return(
        <Base>
        <h1 className="p-5">Add New Student</h1>
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
           <button className="bg-base-200 m-5 p-2 rounded" type="submit">Add Student</button>
  </form>
</div>
        </Base>
    )
};

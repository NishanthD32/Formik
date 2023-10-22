import { Await, useNavigate } from "react-router-dom"
import { AppState } from "../Context/AppProvider";
import { Api } from "../Api/Api";

function StudentCart({student, CrumState, setCrumState}){

  const {data, setData} = AppState();

    const removeStudent= async (id)=>{

      let res =window.confirm("Are you sure")
      if(res){
        const responce = await fetch(`${Api}/${id}`,{
          method:"DELETE"
        })
        const data1 = await responce.json();
        const newStudentData = data.filter((stud, idx)=>stud.id !== id)
      setData(newStudentData)
      }
    
    }
    const navigate = useNavigate()
    const handleEdit = (id)=>{
      const newCrum = {
        name: "edit",
        path: `/edit/${id}`
      }
      setCrumState([...CrumState,newCrum])
      navigate(`/edit/${id}`)
    }
    
    return(
        <div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">{student.name}</h2>
    <p>{student.batch}</p>
    <p>{student.email}</p>
    <p>{student.phone}</p>
    <p>{student.education}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-denger"onClick={()=>removeStudent(student.id)}>Delete</button>
      <button className="btn btn-primary"onClick={()=>handleEdit(student.id)}>Edit</button>
    </div>
  </div>
</div>
    )
}
export default StudentCart;


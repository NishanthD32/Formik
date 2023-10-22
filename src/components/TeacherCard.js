import { useNavigate } from "react-router-dom"
import { AppState } from "../Context/AppProvider"
import { Api2 } from "../Api/Api"

export default function TeacherCard({teacher}){
  const {secondData, setSecondData} = AppState()

  
  const removeTeacher= async (id)=>{
    const responce = await fetch(`${Api2}/${id}`,{
      method:"DELETE"
    })
    const data = await responce.json();
    console.log(data)
    const newTeacherData = secondData.filter((teacher, idx)=>teacher.id !== id)
    setSecondData(newTeacherData)
  }
  const navigate = useNavigate()
 
    return(
      <div>
            <div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">{teacher.name}</h2>
    <p>{teacher.subject}</p>
    <p>{teacher.email}</p>
    <p>{teacher.phone}</p>
    <p>{teacher.education}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-denger"onClick={()=>removeTeacher(teacher.id)}>Delete</button>
      <button className="btn btn-primary"onClick={()=>navigate(`/editteacher/${teacher.id}`)}>Edit</button>
    </div>
  </div>
</div>
      </div>
  
    )
}
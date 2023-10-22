import { useState } from "react";
import Base from "../BasePage/Base";
import { AppState } from "../Context/AppProvider";
import TeacherCard from "./TeacherCard";

export default function TeacherList(){
    const {secondData} = AppState()
    const[currentPage, setPage] = useState(1)
    return(
        <Base>
       {secondData.slice(currentPage*2-2, currentPage*2).map((teacher,index)=>(
        <TeacherCard
        teacher={teacher}
        key={teacher.id}/>
       ))}

<div className="join">
        {
            [...Array(Math.ceil((secondData.length/2)))].map(( _, index)=>(
                <button 
                onClick={()=>setPage(index+1)}
                className={`join-item btn btn-md `} 
                >{index+1}</button>
            ))
        }

    </div>
        </Base>
    )
}
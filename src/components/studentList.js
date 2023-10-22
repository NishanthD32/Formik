import { useState } from "react";
import Base from "../BasePage/Base";
import { AppState } from "../Context/AppProvider";
import CrumBar from "./CrumBar";
import StudentCart from "./StudentCart";

function StudentList({CrumState, setCrumState}){
    const {data} = AppState();
    const[currentPage, setPage] = useState(1)
    return(
<Base>
<CrumBar
CrumState={CrumState}
setCrumState={setCrumState}/>

{data.slice(currentPage*2-2, currentPage*2).map((stud, idx)=>(
        <StudentCart
        student={stud}
        key={idx}
        CrumState={CrumState}
        setCrumState={setCrumState}/>
    ))} 
    <div className="join">
        {
            [...Array(Math.ceil((data.length/2)))].map(( _, index)=>(
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
export default StudentList;
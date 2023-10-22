import { useNavigate } from "react-router-dom";

function Sidebar(){
    const navigate = useNavigate()
    return(
   <div className="side-bar-style p-7 ">
    <div>
       <ul className="actions">
       <li  className="rounded-full  p-2 hover:bg-sky-700"><button onClick={()=>navigate('/')}>Dashboard</button></li>
        <li  className="rounded-full  p-2 hover:bg-sky-700"><button onClick={()=>navigate('/profile/')}>Profile</button></li>
        <li  className="rounded-full  p-2 hover:bg-sky-700"><button onClick={()=>navigate('/student/all')}>Student List</button></li>
        <li  className="rounded-full  p-2 hover:bg-sky-700"><button onClick={()=>navigate('/teacherlist/')}>Teacher List</button></li>
        <li  className="rounded-full  p-2 hover:bg-sky-700"><button onClick={()=>navigate('/interviewnotes/')}>Interview Notes</button></li>
       </ul>
    </div>

    <div className="logout-btn rounded-full hover:bg-sky-700 p-2">
            <button>Logout</button>
        </div>
   </div>
    )
}
export default Sidebar;
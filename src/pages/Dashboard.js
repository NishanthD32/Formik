import { useNavigate } from "react-router-dom";
import Base from "../BasePage/Base";

function Dashboard(){
    const navigate = useNavigate()
    return(
        <Base>
            <h1 className="p-4">Add New StudentList</h1>
            <button className="bg-base-200 m-5 p-2 rounded" onClick={()=>navigate('/addnewstudent/')}>AddNewStudent</button>
            <button className="bg-base-200 m-5 p-2 rounded"onClick={()=>navigate('/addnewteacher/')}>AddNewTeacher</button>
        </Base>
    )
}
export default Dashboard;
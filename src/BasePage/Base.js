import TopBar from "../components/Topbar";
import Sidebar from "../components/sidebar";

function Base({children}){
    return(
        <div className="flex flex-col w-full border-opacity-50 h-full" data-theme="night">
        <div className="grid h-20 card  rounded-box place-items-center m-5"><TopBar/></div>
        <div className="flex flex-nowrap  rounded-box place-items-center h-screen">
       <div className="grid flex-grow h-full  w-1/5 card bg-neutral text-neutral-content  rounded-box place-items-center "><Sidebar/></div> 
       <div className="flex-grow h-full w-4/5 card m-1 bg-neutral text-neutral-content rounded-box place-items-center space-y-4">{children}</div>
      </div>
      </div>
  )
}
export default Base;
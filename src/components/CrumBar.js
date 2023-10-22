import { Link } from "react-router-dom";

export default function CrumBar({ CrumState, setCrumState}) {

  function removeRemaining(id){
   let removalValue = +id +1;
   let newCrumState = CrumState.slice(0, removalValue)
   setCrumState(newCrumState)
  }
  return (
    <div className="text-sm breadcrumbs">
      <ul>
        {CrumState && (
           CrumState?.map((data, idx)=>(
            <li key={idx}>
              <Link to={data.path}
              onClick={()=>removeRemaining(idx)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                {data.name}
              </Link>
            </li>
           ))
        )}
      </ul>
    </div>
  )
}
import { useEffect, useState } from "react";
import { createContext, useContext } from "react"
import { Api, Api2 } from "../Api/Api";

const AppCtx = createContext();


function AppProvider({children}){

  const [data, setData]= useState([])
  const [secondData, setSecondData] = useState([]);


     useEffect(()=>{
      const getAllStudents = async()=>{
        const responce = await fetch(Api, {
          method:"GET"
        });
        const data = await responce.json();
        setData(data)
      }
      getAllStudents();
     }, [])

     useEffect(()=>{
      const getAllTeacher = async()=>{
        const responce = await fetch(Api2, {
          method:"GET"
        });
        const data1 = await responce.json();
        setSecondData(data1)
      }
      getAllTeacher();
     }, [])




    


    return(
       <AppCtx.Provider 
       value={{
          data,
         setData,
         secondData, 
         setSecondData
       }}>
       {children}
       </AppCtx.Provider>
    )
}

export const AppState = ()=>{
    return useContext(AppCtx)
}

export default AppProvider;
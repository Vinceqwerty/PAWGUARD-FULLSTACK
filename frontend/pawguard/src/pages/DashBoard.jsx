import { useEffect, useState } from "react";
import { getDogs } from "../services/api";
import Navbar from "../components/Navbar";
import DashboardCard from "../components/DashboardCard";

export default function Dashboard(){
 const [dogs,setDogs] = useState([]);
 useEffect(()=>{
   getDogs().then(data=>setDogs(data))
 },[])
 return(

   <div>
     <Navbar />
     <h1>PawGuard Dashboard</h1>
     <div style={{display:"flex"}}>
       <DashboardCard
       title="Total Dogs"
       value={dogs.length}
       />
     </div>
   </div>
 )
}
import Navbar from "../components/Navbar";
import "../styles/healthrecords.css";

export default function HealthRecords(){

 return(

   <div className="healthrecords-page">

     <Navbar />

     <h2>Health Records</h2>

     <div className="healthrecords-card">

       <p>Health monitoring data will appear here.</p>

     </div>

   </div>

 )

}

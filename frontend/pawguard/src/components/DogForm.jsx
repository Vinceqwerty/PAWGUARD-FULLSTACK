import { Link, useNavigate } from "react-router-dom";

export default function Navbar(){

 const navigate = useNavigate();

 const logout = () => {

   localStorage.removeItem("user");
   navigate("/");

 };

 return(

   <div style={styles.navbar}>

     <h2>PawGuard</h2>

     <div>

       <Link to="/dashboard">Dashboard</Link>{" "}
       <Link to="/dogs">Dogs</Link>{" "}
       <Link to="/health">Health Records</Link>{" "}
       <button onClick={logout}>Logout</button>

     </div>

   </div>

 )

}

const styles = {
 navbar:{
   display:"flex",
   justifyContent:"space-between",
   padding:"10px",
   background:"#eee"
 }
}
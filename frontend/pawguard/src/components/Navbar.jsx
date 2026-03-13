import { Link, useNavigate, useLocation } from "react-router-dom";
import "../styles/navbar.css";

export default function Navbar(){

 const navigate = useNavigate();
 const location = useLocation();

 const logout = () => {

  localStorage.removeItem("user");
  navigate("/");
 };

 return(

   <div className="navbar">
     <h2>PawGuard</h2>
     <div className="navbar-nav">

       <Link to="/dashboard" className={location.pathname === '/dashboard' ? 'active' : ''}>Dashboard</Link>
       <Link to="/dogs" className={location.pathname === '/dogs' ? 'active' : ''}>Add Dogs</Link>
       <Link to="/health" className={location.pathname === '/health' ? 'active' : ''}>Health Records</Link>
       <button onClick={logout}>Logout</button>

     </div>
   </div>
 )
}
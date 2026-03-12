import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";

export default function LoginPage() {
  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");
  const navigate = useNavigate();

  const login = () => {
    if(username && password){
      localStorage.setItem("user","admin");
      navigate("/dashboard");
    } else {
      alert("Enter username and password");
    }
  };

  return(
    <div className="login-page">
      <header className="login-header">
        <h1>PawGuard</h1>
        <p>Dog Health Monitoring System</p>
      </header>

      <main className="login-main">
        <div className="login-section">
          <h2>Sign In to your Account!</h2>
          <div className="form-group">
            <input placeholder="Username" onChange={(e)=>setUsername(e.target.value)}/>
          </div>

          <div className="form-group">
            <input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
          </div>
          <div className="button-container">
            <button className="login-button" onClick={login}>Login</button>
          </div>
        </div>
       </main>
      </div>
  );
}
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");
  const navigate = useNavigate();
  const login = () => {
    if(username && password){
      localStorage.setItem("user","admin");
      navigate("/dashboard");
    }
    else{
      alert("Enter username and password");
    }
  };

  return(
    <div>
      <h2>PawGuard Login</h2>
      <input
      placeholder="Username"
      onChange={(e)=>setUsername(e.target.value)}
      />
      <input
      type="password"
      placeholder="Password"
      onChange={(e)=>setPassword(e.target.value)}
      />
      <button onClick={login}>Login</button>

    </div>
  );
}

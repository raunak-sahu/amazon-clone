import {useState} from "react";
import axios from "axios";
function Signup(){
    const [username,setUsername]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    async function handleSignup(e){
        e.preventDefault();
        try{
            const response=await axios.post("https://amazon-backend-dnry.onrender.com/signup",
        {
          username,
          email,
          password
        });
        alert(response.data.message);
        }
        catch(error){
            console.log(error);
            alert("Signup Failed");
        }
    }
    return(
        <div className="signup-container">
            <h2>Signup</h2>
            <form onSubmit={handleSignup}>
                <input 
                 type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) =>
            setUsername(e.target.value)
          }
              
          
        />

        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) =>setEmail(e.target.value)
          }
        />
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />


        <button type="submit">
          Signup
        </button>

      </form>

        </div>
    )
}
export default Signup;
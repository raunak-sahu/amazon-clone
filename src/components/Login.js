import { useState } from "react";
import axios from "axios";

function Login() {

  const [email, setEmail] = useState("");

  const [password, setPassword] =
    useState("");

  async function handleLogin(e) {

    e.preventDefault();

    try {

      const response = await axios.post(
        "http://127.0.0.1:8000/login",
        {
          username: "",
          email,
          password
        }
      );

      localStorage.setItem(
        "token",
        response.data.token
      );

      alert("Login Successful");

      console.log(response.data);

    }

    catch (error) {

      console.log(error);

      alert("Login Failed");

    }

  }

  return (

    <div className="login-container">

      <h2>Login</h2>

      <form onSubmit={handleLogin}>

        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
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
          Login
        </button>

      </form>

    </div>

  );

}

export default Login;
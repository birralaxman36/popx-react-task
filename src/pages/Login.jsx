import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="formBox">
        <h1>
          Signin to your
          <br />
          PopX account
        </h1>

        <p>
          Welcome back! 
          <br />
          Enter your email and password to continue.
          
        </p>

        <label>Email Address</label>
        <input
          type="email"
          placeholder="Enter email address"
        />

        <label>Password</label>
        <input
          type="password"
          placeholder="Enter password"
        />

        <button
          className="loginButton"
          onClick={() => navigate("/account")}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
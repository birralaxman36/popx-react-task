import { useNavigate } from "react-router-dom";

function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="welcome-content">
        <h1>Welcome to PopX</h1>

        <p>
          Join PopX and connect with opportunities. 
          <br />
          Create your account or log in to continue.
        </p>

        <button
          className="create-btn"
          onClick={() => navigate("/register")}
        >
          Create Account
        </button>

        <button
          className="login-btn"
          onClick={() => navigate("/login")}
        >
          Already Registered? Login
        </button>
      </div>
    </div>
  );
}

export default Welcome;
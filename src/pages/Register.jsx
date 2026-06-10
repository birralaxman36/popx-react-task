import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="formBox">
        <h1>
          Create your
          <br />
          PopX account
        </h1>

        <label>Full Name*</label>
        <input type="text" placeholder="Enter full name" />

        <label>Phone number*</label>
        <input type="text" placeholder="Enter phone number" />

        <label>Email address*</label>
        <input type="email" placeholder="Enter email address" />

        <label>Password*</label>
        <input type="password" placeholder="Enter password" />

        <label>Company name</label>
        <input type="text" placeholder="Enter company name" />

        <div className="agencyBox">
          <p>Are you an Agency?*</p>

          <label>
            <input type="radio" name="agency" defaultChecked />
            Yes
          </label>

          <label>
            <input type="radio" name="agency" />
            No
          </label>
        </div>

        <button
          className="create-btn registerBtn"
          onClick={() => navigate("/account")}
        >
          Create Account
        </button>
      </div>
    </div>
  );
}

export default Register;
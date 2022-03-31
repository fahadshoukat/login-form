import "./App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaRegUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
const App = () => {
  return (
    <div className="container border border-info">
      <div className="row d-flex justify-content-center align-items-center vh-100">
        <div className="col col-md-6 col-lg-5 border border-danger bg-white p-4">
          <h1 class="text-center">Login</h1>
          <label for="basic-url" class="form-label">
            Username
          </label>
          <div class="input-group flex-nowrap">
            <FaRegUser class="h3 self-align-center" />
            <input
              type="text"
              class="form-control inputGroup-sizing-lg inputBorder"
              placeholder="Username"
            />
          </div>
          <label for="basic-url" class="form-label">
            Password
          </label>
          <div class="input-group flex-nowrap">
            <FaLock class="h3 align-middle" />
            <input
              type="password"
              class="form-control inputGroup-sizing-lg inputBorder"
              placeholder="Password"
            />
          </div>
          <p class="text-end">
            <a href="#" class="text-decoration-none text-dark">
              Forgot password?
            </a>
          </p>
          <div class="d-grid gap-2">
            <button class="btn fw-bold text-white" type="button">
              LOGIN
            </button>
          </div>
          <p class="text-center">Or Sign Up Using</p>
          <div>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

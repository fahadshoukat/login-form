import "./App.css";
import {
  FaTwitterSquare,
  FaGooglePlusSquare,
  FaFacebookSquare,
  FaLock,
  FaRegUser,
} from "react-icons/fa";
const App = () => {
  return (
    <div className="container">
      <div className="row d-flex justify-content-center align-items-center vh-100">
        <div className="col col-md-6 col-lg-5 col-xl-4 bg-white p-5">
          <h1 class="text-center">Login</h1>
          <label for="basic-url" class="form-label mt-4">
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
          <label for="basic-url" class="form-label mt-4">
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
          <p class="text-end mt-3">
            <a href="#" class="text-decoration-none text-dark">
              Forgot password?
            </a>
          </p>
          <div class="d-grid gap-2">
            <button class="btn fw-bold text-white mt-3" type="button">
              LOGIN
            </button>
          </div>
          <div class="text-center">
            <p class="mt-5">Or Sign Up Using</p>
            <div>
              <FaFacebookSquare className="fbIcon" />
              <FaTwitterSquare className="twIcon" />
              <FaGooglePlusSquare className="gpIcon" />
            </div>
          </div>
          <div class="text-center">
            <p class="mt-5">Or Sign Up Using</p>
            <a
              href="#"
              class="text-decoration-none text-dark"
            >
              SIGN UP
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

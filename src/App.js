import "./App.css";
import { FaRegUser } from "react-icons/fa";
import { FaLock } from 'react-icons/fa'
const App = () => {
  return (
    <div className="container">
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col form">
          <div class="card w-100">
            <div class="card-body p-5">
              <h5 class="card-title text-center fw-bold">Login</h5>
              <div class="mb-3">
                <label for="formGroupExampleInput" class="form-label">
                  Username
                </label>
                <div className="iconInput">
                  <FaRegUser />
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Type Your Username"
                  />
                </div>
              </div>
              <div class="mb-3">
                <label for="formGroupExampleInput2" class="form-label">
                  Password
                </label>
                <div className="iconInput">
                <FaLock />
                  <input
                    type="password"
                    class="form-control"
                    placeholder="Type Your Password"
                  />
                </div>
              </div>
              <a class="text-end" href="#">forget password?</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

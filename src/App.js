import "./App.css";
import { FaRegUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
const App = () => {
  return (
    <div className="container border border-info">
      <div className="row d-flex justify-content-center align-items-center vh-100">
        <div className="col col-md-6 border border-danger bg-white p-4">
          <h1 class="text-center">Login</h1>
          <div class="input-group flex-nowrap">
            <FaRegUser class="h3 self-align-center" />
            <input
              type="text"
              class="form-control p-2 inputBorder"
              placeholder="Username"
            />
          </div>
          <div class="input-group flex-nowrap">
            <FaLock class="h3 align-middle" />
            <input
              type="password"
              class="form-control p-2 inputBorder"
              placeholder="Password"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

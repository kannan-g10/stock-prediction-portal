import axios from "axios";
import { useContext, useState } from "react";
import { FaSpinner } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const userData = { username, password };
    setLoading(true);

    try {
      const res = await axios.post(
        "http://127.0.0.1:8000/api/v1/token/",
        userData
      );
      localStorage.setItem("accessToken", res.data.access);
      localStorage.setItem("refreshToken", res.data.refresh);
      console.log("Login successful");
      setIsLoggedIn(true);
      navigate("/");
    } catch (err) {
      console.error("Invalid credentials", err.response.data);
      setError("Invalid Credentials");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="text-white justify-center items-center flex flex-1">
        <div className="rounded px-10 py-5 w-full m-4 md:m-0 md:w-1/2 lg:w-1/3 bg-[#2b3035]">
          <div className="flex flex-col gap-y-5">
            <h3 className="text-center font-semibold text-2xl">
              Login to our Portal
            </h3>
            <form
              className="flex flex-col gap-y-3 text-black"
              onSubmit={handleLogin}
              onFocus={() => setError("")}
            >
              <div className="flex flex-col">
                <input
                  type="text"
                  placeholder="Enter username"
                  className="p-2 rounded outline-none text-sm"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="flex flex-col">
                <input
                  type="password"
                  placeholder="Password"
                  className="p-2 rounded outline-none text-sm"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="flex flex-col justify-center items-center">
                {error && (
                  <div className="text-red-600 text-left w-full">{error}</div>
                )}
                {loading ? (
                  <button
                    type="submit"
                    className="bg-sky-400 flex justify-center gap-1 rounded-md p-2 text-white hover:bg-sky-600 font-semibold"
                  >
                    <FaSpinner
                      className="animate-spin"
                      size={20}
                      style={{ marginTop: "2px" }}
                    />
                    Logging in..
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="bg-sky-400 rounded-md p-2 text-white hover:bg-sky-600 font-semibold"
                  >
                    Login
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

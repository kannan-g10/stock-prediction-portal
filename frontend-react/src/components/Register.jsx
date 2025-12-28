import React, { useState } from "react";
import axios from "axios";
import { FaSpinner } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [isSuccess, setIsSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const userData = { username, email, password };

    try {
      const res = await axios.post(
        "http://127.0.0.1:8000/api/v1/register/",
        userData
      );
      setIsSuccess(true);

      setTimeout(() => {
        setIsSuccess(false);
      }, 2000);
      navigate("/login");
    } catch (err) {
      setErrors(err.response.data);
      console.error("Registration failed!", err.response.data);
    } finally {
      setLoading(false);
    }

    setUsername("");
    setEmail("");
    setPassword("");
  };
  return (
    <>
      <div className="text-white justify-center items-center flex flex-1">
        <div className="rounded px-10 py-5 w-full m-4 md:m-0 md:w-1/2 lg:w-1/3 lg:h-[20rem] bg-[#2b3035]">
          <div className="flex flex-col gap-y-5">
            <h3 className="text-center font-semibold text-2xl">
              Create an Account
            </h3>
            <form
              className="flex flex-col gap-y-5 text-black"
              onSubmit={handleSubmit}
              onFocus={() => setErrors({})}
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
                <small>
                  {errors.username && (
                    <div className="text-red-500">{errors.username}</div>
                  )}
                </small>
              </div>
              <div className="flex flex-col">
                <input
                  type="email"
                  placeholder="Enter email"
                  className="p-2 rounded outline-none text-sm"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <small>
                  {errors.email && (
                    <div className="text-red-500">{errors.email}</div>
                  )}
                </small>
              </div>
              <div className="flex flex-col">
                <input
                  type="password"
                  placeholder="Set password"
                  className="p-2 rounded outline-none text-sm"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <small>
                  {errors.password && (
                    <div className="text-red-500">{errors.password}</div>
                  )}
                </small>
              </div>
              <div className="flex flex-col justify-center items-center gap-2">
                {isSuccess && (
                  <div className="text-xs bg-green-100 text-green-900 p-2 rounded-md w-full">
                    Registration Successful!
                  </div>
                )}

                {loading ? (
                  <button
                    type="submit"
                    className="bg-sky-400 flex justify-center gap-2 rounded-md p-2 text-white hover:bg-sky-600 font-semibold"
                  >
                    <FaSpinner className="animate-spin" size={25} />
                    Please Wait..
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="bg-sky-400 rounded-md p-2 text-white hover:bg-sky-600 font-semibold"
                  >
                    Register
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

export default Register;

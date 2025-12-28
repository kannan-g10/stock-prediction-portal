import { Link, useNavigate } from "react-router-dom";
import Button from "./Button";
import { AuthContext } from "../AuthProvider";
import { useContext } from "react";

const Header = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <nav className="md:px-32 py-5 text-white font-semibold text-md flex justify-between">
      <Link
        to="/"
        className="text-xl cursor-pointer hover:text-sky-500 duration-300"
      >
        Stock Prediction Portal
      </Link>
      <div className="flex gap-x-2">
        {isLoggedIn ? (
          <button
            className="border-red-600 hover:bg-red-500 bg-red-600 p-2 rounded-md"
            onClick={handleLogout}
          >
            Logout
          </button>
        ) : (
          <>
            <Button
              text="Login"
              url="/login"
              class="border-sky-600 hover:bg-sky-500 text-sky-600"
            />
            <Button
              text="Register"
              url="/register"
              class="bg-sky-500 border-0 text-slate-700"
            />
          </>
        )}
      </div>
    </nav>
  );
};

export default Header;

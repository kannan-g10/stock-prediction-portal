import { Link } from "react-router-dom";
import Button from "./Button";

const Header = () => {
  return (
    <nav className="md:px-32 py-5 text-white font-semibold text-md flex justify-between">
      <Link
        to="/"
        className="text-xl cursor-pointer hover:text-sky-500 duration-300"
      >
        Stock Prediction Portal
      </Link>
      <div className="flex gap-x-2">
        <Button
          text="Login"
          url="/login"
          class="border-sky-600 hover:bg-sky-500"
        />
        <Button text="Register" url="/register" class="bg-sky-500 border-0" />
      </div>
    </nav>
  );
};

export default Header;

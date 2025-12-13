import Button from "./Button";

const Header = () => {
  return (
    <nav className="md:px-32 py-5 text-white font-semibold text-md flex justify-between">
      <h3 className="text-xl cursor-pointer hover:text-sky-500 duration-300">
        Stock Prediction Portal
      </h3>
      <div className="flex gap-x-2">
        <Button text="Login" class="border-sky-600 hover:bg-sky-500" />
        <Button text="Register" class="bg-sky-500 border-0" />
      </div>
    </nav>
  );
};

export default Header;

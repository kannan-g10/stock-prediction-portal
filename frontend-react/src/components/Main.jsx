import Button from "./Button";

const Main = () => {
  return (
    <>
      <div className="flex justify-center items-center flex-1">
        <div className="p-5 text-center flex flex-col justify-center items-center text-white rounded-md bg-[#2b3035] w-3/4">
          <h1 className="text-3xl font-semibold">Stock Prediction Portal</h1>
          <p className="p-5">
            The Stock Prediction module is the core component of our
            application, serving as the primary engine for market analysis and
            decision support. It processes historical and real-time stock data
            to generate predictive insights that help users anticipate market
            trends and price movements.
          </p>
          <Button text="Login" class="bg-sky-500 border-0 font-semibold" />
        </div>
      </div>
    </>
  );
};

export default Main;

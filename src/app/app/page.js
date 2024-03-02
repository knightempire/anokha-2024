import FancyLoading from "../components/FancyLoading";

const App = () => {
  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen bg-[#192032]">
      <FancyLoading />
      <div className="flex text-3xl text-white mt-4 text-center justify-center items-center">
        Please wait unitl we verify your transaction
      </div>
    </div>
  );
};

export default App;

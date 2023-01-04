import { useEffect, useState } from "react";
import StageList from "./components/StageList";
import { Stage } from "./utils/interfaces";
import { getStages } from "./graphql/queries";

function App() {
  const [stages, setStages] = useState<Stage[]>([]);
  useEffect(() => {
    getStages().then((stages) => {
      setStages(stages as Stage[]);
    });
  }, []);

  return (
    <main className=" flex flex-row h-screen mx-auto p-16 max-w-3xl">
      <div className="bg-gray-200 p-8 relative">
        <div className="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:max-w-4xl lg:px-12 bg-white rounded-lg shadow-md h-full overflow-y-auto ">
          <h1 className="text-4xl font-bold text-slate-900 pt-8">
            My Startup Progress
          </h1>
          <button
            // onClick="buttonHandler()"
            title="Add"
            className="absolute  z-90 bottom-10 right-10 bg-blue-600 w-10 h-10 rounded-full drop-shadow-lg flex justify-center items-center text-white text-2xl hover:drop-shadow-2xl hover:animate-bounce duration-300"
          >
            &#10133;
          </button>
          <StageList stages={stages} />
        </div>
      </div>
    </main>
  );
}

export default App;

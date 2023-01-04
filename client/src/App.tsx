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
      <div className="bg-gray-200 p-8">
        <div className="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:max-w-4xl lg:px-12 bg-white rounded-lg shadow-md h-full overflow-y-auto ">
          <h1 className="text-4xl font-bold text-slate-900 pt-8">
            My Startup Progress
          </h1>
          <button>Add new</button>
          <StageList stages={stages} />
        </div>
      </div>
    </main>
  );
}

export default App;

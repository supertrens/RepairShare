import { useMutation, useQuery } from "@apollo/client";
import AddNewStage from "./components/AddNewStage";

import StageList from "./components/StageList";
import {
  CREATE_STAGE_MUTATION,
  STAGE_WITH_TASK_QUERY,
} from "./graphql/queries";

function App() {
  const { data, error } = useQuery(STAGE_WITH_TASK_QUERY, {
    fetchPolicy: "network-only",
  });

  return (
    <main className="flex flex-row h-screen mx-auto p-16 max-w-3xl">
      <div className="relative mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:max-w-4xl lg:px-16 bg-white rounded-lg shadow-md h-full overflow-y-auto ">
        <h1 className="text-3xl font-bold text-slate-900 pt-8">
          {error ? "Sorry something went wrong" : "My Startup Progress"}
        </h1>
        <AddNewStage />
        {!error && data && <StageList stages={data.stages} />}
      </div>
    </main>
  );
}

export default App;

import { useMutation, useQuery } from "@apollo/client";

import {
  ADD_STAGE,
  GET_ALL_STAGES,
  STAGE_DETAIL_FRAGMENT,
} from "./graphql/queries";
import StageList from "./components/StageList";
import InputField from "./components/utils/InputField";

function App() {
  const { data, error } = useQuery(GET_ALL_STAGES);

  const [addStage, mutationData] = useMutation(ADD_STAGE);

  const onHandleInputText = (inputText: string) => {
    addStage({
      variables: { name: inputText },
      update: (cache, { data: { stage } }) => {
        cache.modify({
          fields: {
            stages(existingStages = []) {
              const newStageRef = cache.writeFragment({
                data: stage,
                fragment: STAGE_DETAIL_FRAGMENT,
              });
              return [...existingStages, newStageRef];
            },
          },
        });
      },
    });
  };

  return (
    <main className="flex flex-row h-screen mx-auto p-16 max-w-3xl">
      <div className="relative mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:max-w-4xl lg:px-16 bg-white rounded-lg shadow-md h-full overflow-y-auto ">
        <h1 className="text-3xl font-bold text-slate-900 pt-8">
          {error ? "Sorry something went wrong" : "My Startup Progress"}
        </h1>

        {/* Add new stage */}
        <div>
          <InputField
            onHandleInputText={onHandleInputText}
            placeHolder="New stage, press 'Enter' to save "
          />
        </div>
        {!error && data && <StageList stages={data.stages} />}
      </div>
    </main>
  );
}

export default App;

import { useMutation } from "@apollo/client";
import { PlusCircleIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import { CREATE_STAGE_MUTATION } from "../graphql/queries";

const AddNewStage = () => {
  const [stageName, setStageName] = useState("");

  const [createStage, data] = useMutation(CREATE_STAGE_MUTATION);
  console.log(data);
  const handleOnChange = (e: any) => {
    setStageName(e.target.value);
  };

  const handleKeyDown = (e: any) => {
    if (e.key === "Enter") {
      setStageName("");
      createStage({
        variables: { name: stageName },
        // update: (cache, { data: { stages } }) => {
        //   cache.writeQuery({
        //     query: STAGE_WITH_TASK_QUERY,
        //     data: { stages },
        //   });
        // },
      });
    }
  };

  return (
    <div>
      <div className="mt-4 flex rounded-md shadow-sm">
        <div className="relative flex flex-grow items-stretch focus-within:z-10">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <PlusCircleIcon
              className="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </div>
          <input
            type="text"
            value={stageName}
            onKeyDown={handleKeyDown}
            onChange={handleOnChange}
            className="block w-full rounded-none rounded-l-md border-gray-300 pl-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="New stage, press 'Enter' to save "
          />
        </div>
      </div>
    </div>
  );
};

export default AddNewStage;

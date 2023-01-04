import { useMutation } from "@apollo/client";

import TaskList from "./TaskList";
import SectionHeader from "./utils/SectionHeader";
import CheckIcon from "./utils/CheckIcon";

import { StatusEnum } from "../utils/enums";
import { Stage } from "../utils/interfaces";
import { ADD_TASK } from "../graphql/queries";

const StageItem = ({
  name,
  tasks,
  status,
  id,
  position = 1,
  isActive,
}: Stage) => {
  const [createTask, data] = useMutation(ADD_TASK);

  const onAddNewTaskHandler = (title: string) => {
    createTask({
      variables: { title, stageId: id },
      // update: (cache, { data: { stages } }) => {
      //   cache.writeQuery({
      //     query: STAGE_WITH_TASK_QUERY,
      //     data: { stages },
      //   });
      // },
    });
  };

  const isCompleted = status === StatusEnum.COMPLETED;

  return (
    <>
      <div className=" flex flex-row justify-between sticky top-0 z-10 bg-white pt-8">
        <SectionHeader
          position={position.toString()}
          title={name}
          onAddNewTask={onAddNewTaskHandler}
        >
          <h3 className="font-display text-xl font-bold text-slate-900">
            {name}
          </h3>
        </SectionHeader>

        <div>{isCompleted ? <CheckIcon strokeWidth={3} /> : null}</div>
      </div>
      <TaskList tasks={tasks} disabled={!isActive} />
    </>
  );
};

export default StageItem;

import TaskList from "./TaskList";
import SectionHeader from "./utils/SectionHeader";
import CheckIcon from "./utils/CheckIcon";

import { StatusEnum } from "../utils/enums";
import { Stage } from "../utils/interfaces";

const StageItem = ({ name, tasks, status }: Stage) => {
  const position = 1;
  const isCompleted = status === StatusEnum.COMPLETED;
  return (
    <>
      <div className=" flex flex-row justify-between sticky top-0 z-10 bg-white pt-8">
        <SectionHeader position={position.toString()}>
          <h3 className="font-display text-xl font-bold text-slate-900">
            {name}
          </h3>
        </SectionHeader>
        <div>{isCompleted ? <CheckIcon strokeWidth={3} /> : null}</div>
      </div>
      <TaskList tasks={tasks} disabled={!isCompleted} />
    </>
  );
};

export default StageItem;

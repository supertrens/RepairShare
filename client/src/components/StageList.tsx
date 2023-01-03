import { Stage } from "../utils/interfaces";
import StageItem from "./StageItem";

const StageList = ({ stages }: { stages: Stage[] }) => {
  return (
    <ul role="list" className="mt-8">
      {stages.map((stage, index) => {
        const { name, tasks, status, id } = stage;
        return (
          <li key={name}>
            <StageItem
              id={id}
              name={name}
              tasks={tasks}
              position={index + 1}
              status={status}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default StageList;

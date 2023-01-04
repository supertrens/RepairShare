import { Stage } from "../utils/interfaces";
import StageItem from "./StageItem";

const StageList = ({ stages }: { stages: Stage[] }) => {
  return (
    <ul role="list">
      {stages.map((stage, index) => {
        const { name, tasks, status, id, isActive } = stage;
        return (
          <li key={id}>
            <StageItem
              id={id}
              name={name}
              tasks={tasks}
              position={index + 1}
              status={status}
              isActive={isActive}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default StageList;

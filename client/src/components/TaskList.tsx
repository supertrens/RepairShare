import TaskItem from "./TaskItem";

import { Task } from "../utils/interfaces";

const TaskList = ({
  tasks,
  disabled,
}: {
  tasks: Task[];
  disabled: boolean;
}) => {
  return (
    <div className="mt-5 relative flex flex-col">
      <ul
        role="list"
        className="-my-2 divide-y text-base divide-slate-200 text-slate-900"
      >
        {tasks.map((task, idx) => (
          <li key={idx}>
            <TaskItem
              id={task.id}
              title={task.title}
              isCompleted={task.isCompleted}
              disabled={disabled}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;

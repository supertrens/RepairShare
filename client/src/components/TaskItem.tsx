import { useMutation } from "@apollo/client";
import { useState } from "react";
import { UPDATE_TASK_STATUS } from "../graphql/queries";
import CheckBox from "./utils/CheckBox";

const Task = ({
  title,
  isCompleted,
  disabled,
  id,
}: {
  id: string;
  title: string;
  isCompleted: boolean;
  disabled: boolean;
}) => {
  const [checked, setChecked] = useState(isCompleted);

  const [updateTaskStatus] = useMutation(UPDATE_TASK_STATUS);
  const handleChange = (_e: any) => {
    updateTaskStatus({
      variables: { isCompleted: !checked, taskId: id },
      update: (cache) => {
        // TODO: use writeQuery instead of manually modifying the cache
        cache.modify({
          fields: {
            stage(_) {},
            stages(_) {},
          },
        });
      },
    });
    setChecked(!checked);
  };

  return (
    <div className="flex py-2 ">
      <CheckBox
        label={title}
        isChecked={checked}
        onChange={handleChange}
        disabled={disabled}
      />
    </div>
  );
};
export default Task;

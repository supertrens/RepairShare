import React from "react";
import CheckBox from "./utils/CheckBox";

const Task = ({
  title,
  isCompleted,
  disabled,
}: {
  title: string;
  isCompleted: boolean;
  disabled: boolean;
}) => {
  const [checked, setChecked] = React.useState(isCompleted);
  const handleChange = (_e: any) => setChecked(!checked);

  // Todo: Make API request to update server
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

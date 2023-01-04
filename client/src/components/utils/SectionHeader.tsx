import { useState } from "react";
import clsx from "clsx";
import { PlusCircleIcon } from "@heroicons/react/20/solid";
import InputField from "./InputField";

const SectionHeader = ({
  position,
  title,
  onAddNewTask,
  children,
  className,
  ...props
}: {
  position: string;
  title: string;
  onAddNewTask: (title: string) => void;
  className?: string;
  children?: any;
}) => {
  const [showInput, setShowInput] = useState(false);

  const onHandleInputText = (text: string) => {
    setShowInput(false);
    onAddNewTask(text);
  };

  return (
    <div>
      <h2
        className={clsx(
          className,
          "inline-flex items-center rounded-full py-1 px-4 text-blue-600 ring-1 ring-inset ring-blue-600"
        )}
        {...props}
      >
        <span className="font-mono text-sm" aria-hidden="true">
          {position.padStart(2, "0")}
        </span>
        <span className="ml-3 h-5 w-px bg-blue-600/20" />
        <span className="ml-3 text-base font-medium tracking-tight">
          {children}
        </span>
        <span className="ml-3 h-5 w-px bg-blue-600/20" />
        <button
          className="ml-3 text-base font-medium tracking-tight"
          onClick={() => setShowInput(!showInput)}
        >
          <PlusCircleIcon
            className="h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </button>
      </h2>
      {showInput && (
        <div className="w-full">
          <InputField
            onHandleInputText={onHandleInputText}
            placeHolder={`New task for ${title} , press 'Enter' to save `}
          />
        </div>
      )}
    </div>
  );
};

export default SectionHeader;

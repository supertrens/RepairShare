import { PlusCircleIcon } from "@heroicons/react/20/solid";
import { useState } from "react";

const InputField = ({
  placeHolder,
  onHandleInputText,
}: {
  onHandleInputText: (inputText: string) => void;
  placeHolder: string;
}) => {
  const [text, setText] = useState("");
  const handleOnChange = (e: any) => {
    setText(e.target.value);
  };

  const handleKeyDown = (e: any) => {
    if (e.key === "Enter") {
      setText("");
      onHandleInputText(text);
    }
  };

  return (
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
          value={text}
          onKeyDown={handleKeyDown}
          onChange={handleOnChange}
          className="block w-full  border-gray-300 pl-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          placeholder={placeHolder}
        />
      </div>
    </div>
  );
};

export default InputField;

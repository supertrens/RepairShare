import clsx from "clsx";
import { ChangeEvent } from "react";

const CheckBox = ({
  label,
  onChange,
  isChecked = false,
  disabled,
}: {
  label: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  disabled: boolean;
  isChecked?: boolean;
}) => {
  return (
    <div className="flex justify-center">
      <label className="form-check-label inline-block text-gray-800 disabled:opacity-50">
        <input
          className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer disabled:cursor-not-allowed"
          type="checkbox"
          onChange={onChange}
          value={label}
          checked={isChecked}
          disabled={disabled}
        />

        <span className={clsx("text-md", disabled ? " opacity-50" : "")}>
          {label}
        </span>
      </label>
    </div>
  );
};

export default CheckBox;

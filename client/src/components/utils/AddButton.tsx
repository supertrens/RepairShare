import { PlusCircleIcon } from "@heroicons/react/20/solid";

const AddButton = ({ onPress }: { onPress: Function }) => {
  return (
    <button
      className="ml-3 text-base font- tracking-tight"
      onClick={() => onPress()}
    >
      <PlusCircleIcon className="h-8 w-8 text-gray-400" aria-hidden="true" />
    </button>
  );
};

export default AddButton;

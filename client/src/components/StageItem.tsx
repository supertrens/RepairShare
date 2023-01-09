import { useState, useEffect } from "react";
import { useMutation } from "@apollo/client";
import { CheckIcon } from "@heroicons/react/20/solid";

import { ADD_TASK } from "../graphql/queries";
import TaskList from "./TaskList";
import SectionHeader from "./utils/SectionHeader";
import { StatusEnum } from "../utils/enums";
import { Stage } from "../utils/interfaces";
import InputField from "./utils/InputField";
import AddButton from "./utils/AddButton";
import { randomQuote } from "../utils/api";
import Modal from "./utils/Modal";

const StageItem = ({
  name,
  tasks,
  status,
  id,
  position = 1,
  isActive,
}: Stage) => {
  const [createTask] = useMutation(ADD_TASK);
  const [showInput, setShowInput] = useState(false);
  const [quote, setQuote] = useState("");

  const isCompleted = status === StatusEnum.COMPLETED;

  useEffect(() => {
    if (status === StatusEnum.COMPLETED) {
      randomQuote().then((q) => {
        setQuote(q.text);
      });
    } else {
      setQuote("");
    }
  }, [status]);

  const onAddNewTaskHandler = (title: string) => {
    createTask({
      variables: { title, stageId: id },
      update: (cache, _) => {
        // TODO: use writeQuery instead of manually modifying the cache
        cache.modify({
          fields: {
            stage(_) {},
            stages(_) {},
          },
        });
      },
    });
  };

  return (
    <>
      {quote && <Modal title="Random Quote" text={quote} />}
      <div className="flex flex-row justify-between sticky top-0 z-10 bg-white pt-8">
        <SectionHeader position={position.toString()}>
          <h3 className="font-display text-xl font-bold text-slate-900">
            {name}
          </h3>
        </SectionHeader>

        <div>
          {isCompleted ? (
            <CheckIcon className="h-8 w-8" aria-hidden="true" />
          ) : (
            <AddButton onPress={() => setShowInput(!showInput)} />
          )}
        </div>
      </div>

      {showInput && (
        <InputField
          onHandleInputText={onAddNewTaskHandler}
          placeHolder={`${name} task - press 'Enter' to save `}
        />
      )}

      <TaskList tasks={tasks} disabled={!isActive} />
    </>
  );
};

export default StageItem;

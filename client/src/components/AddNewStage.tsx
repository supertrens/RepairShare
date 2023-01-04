import { useMutation } from "@apollo/client";
import { CREATE_STAGE_MUTATION } from "../graphql/queries";
import InputField from "./utils/InputField";

const AddNewStage = () => {
  const [createStage, data] = useMutation(CREATE_STAGE_MUTATION);

  const onHandleInputText = (inputText: string) => {
    createStage({
      variables: { name: inputText },
      // update: (cache, { data: { stages } }) => {
      //   cache.writeQuery({
      //     query: STAGE_WITH_TASK_QUERY,
      //     data: { stages },
      //   });
      // },
    });
  };

  return (
    <div>
      <InputField
        onHandleInputText={onHandleInputText}
        placeHolder="New stage, press 'Enter' to save "
      />
    </div>
  );
};

export default AddNewStage;

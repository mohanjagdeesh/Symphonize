import { useForm } from "react-hook-form";

const EditTask = (props) => {
  const { register, handleSubmit } = useForm();
  const { inputs, setInputs } = props;

  const taskToBeEdit = inputs.tasks.filter(
    (each) => each.id === inputs.idOftask
  );

  const submitEditedDetails = (data) => {
    const editableTask = taskToBeEdit[0];
    const result = {
      ...editableTask,
      taskName: data.taskName,
      requiredTools: data.requiredTools,
      requiredSkills: data.requiredSkills,
    };
    inputs.tasks[inputs.idOftask - 1] = result;
    setInputs({ ...inputs, tasks: inputs.tasks, editTask: false });
  };
  return (
    <div className="bg-[#0000003a] fixed top-0 left-0 h-screen w-full flex justify-center items-center">
      <form
        onSubmit={handleSubmit(submitEditedDetails)}
        className="flex  flex-col gap-5 bg-white rounded-md w-1/2 h-1/2"
      >
        <div className="flex gap-5">
          <label className="text-black" htmlFor="taskName">
            Task Name
          </label>
          <input
            defaultValue={taskToBeEdit[0].taskName}
            type="text"
            id="taskName"
            className="outline-none border-2 border-black"
            {...register("taskName")}
          />
        </div>
        <div className="flex gap-5">
          <label className="text-black" htmlFor="requiredTools">
            Required Tools
          </label>
          <input
            defaultValue={taskToBeEdit[0].requiredTools}
            type="text"
            id="requiredTools"
            className="outline-none border-2 border-black"
            {...register("requiredTools")}
          />
        </div>
        <div className="flex gap-5">
          <label className="text-black" htmlFor="requiredSkills">
            Required Skills
          </label>
          <input
            defaultValue={taskToBeEdit[0].requiredSkills}
            type="text"
            id="requiredSkills"
            className="outline-none border-2 border-black"
            {...register("requiredSkills")}
          />
        </div>
        <div className="flex gap-5">
          <button className="border-2 border-black" type="submit">
            Submit
          </button>
          <button
            type="button"
            onClick={() => setInputs({ ...inputs, editTask: false })}
            className="border-2 border-black"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditTask;

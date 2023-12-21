import { useState } from "react";
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import EditTask from "./EditTaskPopup";
const tasksList = [
  {
    id: 1,
    taskName: "Learn React",
    requiredTools: "VS Code",
    requiredSkills: "Javascript",
  },
  {
    id: 2,
    taskName: "Learn Node",
    requiredTools: "VS Code",
    requiredSkills: "Javascript",
  },
  {
    id: 3,
    taskName: "Learn Github",
    requiredTools: "Git Bash",
    requiredSkills: "Basics of Git",
  },
  {
    id: 4,
    taskName: "Learn Docker",
    requiredTools: "Docker Engine",
    requiredSkills: "Basics of Docker",
  },
  {
    id: 5,
    taskName: "Learn AWS",
    requiredTools: "Cloud",
    requiredSkills: "Basics of AWS",
  },
];

const Tasks = () => {
  const [inputs, setInputs] = useState({
    tasks: tasksList,
    editTask: false,
    idOftask: null,
  });
  return (
    <div className=" bg-[#4c79f3] h-screen w-full flex flex-col font-mono">
      <h1 className="text-[50px] font-bold text-center">Tasks Management</h1>
      {inputs.tasks.map((each) => {
        const deleteTask = () => {
          const filteredTasks = inputs.tasks.filter(
            (eachOne) => eachOne.id !== each.id
          );
          setInputs({ ...inputs, tasks: filteredTasks });
        };

        return (
          <div
            key={each.id}
            className="flex w-1/3 justify-between items-center"
          >
            <input type="checkbox" />
            <h1 className="text-white text-[20px]">{each.taskName}</h1>
            <h1 className="text-white text-[20px]">{each.requiredSkills}</h1>
            <h1 className="text-white text-[20px]">{each.requiredTools}</h1>
            <MdDelete
              className="text-[25px] cursor-pointer"
              onClick={deleteTask}
            />
            <CiEdit
              className="text-[25px] cursor-pointer"
              onClick={() =>
                setInputs({ ...inputs, editTask: true, idOftask: each.id })
              }
            />
            {inputs.editTask && (
              <EditTask inputs={inputs} setInputs={setInputs} />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Tasks;

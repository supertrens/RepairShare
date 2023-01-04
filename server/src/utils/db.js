import { v4 as uuidv4 } from "uuid";

const StatusEnum = {
  COMPLETED: "completed",
  INCOMPLETE: "incomplete",
};
const stageTable = new Map();
const taskTable = new Map();

const findAllTasks = () => taskTable.values();
const findTaskById = (taskId) => taskTable.get(taskId);

const findAllStages = () => stageTable.values();
const findStageById = (stageId) => stageTable.get(stageId);

const findTasksByStageId = (id) => {
  const tasks = [...findAllTasks()];
  return tasks.filter((task) => task.stageId === id);
};

const createStage = (name) => {
  const id = uuidv4();
  stageTable.set(id, {
    name,
    id,
    status: StatusEnum.INCOMPLETE,
    isActive: true,
  });

  return stageTable.get(id);
};

const createTask = (title, stageId) => {
  const id = uuidv4();
  taskTable.set(id, { title, id, stageId, isCompleted: false });

  return taskTable.get(id);
};

const DB = {
  stage: {
    findAll: findAllStages,
    findById: findStageById,
    findTasksByStageId,
    createOne: createStage,
  },
  task: {
    findAll: findAllTasks,
    findById: findTaskById,
    createOne: createTask,
  },
};

export default DB;

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
    status: StatusEnum.COMPLETED,
    isActive: true,
  });

  return stageTable.get(id);
};

const updateTaskStatus = (isCompleted, taskId) => {
  const task = taskTable.get(taskId);
  task.isCompleted = isCompleted;

  // housekeeping
  const stage = findStageById(task.stageId);
  let stageStatus = StatusEnum.INCOMPLETE;

  // see if there is any incomplete task for the stage
  if (isCompleted) {
    const stageTasks = findTasksByStageId(task.stageId);
    stageStatus = stageTasks.some((task) => !task.isCompleted)
      ? StatusEnum.INCOMPLETE
      : StatusEnum.COMPLETED;
  }

  stage.status = stageStatus;

  return task;
};

const createTask = (title, stageId) => {
  const id = uuidv4();
  taskTable.set(id, { title, id, stageId, isCompleted: false });

  // update the completion status because with new task it becomes incomplete
  //TODO: make sure the key stageId exist in db(our map)
  const stage = stageTable.get(stageId);
  stage.status = StatusEnum.INCOMPLETE;

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
    updateTaskStatus,
  },
};

export default DB;

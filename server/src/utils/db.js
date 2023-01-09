import { v4 as uuidv4 } from "uuid";

const StatusEnum = {
  COMPLETED: "completed",
  INCOMPLETE: "incomplete",
};
const stageTable = new Map();
const taskTable = new Map();

// DB API FUNCTIONS
const findAllTasks = () => taskTable.values();
const findTaskById = (taskId) => taskTable.get(taskId);

const findAllStages = () => stageTable.values();
const findStageById = (stageId) => stageTable.get(stageId);

const findTasksByStageId = (id) => {
  const tasks = [...findAllTasks()];
  return tasks.filter((task) => task.stageId === id);
};

const addStage = (name) => {
  const id = uuidv4();

  stageTable.set(id, {
    name,
    id,
    status: StatusEnum.INCOMPLETE,
    isActive: shouldStageInitAsActive(),
  });

  return stageTable.get(id);
};

const addTask = (title, stageId, isCompleted = false) => {
  const id = uuidv4();
  taskTable.set(id, { title, id, stageId, isCompleted });

  // update the completion status because with new task it becomes incomplete
  //TODO: make sure the key stageId exist in db(our map)
  const stage = stageTable.get(stageId);
  stage.status = StatusEnum.INCOMPLETE;

  return taskTable.get(id);
};

const updateTaskStatus = (isCompleted, taskId) => {
  const task = taskTable.get(taskId);
  task.isCompleted = isCompleted;
  const stageID = task.stageId;

  if (task.isCompleted && isStageComplete(stageID)) {
    markStageAs(stageID, StatusEnum.COMPLETED);
    setNextActiveStage(stageID);
  } else {
    markStageAs(stageID, StatusEnum.INCOMPLETE);
  }
  // if the task is completed we check if the 'stage' has remaining incomplete task
  if (task.isCompleted && isStageComplete(stageID)) {
  } else {
    const stage = findStageById(stageID);
    stage.status = StatusEnum.INCOMPLETE;
  }

  return task;
};

// HELPERS FUNCTIONS
/**
 * Simple function to go to the TaskTable and query all the task for a given stageID
 * We check if there is any of those task that are incomplete.
 * If all tasks are completed we return true (stage can be marked as completed)
 * @param {string} stageId
 * @returns boolean
 */
const isStageComplete = (stageId) => {
  const isAnyIncompleteTaskFound = findTasksByStageId(stageId).some(
    (task) => !task.isCompleted
  );

  return !isAnyIncompleteTaskFound;
};

/**
 * Simple function to move the active flag to the the next stage
 * @param {*} previousActiveStageId
 */
const setNextActiveStage = (previousActiveStageId) => {
  const stagesKeys = [...stageTable.keys()];
  const previousActiveIndex = stagesKeys.indexOf(previousActiveStageId);
  const nextActiveIndex = previousActiveIndex + 1;

  if (nextActiveIndex < stagesKeys.length) {
    const nextActiveKey = stagesKeys[nextActiveIndex];
    const nextActiveStage = stageTable.get(nextActiveKey);
    nextActiveStage.isActive = true;
  }
};

const markStageAs = (stageId, status) => {
  const stage = findStageById(stageId);
  stage.status = status;

  console.log(stage);
};

/**
 * Function to set the active flag for stage onCreate.
 * @returns boolean
 */
const shouldStageInitAsActive = () => {
  // we check if there is any current active one
  // if not we set the new one as active
  const anyCurrentActive = [...stageTable.values()].some(
    (stage) => stage.isActive
  );

  return !anyCurrentActive;
};

const DB = {
  stage: {
    findAll: findAllStages,
    findById: findStageById,
    findTasksByStageId,
    createOne: addStage,
  },
  task: {
    findAll: findAllTasks,
    findById: findTaskById,
    createOne: addTask,
    updateTaskStatus,
  },
};

export default DB;

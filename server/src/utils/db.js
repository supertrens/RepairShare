const stageTable = new Map();
const taskTable = new Map();

stageTable.set("123", { name: "test", id: "123" });
taskTable.set("1", {
  id: "1",
  title: "Cool",
  isCompleted: false,
  stageId: "123",
});

taskTable.set("2", {
  id: "2",
  title: "Cool",
  isCompleted: false,
  stageId: "123",
});

taskTable.set("3", {
  id: "3",
  title: "Cool",
  isCompleted: false,
  stageId: "123",
});

const findAllTasks = () => taskTable.values();

const findAllStages = () => stageTable.values();

const findStageById = (stageId) => stageTable.get(stageId);

const findTasksByStageId = (id) => {
  const tasks = [...findAllTasks()];
  return tasks.filter((task) => task.stageId === id);
};

const DB = {
  stage: {
    findAll: findAllStages,
    findById: findStageById,
    findTasksByStageId,
  },
  task: {
    findAll: findAllTasks,
  },
};

export default DB;

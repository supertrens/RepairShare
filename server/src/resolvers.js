import dbClient from "./utils/db.js";

export const resolvers = {
  Query: {
    stage: (_, { id }) => dbClient.stage.findById(id),
    stages: () => dbClient.stage.findAll(),
    task: (_, { id }) => dbClient.task.findById(id),
    tasks: () => dbClient.task.findAll(),
  },

  Task: {
    stage: ({ stageId }) => dbClient.stage.findById(stageId),
  },

  Stage: {
    tasks: ({ id }) => dbClient.stage.findTasksByStageId(id),
  },

  Mutation: {
    addStage: (_, { name }) => dbClient.stage.createOne(name),
    addTask: (_, { title, stageId }) => dbClient.task.createOne(title, stageId),
    updateTaskStatus: (_, { isCompleted, taskId }) =>
      dbClient.task.updateTaskStatus(isCompleted, taskId),
  },
};

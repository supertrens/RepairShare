import dbClient from "./utils/db.js";

export const resolvers = {
  Query: {
    task: (_, { id }) => dbClient.task.findById(id),
    tasks: () => dbClient.task.findAll(),
    stages: () => dbClient.stage.findAll(),
  },

  Task: {
    stage: ({ stageId }) => dbClient.stage.findById(stageId),
  },

  Stage: {
    tasks: ({ id }) => dbClient.stage.findTasksByStageId(id),
  },

  Mutation: {
    createStage: (_, { name }) => dbClient.stage.createOne(name),
    createTask: (_, { title, stageId }) =>
      dbClient.task.createOne(title, stageId),
  },
};

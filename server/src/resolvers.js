import dbClient from "./utils/db.js";

export const resolvers = {
  Query: {
    tasks: () => dbClient.task.findAll(),
    stages: () => dbClient.stage.findAll(),
  },

  Task: {
    stage: ({ stageId }) => dbClient.stage.findById(stageId),
  },

  Stage: {
    tasks: ({ id }) => dbClient.stage.findTasksByStageId(id),
  },
};

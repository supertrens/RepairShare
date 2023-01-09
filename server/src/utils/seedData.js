import db from "./db.js";

const INITIAL_DATA = {
  Foundation: {
    tasks: [
      { title: "Setup virtual office", isCompleted: true },
      { title: "Set mission & vision", isCompleted: true },
      { title: "Select business name", isCompleted: true },
      { title: "Buy domains", isCompleted: true },
    ],
    status: "completed",
  },
  Discovery: {
    tasks: [
      { title: "Create roadmap", isCompleted: true },
      { title: "Competitor analysis", isCompleted: false },
    ],
  },
  Delivery: {
    tasks: [
      { title: "Release marketing website", isCompleted: false },
      { title: "Release MVP", isCompleted: false },
    ],
  },
};

export function seedData() {
  Object.keys(INITIAL_DATA).forEach((stageName) => {
    const stageData = INITIAL_DATA[stageName];
    const { id: stageID } = db.stage.createOne(stageName, stageData.status);
    stageData.tasks.forEach(({ title, isCompleted }) =>
      db.task.createOne(title, stageID, isCompleted)
    );
  });
}

import { gql } from "@apollo/client";

export const STAGE_WITH_TASK_QUERY = gql`
  query StageWithTaskQuery {
    stages {
      id
      name
      isActive
      status
      tasks {
        id
        title
      }
    }
  }
`;

export const ADD_STAGE = gql`
  mutation CreateStageMutation($name: String!) {
    stage: createStage(name: $name) {
      id
      name
      isActive
      status
    }
  }
`;

export const ADD_TASK = gql`
  mutation CreateTaskMutation($stageId: ID!, $title: String) {
    createTask(stageId: $stageId, title: $title) {
      title
      id
    }
  }
`;

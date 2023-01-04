import { gql } from "@apollo/client";

export const STAGE_WITH_TASK_QUERY = gql`
  query StageWithTaskQuery {
    stages {
      id
      name
      tasks {
        id
        title
      }
    }
  }
`;

export const CREATE_STAGE_MUTATION = gql`
  mutation CreateStageMutation($name: String!) {
    stage: createStage(name: $name) {
      id
      name
    }
  }
`;

export const CREATE_TASK_MUTATION = gql`
  mutation CreateTaskMutation($stageId: ID!, $title: String) {
    createTask(stageId: $stageId, title: $title) {
      title
      id
    }
  }
`;

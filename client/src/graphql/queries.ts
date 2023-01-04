import { gql } from "@apollo/client";

export const STAGE_DETAIL_FRAGMENT = gql`
  fragment StageDetail on Stage {
    id
    name
    isActive
    status
  }
`;

export const TASK_DETAIL_FRAGMENT = gql`
  fragment TaskDetail on Task {
    id
    title
    isCompleted
  }
`;

export const GET_ALL_STAGES = gql`
  query GetAllStages {
    stages {
      ...StageDetail
      tasks {
        ...TaskDetail
      }
    }
  }
  ${STAGE_DETAIL_FRAGMENT}
  ${TASK_DETAIL_FRAGMENT}
`;

export const GET_ALL_TASK = gql`
  query GetALlTask {
    tasks {
      ...TaskDetail
    }
  }
  ${TASK_DETAIL_FRAGMENT}
`;

export const ADD_STAGE = gql`
  mutation AddStageMutation($name: String!) {
    stage: addStage(name: $name) {
      ...StageDetail
    }
  }
  ${STAGE_DETAIL_FRAGMENT}
`;

export const ADD_TASK = gql`
  mutation AddTaskMutation($stageId: ID!, $title: String!) {
    addTask(stageId: $stageId, title: $title) {
      ...TaskDetail
    }
  }
  ${TASK_DETAIL_FRAGMENT}
`;

export const UPDATE_TASK_STATUS = gql`
  mutation UpdateTaskStatusMutation($taskId: ID!, $isCompleted: Boolean!) {
    updateTaskStatus(taskId: $taskId, isCompleted: $isCompleted) {
      ...TaskDetail
    }
  }
  ${TASK_DETAIL_FRAGMENT}
`;

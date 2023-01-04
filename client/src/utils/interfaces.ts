import { StatusEnum } from "./enums";

export interface Task {
  id: string;
  title: string;
  stageId: string;
  isCompleted: boolean;
}

export interface Stage {
  id: string;
  name: string;
  status: StatusEnum;
  tasks: Task[];
  position?: number;
  isActive: boolean;
}

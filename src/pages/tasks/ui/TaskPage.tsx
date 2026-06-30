import React from "react";

import { TaskWidget } from "widgets/task";

export const TaskPage: React.FC = () => {
  return (
    <div>
      <h1>Мои задачи</h1>
      <TaskWidget />
    </div>
  );
};

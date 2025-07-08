let tasks = [];

export const getAllTasks = () => tasks;

export const getTaskById = (id) => tasks.find(t => t.id === id);

export const addTask = (task) => {
  if (tasks.some(t => t.id === task.id)) return false;
  tasks.push(task);
  return true;
};

export const updateTask = (id, updates) => {
  const index = tasks.findIndex(t => t.id === id);
  if (index === -1) return null;
  tasks[index] = { ...tasks[index], ...updates };
  return tasks[index];
};

export const deleteTask = (id) => {
  const index = tasks.findIndex(t => t.id === id);
  if (index === -1) return false;
  tasks.splice(index, 1);
  return true;
};

export const resetTasks = () => {
  tasks = [];
};

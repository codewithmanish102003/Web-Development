interface Task {
    id: number;
    title: string;
  }
  
  const taskInput = document.getElementById("taskInput") as HTMLInputElement;
  const addTaskBtn = document.getElementById("addTaskBtn") as HTMLButtonElement;
  const taskList = document.getElementById("taskList") as HTMLUListElement;
  
  let tasks: Task[] = [];
  
  function renderTasks(): void {
    taskList.innerHTML = "";
    tasks.forEach(task => {
      const li = document.createElement("li");
      li.textContent = task.title;
      li.className = "p-2 bg-gray-200 rounded";
      taskList.appendChild(li);
    });
  }
  
  addTaskBtn.addEventListener("click", () => {
    const title = taskInput.value.trim();
    if (title === "") return;
  
    const newTask: Task = {
      id: Date.now(),
      title,
    };
  
    tasks.push(newTask);
    taskInput.value = "";
    renderTasks();
  });
  

"use client";

import React, { useEffect, useState } from "react";

type Task = {
  _id?: string;
  title: string;
};

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [title, setTitle] = useState("");

  const fetchTasks = async () => {
    const res = await fetch("/api/tasks");
    const data = await res.json();
    setTasks(data);
  };

  const addTask = async () => {
    await fetch("/api/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title }),
    });
    setTitle("");
    fetchTasks();
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <main className="p-4">
      <h1 className="text-xl font-bold mb-4">Task Manager</h1>
      <input
        type="text"
        placeholder="Enter task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border px-2 py-1 mr-2"
      />
      <button onClick={addTask} className="bg-blue-500 text-white px-4 py-1">
        Add
      </button>

      <ul className="mt-4">
        {tasks.map((task) => (
          <li key={task._id} className="border-b py-1">{task.title}</li>
        ))}
      </ul>
    </main>
  );
}

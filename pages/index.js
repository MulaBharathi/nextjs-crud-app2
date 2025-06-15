import { useEffect, useState } from 'react';

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [form, setForm] = useState({ title: '', id: null });

  const fetchTasks = async () => {
    const res = await fetch('/api/tasks');
    const data = await res.json();
    setTasks(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.id) {
      await fetch(`/api/tasks/${form.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: form.title }),
      });
    } else {
      await fetch('/api/tasks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: form.title }),
      });
    }
    setForm({ title: '', id: null });
    fetchTasks();
  };

  const handleEdit = (task) => {
    setForm({ title: task.title, id: task._id });
  };

  const handleDelete = async (id) => {
    await fetch(`/api/tasks/${id}`, {
      method: 'DELETE',
    });
    fetchTasks();
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>Task Manager</h1>
      <form onSubmit={handleSubmit} style={{ marginBottom: 20 }}>
        <input
          type="text"
          placeholder="Task title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          required
        />
        <button type="submit">{form.id ? 'Update' : 'Create'}</button>
      </form>

      <ul>
        {tasks.map((task) => (
          <li key={task._id}>
            {task.title}{' '}
            <button onClick={() => handleEdit(task)}>Edit</button>{' '}
            <button onClick={() => handleDelete(task._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

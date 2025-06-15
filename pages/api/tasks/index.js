import dbConnect from '@/lib/mongodb';
import Task from '@/models/Task';

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === 'GET') {
    const tasks = await Task.find({});
    return res.status(200).json(tasks);
  }

  if (req.method === 'POST') {
    try {
      const task = await Task.create(req.body);
      return res.status(201).json(task);
    } catch (err) {
      return res.status(400).json({ error: 'Error creating task' });
    }
  }

  res.status(405).end();
}

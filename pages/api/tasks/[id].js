import dbConnect from '@/lib/mongodb';
import Task from '@/models/Task';

export default async function handler(req, res) {
  const { id } = req.query;
  await dbConnect();

  if (req.method === 'PUT') {
    try {
      const updatedTask = await Task.findByIdAndUpdate(id, req.body, { new: true });
      return res.status(200).json(updatedTask);
    } catch (err) {
      return res.status(400).json({ error: 'Error updating task' });
    }
  }

  if (req.method === 'DELETE') {
    try {
      await Task.findByIdAndDelete(id);
      return res.status(204).end();
    } catch (err) {
      return res.status(400).json({ error: 'Error deleting task' });
    }
  }

  res.status(405).end();
}

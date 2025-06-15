import clientPromise from "../../lib/mongodb";
export default async function handler(req, res) {
  try {
    const client = await clientPromise;
    const db = client.db("testdb"); // any name, no need to pre-create
    const collections = await db.listCollections().toArray();
    res.status(200).json({ status: "connected", collections });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
}

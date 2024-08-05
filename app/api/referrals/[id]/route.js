import { connectToDatabase } from "@/lib/db";
import Referral from "@/models/Referral";

export default async function handler(req, res) {
  await connectToDatabase();

  const { method } = req;
  const { id } = req.query;

  switch (method) {
    case 'GET':
      try {
        const referral = await Referral.findById(id).populate('referrer referee');
        if (!referral) return res.status(404).json({ message: 'Referral not found' });
        res.status(200).json(referral);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
      break;
    case 'PUT':
      try {
        const referral = await Referral.findByIdAndUpdate(id, req.body, { new: true });
        if (!referral) return res.status(404).json({ message: 'Referral not found' });
        res.status(200).json(referral);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
      break;
    case 'DELETE':
      try {
        const referral = await Referral.findByIdAndDelete(id);
        if (!referral) return res.status(404).json({ message: 'Referral not found' });
        res.status(200).json({ message: 'Referral deleted' });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
      break;
    default:
      res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}

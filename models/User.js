import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  role: { type: String, enum: ['admin', 'user'], default: 'user' },
});

const User = mongoose.models.User || mongoose.model('User', userSchema);
export default User;

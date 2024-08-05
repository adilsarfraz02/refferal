import mongoose from 'mongoose';

const ReferralSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  referralCode: {
    type: String,
    required: true,
    unique: true,
  },
  referredUsers: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  }],
});

export default mongoose.models.Referral || mongoose.model('Referral', ReferralSchema);

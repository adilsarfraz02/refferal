import { getSession } from 'next-auth/react';
import User from '@/models/User';

import clientPromise from '@/lib/db';
import { NextResponse } from 'next/server';

 async function handlers(req, res) {
  const session = await getSession({ req });

  if (!session) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  await clientPromise;

  if (req.method === 'POST') {
    const { referralCode } = req.body;

    const referredByUser = await User.findOne({ referralCode });
    if (!referredByUser) {
      return NextResponse.json({ message: 'Invalid referral code' });
    }

    const user = await User.findOne({ email: session.user.email });
    if (user.referredBy) {
      return NextResponse.json({ message: 'User already referred by someone' });
    }

    user.referredBy = referredByUser.referralCode;
    referredByUser.referredUsers.push(user._id);
    await user.save();
    await referredByUser.save();

    return NextResponse.json({ message: 'Referral redeemed successfully' });
  }
}
export const {GET,POST} =handlers
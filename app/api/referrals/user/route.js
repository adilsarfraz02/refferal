import { getSession } from 'next-auth/react';
import User from '@/models/User';
import clientPromise from '@/lib/db';
import { NextResponse } from 'next/server';

 export default async function POST(req) {
  const session = await getSession({ req });

  if (!session) {
    return NextResponse.json({ message: 'Unauthorized' });
  }

    await clientPromise;

  const user = await User.findOne({ email: session.user.email }).populate('referredUsers');
  if (!user) {
    return NextResponse.json({ message: 'User not found' });
  }

  return res.status(200).json({
    referralCode: user.referralCode,
    referredUsers: user.referredUsers,
  });
}
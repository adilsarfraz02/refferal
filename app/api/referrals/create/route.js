import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import { connectToDatabase } from '@/lib/db';
import Referral from '@/models/Referral';
import User from '@/models/User';
import { auth } from '@/auth';
import { getSession } from 'next-auth/react';

export async function POST(req) {
  try {
    const session = getSession()
    await connectToDatabase();

    // Log the session to debug
    console.log('Session:', session.user);

    if (!session.user) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const user = await User.findById(session.user._id);
    if (!user) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }

    const referralCode = Math.random().toString(36).substring(2, 10);

    const referral = new Referral({
      code: referralCode,
      user: user,
    });

    await referral.save();
    user.referrals.push(referral._id);
    await user.save();

    return NextResponse.json({ referralCode });
  } catch (error) {
    console.error('Error:', error); // Log the error for debugging
    if (error instanceof mongoose.Error) {
      return NextResponse.json({ message: 'Database Error' }, { status: 500 });
    }
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}


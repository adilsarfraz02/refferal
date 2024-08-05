"use client"
import { useSession, signIn, signOut } from 'next-auth/react';
import { useState } from 'react';

export default function Dashboard() {
  const { data: session } = useSession();
  const [referralCode, setReferralCode] = useState('');

  const createReferral = async () => {
    const res = await fetch('/api/referrals/create', {
      method: 'POST',
    });
    const data = await res.json();
    setReferralCode(data.referralCode);
  };

  if (!session) {
    return <div>Please sign in to access your dashboard</div>;
  }

  return (
    <div>
      <h1>Welcome, {session.user.email}</h1>
      <button onClick={createReferral}>Create Referral Code</button>
      {referralCode && <div>Your referral code: {referralCode}</div>}
      <button onClick={() => signOut()}>Sign Out</button>
    </div>
  );
}

"use client"
import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';

export default function ReferralForm() {
  const { data: session } = useSession();
  const [referralCode, setReferralCode] = useState('');
  const [redeemCode, setRedeemCode] = useState('');
  const [referralInfo, setReferralInfo] = useState(null);

  useEffect(() => {
    if (session) {
      fetch('/api/referrals/user')
        .then(res => res.json())
        .then(data => setReferralInfo(data));
    }
  }, [session]);

  const createReferral = async () => {
    const res = await fetch('/api/referrals/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (res.ok) {
      const newReferral = await res.json();
      setReferralInfo(newReferral);
    }
  };

  const redeemReferral = async () => {
    const res = await fetch('/api/referrals', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ referralCode: redeemCode }),
    });

    if (res.ok) {
      setRedeemCode('');
      // Optionally update UI to reflect redeemed referral
    }
  };

  return (
    <div>
      <div>
        {referralInfo ? (
          <div>
            <p>Your Referral Code: {referralInfo.referralCode}</p>
            <p>Total Referrals: {referralInfo.referredUsers.length}</p>
          </div>
        ) : (
          <button onClick={createReferral}>Generate Referral Code</button>
        )}
      </div>

      <div>
        <input
          value={redeemCode}
          onChange={(e) => setRedeemCode(e.target.value)}
          placeholder="Enter Referral Code"
        />
        <button onClick={redeemReferral}>Redeem Referral Code</button>
      </div>
    </div>
  );
}

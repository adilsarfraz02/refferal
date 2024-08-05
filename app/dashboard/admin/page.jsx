"use client"
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';

export default function AdminDashboard() {
  const { data } = useSession();
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setSession(data)
    setLoading(false)
  },[data])

  if (loading) {
    return <p className='text-center py-6 text-3xl'>Loading</p>
  }
  if ( session?.user?.email !== 'adilsarfr00@gmail.com') {
    return <p className='text-center py-6 text-3xl'>Access Denied</p>;
  }

  return (
    <div className='flex items-center justify-center flex-col'>
      <h1 className='text-center py-6 text-3xl'>Admin Dashboard</h1>
      <p>Email: {session?.user?.email}</p>
    </div>
  );
}

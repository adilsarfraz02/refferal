"use client"

import { useSession } from "next-auth/react";

export default function UserDashboard() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (!session) {
    return <p>Access Denied</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">User Dashboard</h1>
      <p>Welcome, {session.user.email}</p>
    </div>
  );
}

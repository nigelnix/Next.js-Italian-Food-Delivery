"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";

export default function ProfilePage() {
  const session = useSession();
  const [userName, setUserName] = useState(session?.data?.user?.name || '');
  const { status } = session;

  async function handleProfileInfoUpdate(ev) {
    ev.preventDefault();
    const response = await fetch('/api/profile', {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({name:userName}),
    })
  }

  if (status === "loading") {
    return "Loading...";
  }

  if (status === "unauthenticated") {
    return redirect("/login");
  }

  const userImage = session.data.user.image;

  return (
    <section className="mt-4">
      <h1 className="text-primary text-center text-4xl mb-4">Profile</h1>
      <div className="max-w-md mx-auto">
        <div className="flex gap-4 items-center">
          <div>
            <div className="p-2 rounded-lg relative">
              <Image
                src={userImage}
                height={250}
                width={250}
                alt={"avatar"}
                className="h-full w-full rounded-lg mb-1"
              />
              <button type="button">Edit</button>
            </div>
          </div>
          <form className="grow" onSubmit={handleProfileInfoUpdate}>
            <input type="text" placeholder="First and last name" value={userName} onChange={ev => setUserName(ev.target.value)} />
            <input
              type="email"
              placeholder="First and last name"
              value={session.data.user.email}
              disabled={true}
            />
            <button type="submit">Save</button>
          </form>
        </div>
      </div>
    </section>
  );
}

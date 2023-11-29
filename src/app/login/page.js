'use client';

import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <section className="mt-8">
      <h1 className="text-primary text-center text-4xl mb-4">Login</h1>
      <form className="block max-w-xs mx-auto">
        <input
          disabled={false}
          type="email"
          placeholder="email"
          value={email}
          onChange={(ev) => setEmail(ev.target.value)}
        />
        <input
          disabled={false}
          type="password"
          placeholder="password"
          value={password}
          onChange={(ev) => setPassword(ev.target.value)}
        />
      </form>
    </section>
  );
}

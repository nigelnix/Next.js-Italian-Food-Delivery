"use client";

import Link from "node_modules/next/link";
import Image from "next/image";
import { useState } from "react";
import { signIn } from "next-auth/react";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [creatingUser, setCreatingUser] = useState(false);
  const [userCreated, setUserCreated] = useState(false);
  const [error, setError] = useState(false);
  async function handleFormSubmit(ev) {
    ev.preventDefault();
    setCreatingUser(true);
    setError(false);
    setUserCreated(false);
    const response = await fetch("/api/register", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      setUserCreated(true);
    } else {
      setError(true);
    }
    setCreatingUser(false);
  }
  return (
    <section className="mt-8">
      <h1 className="text-primary text-center text-4xl mb-4">Register</h1>
      {userCreated && (
        <div className="my-4 text-center">
          User Created. <br /> Now you can{" "}
          <Link className="underline" href={"/login"}>
            login
          </Link>{" "}
          &raquo;
        </div>
      )}
      {error && (
        <div className="my-4 text-center">
          An error has occured.
          <br />
          Please try again later.
        </div>
      )}
      <form className="block max-w-xs mx-auto" onSubmit={handleFormSubmit}>
        <input
          disabled={creatingUser}
          type="email"
          placeholder="email"
          value={email}
          onChange={(ev) => setEmail(ev.target.value)}
        />
        <input
          disabled={creatingUser}
          type="password"
          placeholder="password"
          value={password}
          onChange={(ev) => setPassword(ev.target.value)}
        />
        <button type="submit" disabled={creatingUser}>
          Register
        </button>
        <div className="my-4 text-center text-gray-500">
          Or login with provider
        </div>
        <button type="button" onClick={() => signIn('google', {callbackUrl:'/'})} className="flex gap-4 justify-center">
          {" "}
          <Image
            src={"/google-logo.png"}
            width={24}
            height={24}
            alt={"google logo"}
          ></Image>{" "}
          Login with Google
        </button>
        <div className="text-center my-4 text-gray-500 border-t pt-4">
            Already have an account? {' '}<Link className="underline hover:text-gray-700" href={'/login'}>Login here!</Link>&raquo;
        </div>
      </form>
    </section>
  );
}

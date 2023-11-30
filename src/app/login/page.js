"use client";

import {signIn} from "next-auth/react";
import Link from "node_modules/next/link";
import Image from "node_modules/next/image";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginInProgress, setLoginInProgress] = useState(false);
  async function handleFormSubmit(ev) {
    ev.preventDefault();
    setLoginInProgress(true);
    
    await signIn('credentials', {email, password} );

    setLoginInProgress(false);
  }
  return (
    <section className="mt-8">
      <h1 className="text-primary text-center text-4xl mb-4">Login</h1>
      <form className="block max-w-xs mx-auto" onSubmit={handleFormSubmit}>
        <input
          name="email"
          disabled={loginInProgress}
          type="email"
          placeholder="email"
          value={email}
          onChange={(ev) => setEmail(ev.target.value)}
        />
        <input
          name="password"
          disabled={loginInProgress}
          type="password"
          placeholder="password"
          value={password}
          onChange={(ev) => setPassword(ev.target.value)}
        />
        <button type="submit" disabled={loginInProgress}>
          Login
        </button>
        <div className="my-4 text-center text-gray-500">
          Or login with provider
        </div>
        <button className="flex gap-4 justify-center">
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
          Don &#39;t have an account?{" "}
          <Link className="underline hover:text-gray-700" href={"/register"}>
            Register here!
          </Link>
          &raquo;
        </div>
      </form>
    </section>
  );
}

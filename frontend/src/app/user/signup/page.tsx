'use client'
import Link from "next/link";
import { useState } from "react";

export default function Signup() {
  const [errorMsg, setErrorMsg] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  async function handleForm(formData: FormData) {
  
    // Checking if the password and confirm password match
    if (password !== confirmPassword) {
      setErrorMsg("Passwords do not match");
      return;
    }

    const fb = {
      username: formData.get("username"),
      email: formData.get("email"),
      password: password, // Use the password from state
      profile: {
        mobile: formData.get("mobile"),
      },
    };

    console.log(fb);
    const response = await fetch("http://127.0.0.1:8000/api/signup/", {
      method: "POST",
      body: JSON.stringify(fb),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const res = await response.json();
    if (response.ok) {
      setErrorMsg("");
      location.href = "/user/login";
    } else {
      setErrorMsg(res.message || "Unexpected error");
    }
  }

  return (
    <section className="md:px-32 flex flex-col items-center mt-10 justify-center bg-gray-50">
      <div className="w-full max-w-sm border rounded-2xl px-6 py-1 bg-white shadow-lg">
        <h1 className="font-extrabold text-4xl text-center mb-4">SIGN UP</h1>
                   {errorMsg && (
                          <div className="flex items-center p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800" role="alert">
                          <svg className="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                          </svg>
                          <span className="sr-only">Info</span>
                          <div>
                            <span className="font-medium">{errorMsg}</span> Change a few things up and try submitting again.
                          </div>
                        </div>
                          
                        )}

        <form
          className="space-y-6"
          onSubmit={(e) => {
            e.preventDefault();
            handleForm(new FormData(e.target as HTMLFormElement));
          }}
        >
          {" "}
          <div className="flex flex-col">
            <label
              htmlFor="username"
              className="text-sm font-semibold text-gray-600 mb-2"
            >
              full Name
            </label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter your name"
              className="border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-secondary"
              required
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="text-sm font-semibold text-gray-600 mb-2"
            >
              email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-secondary"
              required
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="mobile"
              className="text-sm font-semibold text-gray-600 mb-2"
            >
              mobile
            </label>
            <input
              type="tel"
              id="mobile"
              name="mobile"
              placeholder="Mobile Number"
              className="border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-secondary"
              required
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="password"
              className="text-sm font-semibold text-gray-600 mb-2"
            >
              password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-secondary"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="confirmPassword"
              className="text-sm font-semibold text-gray-600 mb-2"
            >
              confirm password
            </label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirm your password"
              className="border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-secondary"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white text-lg font-bold py-3 rounded-full  transition"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-4">
          Already have an account?{" "}
          <Link
            href="/user/login"
            className="text-gray-500 hover:text-blue-500 font-medium hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </section>
  );
}

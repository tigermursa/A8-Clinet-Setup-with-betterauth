"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { authClient } from "../lib/auth-client";

const SignUpPage = () => {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();

    setLoading(true);
    setErrorMessage("");

    const form = e.target;

    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const image = form.image.value;

    try {
      const { data, error } = await authClient.signUp.email({
        name,
        email,
        password,
        image,
      });

      if (error) {
        setErrorMessage(error.message);
        return;
      }

      console.log("Signup Successful:", data);

      router.push("/");
      router.refresh();
    } catch (error) {
      setErrorMessage("Something went wrong. Please try again.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 px-4 py-12">
      <div className="grid w-full max-w-5xl overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-2xl">
        {/* Left Side */}
        <div className="hidden flex-col justify-center bg-gradient-to-br from-indigo-600 to-purple-700 p-12 md:flex">
          <span className="mb-6 text-sm font-semibold uppercase tracking-widest text-indigo-200">
            Assignment 08
          </span>

          <h1 className="text-4xl font-extrabold leading-tight text-white">
            Start Your Journey With Us!
          </h1>

          <p className="mt-6 leading-8 text-indigo-100">
            Create your account and explore our session project. Keep learning,
            keep building, and keep improving.
          </p>

          <div className="mt-12 rounded-2xl border border-white/20 bg-white/10 p-6">
            <p className="text-lg font-semibold text-white">
              "Learning Today, Building Tomorrow."
            </p>

            <p className="mt-2 text-sm text-indigo-200">
              Assignment 08 Session Project
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div className="p-6 sm:p-10 md:p-12">
          <div className="mb-8">
            <Link
              href="/"
              className="text-sm font-medium text-indigo-400 hover:text-indigo-300"
            >
              ← Back to Home
            </Link>

            <h2 className="mt-6 text-3xl font-bold text-white">
              Create Account
            </h2>

            <p className="mt-2 text-sm text-slate-400">
              Fill in your information to get started.
            </p>
          </div>

          <form onSubmit={handleSignUp} className="space-y-5">
            {/* Name */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">
                Full Name
              </label>

              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                required
                className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
              />
            </div>

            {/* Email */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">
                Email Address
              </label>

              <input
                type="email"
                name="email"
                placeholder="example@gmail.com"
                required
                className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
              />
            </div>

            {/* Password */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">
                Password
              </label>

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter your password"
                  minLength={8}
                  maxLength={128}
                  required
                  className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 pr-20 text-white outline-none transition placeholder:text-slate-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-medium text-indigo-400 hover:text-indigo-300"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            {/* Image URL */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">
                Profile Image URL
              </label>

              <input
                type="url"
                name="image"
                placeholder="https://example.com/image.jpg"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                required
                className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
              />

              <p className="mt-2 text-xs text-slate-500">
                Upload your image to ImgBB or Cloudinary and paste the URL.
              </p>

              {/* Image Preview */}
              {imageUrl && (
                <div className="mt-4 flex items-center gap-4 rounded-xl border border-slate-700 bg-slate-800 p-3">
                  <img
                    src={imageUrl}
                    alt="Profile Preview"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                    className="h-16 w-16 rounded-full border-2 border-indigo-500 object-cover"
                  />

                  <div>
                    <p className="text-sm font-medium text-white">
                      Image Preview
                    </p>
                    <p className="text-xs text-slate-400">
                      Your profile picture
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Error Message */}
            {errorMessage && (
              <div className="rounded-lg border border-red-500/20 bg-red-500/10 p-3 text-sm text-red-400">
                {errorMessage}
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-indigo-600 py-3.5 font-semibold text-white shadow-lg shadow-indigo-600/20 transition hover:bg-indigo-500 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Creating Account..." : "Create Account →"}
            </button>
          </form>

          {/* Login Link */}
          <p className="mt-8 text-center text-sm text-slate-400">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-semibold text-indigo-400 transition hover:text-indigo-300"
            >
              Login Now
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
};

export default SignUpPage;

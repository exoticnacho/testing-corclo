"use client"

import AuthHeader from "@/components/auth/auth-header"
import SignupForm from "@/components/auth/signup-form"

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-[var(--color-bg-primary)] flex items-center justify-center px-4 py-8">
      <div className="max-w-md w-full">
        <AuthHeader />

        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Join Us!</h1>
          <p className="text-[var(--color-text-secondary)]">Create your account and start your journey on Circlo</p>
        </div>

        <div className="bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-xl p-6 sm:p-8">
          <SignupForm />
        </div>

        <p className="text-center text-[var(--color-text-tertiary)] text-xs mt-6">
          By signing up, you agree to our Terms of Service and Privacy Policy
        </p>
      </div>
    </div>
  )
}

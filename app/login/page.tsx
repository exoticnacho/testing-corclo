"use client"

import AuthHeader from "@/components/auth/auth-header"
import LoginForm from "@/components/auth/login-form"

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-[var(--color-bg-primary)] flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <AuthHeader />

        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Welcome Back!</h1>
          <p className="text-[var(--color-text-secondary)]">Login to continue your adventure with us</p>
        </div>

        <div className="bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-xl p-6 sm:p-8">
          <LoginForm />
        </div>

        <p className="text-center text-[var(--color-text-tertiary)] text-xs mt-6">
          By logging in, you agree to our Terms of Service and Privacy Policy
        </p>
      </div>
    </div>
  )
}

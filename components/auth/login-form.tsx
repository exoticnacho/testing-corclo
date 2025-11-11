// components/auth/login-form.tsx

"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Eye, EyeOff } from "lucide-react"
// --- TAMBAHKAN INI ---
import { useRouter } from "next/navigation" 
import { toast } from "@/hooks/use-toast"
// --------------------

export default function LoginForm() {
  // --- TAMBAH INI ---
  const router = useRouter()
  // -----------------
  const [showPassword, setShowPassword] = useState(false)
  
  // PASTIKAN rememberMe ADA DI SINI
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false, // <-- PASTIKAN BARIS INI ADA!
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // console.log("Login:", formData)

    // SIMULASI LOGIN BERHASIL
    toast({
        title: "Login Berhasil!",
        description: "Anda berhasil masuk. Mengarahkan ke Beranda...",
    })

    // PENGALIHAN KE HALAMAN HOME
    setTimeout(() => {
        router.push('/home')
    }, 1500)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-2 text-[var(--color-text-primary)]">Email / Username</label>
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email or username"
          className="w-full px-4 py-3 bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-lg text-[var(--color-text-primary)] placeholder-[var(--color-text-tertiary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all"
        />
      </div>

      <div>
        <div className="flex justify-between items-center mb-2">
          <label className="block text-sm font-medium text-[var(--color-text-primary)]">Password</label>
          <Link href="#" className="text-xs text-[var(--color-primary)] hover:underline">
            Forgot password?
          </Link>
        </div>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            className="w-full px-4 py-3 bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-lg text-[var(--color-text-primary)] placeholder-[var(--color-text-tertiary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--color-text-tertiary)] hover:text-[var(--color-text-primary)]"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>
      </div>

      <div className="flex items-center">
        <input
          type="checkbox"
          name="rememberMe"
          id="rememberMe"
          checked={formData.rememberMe} // <--- BARIS YG BIKIN ERROR (Sekarang sudah aman)
          onChange={handleChange}
          className="w-4 h-4 bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded cursor-pointer"
        />
        <label htmlFor="rememberMe" className="ml-2 text-sm text-[var(--color-text-secondary)] cursor-pointer">
          Remember this device
        </label>
      </div>

      <button
        type="submit"
        className="w-full py-3 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)] text-white rounded-lg font-medium hover:opacity-90 transition-opacity mt-6"
      >
        Login
      </button>

      <p className="text-center text-[var(--color-text-secondary)] text-sm">
        Don't have an account?{" "}
        <Link href="/signup" className="text-[var(--color-primary)] hover:underline font-medium">
          Sign up here
        </Link>
      </p>
    </form>
  )
}
"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { Eye, EyeOff } from "lucide-react"
import { useRouter } from "next/navigation" 
import { toast } from "@/hooks/use-toast"

export default function SignupForm() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // --- LOGIKA SIMULASI SIGNUP ---
    toast({
        title: "Pendaftaran Berhasil!",
        description: "Selamat datang di Circlo. Anda akan diarahkan ke Beranda.",
    })
    setTimeout(() => {
        router.push('/home')
    }, 1500)
  }

  return (
    // Ganti space-y-4
    <form onSubmit={handleSubmit} className="custom-form-layout space-y-4">
      
      {/* Field: Full Name */}
      <div>
        <label className="text-sm font-medium mb-2 text-[var(--color-text-primary)]">Full Name</label>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Enter your full name"
          className="form-input"
        />
      </div>

      {/* Field: Username */}
      <div>
        <label className="text-sm font-medium mb-2 text-[var(--color-text-primary)]">Username</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Choose your username"
          className="form-input"
        />
      </div>

      {/* Field: Email */}
      <div>
        <label className="text-sm font-medium mb-2 text-[var(--color-text-primary)]">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          className="form-input"
        />
      </div>

      {/* Field: Phone Number */}
      <div>
        <label className="text-sm font-medium mb-2 text-[var(--color-text-primary)]">Phone Number</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Enter your phone number"
          className="form-input"
        />
      </div>

      {/* Field: Password */}
      <div>
        <label className="text-sm font-medium mb-2 text-[var(--color-text-primary)]">Password</label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Create a strong password"
            className="form-input"
          />
          {/* Kelas positioning/styling untuk tombol icon perlu CSS kustom di globals.css */}
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[var(--color-text-tertiary)] hover:text-[var(--color-text-primary)]"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>
      </div>

      {/* Field: Confirm Password */}
      <div>
        <label className="block text-sm font-medium mb-2 text-[var(--color-text-primary)]">Confirm Password</label>
        <div className="relative">
          <input
            type={showConfirmPassword ? "text" : "password"}
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm your password"
            className="form-input"
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[var(--color-text-tertiary)] hover:text-[var(--color-text-primary)]"
          >
            {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>
      </div>

      <button
        type="submit"
        className="full-width-button mt-6"
      >
        Create Account
      </button>

      <p className="text-center text-[var(--color-text-secondary)] text-sm">
        Already have an account?{" "}
        <Link href="/login" className="text-[var(--color-primary)] hover:underline font-medium">
          Login here
        </Link>
      </p>
    </form>
  )
}
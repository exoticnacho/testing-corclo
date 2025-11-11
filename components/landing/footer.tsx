"use client"

import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[var(--color-bg-secondary)] border-t border-[var(--color-border)] py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">C</span>
              </div>
              <span className="font-bold text-lg">Circlo</span>
            </div>
            <p className="text-[var(--color-text-tertiary)] text-sm">Where authentic connections happen</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4">Product</h3>
            <ul className="space-y-2 text-sm text-[var(--color-text-tertiary)]">
              <li>
                <Link href="#features" className="hover:text-[var(--color-text-primary)]">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#community" className="hover:text-[var(--color-text-primary)]">
                  Communities
                </Link>
              </li>
              <li>
                <a href="/login" className="hover:text-[var(--color-text-primary)]">
                  Download
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-[var(--color-text-tertiary)]">
              <li>
                <a href="#" className="hover:text-[var(--color-text-primary)]">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[var(--color-text-primary)]">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[var(--color-text-primary)]">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-[var(--color-text-tertiary)]">
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <span>hello@circlo.app</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <span>(021) 492-419</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} />
                <span>Jakarta, Indonesia</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-[var(--color-border)] pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-[var(--color-text-tertiary)]">
          <p>Copyright © 2025 Circlo. All Rights Reserved</p>
          <div className="flex gap-6 mt-4 sm:mt-0">
            <a href="/privacy" className="hover:text-[var(--color-text-primary)]"> {/* <--- UBAH INI */}
              Privacy
            </a>
            <a href="/snk" className="hover:text-[var(--color-text-primary)]"> {/* <--- INI SUDAH DIUBAH SEBELUMNYA */}
              Terms
            </a>
            <a href="#" className="hover:text-[var(--color-text-primary)]">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

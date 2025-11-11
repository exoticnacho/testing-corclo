// app/privacy/page.tsx
"use client"

import AuthHeader from "@/components/auth/auth-header"
import Link from "next/link"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[var(--color-bg-primary)] px-4 py-8">
      <div className="max-w-3xl w-full mx-auto">
        
        {/* Header (Menggunakan komponen AuthHeader) */}
        <div className="mb-12">
            <AuthHeader />
        </div>

        {/* Konten Utama */}
        <div className="bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-xl p-6 sm:p-8">
          <h1 className="text-3xl font-bold mb-4">Kebijakan Privasi Circlo</h1>
          <p className="text-[var(--color-text-secondary)] mb-6">Terakhir diperbarui: 10 November 2025</p>

          <div className="space-y-6 text-[var(--color-text-secondary)]">
            
            <section>
              <h2 className="text-xl font-bold text-[var(--color-text-primary)] mb-2">1. Informasi yang Kami Kumpulkan</h2>
              <p>Kami mengumpulkan informasi yang Anda berikan langsung kepada kami, seperti nama, alamat email, kata sandi, dan foto profil, saat Anda mendaftar atau menggunakan Layanan kami.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[var(--color-text-primary)] mb-2">2. Bagaimana Kami Menggunakan Informasi Anda</h2>
              <p>Informasi yang kami kumpulkan digunakan untuk:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Menyediakan dan memelihara Layanan Circlo.</li>
                <li>Meningkatkan, mempersonalisasi, dan memperluas Layanan kami.</li>
                <li>Menganalisis bagaimana Anda menggunakan Layanan kami.</li>
                <li>Mengirim komunikasi, termasuk pemberitahuan dan pembaruan layanan.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[var(--color-text-primary)] mb-2">3. Pembagian Informasi</h2>
              <p>Kami tidak akan menyewakan atau menjual informasi pribadi Anda kepada pihak ketiga tanpa persetujuan Anda, kecuali sebagaimana diwajibkan oleh hukum.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[var(--color-text-primary)] mb-2">4. Keamanan Data</h2>
              <p>Kami menerapkan langkah-langkah keamanan yang wajar untuk melindungi informasi pribadi Anda, namun perlu diingat bahwa tidak ada metode transmisi melalui Internet yang 100% aman.</p>
            </section>
            
          </div>
        </div>

        {/* Footer/Aksi */}
        <p className="text-center text-[var(--color-text-tertiary)] text-xs mt-6">
          Baca juga <Link href="/snk" className="text-[var(--color-primary)] hover:underline font-medium">Syarat dan Ketentuan</Link> kami.
        </p>

      </div>
    </div>
  )
}
// app/snk/page.tsx
"use client"

import AuthHeader from "@/components/auth/auth-header"
import Link from "next/link"

export default function SyaratDanKetentuanPage() {
  return (
    <div className="min-h-screen bg-[var(--color-bg-primary)] px-4 py-8">
      <div className="max-w-3xl w-full mx-auto">
        
        {/* Header (Menggunakan komponen AuthHeader agar konsisten) */}
        <div className="mb-12">
            <AuthHeader />
        </div>

        {/* Konten Utama */}
        <div className="bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-xl p-6 sm:p-8">
          <h1 className="text-3xl font-bold mb-4">Syarat dan Ketentuan (SnK) Circlo</h1>
          <p className="text-[var(--color-text-secondary)] mb-6">Terakhir diperbarui: 10 November 2025</p>

          <div className="space-y-6 text-[var(--color-text-secondary)]">
            
            <section>
              <h2 className="text-xl font-bold text-[var(--color-text-primary)] mb-2">1. Penerimaan Ketentuan</h2>
              <p>Dengan mengakses atau menggunakan layanan Circlo ("Layanan"), Anda setuju untuk terikat oleh Syarat dan Ketentuan ini ("Ketentuan"). Jika Anda tidak setuju, mohon untuk tidak menggunakan Layanan.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[var(--color-text-primary)] mb-2">2. Akun Pengguna</h2>
              <ul className="list-disc ml-6 space-y-2">
                <li>Anda harus berusia minimal 13 tahun untuk menggunakan Layanan.</li>
                <li>Anda bertanggung jawab menjaga kerahasiaan kata sandi akun Anda.</li>
                <li>Anda harus memberikan informasi yang akurat dan lengkap saat membuat akun.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[var(--color-text-primary)] mb-2">3. Konten</h2>
              <p>Anda bertanggung jawab penuh atas semua konten yang Anda unggah, posting, atau tampilkan di Layanan. Circlo tidak mengizinkan konten yang melanggar hukum, berbahaya, atau memfitnah.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[var(--color-text-primary)] mb-2">4. Pengakhiran</h2>
              <p>Circlo berhak menghentikan atau menangguhkan akses Anda ke Layanan kapan saja, tanpa pemberitahuan sebelumnya, jika Anda melanggar Ketentuan ini.</p>
            </section>
            
          </div>
        </div>

        {/* Footer/Aksi */}
        <p className="text-center text-[var(--color-text-tertiary)] text-xs mt-6">
          Kembali ke <Link href="/" className="text-[var(--color-primary)] hover:underline font-medium">Halaman Utama</Link>
        </p>

      </div>
    </div>
  )
}
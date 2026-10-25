"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");
  const router = useRouter();

  function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setMessage(
      "Login berhasil! Mengalihkan ke Dashboard..."
    );

    // Otomatis pindah ke halaman dashboard setelah 1 detik
    setTimeout(() => {
      router.push('/dashboard');
    }, 1000);
  }

  return (
    <main className="auth-page">
      <nav className="auth-nav">
        <Link href="/" className="auth-brand">
          📚 LibSys
        </Link>

        <Link href="/" className="auth-home">
          ← Kembali ke Beranda
        </Link>
      </nav>

      <section className="auth-card">
        <div className="auth-icon">📖</div>

        <p className="auth-eyebrow">SELAMAT DATANG KEMBALI</p>

        <h1>Login ke LibSys</h1>

        <p className="auth-description">
          Masuk ke akunmu dan jelajahi koleksi buku perpustakaan.
        </p>

        <form onSubmit={handleLogin} className="auth-form">
          <label htmlFor="email">Email</label>

          <input
            id="email"
            type="email"
            placeholder="nama@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="password">Password</label>

          <input
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="Masukkan password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <label className="auth-show-password">
            <input
              type="checkbox"
              checked={showPassword}
              onChange={(e) => setShowPassword(e.target.checked)}
            />
            Tampilkan password
          </label>

          <button type="submit" className="auth-button">
            Login
          </button>

          {message && (
            <p className="auth-message" role="status" style={{ marginTop: '10px', color: '#059669', fontWeight: 'bold' }}>
              {message}
            </p>
          )}
        </form>

        <p className="auth-switch">
          Belum punya akun?{" "}
          <Link href="/register">Daftar sekarang</Link>
        </p>
      </section>

      <footer className="auth-footer">
        © 2026 LibSys — Sistem Informasi Perpustakaan
      </footer>
    </main>
  );
}


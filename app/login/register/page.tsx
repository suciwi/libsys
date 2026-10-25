"use client";

import Link from "next/link";
import { useState } from "react";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  function handleRegister(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage("Konfirmasi password tidak cocok.");
      return;
    }

    setMessage(
      "Form registrasi berhasil diisi! Penyimpanan akun belum terhubung ke backend."
    );
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
        <div className="auth-icon">📝</div>

        <p className="auth-eyebrow">GABUNG BERSAMA KAMI</p>

        <h1>Buat Akun</h1>

        <p className="auth-description">
          Daftar di LibSys untuk menikmati layanan perpustakaan.
        </p>

        <form onSubmit={handleRegister} className="auth-form">
          <label htmlFor="name">Nama Lengkap</label>
          <input
            id="name"
            type="text"
            placeholder="Masukkan nama lengkap"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

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
            type="password"
            placeholder="Buat password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            minLength={8}
            required
          />

          <label htmlFor="confirmPassword">
            Konfirmasi Password
          </label>
          <input
            id="confirmPassword"
            type="password"
            placeholder="Ulangi password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            minLength={8}
            required
          />

          <button type="submit" className="auth-button">
            Daftar Sekarang
          </button>

          {message && (
            <p className="auth-message" role="status">
              {message}
            </p>
          )}
        </form>

        <p className="auth-switch">
        Sudah punya akun? <Link href="/login">Masuk di sini</Link>
        </p>
      </section>

      <footer className="auth-footer">
        © 2026 LibSys — Sistem Informasi Perpustakaan
      </footer>
    </main>
  );
}



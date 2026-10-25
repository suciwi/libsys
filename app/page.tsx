"use client";

import { useState } from "react";
import Link from "next/link";

const books = [
  { id: 1, title: "Laskar Pelangi", author: "Andrea Hirata", category: "Novel", cover: "📕", color: "#F3E0D0" },
  { id: 2, title: "Bumi Manusia", author: "Pramoedya Ananta Toer", category: "Sastra", cover: "📗", color: "#DCE8D9" },
  { id: 3, title: "Filosofi Teras", author: "Henry Manampiring", category: "Filsafat", cover: "📘", color: "#DFE5F5" },
  { id: 4, title: "Negeri 5 Menara", author: "Ahmad Fuadi", category: "Novel", cover: "📙", color: "#F5E8BD" },
];

export default function Home() {
  const [search, setSearch] = useState("");

  const filteredBooks = books.filter((book) =>
    `${book.title} ${book.author} ${book.category}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <main>
      <nav className="navbar">
        <a className="logo" href="#">
          <span className="logo-mark">L</span>
          LibSys
        </a>

        <div className="nav-links">
          <a href="#" className="selected">Beranda</a>
          <a href="#katalog">Katalog Buku</a>
          <a href="#tentang">Tentang</a>
        </div>

          <a className="nav-button" href="/login">
            Login
          </a>

      </nav>

      <section className="hero">
        <div className="hero-text">
          <span className="eyebrow">SELAMAT DATANG DI LIBSYS</span>
          <h1>
            Satu Buku,
            <br />
            <span>Sejuta Wawasan.</span>
          </h1>
          <p>
            Temukan bacaan favoritmu dan jelajahi dunia
            pengetahuan melalui koleksi perpustakaan kami.
          </p>
          <a href="#katalog" className="primary-button">
            Jelajahi Katalog <span>→</span>
          </a>

          <div className="hero-note">
            <span>✦</span> Temukan bacaan berikutnya di sini.
          </div>
        </div>

        <div className="hero-art" aria-label="Ilustrasi buku">
          <div className="art-circle"></div>
          <div className="art-book">📚</div>
          <div className="art-note">
            <span>Temukan</span>
            <strong>Inspirasi Baru</strong>
          </div>
          <div className="art-star">✳</div>
        </div>
      </section>

      <section className="catalog" id="katalog">
        <div className="section-title">
          <div>
            <span className="eyebrow">KOLEKSI PERPUSTAKAAN</span>
            <h2>Jelajahi Katalog Buku</h2>
            <p>Pilih buku yang menarik perhatianmu.</p>
          </div>
          <span className="book-count">{filteredBooks.length} buku</span>
        </div>

        <label className="search">
          <span>⌕</span>
          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Cari judul, penulis, atau kategori..."
          />
        </label>

        <div className="book-grid">
          {filteredBooks.map((book) => (
            <article className="book-card" key={book.id}>
              <div className="book-cover" style={{ backgroundColor: book.color }}>
                <span className="cover-emoji">{book.cover}</span>
                <span className="category-tag">{book.category}</span>
              </div>
              <div className="book-info">
                <span className="sample-label">● DATA CONTOH</span>
                <h3>{book.title}</h3>
                <p>{book.author}</p>
                <button
                  className="detail-button"
                  onClick={() =>
                    alert(`Judul: ${book.title}\nPenulis: ${book.author}\nKategori: ${book.category}`)
                  }
                >
                  Lihat detail <span>→</span>
                </button>
              </div>
            </article>
          ))}
        </div>

        {filteredBooks.length === 0 && (
          <p className="empty">Buku tidak ditemukan. Coba kata kunci lain.</p>
        )}
      </section>

      <section className="about" id="tentang">
        <div>
          <span className="eyebrow">TENTANG KAMI</span>
          <h2>Perpustakaan lebih mudah diakses.</h2>
        </div>
        <p>
          LibSys adalah Sistem Pengelolaan Perpustakaan yang
          dirancang untuk membantu pengguna menemukan buku dan
          mendukung pengelolaan koleksi secara lebih teratur.
        </p>
      </section>

      <footer>
        <a className="logo" href="#">
          <span className="logo-mark">L</span>
          LibSys
        </a>
        <p>© 2026 LibSys · Sistem Pengelolaan Perpustakaan</p>
      </footer>
    </main>
  );
}
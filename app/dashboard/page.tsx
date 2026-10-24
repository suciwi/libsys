"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Mengecek apakah pengguna sudah punya tiket masuk (token) dari proses login
    const token = localStorage.getItem("token");
    if (!token) {
      // Kalau belum login, kembalikan ke halaman login
      router.push("/login");
    } else {
      setIsLoading(false);
    }
  }, [router]);

  function handleLogout() {
    // Hapus tiket masuk dan kembali ke halaman login
    localStorage.removeItem("token");
    router.push("/login");
  }

  if (isLoading) {
    return <p style={{ padding: "50px", textAlign: "center" }}>Memuat dashboard...</p>;
  }

  return (
    <main style={{ padding: "40px", fontFamily: "sans-serif", backgroundColor: "#f7f5ed", minHeight: "100vh" }}>
      <nav style={{ display: "flex", justifyItems: "center", justifyContent: "space-between", marginBottom: "40px" }}>
        <h1 style={{ color: "#315c40", margin: 0 }}>📚 Dashboard LibSys</h1>
        <button
          onClick={handleLogout}
          style={{ padding: "10px 20px", backgroundColor: "#d9534f", color: "white", border: "none", borderRadius: "8px", cursor: "pointer", fontWeight: "bold" }}
        >
          Keluar (Logout)
        </button>
      </nav>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px" }}>
        {/* Kotak Info 1 */}
        <div style={{ backgroundColor: "white", padding: "20px", borderRadius: "12px", boxShadow: "0 4px 6px rgba(0,0,0,0.05)" }}>
          <h2 style={{ color: "#66816b", fontSize: "14px", marginTop: 0 }}>TOTAL BUKU</h2>
          <p style={{ fontSize: "36px", fontWeight: "bold", margin: "10px 0", color: "#263b2d" }}>124</p>
        </div>
        
        {/* Kotak Info 2 */}
        <div style={{ backgroundColor: "white", padding: "20px", borderRadius: "12px", boxShadow: "0 4px 6px rgba(0,0,0,0.05)" }}>
          <h2 style={{ color: "#66816b", fontSize: "14px", marginTop: 0 }}>BUKU DIPINJAM</h2>
          <p style={{ fontSize: "36px", fontWeight: "bold", margin: "10px 0", color: "#263b2d" }}>12</p>
        </div>
        
        {/* Kotak Info 3 */}
        <div style={{ backgroundColor: "white", padding: "20px", borderRadius: "12px", boxShadow: "0 4px 6px rgba(0,0,0,0.05)" }}>
          <h2 style={{ color: "#66816b", fontSize: "14px", marginTop: 0 }}>ANGGOTA AKTIF</h2>
          <p style={{ fontSize: "36px", fontWeight: "bold", margin: "10px 0", color: "#263b2d" }}>45</p>
        </div>
      </div>

      <div style={{ marginTop: "40px", backgroundColor: "white", padding: "30px", borderRadius: "12px", boxShadow: "0 4px 6px rgba(0,0,0,0.05)" }}>
        <h2 style={{ color: "#315c40", marginBottom: "20px" }}>Selamat Datang di Panel Kontrol</h2>
        <p style={{ color: "#777d74", lineHeight: "1.6" }}>
          Ini adalah halaman MVP Dashboard. Karena kamu sudah berhasil login dan mendapatkan akses dari backend, kamu bisa melihat halaman ini. 
          Nantinya, di sini pustakawan bisa melihat daftar peminjam, menambah buku baru, dan menyetujui pengembalian buku.
        </p>
        <br/>
        <Link href="/" style={{ color: "#315c40", fontWeight: "bold", textDecoration: "none" }}>
          ← Kembali lihat Katalog Utama
        </Link>
      </div>
    </main>
  );
}

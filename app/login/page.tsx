"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault(); 
    setErrorMsg("");

    try {
      const response = await fetch("http://localhost:8000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("token", data.access_token);
        router.push("/dashboard"); 
      } else {
        setErrorMsg("Email atau password salah nih, coba lagi ya!");
      }
    } catch (err) {
      setErrorMsg("Dapur (Backend) belum merespon. Pastikan terminal uvicorn menyala.");
    }
  };

  return (
    <main style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyItems: "center", justifyContent: "center", backgroundColor: "#f7f5ed" }}>
      <div style={{ backgroundColor: "white", padding: "40px", borderRadius: "12px", boxShadow: "0 4px 6px rgba(0,0,0,0.1)", width: "100%", maxWidth: "400px" }}>
        <h1 style={{ color: "#315c40", textAlign: "center", marginBottom: "20px" }}>Masuk ke LibSys</h1>
        
        {errorMsg && (
          <p style={{ color: "#d9534f", backgroundColor: "#fdf7f7", padding: "10px", borderRadius: "8px", textAlign: "center", fontSize: "14px" }}>
            {errorMsg}
          </p>
        )}

        <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          <div>
            <label style={{ display: "block", marginBottom: "5px", color: "#66816b", fontSize: "14px" }}>Email</label>
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              style={{ width: "95%", padding: "10px", borderRadius: "8px", border: "1px solid #ccc" }}
              required 
            />
          </div>
          <div>
            <label style={{ display: "block", marginBottom: "5px", color: "#66816b", fontSize: "14px" }}>Kata Sandi</label>
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              style={{ width: "95%", padding: "10px", borderRadius: "8px", border: "1px solid #ccc" }}
              required 
            />
          </div>
          <button 
            type="submit" 
            style={{ marginTop: "10px", padding: "12px", backgroundColor: "#315c40", color: "white", border: "none", borderRadius: "8px", cursor: "pointer", fontWeight: "bold", fontSize: "16px" }}
          >
            Masuk
          </button>
        </form>

        <p style={{ textAlign: "center", marginTop: "20px", fontSize: "14px", color: "#66816b" }}>
          Belum punya akun? <Link href="/register" style={{ color: "#315c40", fontWeight: "bold", textDecoration: "none" }}>Daftar di sini</Link>
        </p>
      </div>
    </main>
  );
}

from fastapi import FastAPI, HTTPException
from pydantic import BaseModel

app = FastAPI(title="LibSys API")

# Struktur data buku dari sisi pengguna
class Buku(BaseModel):
    judul: str
    penulis: str
    tahun: int

# Data buku sementara (karena belum disambungkan ke database Orang 4)
daftar_buku = []
nomor_id = 1

# Halaman utama backend
@app.get("/")
def beranda():
    return {"pesan": "Backend LibSys berhasil berjalan"}

# 1. API untuk mengambil semua data buku (GET)
@app.get("/buku")
def ambil_semua_buku():
    return {"data": daftar_buku}

# 2. API untuk menambahkan data buku (POST)
@app.post("/buku")
def tambah_buku(buku: Buku):
    global nomor_id
    buku_baru = {"id": nomor_id, "judul": buku.judul, "penulis": buku.penulis, "tahun": buku.tahun}
    daftar_buku.append(buku_baru)
    nomor_id += 1
    return {"pesan": "Buku berhasil ditambahkan", "data": buku_baru}

# 3. API untuk mengedit data buku (PUT)
@app.put("/buku/{buku_id}")
def edit_buku(buku_id: int, buku_update: Buku):
    for buku in daftar_buku:
        if buku["id"] == buku_id:
            buku["judul"] = buku_update.judul
            buku["penulis"] = buku_update.penulis
            buku["tahun"] = buku_update.tahun
            return {"pesan": "Buku berhasil diedit", "data": buku}
    
    raise HTTPException(status_code=404, detail="Buku tidak ditemukan")

# 4. API untuk menghapus data buku (DELETE)
@app.delete("/buku/{buku_id}")
def hapus_buku(buku_id: int):
    for i, buku in enumerate(daftar_buku):
        if buku["id"] == buku_id:
            del daftar_buku[i]
            return {"pesan": "Buku berhasil dihapus"}
            
    raise HTTPException(status_code=404, detail="Buku tidak ditemukan")
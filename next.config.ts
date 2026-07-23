import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      // Konfigurasi Supabase kamu yang sudah ada sebelumnya
      {
        protocol: 'https',
        hostname: 'xhliznshwbogicaypsuk.supabase.co', 
        port: '',
        pathname: '/storage/v1/object/public/**',
      },
      // Tambahkan konfigurasi Wikimedia untuk gambar dummy ini
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org', 
        port: '',
        pathname: '/**', // Izinkan semua path dari domain ini
      },
      // Tambahkan juga images.unsplash.com karena kita pakai untuk dummy fasilitas
      {
        protocol: 'https',
        hostname: 'images.unsplash.com', 
        port: '',
        pathname: '/**', 
      }
    ],
  },
};

export default nextConfig;
import type { NextConfig } from "next";

// Su GitHub Pages (repo di progetto) il sito è servito sotto /NomeRepo.
// La pipeline imposta NEXT_PUBLIC_BASE_PATH = "/NomeRepo"; in locale resta vuoto.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  // Esportazione statica: genera ./out, servibile da GitHub Pages senza server.
  output: "export",
  // GitHub Pages non ha l'ottimizzatore immagini di Next.
  images: { unoptimized: true },
  // URL con slash finale → cartelle con index.html (rotte pulite su Pages).
  trailingSlash: true,
  basePath,
  assetPrefix: basePath,

  // Consente le richieste di sviluppo dall'IP di rete locale (es. test da telefono).
  allowedDevOrigins: ["192.168.1.219"],
};

export default nextConfig;

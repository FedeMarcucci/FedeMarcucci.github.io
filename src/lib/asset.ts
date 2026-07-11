/**
 * Prefisso base del sito (es. "/NomeRepo" su GitHub Pages, vuoto in locale).
 * Deve combaciare con `basePath` in next.config.ts.
 */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

/**
 * Antepone il basePath a un percorso assoluto della cartella /public.
 * Necessario per i tag <img> semplici, che Next non prefissa in automatico.
 */
export function asset(path: string): string {
  return `${BASE_PATH}${path}`;
}

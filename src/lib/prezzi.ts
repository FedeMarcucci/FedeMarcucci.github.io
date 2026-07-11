/**
 * Modello prezzi del Trio Clelia - stima indicativa, IVA esclusa.
 *
 * ⚠️ PLACEHOLDER: sono valori di esempio. Sostituire con il listino reale.
 * Tutta la logica di calcolo (home + pagina /preventivo) parte da qui,
 * così basta modificare questi numeri in un unico punto.
 */
export const LISTINO = {
  /** Cachet base del trio per la cerimonia (tariffa unica, non calcolata a ore). */
  cachetBase: 700,
  /** Costo per ogni ora di prestazione oltre la prima. */
  oraAggiuntiva: 150,
  /** Raggio da Monza (km) incluso nel cachet, senza costi di trasferta. */
  kmInclusi: 30,
  /** Costo per km oltre il raggio incluso (forfait trasferta). */
  costoKm: 0.9,
  /** Numero di arrangiamenti su misura già inclusi nel cachet base. */
  arrangiamentiInclusi: 1,
  /** Costo per ogni ulteriore canzone arrangiata su misura. */
  costoArrangiamento: 80,
};

export type PreventivoInput = {
  /** Distanza da Monza in km. */
  km: number;
  /** Ore di prestazione richieste. */
  ore: number;
  /** Numero di canzoni richieste (arrangiamenti su misura). */
  canzoni: number;
};

export type PreventivoOutput = {
  base: number;
  oreExtra: number;
  trasferta: number;
  arrangiamenti: number;
  kmExtra: number;
  oreOltre: number;
  canzoniExtra: number;
  totale: number;
};

export function calcolaPreventivo({
  km,
  ore,
  canzoni,
}: PreventivoInput): PreventivoOutput {
  const oreOltre = Math.max(0, ore - 1);
  const oreExtra = oreOltre * LISTINO.oraAggiuntiva;

  const kmExtra = Math.max(0, km - LISTINO.kmInclusi);
  const trasferta = Math.round(kmExtra * LISTINO.costoKm);

  const canzoniExtra = Math.max(0, canzoni - LISTINO.arrangiamentiInclusi);
  const arrangiamenti = canzoniExtra * LISTINO.costoArrangiamento;

  const totale = LISTINO.cachetBase + oreExtra + trasferta + arrangiamenti;

  return {
    base: LISTINO.cachetBase,
    oreExtra,
    trasferta,
    arrangiamenti,
    kmExtra,
    oreOltre,
    canzoniExtra,
    totale,
  };
}

/** Formatta un importo in euro, senza decimali. */
export function euro(n: number): string {
  return new Intl.NumberFormat("it-IT", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(n);
}

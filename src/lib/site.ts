/**
 * Configurazione centrale del sito per SEO, social e dati strutturati.
 *
 * L'URL di produzione arriva dalla pipeline (NEXT_PUBLIC_SITE_URL): su GitHub
 * Pages è l'URL completo del sito (dominio + eventuale sottocartella). In
 * locale o come fallback usa il dominio definitivo.
 */
import { LISTINO } from "@/lib/prezzi";

const RAW_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://trioclelia.it";

/** URL base senza slash finale. */
export const SITE_URL = RAW_URL.replace(/\/+$/, "");

/** Costruisce un URL assoluto a partire da un percorso. */
export function url(path = "/"): string {
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export const SITE_NAME = "Trio Clelia";
export const SITE_TITLE =
  "Trio Clelia — Musica dal vivo per matrimoni ed eventi";
export const SITE_DESCRIPTION =
  "Trio Clelia: pianoforte, violino e violoncello dal vivo per matrimoni ed eventi a Milano e in Lombardia. Musicisti diplomati al conservatorio, con un repertorio su misura — anche sulle vostre richieste.";

export const OG_IMAGE = url("/og.jpg");
export const OG_IMAGE_ALT =
  "Trio Clelia — pianoforte, violino e violoncello dal vivo";

export const CONTACT_EMAIL = "trioclelia@gmail.com";
export const CONTACT_TEL = "+39 334 583 3275";

export const MEMBERS = [
  { name: "Federico Marcucci", role: "Pianoforte" },
  { name: "Alessio Santagata", role: "Violino" },
  { name: "Matilda Sasselli", role: "Violoncello" },
];

export const KEYWORDS = [
  "trio musicale matrimonio",
  "musica dal vivo matrimonio",
  "pianoforte violino violoncello",
  "musica per cerimonia",
  "musicisti matrimonio Milano",
  "trio archi e pianoforte",
  "musica matrimonio Lombardia",
  "Trio Clelia",
];

/**
 * Dati strutturati schema.org (grafo) pensati per SEO e GEO: descrivono
 * l'entità "Trio Clelia" con fatti estraibili — chi, dove, cosa, quanto.
 */
export function jsonLd() {
  const id = url("/#trioclelia");
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["MusicGroup", "LocalBusiness"],
        "@id": id,
        name: SITE_NAME,
        alternateName: "Trio Clelia — pianoforte, violino e violoncello",
        description: SITE_DESCRIPTION,
        slogan: "La colonna sonora del vostro giorno più importante.",
        url: url("/"),
        image: OG_IMAGE,
        logo: OG_IMAGE,
        email: CONTACT_EMAIL,
        telephone: CONTACT_TEL,
        priceRange: "€€",
        foundingLocation: { "@type": "Place", name: "Milano, Italia" },
        genre: [
          "Musica classica",
          "Colonne sonore",
          "Pop",
          "Musica per matrimoni",
        ],
        knowsAbout: [
          "Musica dal vivo per matrimoni",
          "Cerimonie religiose e civili",
          "Arrangiamenti su misura per trio",
          "Repertorio classico, colonne sonore e pop",
        ],
        areaServed: [
          { "@type": "City", name: "Milano" },
          { "@type": "AdministrativeArea", name: "Lombardia" },
        ],
        member: MEMBERS.map((m) => ({
          "@type": "Person",
          name: m.name,
          roleName: m.role,
        })),
        makesOffer: {
          "@type": "Offer",
          name: "Musica dal vivo per la cerimonia di matrimonio",
          description:
            "Pianoforte, violino e violoncello dal vivo per la cerimonia. Tariffa unica, non calcolata a ore. Include sopralluogo, attrezzatura professionale, soundcheck, prove sul repertorio concordato e microfoni per gli sposi.",
          price: String(LISTINO.cachetBase),
          priceCurrency: "EUR",
          priceSpecification: {
            "@type": "PriceSpecification",
            price: String(LISTINO.cachetBase),
            priceCurrency: "EUR",
            valueAddedTaxIncluded: false,
          },
          areaServed: "Milano e Lombardia",
          availability: "https://schema.org/InStock",
        },
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "Prenotazioni ed informazioni",
          email: CONTACT_EMAIL,
          telephone: CONTACT_TEL,
          availableLanguage: ["it"],
        },
      },
    ],
  };
}

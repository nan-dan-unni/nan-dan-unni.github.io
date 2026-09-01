import { buildVCard } from "@/data/vcard";

// Runs on Node.js (OpenNext's default runtime on Cloudflare Workers, see
// portfolio/ui-requirements.md §11). Keeps the phone number server-side
// only — it's built into this response, never bundled into client-side JS.

export async function GET() {
  const vcard = buildVCard();
  return new Response(vcard, {
    headers: {
      "Content-Type": "text/vcard; charset=utf-8",
      "Content-Disposition": 'attachment; filename="A-S-Nandanunni.vcf"',
      "Cache-Control": "public, max-age=3600",
    },
  });
}

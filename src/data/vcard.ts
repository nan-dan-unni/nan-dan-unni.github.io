/**
 * The ONLY file in this codebase allowed to contain the phone number.
 * Consumed exclusively by the Save Contact (.vcf) action. Never import
 * PHONE_NUMBER anywhere else — see src/data/site.ts for the reasoning.
 */
const PHONE_NUMBER = "+919188750806";

export function buildVCard() {
  const lines = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    "N:Nandanunni;A S;;;",
    "FN:A S Nandanunni",
    "TITLE:Software Engineer",
    "TEL;TYPE=CELL:" + PHONE_NUMBER,
    "EMAIL;TYPE=INTERNET:asnqln@gmail.com",
    "URL:https://nandanunni.pages.dev",
    "URL:https://github.com/nan-dan-unni",
    "URL:https://www.linkedin.com/in/nan-dan-unni/",
    "ADR;TYPE=WORK:;;Bangalore;Karnataka;;India",
    "END:VCARD",
  ];
  return lines.join("\r\n");
}

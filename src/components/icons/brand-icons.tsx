import { siGithub, siWhatsapp, siTelegram } from "simple-icons/icons";

interface BrandIconProps {
  className?: string;
}

function SimpleIconSvg({
  path,
  title,
  className,
}: {
  path: string;
  title: string;
  className?: string;
}) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <title>{title}</title>
      <path d={path} />
    </svg>
  );
}

export function GithubIcon({ className }: BrandIconProps) {
  return <SimpleIconSvg path={siGithub.path} title="GitHub" className={className} />;
}

export function WhatsappIcon({ className }: BrandIconProps) {
  return <SimpleIconSvg path={siWhatsapp.path} title="WhatsApp" className={className} />;
}

export function TelegramIcon({ className }: BrandIconProps) {
  return <SimpleIconSvg path={siTelegram.path} title="Telegram" className={className} />;
}

/**
 * LinkedIn's mark was pulled from the Simple Icons package (and lucide-react
 * has no brand icons at all), so this is hand-authored from basic shapes
 * rather than a copied brand asset — see portfolio/ui-requirements.md §12,
 * the one flagged case that needs a genuinely custom SVG.
 */
export function LinkedinIcon({ className }: BrandIconProps) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      aria-hidden="true"
    >
      <title>LinkedIn</title>
      <rect x="2" y="2" width="20" height="20" rx="4" strokeWidth="1.6" />
      <circle cx="7.6" cy="7.8" r="1.35" fill="currentColor" stroke="none" />
      <rect x="6.55" y="10.6" width="2.1" height="7.6" rx="0.4" fill="currentColor" stroke="none" />
      <path
        d="M11.5 18.2v-7.6h2.1v1.15c.55-.8 1.45-1.35 2.6-1.35 2.05 0 3.15 1.35 3.15 3.8v4h-2.1v-3.7c0-1.2-.45-2-1.55-2-.85 0-1.35.55-1.6 1.1-.1.2-.1.5-.1.8v3.8z"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  );
}

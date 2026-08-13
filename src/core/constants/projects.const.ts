import {
  BookOpenIcon,
  CalendarClockIcon,
  WalletIcon,
  type LucideIcon,
} from "lucide-react";

export interface YiglooProduct {
  id: string;
  name: string;
  tagline: string;
  description: string;
  status: string;
  icon: LucideIcon;
  color: string;
  href: string;
}

/**
 * Yigloo is the umbrella platform - one identity across a small, focused
 * set of AI-powered apps. Kept separate from YIGLOO_PRODUCTS below so the
 * Work section can render it as the "parent" card and the products as its
 * children.
 */
export const YIGLOO_PLATFORM = {
  name: "Yigloo",
  tagline: "One identity. A growing set of AI-powered apps.",
  description:
    "An ecosystem of focused, AI-powered applications that share a single sign-in and design language. Each product does one thing well - a personal operating system, a finance tracker, and a journal that remembers for you - instead of one app trying to do everything.",
  href: "https://yigloo.app",
} as const;

export const YIGLOO_PRODUCTS: YiglooProduct[] = [
  {
    id: "yendulum",
    name: "Yendulum",
    tagline: "Structured by you. Planned by AI.",
    description:
      "A personal operating system for tasks and habits. It estimates how long each task actually takes and reads its priority straight from how you named it, then turns that into a scheduled day - and replans automatically the moment you fall behind.",
    status: "In development",
    icon: CalendarClockIcon,
    color: "#2563EB",
    href: "https://yendulum.yigloo.app",
  },
  {
    id: "yexit",
    name: "Yexit",
    tagline: "Know where your money goes.",
    description:
      "A finance tracker that fills itself in - parse SMS alerts, upload statements, or connect an account aggregator, and every transaction across every account lands in one place automatically. No manual entry, no spreadsheets, no end-of-month archaeology.",
    status: "In development",
    icon: WalletIcon,
    color: "#007A55",
    href: "https://yexit.yigloo.app",
  },
  {
    id: "yournals",
    name: "Yournals",
    tagline: "Ask your past anything.",
    description:
      "A journal that listens as easily as it reads - type an entry or just talk, and it's saved. Later, ask it anything: why your mood dipped last week, or when you last visited someone, and it surfaces the entry that answers it. A second brain for your own life.",
    status: "In development",
    icon: BookOpenIcon,
    color: "#7C3AED",
    href: "https://yournals.yigloo.app",
  },
];

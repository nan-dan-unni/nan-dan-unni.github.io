"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "lucide-react";

import { Button } from "@/views/components/shadcn/ui/button";

const emptySubscribe = () => () => {};

// resolvedTheme is only known client-side (after next-themes reads
// localStorage/system preference), so the server snapshot must report
// "not mounted yet" to avoid a hydration mismatch on the icon.
function useHasMounted() {
  return React.useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );
}

function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const hasMounted = useHasMounted();

  return (
    <Button
      variant="ghost"
      size="sm"
      className="size-9 px-0"
      aria-label="Toggle theme"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      {hasMounted && resolvedTheme === "dark" ? (
        <SunIcon className="size-4" />
      ) : (
        <MoonIcon className="size-4" />
      )}
    </Button>
  );
}

export default ThemeToggle;

import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/site-config";

/**
 * Floating WhatsApp action button.
 * Fixed bottom-right, animated pulse, opens wa.me chat with prefilled message.
 */
export function WhatsAppFab() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 600);
    return () => clearTimeout(t);
  }, []);

  const number = siteConfig.admin.whatsApp.replace(/[^0-9]/g, "");
  const message = encodeURIComponent(
    `Hello ${siteConfig.shortName}, I'm interested in your projects. Please share more details.`,
  );
  const href = `https://wa.me/${number}?text=${message}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className={`group fixed bottom-5 right-5 z-[90] flex items-center gap-3 transition-all duration-500 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      }`}
    >
      <span className="hidden md:inline-flex items-center rounded-full bg-foreground/90 px-3 py-1.5 text-xs font-medium text-background shadow-lg backdrop-blur opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
        Chat on WhatsApp
      </span>
      <span className="relative flex h-14 w-14 items-center justify-center">
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-60 animate-ping" />
        <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-[0_10px_30px_-10px_rgba(37,211,102,0.7)] ring-2 ring-white/70 transition-transform duration-300 group-hover:scale-110">
          <svg
            viewBox="0 0 32 32"
            className="h-7 w-7 fill-white"
            aria-hidden="true"
          >
            <path d="M19.11 17.28c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.44-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49 0 1.47 1.07 2.89 1.22 3.09.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.7.63.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35zM16.03 5.33c-5.9 0-10.7 4.79-10.7 10.68 0 1.88.5 3.71 1.44 5.32L5.32 26.67l5.5-1.43a10.7 10.7 0 0 0 5.21 1.33h.01c5.9 0 10.7-4.79 10.7-10.68 0-2.85-1.11-5.53-3.13-7.55a10.66 10.66 0 0 0-7.58-3.11zm0 19.55h-.01a8.87 8.87 0 0 1-4.52-1.24l-.32-.19-3.26.85.87-3.18-.21-.33a8.86 8.86 0 0 1-1.36-4.74c0-4.9 3.99-8.88 8.9-8.88 2.38 0 4.61.93 6.29 2.6a8.83 8.83 0 0 1 2.61 6.29c0 4.9-3.99 8.88-8.9 8.88z" />
          </svg>
        </span>
      </span>
    </a>
  );
}
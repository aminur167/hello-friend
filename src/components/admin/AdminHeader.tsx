import { useEffect, useState } from "react";
import { LogOut, Moon, Sun, User } from "lucide-react";
import { useNavigate } from "@tanstack/react-router";
import { toast } from "sonner";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { supabase } from "@/integrations/supabase/client";

export function AdminHeader({ email }: { email?: string | null }) {
  const navigate = useNavigate();
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("admin-theme");
    const isDark = stored === "dark" || (!stored && window.matchMedia("(prefers-color-scheme: dark)").matches);
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("admin-theme", next ? "dark" : "light");
  };

  const signOut = async () => {
    await supabase.auth.signOut();
    toast.success("Signed out");
    navigate({ to: "/auth" });
  };

  return (
    <header className="sticky top-0 z-30 flex h-14 items-center justify-between gap-3 border-b border-border bg-background/95 px-4 backdrop-blur">
      <div className="flex items-center gap-2">
        <SidebarTrigger />
        <span className="text-sm font-medium text-muted-foreground">North End · Admin</span>
      </div>
      <div className="flex items-center gap-2">
        <button
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className="grid h-9 w-9 place-items-center rounded-md border border-border bg-background text-foreground transition-colors hover:bg-accent"
        >
          {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </button>
        {email && (
          <div className="hidden items-center gap-2 rounded-md border border-border bg-background px-3 py-1.5 text-xs sm:flex">
            <User className="h-3.5 w-3.5 text-muted-foreground" />
            <span className="max-w-[160px] truncate text-foreground">{email}</span>
          </div>
        )}
        <button
          onClick={signOut}
          className="inline-flex items-center gap-1.5 rounded-md border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-brand-gold hover:text-brand-gold"
        >
          <LogOut className="h-3.5 w-3.5" /> Sign out
        </button>
      </div>
    </header>
  );
}
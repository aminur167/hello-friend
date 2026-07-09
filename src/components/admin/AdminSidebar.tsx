import { Link, useRouterState } from "@tanstack/react-router";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { adminNav } from "@/lib/admin-nav";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function AdminSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const pathname = useRouterState({ select: (r) => r.location.pathname });

  const isActive = (to: string) => (to === "/admin" ? pathname === "/admin" : pathname === to || pathname.startsWith(`${to}/`));

  return (
    <Sidebar collapsible="icon" className="border-r border-sidebar-border">
      <SidebarHeader className="border-b border-sidebar-border">
        <Link to="/admin" className="flex items-center gap-2.5 px-2 py-1.5">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-brand-gold text-brand-gold-foreground font-bold">
            N
          </span>
          {!collapsed && (
            <div className="min-w-0">
              <div className="truncate text-sm font-semibold text-sidebar-foreground">{siteConfig.name}</div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-sidebar-foreground/60">Admin Panel</div>
            </div>
          )}
        </Link>
      </SidebarHeader>

      <SidebarContent>
        {adminNav.map((group) => (
          <SidebarGroup key={group.label}>
            {!collapsed && <SidebarGroupLabel>{group.label}</SidebarGroupLabel>}
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item) => {
                  const active = isActive(item.to);
                  return (
                    <SidebarMenuItem key={item.to}>
                      <SidebarMenuButton asChild isActive={active} tooltip={item.label}>
                        <Link
                          to={item.to}
                          className={cn(
                            "flex items-center gap-2.5",
                            active && "bg-sidebar-accent text-sidebar-accent-foreground font-medium",
                          )}
                        >
                          <item.icon className="h-4 w-4 shrink-0" />
                          {!collapsed && <span className="truncate">{item.label}</span>}
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>

      <SidebarFooter className="border-t border-sidebar-border p-3">
        {!collapsed && (
          <div className="text-[11px] text-sidebar-foreground/60">v1.0 · Enterprise Edition</div>
        )}
      </SidebarFooter>
    </Sidebar>
  );
}
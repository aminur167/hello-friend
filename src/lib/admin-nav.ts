import type { LucideIcon } from "lucide-react";
import {
  Activity,
  BarChart3,
  Bell,
  Briefcase,
  Building2,
  CalendarCheck,
  FileText,
  Home,
  Image as ImageIcon,
  KeyRound,
  LayoutDashboard,
  MessageSquareQuote,
  Newspaper,
  Search,
  Settings,
  ShieldCheck,
  Users,
  UsersRound,
  Wrench,
} from "lucide-react";

export type AdminNavItem = {
  label: string;
  to: string;
  icon: LucideIcon;
  description?: string;
};

export type AdminNavGroup = {
  label: string;
  items: AdminNavItem[];
};

export const adminNav: AdminNavGroup[] = [
  {
    label: "Overview",
    items: [
      { label: "Dashboard", to: "/admin", icon: LayoutDashboard, description: "Snapshot of leads, bookings & performance" },
      { label: "Analytics", to: "/admin/analytics", icon: BarChart3, description: "Traffic, conversions & funnels" },
      { label: "Reports", to: "/admin/reports", icon: FileText, description: "Exportable KPI reports" },
    ],
  },
  {
    label: "Sales & CRM",
    items: [
      { label: "Leads", to: "/admin/leads", icon: Bell, description: "Every inquiry, booking & site-visit request" },
      { label: "Bookings", to: "/admin/bookings", icon: CalendarCheck, description: "Apartment reservations pipeline" },
      { label: "Customers", to: "/admin/customers", icon: UsersRound, description: "Buyer database & lifecycle" },
      { label: "Testimonials", to: "/admin/testimonials", icon: MessageSquareQuote, description: "Reviews & customer stories" },
    ],
  },
  {
    label: "Content",
    items: [
      { label: "Projects", to: "/admin/projects", icon: Building2, description: "Residential & commercial developments" },
      { label: "Apartments", to: "/admin/apartments", icon: Home, description: "Unit inventory, floor plans & pricing" },
      { label: "Gallery", to: "/admin/gallery", icon: ImageIcon, description: "Project photos & renders" },
      { label: "Blog", to: "/admin/blog", icon: Newspaper, description: "News, articles & guides" },
      { label: "Media Library", to: "/admin/media", icon: ImageIcon, description: "Central asset repository" },
    ],
  },
  {
    label: "Team",
    items: [
      { label: "Employees", to: "/admin/employees", icon: Briefcase, description: "Staff directory & departments" },
      { label: "Career", to: "/admin/career", icon: Briefcase, description: "Job openings & applications" },
    ],
  },
  {
    label: "System",
    items: [
      { label: "Users", to: "/admin/users", icon: Users, description: "Admin accounts" },
      { label: "Roles & Permissions", to: "/admin/roles", icon: ShieldCheck, description: "Access control" },
      { label: "SEO", to: "/admin/seo", icon: Search, description: "Meta tags, sitemaps & indexing" },
      { label: "Website Settings", to: "/admin/settings", icon: Settings, description: "Brand, contact & site config" },
      { label: "Activity Log", to: "/admin/activity", icon: Activity, description: "Audit trail" },
    ],
  },
];

export const flatAdminNav = adminNav.flatMap((g) => g.items);

export const developerNavIcon = Wrench; // reserved for future dev tools
export const authIcon = KeyRound; // reserved
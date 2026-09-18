import {
  AlertTriangle,
  Banknote,
  Bike,
  Boxes,
  Briefcase,
  Building2,
  Circle,
  ClipboardList,
  Cpu,
  FileBarChart2,
  KeyRound,
  LayoutDashboard,
  MapPin,
  Navigation,
  Package,
  PackagePlus,
  PackageSearch,
  Radar,
  Receipt,
  ShieldAlert,
  ShieldCheck,
  Tag,
  TrendingUp,
  UserCheck,
  UserCog,
  UserRound,
  Users,
  Wallet,
  type LucideIcon,
} from "lucide-react";

/**
 * One icon per nav-item key, looked up by the sidebars at render time --
 * the same key (e.g. "wallets", "disputes") is reused across several roles'
 * item lists, so this keeps them visually consistent without repeating the
 * icon assignment in every NAV_GROUPS/NAV_ITEMS array.
 */
export const NAV_ICONS: Record<string, LucideIcon> = {
  dashboard: LayoutDashboard,
  "all-deliveries": Boxes,
  deliveries: Package,
  "manual-queue": ClipboardList,
  "live-drivers": Radar,
  alerts: AlertTriangle,
  roster: Users,
  approvals: UserCheck,
  performance: TrendingUp,
  wallets: Wallet,
  disputes: ShieldAlert,
  "business-clients": Building2,
  "tech-clients": Cpu,
  "api-keys": KeyRound,
  "pricing-config": Tag,
  "internal-users": UserCog,
  "user-roles": ShieldCheck,
  payouts: Banknote,
  reports: FileBarChart2,
  "send-package": PackagePlus,
  "my-deliveries": PackageSearch,
  "track-delivery": MapPin,
  billing: Receipt,
  profile: UserRound,
};

/** Icon shown next to a group heading in the admin sidebar. */
export const NAV_GROUP_ICONS: Record<string, LucideIcon> = {
  Deliveries: Package,
  Dispatch: Navigation,
  Drivers: Bike,
  Users: UserCog,
  Clients: Briefcase,
};

export const NAV_ICON_FALLBACK: LucideIcon = Circle;

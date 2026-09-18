export interface NavItem {
  key: string;
  label: string;
  badge?: string | number;
}

/** Every sidebar (admin and portal) is built from groups -- an unlabeled group renders as flat rows, a labeled one is collapsible. */
export interface NavGroup {
  label?: string;
  items: NavItem[];
}

export const SUPER_ADMIN_NAV_GROUPS: NavGroup[] = [
  { items: [{ key: "dashboard", label: "Dashboard" }] },
  {
    label: "Deliveries",
    items: [
      { key: "all-deliveries", label: "All Deliveries", badge: 142 },
      { key: "manual-queue", label: "Manual Queue", badge: 7 },
    ],
  },
  {
    label: "Dispatch",
    items: [
      { key: "live-drivers", label: "Live Drivers", badge: 48 },
      { key: "alerts", label: "Alerts", badge: 3 },
    ],
  },
  {
    label: "Drivers",
    items: [
      { key: "roster", label: "Roster" },
      { key: "approvals", label: "Approvals", badge: 5 },
      { key: "performance", label: "Performance" },
      { key: "wallets", label: "Wallets" },
      { key: "payouts", label: "Payouts" },
    ],
  },
  {
    label: "Users",
    items: [
      { key: "internal-users", label: "All Users" },
      { key: "user-roles", label: "Roles & Permissions" },
    ],
  },
  {
    label: "Clients",
    items: [
      { key: "business-clients", label: "Business Clients" },
      { key: "tech-clients", label: "Tech Clients" },
      { key: "api-keys", label: "API Keys" },
    ],
  },
  // Flat (non-expandable) items sit together, below every expandable group.
  {
    items: [
      { key: "disputes", label: "Disputes", badge: 2 },
      { key: "pricing-config", label: "Pricing Config" },
      { key: "reports", label: "Reports", badge: "Soon" },
    ],
  },
];

export const DISPATCHER_NAV_GROUPS: NavGroup[] = [
  { items: [{ key: "dashboard", label: "Dashboard" }] },
  {
    label: "Deliveries",
    items: [
      { key: "all-deliveries", label: "All Deliveries" },
      { key: "manual-queue", label: "Manual Queue" },
    ],
  },
  {
    label: "Dispatch",
    items: [
      { key: "live-drivers", label: "Live Drivers" },
      { key: "alerts", label: "Alerts" },
    ],
  },
  { items: [{ key: "disputes", label: "Disputes" }] },
];

export const MANAGER_NAV_GROUPS: NavGroup[] = [
  { items: [{ key: "dashboard", label: "Dashboard" }] },
  {
    label: "Drivers",
    items: [
      { key: "roster", label: "Roster" },
      { key: "performance", label: "Performance" },
      { key: "wallets", label: "Wallets" },
    ],
  },
  {
    items: [
      { key: "deliveries", label: "Deliveries" },
      { key: "disputes", label: "Disputes" },
    ],
  },
];

export const FINANCE_NAV_GROUPS: NavGroup[] = [
  { items: [{ key: "dashboard", label: "Dashboard" }] },
  {
    items: [
      { key: "deliveries", label: "Deliveries" },
      { key: "wallets", label: "Wallets" },
      { key: "payouts", label: "Payouts" },
    ],
  },
];

export const BUSINESS_CLIENT_NAV_GROUPS: NavGroup[] = [
  { items: [{ key: "dashboard", label: "Dashboard" }] },
  {
    items: [
      { key: "send-package", label: "Send a Package", badge: "New" },
      { key: "my-deliveries", label: "My Deliveries" },
      { key: "track-delivery", label: "Track Delivery" },
      { key: "disputes", label: "Disputes" },
      { key: "billing", label: "Billing / Invoices" },
      { key: "profile", label: "Profile" },
    ],
  },
];

export const INDIVIDUAL_NAV_GROUPS: NavGroup[] = [
  { items: [{ key: "dashboard", label: "Dashboard" }] },
  {
    items: [
      { key: "send-package", label: "Send a Package", badge: "New" },
      { key: "my-deliveries", label: "My Deliveries" },
      { key: "track-delivery", label: "Track Delivery" },
      { key: "disputes", label: "Disputes" },
      { key: "profile", label: "Profile" },
    ],
  },
];

/**
 * Canonical folder-based route per nav key, relative to the surface's base
 * path ("" for the surface root itself -- both admin and portal roles
 * share the same base path, "/dashboard").
 *
 * This is deliberately separate from NAV_GROUPS: a key's *route* is fixed
 * regardless of which role is viewing it, while its *grouping* (which
 * label it's nested under, or whether it's shown flat) varies per role --
 * e.g. super_admin nests "wallets" under the "Drivers" group while finance
 * shows it as a flat top-level item, but both must land on the same
 * /dashboard/drivers/wallets page. A group *header* itself (e.g. clicking
 * "Drivers") routes to that feature's landing page, keyed by the group's
 * lowercased label.
 */
export const ADMIN_ROUTES: Record<string, string> = {
  dashboard: "",
  "all-deliveries": "deliveries",
  deliveries: "deliveries",
  "manual-queue": "deliveries/manual-queue",
  dispatch: "dispatch",
  "live-drivers": "dispatch/live-drivers",
  alerts: "dispatch/alerts",
  drivers: "drivers",
  roster: "drivers/roster",
  approvals: "drivers/approvals",
  performance: "drivers/performance",
  wallets: "drivers/wallets",
  payouts: "drivers/payouts",
  users: "users",
  "internal-users": "users",
  "user-roles": "users/roles",
  clients: "clients",
  "business-clients": "clients/business",
  "tech-clients": "clients/tech",
  "api-keys": "clients/api-keys",
  disputes: "disputes",
  "pricing-config": "pricing-config",
  reports: "reports",
};

export const PORTAL_ROUTES: Record<string, string> = {
  dashboard: "",
  "send-package": "send-package",
  "my-deliveries": "my-deliveries",
  "track-delivery": "track-delivery",
  disputes: "disputes",
  billing: "billing",
  profile: "profile",
};

/** Builds the href for a nav key under a surface's base path (e.g. "/dashboard"). */
export function hrefForKey(basePath: string, routes: Record<string, string>, key: string): string {
  const segment = routes[key] ?? key;
  return segment ? `${basePath}/${segment}` : basePath;
}

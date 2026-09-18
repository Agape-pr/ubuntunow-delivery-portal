export interface NavItem {
  key: string;
  label: string;
}

export const SUPER_ADMIN_NAV_ITEMS: NavItem[] = [
  { key: "deliveries", label: "Deliveries" },
  { key: "drivers", label: "Drivers" },
  { key: "users", label: "Users" },
  { key: "business-clients", label: "Business Clients" },
  { key: "tech-clients", label: "Tech Clients" },
  { key: "pricing", label: "Pricing" },
  { key: "disputes", label: "Disputes" },
  { key: "payouts", label: "Payouts" },
  { key: "audit-log", label: "Audit Log" },
];

export const DISPATCHER_NAV_ITEMS: NavItem[] = [
  { key: "deliveries", label: "Deliveries" },
  { key: "manual-queue", label: "Manual Queue" },
  { key: "alerts", label: "Alerts" },
  { key: "live-drivers", label: "Live Drivers" },
  { key: "disputes", label: "Disputes" },
];

export const MANAGER_NAV_ITEMS: NavItem[] = [
  { key: "drivers", label: "Drivers" },
  { key: "performance", label: "Performance" },
  { key: "wallets", label: "Wallets" },
  { key: "deliveries", label: "Deliveries" },
  { key: "disputes", label: "Disputes" },
];

export const FINANCE_NAV_ITEMS: NavItem[] = [
  { key: "deliveries", label: "Deliveries" },
  { key: "wallets", label: "Wallets" },
  { key: "payouts", label: "Payouts" },
  { key: "audit-log", label: "Audit Log" },
];

export const BUSINESS_CLIENT_NAV_ITEMS: NavItem[] = [
  { key: "new-delivery", label: "New Delivery" },
  { key: "my-deliveries", label: "My Deliveries" },
  { key: "disputes", label: "Disputes" },
  { key: "billing", label: "Billing / Invoices" },
  { key: "account-settings", label: "Account Settings" },
];

export const INDIVIDUAL_NAV_ITEMS: NavItem[] = [
  { key: "new-delivery", label: "New Delivery" },
  { key: "my-deliveries", label: "My Deliveries" },
  { key: "disputes", label: "Disputes" },
  { key: "account-settings", label: "Account Settings" },
];

// Placeholder numbers for the Operational Dashboard layout -- swap for a
// TanStack Query hook against deliverOs-be once those endpoints exist.

export interface StatTile {
  label: string;
  value: string;
  meta: string;
  badge?: string;
  badgeVariant?: "default" | "secondary" | "destructive" | "outline";
}

export const STAT_TILES: StatTile[] = [
  { label: "Active Deliveries", value: "142", meta: "+12% vs last hour" },
  { label: "Dispatching", value: "18", meta: "Calculating optimal route", badge: "Live" },
  { label: "Assigned", value: "29", meta: "Awaiting pickup confirmation" },
  { label: "Picked Up", value: "34", meta: "Verified from merchants" },
  { label: "In Transit", value: "52", meta: "Avg delivery speed: 22km/h" },
  {
    label: "Manual Queue",
    value: "7",
    meta: "Requires manual supervisor pairing",
    badge: "Action Req",
    badgeVariant: "destructive",
  },
  {
    label: "Available Drivers",
    value: "38",
    meta: "Across 8 service zones",
    badge: "Ready",
    badgeVariant: "secondary",
  },
  { label: "Busy Drivers", value: "46", meta: "Actively executing jobs" },
  { label: "Offline Drivers", value: "19", meta: "Shift not started or resting" },
  {
    label: "Unack Alerts",
    value: "3",
    meta: "Immediate action required",
    badge: "Critical",
    badgeVariant: "destructive",
  },
];

export interface AlertRow {
  severity: "Critical" | "High" | "Medium";
  delivery: string;
  message: string;
  createdAt: string;
}

export const RECENT_ALERTS: AlertRow[] = [
  {
    severity: "Critical",
    delivery: "#DLV-89421",
    message: "Order unassigned for > 15 mins in Kicukiro District",
    createdAt: "2 mins ago · 14:32 EAT",
  },
  {
    severity: "Critical",
    delivery: "#DLV-89388",
    message: "Estimated arrival exceeded promised SLA threshold",
    createdAt: "7 mins ago · 14:27 EAT",
  },
  {
    severity: "High",
    delivery: "#DLV-89404",
    message: "Stationary for 14 mins near Kigali Heights",
    createdAt: "18 mins ago · 14:16 EAT",
  },
  {
    severity: "Medium",
    delivery: "#DLV-89312",
    message: "Rider traversed 1.2km outside designated corridor",
    createdAt: "41 mins ago · 13:53 EAT",
  },
  {
    severity: "Medium",
    delivery: "#DLV-89290",
    message: "Driver smartphone GPS ping intermittent",
    createdAt: "1 hr ago · 13:30 EAT",
  },
];

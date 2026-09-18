/**
 * Role enum mirrors apps.accounts.models.User.Role in deliverOs-be exactly --
 * keep the two in sync by hand, there's no shared schema yet.
 */
export const ADMIN_ROLES = [
  "super_admin",
  "biras_dispatcher",
  "biras_manager",
  "finance",
] as const;

export const PORTAL_ROLES = ["business_client", "individual"] as const;

export type AdminRole = (typeof ADMIN_ROLES)[number];
export type PortalRole = (typeof PORTAL_ROLES)[number];
export type Role = AdminRole | PortalRole;

export function isAdminRole(role: string): role is AdminRole {
  return (ADMIN_ROLES as readonly string[]).includes(role);
}

export function isPortalRole(role: string): role is PortalRole {
  return (PORTAL_ROLES as readonly string[]).includes(role);
}

/** Every role's landing route -- admin and portal alike share /dashboard now; the sidebar/shell differs, not the URL (see ADMIN_ROUTES/PORTAL_ROUTES in nav-items.ts). */
export function homeRouteForRole(_role: Role): "/dashboard" {
  return "/dashboard";
}

export interface LoginRequest {
  email: string;
  password: string;
}

/** Shape of `data` on a successful POST /api/v1/auth/login/ (see apps.accounts.serializers.TokenResponseSerializer). */
export interface LoginResponseData {
  access: string;
  refresh: string;
  role: Role;
}

export interface ApiSuccessEnvelope<T> {
  success: true;
  data: T;
  meta?: unknown;
}

/** Mirrors apps.common.responses.error_envelope. */
export interface ApiErrorEnvelope {
  success: false;
  error: {
    code: string;
    message: string;
    details?: unknown;
  };
}

export type ApiEnvelope<T> = ApiSuccessEnvelope<T> | ApiErrorEnvelope;

export const ACCESS_TOKEN_COOKIE = "deliveryos_access";
export const REFRESH_TOKEN_COOKIE = "deliveryos_refresh";
export const ROLE_COOKIE = "deliveryos_role";

// Matches the backend's default ACCESS_TOKEN_LIFETIME_MINUTES (15, see
// deliverOs-be/.env.example) -- bump this if that env var is overridden.
export const ACCESS_TOKEN_MAX_AGE = 60 * 15;

// simplejwt's refresh-token lifetime isn't pinned down in deliverOs-be's env
// files yet -- 7 days is a placeholder until that's confirmed.
export const REFRESH_TOKEN_MAX_AGE = 60 * 60 * 24 * 7;

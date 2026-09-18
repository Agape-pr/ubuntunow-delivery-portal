import { cookies } from "next/headers";
import { OperationalDashboard } from "@/components/admin/dashboard/dashboard";
import { DashboardView } from "@/components/portal/dashboard/dashboard";
import { ROLE_COOKIE } from "@/lib/auth-cookies";
import { isAdminRole } from "@/types/auth";

export default async function DashboardPage() {
  const role = (await cookies()).get(ROLE_COOKIE)?.value;
  return isAdminRole(role ?? "") ? <OperationalDashboard /> : <DashboardView />;
}

import { cookies } from "next/headers";
import { AdminDisputesView } from "@/components/admin/disputes/disputes";
import { PortalDisputesView } from "@/components/portal/disputes/disputes";
import { ROLE_COOKIE } from "@/lib/auth-cookies";
import { isAdminRole } from "@/types/auth";

export default async function DisputesPage() {
  const role = (await cookies()).get(ROLE_COOKIE)?.value;
  return isAdminRole(role ?? "") ? <AdminDisputesView /> : <PortalDisputesView />;
}

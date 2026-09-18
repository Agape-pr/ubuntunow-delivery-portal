import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { RECENT_ALERTS, STAT_TILES, type AlertRow } from "./mock-data";

const SEVERITY_VARIANT: Record<AlertRow["severity"], "destructive" | "secondary"> = {
  Critical: "destructive",
  High: "destructive",
  Medium: "secondary",
};

/** Placeholder-data landing view for the "dashboard" section, shared by every admin role. */
export function OperationalDashboard() {
  return (
    <div className="flex flex-col gap-section-gap">
      <div className="flex flex-wrap items-center justify-between gap-gap">
        <div>
          <h1 className="text-headline-sm text-text-dark">Operational Dashboard</h1>
          <p className="text-body-sm text-text-muted">
            Live dispatch metrics, driver availability, and system alerts.
          </p>
        </div>
        <div className="flex items-center gap-gap">
          <Badge variant="outline">Today: Central Africa Time (CAT / Kigali)</Badge>
          <Button size="sm">Refresh Metrics</Button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-gap sm:grid-cols-3 lg:grid-cols-5">
        {STAT_TILES.map((tile) => (
          <Card key={tile.label} size="sm">
            <CardContent className="flex flex-col gap-1">
              <div className="flex items-center justify-between gap-2">
                <p className="text-caption text-text-muted">{tile.label}</p>
                {tile.badge ? <Badge variant={tile.badgeVariant ?? "outline"}>{tile.badge}</Badge> : null}
              </div>
              <p className="text-headline-sm text-text-dark">{tile.value}</p>
              <p className="text-caption text-text-muted">{tile.meta}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardContent className="flex flex-col gap-gap">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-title-md text-text-dark">Recent Alerts</p>
              <p className="text-body-sm text-text-muted">
                Real-time telematics disruptions and SLA boundary infractions.
              </p>
            </div>
            <Badge variant="destructive">{RECENT_ALERTS.length} Unresolved</Badge>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Severity</TableHead>
                <TableHead>Delivery</TableHead>
                <TableHead>Incident Message</TableHead>
                <TableHead>Created At</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {RECENT_ALERTS.map((alert) => (
                <TableRow key={alert.delivery}>
                  <TableCell>
                    <Badge variant={SEVERITY_VARIANT[alert.severity]}>{alert.severity}</Badge>
                  </TableCell>
                  <TableCell className="text-body-sm text-text-dark">{alert.delivery}</TableCell>
                  <TableCell className="text-body-sm text-text-muted">{alert.message}</TableCell>
                  <TableCell className="text-caption text-text-muted">{alert.createdAt}</TableCell>
                  <TableCell className="text-right">
                    <Button variant="outline" size="sm">
                      Inspect
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}

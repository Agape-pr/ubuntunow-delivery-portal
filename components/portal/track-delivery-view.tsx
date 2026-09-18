import { Copy, MessageCircle, Phone } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { DeliveryMilestones } from "./delivery-milestones";
import { MOCK_TRACKED_DELIVERY } from "./track-delivery-mock";

/** Placeholder-data layout for the "track-delivery" section (business_client + individual). */
export function TrackDeliveryView() {
  const delivery = MOCK_TRACKED_DELIVERY;

  return (
    <div className="grid grid-cols-1 gap-section-gap lg:grid-cols-[1fr_320px]">
      <div className="flex flex-col gap-section-gap">
        <Card>
          <CardContent className="flex flex-wrap items-center justify-between gap-gap">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <p className="text-title-md text-text-dark">{delivery.id}</p>
                <Badge>{delivery.status}</Badge>
                <span className="text-body-sm text-text-muted">{delivery.statusDetail}</span>
              </div>
              <p className="text-body-sm text-text-muted">
                {delivery.pickup} <span className="text-primary">&rarr;</span> {delivery.dropoff} ·{" "}
                {delivery.distanceKm} km
              </p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <MessageCircle className="size-4" /> WhatsApp
              </Button>
              <Button variant="outline" size="sm">
                <Copy className="size-4" /> Copy Link
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex flex-col gap-gap">
            <div className="flex h-64 items-center justify-center rounded-md bg-map-base text-body-sm text-text-muted">
              Live map -- coming soon
            </div>
            <div className="grid grid-cols-2 gap-gap sm:grid-cols-4">
              <div>
                <p className="text-caption text-text-muted">Active Corridor</p>
                <p className="text-body-sm text-text-dark">{delivery.corridor}</p>
              </div>
              <div>
                <p className="text-caption text-text-muted">Remaining</p>
                <p className="text-body-sm text-text-dark">{delivery.remainingKm} km</p>
              </div>
              <div>
                <p className="text-caption text-text-muted">Traffic Level</p>
                <p className="text-body-sm text-text-dark">{delivery.trafficLevel}</p>
              </div>
              <div>
                <p className="text-caption text-text-muted">Battery / GPS</p>
                <p className="text-body-sm text-text-dark">{delivery.batteryPct}%</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <p className="text-title-md pb-gap text-text-dark">Dispatch Journey Milestones</p>
            <DeliveryMilestones milestones={delivery.milestones} />
          </CardContent>
        </Card>
      </div>

      <div className="flex flex-col gap-section-gap">
        <Card>
          <CardContent className="flex flex-col gap-gap">
            <p className="text-label-caps text-text-muted">Assigned Courier</p>
            <div>
              <p className="text-body-lg text-text-dark">{delivery.courier.name}</p>
              <p className="text-caption text-text-muted">
                {delivery.courier.rating} rating · {delivery.courier.deliveries} deliveries · Fleet ID{" "}
                {delivery.courier.fleetId}
              </p>
            </div>
            <Separator />
            <p className="text-body-sm text-text-dark">
              {delivery.courier.vehicle} · {delivery.courier.plate}
            </p>
            <div className="flex gap-2">
              <Button size="sm" className="flex-1">
                <Phone className="size-4" /> Call Rider
              </Button>
              <Button variant="outline" size="sm" className="flex-1">
                <MessageCircle className="size-4" /> WhatsApp
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex flex-col gap-gap">
            <p className="text-label-caps text-text-muted">Recipient &amp; Destination</p>
            <div>
              <p className="text-body-lg text-text-dark">{delivery.recipient.name}</p>
              <p className="text-caption text-text-muted">{delivery.recipient.phone}</p>
            </div>
            <p className="text-body-sm rounded-md bg-tip-surface p-3 text-text-dark">
              {delivery.recipient.gateInstructions}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex flex-col gap-gap">
            <p className="text-label-caps text-text-muted">Package &amp; Payment</p>
            <div className="flex justify-between text-body-sm">
              <span className="text-text-muted">Contents ({delivery.package.itemCount} items)</span>
              <span className="text-text-dark">{delivery.package.contents}</span>
            </div>
            <div className="flex justify-between text-body-sm">
              <span className="text-text-muted">Declared Value</span>
              <span className="text-text-dark">
                RWF {delivery.package.declaredValueRwf.toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between text-body-sm">
              <span className="text-text-muted">Delivery Fare</span>
              <span className="text-text-dark">RWF {delivery.package.fareRwf.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-body-sm">
              <span className="text-text-muted">Payment Method</span>
              <span className="text-success">{delivery.package.paymentMethod}</span>
            </div>
            <Separator />
            <button type="button" className="text-body-sm text-left text-destructive hover:underline">
              Report an Issue / Dispute
            </button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

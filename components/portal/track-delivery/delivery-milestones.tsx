import { cn } from "cn";
import { Check } from "lucide-react";
import type { MOCK_TRACKED_DELIVERY } from "./track-delivery-mock";

export function DeliveryMilestones({
  milestones,
}: {
  milestones: (typeof MOCK_TRACKED_DELIVERY)["milestones"];
}) {
  return (
    <div className="flex items-start">
      {milestones.map((milestone, index) => (
        <div key={milestone.key} className="flex flex-1 flex-col items-center last:flex-none">
          <div className="flex w-full items-center">
            <div
              className={cn(
                "flex size-6 shrink-0 items-center justify-center rounded-full border-2",
                milestone.done
                  ? "border-success bg-success text-on-primary"
                  : "border-border bg-surface text-text-muted",
                milestone.active && "ring-2 ring-primary/30"
              )}
            >
              {milestone.done ? <Check className="size-3.5" /> : null}
            </div>
            {index < milestones.length - 1 ? (
              <div className={cn("h-0.5 flex-1", milestone.done ? "bg-success" : "bg-border")} />
            ) : null}
          </div>
          <p className="text-caption mt-2 text-text-dark">{milestone.label}</p>
          <p className="text-caption text-text-muted">{milestone.time ?? "--"}</p>
        </div>
      ))}
    </div>
  );
}

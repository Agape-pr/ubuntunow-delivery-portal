// Placeholder data for the Track Delivery layout -- swap for a TanStack
// Query hook against deliverOs-be's live tracking endpoint once it exists.

export const MOCK_TRACKED_DELIVERY = {
  id: "DLV-90821-RW",
  status: "In Transit",
  statusDetail: "Driver en route · ETA: 14 mins",
  pickup: "Kimihurura",
  dropoff: "Remera Heights",
  distanceKm: 6.4,
  corridor: "KN 5 Rd · Boulevard de l'Umuganda",
  remainingKm: 2.1,
  trafficLevel: "Moderate",
  batteryPct: 92,
  courier: {
    name: "Peter Bizimana",
    rating: 4.9,
    deliveries: 842,
    fleetId: "KGL-MOTO-91",
    vehicle: "TVS HLX 150",
    plate: "RAD 482L",
    speedKmh: 42,
  },
  recipient: {
    name: "Jean-Luc Habimana",
    phone: "+250 788 555 789",
    gateInstructions:
      "Call upon arrival at gate 4, opposite Amahoro entrance. Security will clear access.",
  },
  package: {
    itemCount: 2,
    contents: "Documents & Gift box",
    declaredValueRwf: 40000,
    fareRwf: 3200,
    paymentMethod: "MTN MoMo · Paid",
  },
  milestones: [
    { key: "created", label: "Created", time: "14:10", done: true },
    { key: "dispatching", label: "Dispatching", time: "14:12", done: true },
    { key: "assigned", label: "Assigned", time: "14:14", done: true },
    { key: "picked-up", label: "Picked Up", time: "14:22", done: true },
    { key: "in-transit", label: "In Transit", time: "14:25", done: true, active: true },
    { key: "delivered", label: "Delivered", time: null, done: false },
  ],
};

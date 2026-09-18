# DeliveryOS Frontend

Delivery portal and admin dashboards for **DeliveryOS** — the delivery infrastructure powering the UbuntuNow marketplace and external business clients across Kigali, Rwanda.

UbuntuNow owns the technology. Biras Ltd (existing Kigali moto network) owns delivery operations — drivers, motos, fuel.

This repo is the Next.js frontend. The backend (Firebase Cloud Functions + Django/PostgreSQL API) lives in a separate repo, [`deliverOs-be`](../deliverOs-be).

## What this repo covers

- **Delivery portal** (`ubuntudelivery.rw`) — restaurants, pharmacies, and offices place delivery requests.
- **Admin dashboard** (`admin.ubuntudelivery.rw`) — super admin, Biras dispatcher, and Biras manager views for dispatch, drivers, and payouts.
- **Public tracking page** (`track.ubuntudelivery.rw/{id}`) — no-login, live driver location for a single delivery.

The driver app is a separate React Native project and is not part of this repo.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **UI:** React 19, Tailwind CSS 4
- **Language:** TypeScript
- **Linting:** ESLint (`eslint-config-next`)
- **Backend:** [`deliverOs-be`](../deliverOs-be) — Firebase (real-time) + Django REST API

## Getting started

Requires Node.js 20+.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app. Pages live in `app/` and auto-update as you edit.

Other scripts:

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint
```



*Built on trust. Powered by UbuntuNow Technologies, Kigali, Rwanda

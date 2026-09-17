// proxy.ts redirects every request for "/" to /login or the caller's role
// home before this ever renders -- this is just the static fallback.
export default function Home() {
  return (
    <div className="flex flex-1 items-center justify-center bg-background">
      <p className="text-body-md text-text-muted">Redirecting...</p>
    </div>
  );
}

import { Link } from "react-router"

export default function NotFound() {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center gap-4">
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">404</p>
      <h1 className="font-sans text-4xl font-bold text-foreground">Page not found</h1>
      <Link to="/" className="font-mono text-xs uppercase tracking-[0.15em] text-primary hover:underline">
        Go home
      </Link>
    </main>
  )
}

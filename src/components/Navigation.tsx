
const links = [
  { label: "About", id: "about" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
]

export const Navigation = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <button
          onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}
          className="font-mono text-sm uppercase tracking-[0.2em] text-foreground cursor-pointer"
          >
            TG<span className="text-primary">.</span>
        </button>
        <nav className="flex items-center gap-6">
          {links.map((link) => (
            <button
              onClick={() => document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' })}
              className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground transition-colors hover:text-primary cursor-pointer"
            >
              {link.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  )
}

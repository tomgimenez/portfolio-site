export const About = () => {
  return (
    <section id="about" className="border-b border-border">
      <div className="mx-auto grid max-w-5xl gap-8 px-6 py-20 md:grid-cols-[200px_1fr] md:py-28">
        <h2 className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
          / About
        </h2>
        <div className="max-w-2xl space-y-4">
          <p className="text-balance text-xl leading-relaxed text-foreground md:text-2xl">
            I design and ship backend systems with{" "}
            <span className="text-primary">NestJS</span> and{" "}
            <span className="text-primary">Python</span>, and build the
            interfaces on top with <span className="text-primary">React</span>{" "}
            and <span className="text-primary">TypeScript</span>.
          </p>
          <p className="font-mono text-sm leading-relaxed text-muted-foreground">
            I care about clean architecture, predictable performance, and code
            that holds up under load. No fluff — just systems that work and keep
            working.
          </p>
        </div>
      </div>
    </section>
  )
}

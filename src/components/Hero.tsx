import { ArrowDown } from "lucide-react"
import { GithubIcon } from "@/components/Icons"

export const Hero = () => {
  return (
    <section
      id="top"
      className="relative border-b border-border"
    >

      <img
        src="hero.jpg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full select-none object-cover opacity-10"
      />
      {/* hairline grid accents */}
      <div className="mx-auto max-w-5xl px-6 py-24 md:py-36">
        <p className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-primary">
          Full-Stack Developer
        </p>
        <h1 className="text-balance font-sans text-5xl font-bold leading-[1.05] tracking-tight text-foreground md:text-7xl lg:text-8xl">
          Tomás
          <br />
          Giménez
        </h1>
        <p className="mt-8 max-w-md text-pretty font-mono text-sm leading-relaxed text-muted-foreground md:text-base">
          I build fast, well-structured web applications with modern tooling.
        </p>

        <div className="mt-12 flex flex-wrap items-center gap-4">
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="group inline-flex items-center gap-2 border border-primary bg-primary px-6 py-3 font-mono text-xs uppercase tracking-[0.15em] text-primary-foreground transition-colors hover:bg-transparent hover:text-primary cursor-pointer"
            >
              View Projects
              <ArrowDown className="size-4 transition-transform group-hover:translate-y-0.5" />
            </button>
          <a
            href="https://github.com/tomgimenez"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 border border-border bg-transparent px-6 py-3 font-mono text-xs uppercase tracking-[0.15em] text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            <GithubIcon className="size-4" />
            GitHub
          </a>
        </div>
      </div>
    </section>
  )
}

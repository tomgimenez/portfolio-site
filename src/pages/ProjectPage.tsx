import { ArrowLeft, ArrowUpRight } from "lucide-react"
import { GithubIcon } from "@/components/Icons"
import { projects, getProject } from "@/data/projects.data"
import { Link, useParams } from "react-router"
import NotFound from "./NotFoundPage"

export default function ProjectPage() {

  const { slug } = useParams()
  const project = getProject(slug!)
  if (!project) return <NotFound />;

  const index = projects.findIndex((p) => p.slug === slug)
  const next = projects[(index + 1) % projects.length]

  return (
    <main className="min-h-dvh bg-background">
      {/* top bar */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-sm">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="size-4" />
            Back
          </Link>
          <Link
            to="/#top"
            className="font-mono text-sm uppercase tracking-[0.2em] text-foreground"
          >
            TG<span className="text-primary">.</span>
          </Link>
        </div>
      </header>

      {/* hero */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-5xl px-6 py-16 md:py-24">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-xs uppercase tracking-[0.2em] text-primary">
            <span>{project.year}</span>
            <span className="text-border">/</span>
            <span className="text-muted-foreground">{project.role}</span>
          </div>
          <h1 className="mt-6 text-balance font-sans text-4xl font-bold leading-[1.05] tracking-tight text-foreground md:text-6xl">
            {project.title}
          </h1>
          <p className="mt-6 max-w-2xl text-pretty font-mono text-sm leading-relaxed text-muted-foreground md:text-base">
            {project.description}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 border border-primary bg-primary px-6 py-3 font-mono text-xs uppercase tracking-[0.15em] text-primary-foreground transition-colors hover:bg-transparent hover:text-primary"
            >
              Live site
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-border bg-transparent px-6 py-3 font-mono text-xs uppercase tracking-[0.15em] text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <GithubIcon className="size-4" />
              Source
            </a>
          </div>
        </div>
      </section>

      {/* cover image */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-5xl px-6 py-12">
          <div className="relative aspect-video overflow-hidden border border-border">
            <img
              src={project.image || "/placeholder.svg"}
              alt={`${project.title} interface`}
              loading="eager"
              fetchPriority="high"
              className="absolute inset-0 w-full h-full object-cover"
              sizes="(min-width: 1024px) 1024px, 100vw"
            />
          </div>
        </div>
      </section>

      {/* metrics */}
      <section className="border-b border-border">
        <div className="mx-auto grid max-w-5xl grid-cols-1 sm:grid-cols-3">
          {project.metrics.map((m, i) => (
            <div
              key={m.label}
              className={`px-6 py-10 ${
                i < project.metrics.length - 1 ? "border-b border-border sm:border-b-0 sm:border-r" : ""
              }`}
            >
              <p className="font-sans text-4xl font-bold tracking-tight text-primary md:text-5xl">
                {m.value}
              </p>
              <p className="mt-2 font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">
                {m.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* body */}
      <section className="border-b border-border">
        <div className="mx-auto grid max-w-5xl gap-12 px-6 py-20 md:grid-cols-[1fr_280px] md:py-28">
          <div className="flex flex-col gap-16">
            {/* overview */}
            <div>
              <h2 className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
                / Overview
              </h2>
              <div className="flex flex-col gap-4">
                {project.overview.map((para, i) => (
                  <p
                    key={i}
                    className="text-pretty font-sans text-base leading-relaxed text-foreground md:text-lg"
                  >
                    {para}
                  </p>
                ))}
              </div>
            </div>

            {/* challenge */}
            <div>
              <h2 className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
                / The Challenge
              </h2>
              <p className="text-pretty font-sans text-base leading-relaxed text-foreground md:text-lg">
                {project.challenge}
              </p>
            </div>

            {/* solution */}
            <div>
              <h2 className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
                / The Solution
              </h2>
              <p className="text-pretty font-sans text-base leading-relaxed text-foreground md:text-lg">
                {project.solution}
              </p>
            </div>

            {/* features */}
            <div>
              <h2 className="mb-8 font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
                / Key Features
              </h2>
              <ul className="flex flex-col">
                {project.features.map((f, i) => (
                  <li
                    key={f.title}
                    className="flex gap-5 border-t border-border py-6 last:border-b"
                  >
                    <span className="font-mono text-sm text-primary">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-sans text-lg font-bold tracking-tight text-foreground">
                        {f.title}
                      </h3>
                      <p className="mt-2 font-mono text-sm leading-relaxed text-muted-foreground">
                        {f.detail}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* sticky stack sidebar */}
          <aside className="md:sticky md:top-24 md:self-start">
            <h2 className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
              / Stack
            </h2>
            <div className="flex flex-col gap-6 border border-border p-6">
              {project.stack.map((group) => (
                <div key={group.label}>
                  <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.2em] text-primary">
                    {group.label}
                  </p>
                  <ul className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="border border-border px-2.5 py-1 font-mono text-[11px] uppercase tracking-widest text-foreground"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      {/* next project */}
      <section>
        <Link
          to={`/projects/${next.slug}`}
          className="group block"
        >
          <div className="mx-auto flex max-w-5xl flex-col gap-2 px-6 py-16 md:flex-row md:items-center md:justify-between md:py-20">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
                Next project
              </p>
              <p className="mt-3 font-sans text-3xl font-bold tracking-tight text-foreground transition-colors group-hover:text-primary md:text-4xl">
                {next.title}
              </p>
            </div>
            <ArrowUpRight className="size-8 text-muted-foreground transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-primary" />
          </div>
        </Link>
      </section>
    </main>
  )
}

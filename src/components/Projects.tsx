import { ArrowUpRight } from "lucide-react"
import { GithubIcon } from "@/components/Icons"
import { Link } from "react-router"
import { projects, type Project } from "@/data/projects.data"

function ProjectCard({ project, priority }: { project: Project; priority?: boolean }) {
  return (
    <article className="group flex flex-col border border-border bg-card transition-colors hover:border-primary">
      <div className="relative aspect-16/10 overflow-hidden border-b border-border">
      <Link to={`/projects/${project.slug}`}>
        <img
          src={project.image || "/placeholder.svg"}
          alt={`${project.title} screenshot`}
          fetchPriority={priority ? "high" : "auto"}
          className="absolute inset-0 w-full h-full object-cover opacity-80 transition-opacity group-hover:opacity-100"
          sizes="(min-width: 768px) 50vw, 100vw"
        />
      </Link>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-bold tracking-tight text-foreground">
            {project.title}
          </h3>
          <div className="flex items-center gap-2">
            <a
              href={project.href}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open ${project.title} live site`}
              className="border border-border p-2 text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <ArrowUpRight className="size-4" />
            </a>
            <a
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open ${project.title} repository`}
              className="border border-border p-2 text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <GithubIcon className="size-4" />
            </a>
          </div>
        </div>
        <p className="mt-3 flex-1 font-mono text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>
        <ul className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="border border-border px-2.5 py-1 font-mono text-[11px] uppercase tracking-widest text-foreground"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}

export const Projects = () => {

  return (
    <section id="projects" className="border-b border-border">
      <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
        <div className="mb-12 flex items-baseline justify-between">
          <h2 className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
            / Projects
          </h2>
          <span className="font-mono text-xs text-muted-foreground">
            {String(projects.length).padStart(2, "0")}
          </span>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} priority={i === 0} />
          ))}
        </div>
      </div>
    </section>
  )
}

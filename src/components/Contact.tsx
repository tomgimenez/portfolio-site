import { Mail } from "lucide-react"
import { GithubIcon, LinkedinIcon } from "@/components/Icons"

const contacts = [
  {
    label: "Email",
    value: "tomasgimenez86@gmail.com",
    href: "mailto:tomas@example.com",
    icon: Mail,
  },
  {
    label: "GitHub",
    value: "github.com/tomgimenez",
    href: "https://github.com/tomgimenez",
    icon: GithubIcon,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/tomasgimenez",
    href: "https://linkedin.com/in/tomasgimenez",
    icon: LinkedinIcon,
  },
]

export function Contact() {
  return (
    <section id="contact">
      <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
        <h2 className="mb-12 font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
          / Contact
        </h2>
        <p className="mb-10 max-w-md text-balance text-2xl font-bold tracking-tight text-foreground md:text-3xl">
          Let&apos;s build something solid.
        </p>
        <ul className="divide-y divide-border border-y border-border">
          {contacts.map((c) => {
            const Icon = c.icon
            return (
              <li key={c.label}>
                <a
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel={c.href.startsWith("http") ? "noreferrer" : undefined}
                  className="group flex items-center justify-between gap-4 py-5 transition-colors hover:text-primary"
                >
                  <span className="flex items-center gap-4">
                    <Icon className="size-5 text-primary" />
                    <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      {c.label}
                    </span>
                  </span>
                  <span className="font-mono text-sm text-foreground transition-colors group-hover:text-primary">
                    {c.value}
                  </span>
                </a>
              </li>
            )
          })}
        </ul>
        <p className="mt-16 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Tomás Giménez — {new Date().getFullYear()}
        </p>
      </div>
    </section>
  )
}

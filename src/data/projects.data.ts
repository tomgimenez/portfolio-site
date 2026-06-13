export type Project = {
  slug: string
  title: string
  year: string
  role: string
  description: string
  tags: string[]
  image: string
  href: string
  repo: string
  // detail content
  overview: string[]
  challenge: string
  solution: string
  features: { title: string; detail: string }[]
  stack: { label: string; items: string[] }[]
  metrics: { value: string; label: string }[]
}

export const projects: Project[] = [
  {
    slug: "lorevault-market",
    title: "The LoreVault Market",
    year: "2025",
    role: "Lead Full-Stack Developer",
    description:
      "An e-commerce platform built on a microservices architecture, handling catalog, orders, and payments as independent services.",
    tags: ["NestJS", "React", "Microservices"],
    image: "/the-lore-vault-3.png",
    href: "https://example.com",
    repo: "https://github.com/tomgimenez/e-commerce-frontend",
    overview: [
      "The LoreVault Market is a production-grade e-commerce platform for collectible tabletop and lore-driven merchandise. It was designed from the ground up as a distributed system, where each business capability — catalog, cart, orders, payments, and notifications — runs as an independent, individually deployable service.",
      "The goal was to build something that could scale horizontally during seasonal traffic spikes without forcing a full-stack redeploy, while keeping each domain isolated enough that a failure in payments never takes down product browsing.",
    ],
    challenge:
      "Early versions ran as a single monolith. As the catalog grew past tens of thousands of SKUs and traffic became spiky around product drops, deploys got risky and a slow payment provider could lock up the entire request pipeline. We needed isolation, independent scaling, and resilient communication between domains.",
    solution:
      "I decomposed the system into bounded-context services communicating over a message broker. Synchronous reads go through an API gateway, while order and payment workflows are event-driven and asynchronous. Each service owns its own database, and a saga pattern coordinates the multi-step checkout flow with compensating transactions for failures.",
    features: [
      {
        title: "Event-driven checkout saga",
        detail:
          "Orders, inventory holds, and payment capture are orchestrated as a saga. If payment fails, compensating events automatically release reserved stock so inventory never drifts.",
      },
      {
        title: "API gateway + BFF",
        detail:
          "A NestJS gateway aggregates data from multiple services and exposes a single typed contract to the React frontend, keeping the client unaware of the underlying topology.",
      },
      {
        title: "Independent scaling",
        detail:
          "The catalog read service scales separately from payments, so traffic spikes during drops never starve the checkout path.",
      },
      {
        title: "Idempotent payments",
        detail:
          "Every payment intent carries an idempotency key, making retries safe and preventing double charges under network failures.",
      },
    ],
    stack: [
      { label: "Backend", items: ["NestJS", "Node.js", "TypeScript", "PostgreSQL", "Redis"] },
      { label: "Messaging", items: ["RabbitMQ", "Event sourcing", "Saga pattern"] },
      { label: "Frontend", items: ["React", "TypeScript", "TanStack Query"] },
      { label: "Infra", items: ["Docker", "Kubernetes", "GitHub Actions"] },
    ],
    metrics: [
      { value: "5", label: "Independent services" },
      { value: "40k+", label: "Catalog SKUs" },
      { value: "99.9%", label: "Checkout uptime" },
    ],
  },
  {
    slug: "react-performance-lab",
    title: "React Performance Lab",
    year: "2024",
    role: "Frontend Engineer",
    description:
      "A dashboard demonstrating render optimization patterns — memoization, virtualization, and profiling in a live playground.",
    tags: ["Vite", "TypeScript", "Tailwind"],
    image: "/react-perf-lab.png",
    href: "https://tomasgimenez.com/react-performance-lab",
    repo: "https://github.com/tomgimenez/react-performance-lab",
    overview: [
      "React Performance Lab is an interactive teaching tool and live playground that visualizes how common rendering optimizations actually affect frame timing and commit counts. It pairs side-by-side 'naive' and 'optimized' implementations so the impact of each technique is measurable, not theoretical.",
      "It was built to answer a recurring question on teams I've worked with: when does memoization actually help, and when is it just noise? The lab makes the tradeoffs visible with real profiling data.",
    ],
    challenge:
      "Rendering performance advice online is mostly folklore. Developers sprinkle useMemo and useCallback everywhere without measuring, often adding overhead instead of removing it. I wanted a tool that demonstrated the real cost and benefit of each pattern on large, realistic datasets.",
    solution:
      "I built a controlled benchmark harness that renders the same component tree two ways and instruments both with the React Profiler API. A virtualized list handles 50k rows, and the UI overlays commit duration, render counts, and dropped frames in real time as you toggle each optimization.",
    features: [
      {
        title: "Live A/B render harness",
        detail:
          "Naive and optimized trees render simultaneously with the React Profiler measuring actual commit durations for an honest comparison.",
      },
      {
        title: "List virtualization",
        detail:
          "A windowed list renders only visible rows from a 50k-item dataset, keeping the DOM small and scrolling smooth at 60fps.",
      },
      {
        title: "Memoization explorer",
        detail:
          "Toggle memo, useMemo, and useCallback on the fly to watch how each affects re-render counts under different prop-change scenarios.",
      },
      {
        title: "Frame-timing overlay",
        detail:
          "A heads-up overlay charts commit duration and dropped frames so regressions are immediately visible.",
      },
    ],
    stack: [
      { label: "Core", items: ["React", "TypeScript", "Vite"] },
      { label: "Styling", items: ["Tailwind CSS", "CSS containment"] },
      { label: "Tooling", items: ["React Profiler API", "Web Vitals", "Vitest"] },
    ],
    metrics: [
      { value: "50k", label: "Rows virtualized" },
      { value: "60fps", label: "Sustained scroll" },
      { value: "8", label: "Patterns demoed" },
    ],
  },
  // {
  //   slug: "fastapi-analyzer",
  //   title: "FastAPI Analyzer",
  //   year: "2023",
  //   role: "Backend Developer",
  //   description:
  //     "A document analysis microservice that extracts structure and metadata from uploads via an async processing pipeline.",
  //   tags: ["Python", "FastAPI"],
  //   image: "/textures/fastapi.png",
  //   href: "https://example.com",
  //   repo: "https://github.com",
  //   overview: [
  //     "FastAPI Analyzer is a backend microservice that ingests documents — PDFs, scans, and office files — and returns structured metadata: detected sections, tables, key entities, and a normalized text representation. It's designed to sit behind a queue and process work asynchronously so large uploads never block the API.",
  //     "It started as an internal tool to replace a brittle, synchronous parsing script and grew into a reusable service with a clean OpenAPI contract.",
  //   ],
  //   challenge:
  //     "The original parser ran inline in a request handler, so a single large PDF could tie up a worker for minutes and time out the client. There was no retry logic, no progress visibility, and no way to scale parsing independently from the API.",
  //   solution:
  //     "I split ingestion from processing: uploads are accepted, validated, and pushed onto a task queue, returning a job ID immediately. Background workers pull jobs, run the extraction pipeline, and write results to storage. Clients poll a status endpoint or receive a webhook on completion. FastAPI's async stack and Pydantic models keep the contract strict and self-documenting.",
  //   features: [
  //     {
  //       title: "Async job pipeline",
  //       detail:
  //         "Uploads return a job ID instantly; workers process documents in the background and report progress, so the API stays responsive under heavy load.",
  //     },
  //     {
  //       title: "Typed, self-documenting API",
  //       detail:
  //         "Pydantic models generate an accurate OpenAPI spec automatically, giving consumers a precise contract and interactive docs out of the box.",
  //     },
  //     {
  //       title: "Resilient extraction",
  //       detail:
  //         "Each pipeline stage is retryable and isolated, so a failure parsing one section doesn't discard the work already done on the rest.",
  //     },
  //     {
  //       title: "Pluggable extractors",
  //       detail:
  //         "Format handlers are registered through a simple interface, making it straightforward to add support for new document types.",
  //     },
  //   ],
  //   stack: [
  //     { label: "Core", items: ["Python", "FastAPI", "Pydantic", "asyncio"] },
  //     { label: "Processing", items: ["Celery", "Redis", "PyMuPDF"] },
  //     { label: "Storage", items: ["PostgreSQL", "S3-compatible blob"] },
  //     { label: "Quality", items: ["pytest", "mypy", "Ruff"] },
  //   ],
  //   metrics: [
  //     { value: "~3s", label: "Avg parse time" },
  //     { value: "100%", label: "Async throughput" },
  //     { value: "6", label: "File formats" },
  //   ],
  // },
]

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

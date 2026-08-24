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
    tags: ["NestJS", "React", "PostgreSQL", "Microservices"],
    image: "/the-lore-vault-3.png",
    href: "https://lore-vault.tomasgimenez.com/",
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
  {
    slug: "digit-recognizer",
    title: "Digit Recognizer",
    year: "2026",
    role: "Fullstack Engineer",
    description:
      "Application that recognizes handwritten digits in real time through a Machine Learning model.",
    tags: ["Machine Learning", "Python", "Sci-kit Learn", "Logistic Regression"],
    image: "/digit-recognizer.png",
    href: "https://digit-recognizer-frontend.onrender.com",
    repo: "https://github.com/tomgimenez/digit-recognizer",
    overview: [
      "Digit Recognizer is a full-stack application that recognizes handwritten digits in real time. ",
      "The user draws a number on a canvas, and a Machine Learning model trained on the MNIST dataset predicts which digit it is, along with the full probability distribution across all 10 possible classes.",
      "The model is trained using scikit-learn, specifically LogisticRegression, the same logistic regression algorithm covered in the theory, applied here to a multiclass classification problem"
    ],
    challenge:
      "This project started as a hands-on exercise to apply, end to end, the core concepts from a first Machine Learning course: supervised learning, logistic regression, cost functions, and gradient descent.",
    solution:
      "The goal wasn't to build something innovative, but to prove the ability to take those theoretical concepts and turn them into a real, usable, interactive application — from training the model to a UI that anyone can actually try out.",
    features: [
      {
        title: "Live handwritten digit prediction",
        detail: "Draw a digit on an interactive canvas and get an instant prediction from a logistic regression model trained on MNIST, along with the full confidence distribution across all 10 classes.",
      },
      {
        title: "Robust image preprocessing pipeline",
        detail: "A custom preprocessing pipeline replicates the MNIST format from raw canvas input: automatic background polarity detection, bounding-box cropping, aspect-ratio-preserving resize, center-of-mass centering, and contrast stretching.",
      },
      {
        title: "Confidence breakdown, not just a label",
        detail: "Every prediction returns a probability score for all 10 digits, visualized as a ranked bar chart, showing how the model actually reasons instead of just outputting a single guess.",
      },
      {
        title: "Real-time latency tracking",
        detail: "The UI measures and displays end-to-end request latency for every prediction, giving visibility into real-world model performance, not just accuracy on a test set.",
      },
      {
        title: "Sorayama-inspired chrome UI",
        detail: "A distinctive, robotic/chrome interface generated with v0, moving away from generic ML-demo aesthetics.",
      }
    ],
    stack: [
      { label: "Backend", items: ["Python", "FastAPI"] },
      { label: "Frontend", items: ["React", "TypeScript", "Vite"] },
      { label: "Tooling", items: ["Sci-kit Learn", "MNIST", "NumPy", "Joblib"] },
    ],
    metrics: [
      { value: "92%", label: "Test accuracy" },
      { value: "70K", label: "Training images (MNIST)" },
      { value: "784", label: "Input features per image" },
    ],
  },
]

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

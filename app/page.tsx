"use client";

import React, { useState, useEffect } from "react";
import {
  ExternalLink,
  Mail,
  Phone,
  CheckCircle2,
  Code2,
  Server,
  Cloud,
  Cpu,
  ShieldCheck,
  Award,
  BookOpen,
  Briefcase,
  ChevronRight,
  Sun,
  Moon,
  Sparkles,
  ArrowUpRight,
  Gamepad2,
  Terminal,
} from "lucide-react";

function GithubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function PortfolioPage() {
  const [isDark, setIsDark] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("theme");
    if (saved === "light") {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    } else {
      setIsDark(true);
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    }
  }, []);

  const toggleTheme = () => {
    setIsDark((prev) => {
      const next = !prev;
      if (next) {
        document.documentElement.classList.add("dark");
        document.documentElement.classList.remove("light");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        document.documentElement.classList.add("light");
        localStorage.setItem("theme", "light");
      }
      return next;
    });
  };

  // Tier 1: Flagship Full-Stack & GenAI Applications
  const flagshipProjects = [
    {
      id: "resume-radar",
      title: "Resume Radar",
      badge: "Live on Vercel",
      badgeColor: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
      description:
        "Privacy-by-design AI ATS analyzer. Parses binary PDF and DOCX files directly in-browser using web workers without server persistence, evaluating resume alignment gaps against job descriptions via Claude API.",
      stack: ["React 19", "TypeScript", "Tailwind CSS v4", "Express", "Claude API", "pdfjs-dist", "Vercel"],
      liveUrl: "https://resume-radar-hvb3ka7hq-hasitha-nilwakkas-projects.vercel.app/",
      githubUrl: "https://github.com/Hasitha-Nilwakka/resume-radar",
      highlights: [
        "100% in-browser client binary parsing (zero server-side storage risk)",
        "Deterministic JSON schema enforcement for compatibility scoring & bullet rewrites",
        "Includes instant 1-click sample report preview for recruiters",
      ],
    },
    {
      id: "ghostwriter",
      title: "Ghostwriter",
      badge: "Serverless GenAI",
      badgeColor: "bg-purple-500/20 text-purple-400 border-purple-500/30",
      description:
        "Intelligent content generation studio powered by asynchronous serverless GPU inference (vLLM on RunPod). Features a deterministic self-correcting QA validation loop and client-side multi-format compiler.",
      stack: ["Next.js 16 (App Router)", "React 19", "RunPod vLLM", "Zod 4", "Zustand 5", "TanStack Query", "Docker"],
      liveUrl: "https://ghostwriter-bice.vercel.app/",
      githubUrl: "https://github.com/Hasitha-Nilwakka/ghostwriter",
      highlights: [
        "Asynchronous serverless GPU inference with sub-60s latency",
        "Self-healing quality engine enforcing ±10% word bounds with automated corrective retry",
        "In-place editor with multi-format compiler exporting to TXT, MD, HTML, and PDF 1.4",
      ],
    },
    {
      id: "match-me",
      title: "Match Me",
      badge: "Go & Next.js Full-Stack",
      badgeColor: "bg-rose-500/20 text-rose-400 border-rose-500/30",
      description:
        "kood/Sisu group project developed by a team of three. Full-stack matchmaking application built with a high-performance Go backend and Next.js App Router frontend, featuring proximity-based spatial recommendations and real-time chat.",
      stack: ["Go 1.24", "Next.js 15 (App Router)", "PostgreSQL", "Socket.IO", "Prisma", "GORM", "Tailwind CSS"],
      githubUrl: "https://github.com/Hasitha-Nilwakka/match-me",
      highlights: [
        "Engineered bounding-box spatial pre-filtering and Haversine distance calculations in Go, reducing database query overhead by ~90%",
        "Integrated browser Geolocation API with interactive radius sliders and custom PostgreSQL composite spatial indexes",
        "Real-time multi-client chat with Socket.IO, presence detection, and 120 seeded Nordic test profiles across Finnish municipalities",
      ],
    },
    {
      id: "fluxa-framework",
      title: "Fluxa Framework",
      badge: "Core Web Runtime",
      badgeColor: "bg-sky-500/20 text-sky-400 border-sky-500/30",
      description:
        "kood/Sisu group project contributed by Hasitha Nilwakka. A lightweight, React-like frontend framework built from scratch in vanilla JavaScript featuring custom virtual DOM reconciliation, reactive state observers, and zero runtime dependencies.",
      stack: ["Vanilla JavaScript (ES6+)", "Virtual DOM", "Reactive State", "HTML5 History API"],
      liveUrl: "https://fluxa-framework.vercel.app/",
      githubUrl: "https://github.com/Hasitha-Nilwakka/fluxa-framework",
      highlights: [
        "Reactive state management, Virtual DOM diffing, and component mounting engine",
        "Includes interactive Team Kanban board, Todo app, and automated in-browser test suite",
        "Zero bundlers or third-party dependencies; native ES modules execution in-browser",
      ],
    },
  ];

  // Tier 2: Cloud & Platform Foundations (Separated & De-emphasized)
  const devopsProjects = [
    {
      id: "gitops-galaxy",
      title: "GitOps Galaxy & Voyager",
      category: "Cloud Architecture",
      description:
        "Cloud-native migration and GitOps delivery platform migrating a Go Fiber and React application to Google Kubernetes Engine (GKE), private Cloud SQL, and automated Argo CD reconciliation.",
      stack: ["Kubernetes (GKE)", "Terraform", "Argo CD", "Helm", "Jenkins", "FinOps", "GCP"],
      githubUrl: "https://github.com/Hasitha-Nilwakka",
      keyPoint: "Engineered segregated GKE node pools, Helm values validation, and automated GitOps rollback.",
    },
    {
      id: "sherlock-logs",
      title: "Sherlock Logs",
      category: "Infrastructure as Code & Observability",
      description:
        "Zero-touch automated multi-tier 7-VM infrastructure provisioning and telemetry stack deploying NGINX round-robin reverse proxying, Prometheus, Alertmanager, and the Elastic Stack.",
      stack: ["Vagrant", "Ansible", "Prometheus", "Grafana", "Elasticsearch", "Logstash", "Kibana"],
      githubUrl: "https://github.com/Hasitha-Nilwakka",
      keyPoint: "Single-command (./launch.sh) automated provisioning, hardening, and distributed log shipping.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 glass-panel border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-400 to-indigo-600 flex items-center justify-center font-bold text-white text-lg shadow-lg shadow-sky-500/20">
              HN
            </div>
            <div>
              <span className="font-bold text-slate-100 tracking-tight text-base sm:text-lg block leading-tight">
                Hasitha Nilwakka
              </span>
              <span className="text-xs text-sky-400 font-medium">Full-Stack & Systems Engineer</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-300">
            <a href="#about" className="hover:text-sky-400 transition-colors">
              Hybrid Advantage
            </a>
            <a href="#flagship" className="hover:text-sky-400 transition-colors">
              Featured Apps
            </a>
            <a href="#cloud-foundations" className="hover:text-sky-400 transition-colors">
              Cloud Foundations
            </a>
            <a href="#skills" className="hover:text-sky-400 transition-colors">
              Skills
            </a>
            <a href="#experience" className="hover:text-sky-400 transition-colors">
              Experience
            </a>
          </nav>

          <div className="flex items-center space-x-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-slate-800/60 transition-colors"
              aria-label="Toggle Theme"
            >
              {mounted && !isDark ? (
                <Moon className="w-5 h-5 text-indigo-500" />
              ) : (
                <Sun className="w-5 h-5 text-amber-400" />
              )}
            </button>
            <a
              href="https://resume-radar-hvb3ka7hq-hasitha-nilwakkas-projects.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-lg bg-sky-500/10 text-sky-400 border border-sky-500/30 text-xs font-semibold hover:bg-sky-500/20 transition-all"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Live Demo</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 md:pt-28 md:pb-24 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute top-1/3 right-10 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            {/* Status Pill */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full glass-panel text-xs font-medium text-slate-300 mb-6 border border-slate-700/60 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Espoo, Finland</span>
              <span className="text-slate-500">•</span>
              <span className="text-emerald-400 font-semibold">Valid Finnish Residence Permit (Immediate Right to Work)</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-100 mb-6 leading-tight">
              Full-Stack & AI Builder with{" "}
              <span className="text-gradient">Senior Operational Maturity</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 mb-10 leading-relaxed font-normal">
              Combining <strong>10+ years of international commercial banking, operations, and MBA leadership</strong> with modern <strong>Full-Stack engineering (TypeScript, React 19, Next.js 16, Go)</strong>, production GenAI inference, and cloud deployment literacy.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="#flagship"
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 text-white font-semibold text-sm shadow-lg shadow-sky-500/25 hover:brightness-110 transition-all flex items-center space-x-2"
              >
                <span>View Full-Stack & AI Projects</span>
                <ChevronRight className="w-4 h-4" />
              </a>

              <a
                href="https://resume-radar-hvb3ka7hq-hasitha-nilwakkas-projects.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl glass-panel text-slate-200 font-semibold text-sm hover:bg-slate-800 transition-all flex items-center space-x-2"
              >
                <span>Launch Resume Radar (Live Demo)</span>
                <ArrowUpRight className="w-4 h-4 text-sky-400" />
              </a>

              <a
                href="https://github.com/Hasitha-Nilwakka"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3.5 rounded-xl glass-panel text-slate-300 hover:text-white transition-all flex items-center space-x-2 text-sm"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub Profile</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* The Hybrid Advantage */}
      <section id="about" className="py-16 bg-slate-900/40 border-y border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-xs font-bold tracking-widest text-sky-400 uppercase mb-2">The Unfair Advantage</h2>
            <p className="text-2xl sm:text-3xl font-bold text-slate-100">Why Hire a Hybrid Systems Engineer?</p>
            <p className="text-slate-400 text-sm mt-2">
              Deep commercial and risk instincts combined with modern hands-on technical execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-panel p-8 rounded-2xl relative group hover:border-sky-500/50 transition-all">
              <div className="w-12 h-12 rounded-xl bg-sky-500/10 text-sky-400 flex items-center justify-center mb-6">
                <Code2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-100 mb-3">Full-Stack & Generative AI</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Building type-safe web applications with React 19, Next.js 16, and Go. Implementing high-throughput asynchronous GPU inference pipelines via serverless vLLM and Claude APIs with deterministic self-healing retry validation.
              </p>
              <div className="mt-4 flex flex-wrap gap-2 text-xs font-mono text-slate-400">
                <span className="px-2 py-1 rounded bg-slate-800/60">TypeScript</span>
                <span className="px-2 py-1 rounded bg-slate-800/60">React 19</span>
                <span className="px-2 py-1 rounded bg-slate-800/60">Next.js 16</span>
                <span className="px-2 py-1 rounded bg-slate-800/60">RunPod vLLM</span>
              </div>
            </div>

            <div className="glass-panel p-8 rounded-2xl relative group hover:border-indigo-500/50 transition-all">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-6">
                <Cloud className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-100 mb-3">Cloud & Platform Literacy</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Deploying software with confidence: containerization with Docker, GitOps continuous delivery via Argo CD and Helm, infrastructure automation with Ansible, and telemetry with Prometheus and ELK.
              </p>
              <div className="mt-4 flex flex-wrap gap-2 text-xs font-mono text-slate-400">
                <span className="px-2 py-1 rounded bg-slate-800/60">Docker</span>
                <span className="px-2 py-1 rounded bg-slate-800/60">Kubernetes</span>
                <span className="px-2 py-1 rounded bg-slate-800/60">Argo CD</span>
                <span className="px-2 py-1 rounded bg-slate-800/60">CI/CD</span>
              </div>
            </div>

            <div className="glass-panel p-8 rounded-2xl relative group hover:border-purple-500/50 transition-all">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-100 mb-3">FinTech & Commercial Leadership</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                10+ years in international commercial banking and an MBA. Fluency in credit underwriting, loan lifecycle states, AML/KYC verification, CRS compliance, and cross-functional team coordination.
              </p>
              <div className="mt-4 flex flex-wrap gap-2 text-xs font-mono text-slate-400">
                <span className="px-2 py-1 rounded bg-slate-800/60">Credit Risk</span>
                <span className="px-2 py-1 rounded bg-slate-800/60">AML/KYC</span>
                <span className="px-2 py-1 rounded bg-slate-800/60">CRS Reporting</span>
                <span className="px-2 py-1 rounded bg-slate-800/60">MBA Strategy</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRIMARY SHOWCASE: Flagship Full-Stack & AI Applications */}
      <section id="flagship" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-xs font-bold tracking-widest text-sky-400 uppercase mb-2">Production Proof-of-Work</h2>
            <p className="text-3xl font-bold text-slate-100">Featured Full-Stack & AI Applications</p>
            <p className="text-sm text-slate-400 mt-2 max-w-2xl">
              Fully developed, interactive web applications featuring end-to-end architectures, client-side parsing, and production AI integration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {flagshipProjects.map((p) => (
              <div
                key={p.id}
                className="glass-panel p-8 rounded-2xl flex flex-col justify-between hover:border-slate-700 transition-all relative group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold border ${p.badgeColor}`}>
                      {p.badge}
                    </span>
                    <div className="flex items-center space-x-2">
                      {p.liveUrl && (
                        <a
                          href={p.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-xs font-semibold hover:bg-emerald-500/20 transition-all"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>Live Site</span>
                        </a>
                      )}
                      <a
                        href={p.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 hover:text-white transition-all text-xs font-medium"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                        <span>Source</span>
                      </a>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-100 mb-2">{p.title}</h3>
                  <p className="text-sm text-slate-300 mb-5 leading-relaxed">{p.description}</p>

                  <div className="space-y-2 mb-6">
                    {p.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-start space-x-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-800/80">
                    {p.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md bg-slate-800/60 text-slate-300 text-xs font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECONDARY SHOWCASE: Cloud & Platform Foundations */}
      <section id="cloud-foundations" className="py-16 bg-slate-900/50 border-y border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="text-xs font-bold tracking-widest text-indigo-400 uppercase mb-2">Infrastructure & DevOps</h2>
            <p className="text-2xl font-bold text-slate-100">Cloud & Platform Foundations</p>
            <p className="text-sm text-slate-400 mt-1 max-w-2xl">
              Architectural case studies demonstrating modern continuous delivery, multi-cloud assessment, and observability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {devopsProjects.map((p) => (
              <div key={p.id} className="glass-panel p-6 rounded-xl border border-slate-800 hover:border-slate-700 transition-all">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-indigo-400 font-mono">{p.category}</span>
                  <a
                    href={p.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1 text-xs text-slate-400 hover:text-white transition-colors"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>View Repository</span>
                  </a>
                </div>

                <h3 className="text-lg font-bold text-slate-100 mb-2">{p.title}</h3>
                <p className="text-xs text-slate-300 mb-4 leading-relaxed">{p.description}</p>
                <p className="text-xs text-sky-400 mb-4 font-medium">• {p.keyPoint}</p>

                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800/60">
                  {p.stack.map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded bg-slate-800/50 text-slate-300 text-xs font-mono">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Matrix */}
      <section id="skills" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-xs font-bold tracking-widest text-sky-400 uppercase mb-2">Capabilities</h2>
            <p className="text-3xl font-bold text-slate-100">Technical Competencies</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="glass-panel p-6 rounded-xl">
              <div className="flex items-center space-x-2.5 text-sky-400 mb-4 font-semibold text-sm">
                <Code2 className="w-4 h-4" />
                <span>Languages & Frontend</span>
              </div>
              <ul className="space-y-2 text-xs text-slate-300 font-mono">
                <li>• TypeScript & JavaScript (ES6+)</li>
                <li>• React 19 & Next.js 16</li>
                <li>• Tailwind CSS v4 & Base UI</li>
                <li>• Go (Golang) Microservices</li>
                <li>• HTML5 / Modern CSS / DOM APIs</li>
              </ul>
            </div>

            <div className="glass-panel p-6 rounded-xl">
              <div className="flex items-center space-x-2.5 text-purple-400 mb-4 font-semibold text-sm">
                <Cpu className="w-4 h-4" />
                <span>AI & LLMOps</span>
              </div>
              <ul className="space-y-2 text-xs text-slate-300 font-mono">
                <li>• RunPod Serverless GPU vLLM</li>
                <li>• Anthropic Claude SDK</li>
                <li>• Zod 4 Schema Validation</li>
                <li>• Automated QA & Retry Loops</li>
                <li>• Alpaca Model Fine-Tuning</li>
              </ul>
            </div>

            <div className="glass-panel p-6 rounded-xl">
              <div className="flex items-center space-x-2.5 text-indigo-400 mb-4 font-semibold text-sm">
                <Server className="w-4 h-4" />
                <span>Cloud & DevOps</span>
              </div>
              <ul className="space-y-2 text-xs text-slate-300 font-mono">
                <li>• Kubernetes (GKE, Minikube)</li>
                <li>• Terraform & Helm Charts</li>
                <li>• Argo CD (GitOps Delivery)</li>
                <li>• Ansible & Vagrant Multi-VM</li>
                <li>• Jenkins & GitLab CI/CD</li>
              </ul>
            </div>

            <div className="glass-panel p-6 rounded-xl">
              <div className="flex items-center space-x-2.5 text-emerald-400 mb-4 font-semibold text-sm">
                <ShieldCheck className="w-4 h-4" />
                <span>FinTech & Operations</span>
              </div>
              <ul className="space-y-2 text-xs text-slate-300 font-mono">
                <li>• Credit Risk Underwriting</li>
                <li>• AML/KYC & CRS Compliance</li>
                <li>• Finacle Core Banking</li>
                <li>• 13+ Technical Peer Reviews</li>
                <li>• Cross-Functional Agile Leadership</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section id="experience" className="py-20 bg-slate-900/40 border-t border-slate-800/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-xs font-bold tracking-widest text-sky-400 uppercase mb-2">Track Record</h2>
            <p className="text-3xl font-bold text-slate-100">Professional Experience & Impact</p>
          </div>

          <div className="space-y-8 relative before:absolute before:inset-0 before:left-3 sm:before:left-5 before:w-0.5 before:bg-slate-800">
            {/* kood/Sisu */}
            <div className="relative pl-8 sm:pl-12">
              <div className="absolute left-1.5 sm:left-3.5 top-1.5 w-3.5 h-3.5 rounded-full bg-sky-500 ring-4 ring-slate-900" />
              <div className="glass-panel p-6 rounded-xl">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                  <h3 className="font-bold text-slate-100 text-base">Full-Stack Software Engineering Fellow</h3>
                  <span className="text-xs font-mono text-sky-400">Jan 2025 – Present</span>
                </div>
                <p className="text-xs font-medium text-slate-400 mb-3">kood/Sisu | Espoo / Helsinki, Finland</p>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Intensive project-based software engineering and cloud curriculum modeled on 01 Edu pedagogy. Built and defended systems in Go, TypeScript, React 19, Docker, Kubernetes, and GenAI. Completed 13+ formal peer code reviews auditing architecture and clean code standards.
                </p>
              </div>
            </div>

            {/* SL Rainbow Holdings */}
            <div className="relative pl-8 sm:pl-12">
              <div className="absolute left-1.5 sm:left-3.5 top-1.5 w-3.5 h-3.5 rounded-full bg-indigo-500 ring-4 ring-slate-900" />
              <div className="glass-panel p-6 rounded-xl">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                  <h3 className="font-bold text-slate-100 text-base">Operations & Servicing Manager</h3>
                  <span className="text-xs font-mono text-indigo-400">Jun 2020 – Aug 2022</span>
                </div>
                <p className="text-xs font-medium text-slate-400 mb-3">SL Rainbow Holdings Pvt Ltd | Sri Lanka</p>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Scaled handicraft and spice export operations by 40% through structured supplier onboarding and digitized logistics workflows. Managed cross-border operations for UK and European enterprise buyers.
                </p>
              </div>
            </div>

            {/* MetLife Dubai */}
            <div className="relative pl-8 sm:pl-12">
              <div className="absolute left-1.5 sm:left-3.5 top-1.5 w-3.5 h-3.5 rounded-full bg-purple-500 ring-4 ring-slate-900" />
              <div className="glass-panel p-6 rounded-xl">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                  <h3 className="font-bold text-slate-100 text-base">Support Desk Executive (Bancassurance & IFA)</h3>
                  <span className="text-xs font-mono text-purple-400">May 2018 – Mar 2020</span>
                </div>
                <p className="text-xs font-medium text-slate-400 mb-3">MetLife | Dubai, UAE</p>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Engineered automated Excel VBA batch generator reducing IFA partner voucher turnaround from 3 days to under 4 hours (85%+ time savings, department-wide adoption, Shining Star Award). Led CRS compliance policyholder data audits.
                </p>
              </div>
            </div>

            {/* Commercial Bank of Qatar */}
            <div className="relative pl-8 sm:pl-12">
              <div className="absolute left-1.5 sm:left-3.5 top-1.5 w-3.5 h-3.5 rounded-full bg-amber-500 ring-4 ring-slate-900" />
              <div className="glass-panel p-6 rounded-xl">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                  <h3 className="font-bold text-slate-100 text-base">Direct Sales Representative (Credit Operations)</h3>
                  <span className="text-xs font-mono text-amber-400">May 2017 – Dec 2017</span>
                </div>
                <p className="text-xs font-medium text-slate-400 mb-3">Commercial Bank of Qatar | Doha, Qatar</p>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Engineered an automated credit evaluation calculation sheet with built-in validation gates, eliminating human calculation errors and application returns by the operations department.
                </p>
              </div>
            </div>

            {/* Hatton National Bank */}
            <div className="relative pl-8 sm:pl-12">
              <div className="absolute left-1.5 sm:left-3.5 top-1.5 w-3.5 h-3.5 rounded-full bg-emerald-500 ring-4 ring-slate-900" />
              <div className="glass-panel p-6 rounded-xl">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                  <h3 className="font-bold text-slate-100 text-base">Business Development Officer & Banking Assistant</h3>
                  <span className="text-xs font-mono text-emerald-400">Aug 2011 – Apr 2017</span>
                </div>
                <p className="text-xs font-medium text-slate-400 mb-3">Hatton National Bank PLC | Sri Lanka</p>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Prepared credit proposals for SME and retail lending facilities. Enforced AML/KYC verification. Selected as Unleash Innovation Finalist among 1,000+ employees for mobile banking proposal featuring pre-staged ATM workflows and P2P social transfers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Credentials */}
      <section className="py-16 bg-slate-900/60 border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-xs font-bold tracking-widest text-sky-400 uppercase mb-2">Education & Pedagogy</h2>
            <p className="text-2xl font-bold text-slate-100">Engineering Training & Academic Degrees</p>
            <p className="text-sm text-slate-400 mt-2">
              Combining rigorous teacherless software engineering training with European business degrees.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* kood/Sisu */}
            <div className="glass-panel p-6 rounded-xl border border-sky-500/30 relative flex flex-col justify-between">
              <div>
                <div className="flex items-center space-x-3 mb-2">
                  <Code2 className="w-5 h-5 text-sky-400" />
                  <h3 className="font-bold text-slate-100 text-sm">Software Engineering Program</h3>
                </div>
                <p className="text-xs text-sky-400 font-semibold mb-1">kood/Sisu • 01 Edu Pedagogy</p>
                <p className="text-xs text-slate-400 mb-3 font-mono">Espoo / Helsinki, Finland • Jan 2025 – Present</p>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  Intensive, sprint-driven engineering curriculum covering Go microservices, TypeScript, React 19, Next.js, Docker, Kubernetes (GKE), GitOps (Argo CD), and GenAI. Completed 13+ formal peer code reviews and architectural oral evaluations.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-800/60 flex flex-wrap gap-1.5 text-[11px] font-mono text-slate-400">
                <span className="px-2 py-0.5 rounded bg-slate-800/60">Go</span>
                <span className="px-2 py-0.5 rounded bg-slate-800/60">React 19</span>
                <span className="px-2 py-0.5 rounded bg-slate-800/60">K8s</span>
                <span className="px-2 py-0.5 rounded bg-slate-800/60">Peer Review</span>
              </div>
            </div>

            {/* Xamk */}
            <div className="glass-panel p-6 rounded-xl border border-slate-800 flex flex-col justify-between">
              <div>
                <div className="flex items-center space-x-3 mb-2">
                  <Award className="w-5 h-5 text-emerald-400" />
                  <h3 className="font-bold text-slate-100 text-sm">Bachelor of Business Administration (BBA)</h3>
                </div>
                <p className="text-xs text-emerald-400 font-semibold mb-1">Digital International Business</p>
                <p className="text-xs text-slate-400 mb-3 font-mono">South-Eastern Finland University of Applied Sciences (Xamk) • 2022 – 2024</p>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  Focused on digital business architecture, European cross-border commerce, data analytics, and scalable digital supply chain operations in Finland.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-800/60 flex flex-wrap gap-1.5 text-[11px] font-mono text-slate-400">
                <span className="px-2 py-0.5 rounded bg-slate-800/60">Digital Strategy</span>
                <span className="px-2 py-0.5 rounded bg-slate-800/60">Data Analytics</span>
                <span className="px-2 py-0.5 rounded bg-slate-800/60">Finland</span>
              </div>
            </div>

            {/* University of Northampton */}
            <div className="glass-panel p-6 rounded-xl border border-slate-800 flex flex-col justify-between">
              <div>
                <div className="flex items-center space-x-3 mb-2">
                  <BookOpen className="w-5 h-5 text-indigo-400" />
                  <h3 className="font-bold text-slate-100 text-sm">Master of Business Administration (MBA)</h3>
                </div>
                <p className="text-xs text-indigo-400 font-semibold mb-1">Executive Leadership & Strategic Management</p>
                <p className="text-xs text-slate-400 mb-3 font-mono">University of Northampton, United Kingdom • 2019 – 2020</p>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  Executive leadership, strategic resource management, financial risk modeling, and organizational scaling across multi-stakeholder corporate environments.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-800/60 flex flex-wrap gap-1.5 text-[11px] font-mono text-slate-400">
                <span className="px-2 py-0.5 rounded bg-slate-800/60">Executive Ops</span>
                <span className="px-2 py-0.5 rounded bg-slate-800/60">Risk Modeling</span>
                <span className="px-2 py-0.5 rounded bg-slate-800/60">UK</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Footer */}
      <footer id="contact" className="py-16 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-panel p-8 sm:p-12 rounded-2xl max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 mb-3">Let's Connect & Build</h2>
            <p className="text-slate-300 text-sm mb-8 leading-relaxed">
              Based in Espoo, Finland. Immediate Finnish work authorization (no visa sponsorship needed). Open to on-site, hybrid, and remote engineering opportunities.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 text-sm font-medium">
              <a
                href="mailto:hasitha.nilwakka@gmail.com"
                className="px-5 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-semibold transition-all flex items-center space-x-2"
              >
                <Mail className="w-4 h-4" />
                <span>hasitha.nilwakka@yahoo.com</span>
              </a>

              <a
                href="https://www.linkedin.com/in/hasitha-nilwakka"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl glass-panel text-slate-200 hover:bg-slate-800 transition-all flex items-center space-x-2"
              >
                <Briefcase className="w-4 h-4 text-sky-400" />
                <span>LinkedIn Profile</span>
              </a>

              <a
                href="tel:+358451831446"
                className="px-5 py-3 rounded-xl glass-panel text-slate-200 hover:bg-slate-800 transition-all flex items-center space-x-2"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>+358 45 183 1446</span>
              </a>
            </div>

            <div className="mt-8 pt-8 border-t border-slate-800/80 text-xs text-slate-500">
              © {new Date().getFullYear()} Hasitha Nilwakka. Engineered with Next.js 16, React 19 & Tailwind CSS v4.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

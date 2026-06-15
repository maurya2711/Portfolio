"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import * as Dialog from "@radix-ui/react-dialog";
import { Search, Globe, ChevronRight, X, ExternalLink } from "lucide-react";

interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  tech: string[];
  challenge: string;
  solution: string;
  features: string[];
  demoUrl: string;
}

export default function Projects() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: "sequifi",
      title: "Sequifi",
      category: "HRTech SaaS",
      image: "/projects/sequifi.png",
      tech: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Redux Toolkit", "Canvas API"],
      challenge: "Synchronizing digital signature canvas data with dynamic server-side document layouts without resolution degradation, and managing real-time payroll states across multi-level role architectures.",
      solution: "Developed custom vector serialization functions converting HTML Canvas captures to high-fidelity SVG paths. Managed client document registries in structured Redux Toolkit slices, implementing client-side router locks based on verified user claims.",
      features: ["Payroll Management System", "Employee Registry Hub", "Automated Hiring Workflows", "Digital Canvas Signatures", "Role-based Access Controls (RBAC)"],
      demoUrl: "https://demo.example.com/sequifi",
    },
    {
      id: "pirkx",
      title: "Pirkx",
      category: "Benefits Platform",
      image: "/projects/pirkx.png",
      tech: ["React.js", "Redux", "Tailwind CSS", "i18next", "Node.js"],
      challenge: "Managing over 12+ localized benefit portal versions dynamically without increasing bundle sizes or causing hydration flickers on network latency dropouts.",
      solution: "Integrated dynamic translation chunk loading using asynchronous namespace requests in i18next. Coupled loading states with react suspense boundaries to load localizations on-demand.",
      features: ["Multi-language & Dynamic Localization", "Admin Management Dashboard", "Corporate Benefits Matching", "Interactive Benefits Directory", "Blog Content Management System"],
      demoUrl: "https://demo.example.com/pirkx",
    },
    {
      id: "rovi-social",
      title: "Rovi Social",
      category: "Web3 Platform",
      image: "/projects/rovi.png",
      tech: ["React.js", "TypeScript", "Tailwind CSS", "Ethers.js", "Telegram Bot API"],
      challenge: "Securely logging in users through Telegram authentication claims and immediately mapping their sessions to blockchain wallets without secondary friction points.",
      solution: "Designed custom authentication hooks merging Telegram session signature verifications directly with Web3 providers. Used secure JWT bindings in state layers to verify asset claims.",
      features: ["Telegram Gateway Authentication", "Crypto Earning Tracker Modules", "Personal Web3 Wallet Dashboards", "Dynamic Landing Pipelines", "Real-time Crypto Transaction Feed"],
      demoUrl: "https://demo.example.com/rovi",
    },
    {
      id: "blender-platform",
      title: "Blender Integration Platform",
      category: "Desktop Application",
      image: "/projects/blender.png",
      tech: ["Electron.js", "React.js", "Node.js", "IPC Channels"],
      challenge: "Synchronizing high-frequency 3D render status updates from the native Blender runtime environment to the Electron UI thread without rendering blocks or process bottlenecks.",
      solution: "Configured non-blocking asynchronous IPC channels using node-buffer shared memory caches, keeping UI response rates above 60fps during intense rendering routines.",
      features: ["Electron Shell Desktop Wrapper", "3D Blueprint Tracker Manager", "Dynamic Rendering Workflow Gauges", "Asynchronous Node Processing Pipelines"],
      demoUrl: "https://demo.example.com/blender",
    },
    {
      id: "news-ai-platform",
      title: "News & AI Content Platform",
      category: "Content Creation",
      image: "/projects/news.png",
      tech: ["Next.js 15", "Tailwind CSS", "OpenAI API", "Prisma", "NextAuth.js"],
      challenge: "Rendering large-scale AI generated layouts dynamically on load without causing cumulative layout shifts (CLS) or slow loading speeds for mobile users.",
      solution: "Implemented Next.js 15 Streaming SSR with custom Suspense boundaries and skeleton loaders, loading text completion vectors incrementally via chunk streams.",
      features: ["OpenAI Prompt Generation Integration", "Secure NextAuth Session Guards", "Next.js Streaming SSR Architectures", "Full CRUD Article Operations", "SEO Page Optimizations"],
      demoUrl: "https://demo.example.com/news-ai",
    }
  ];

  const categories = [
    { key: "all", label: "All Work" },
    { key: "hrtech", label: "HRTech & SaaS" },
    { key: "web3", label: "Web3" },
    { key: "desktop", label: "Desktop Apps" },
    { key: "content", label: "AI & Content" },
  ];

  // Helper mapping search tags
  const filterProjects = projects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tech.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
      project.category.toLowerCase().includes(searchQuery.toLowerCase());

    if (selectedCategory === "all") return matchesSearch;
    if (selectedCategory === "hrtech") return matchesSearch && (project.category.includes("SaaS") || project.category.includes("Benefits"));
    if (selectedCategory === "web3") return matchesSearch && project.category.includes("Web3");
    if (selectedCategory === "desktop") return matchesSearch && project.category.includes("Desktop");
    if (selectedCategory === "content") return matchesSearch && project.category.includes("Content");

    return matchesSearch;
  });

  return (
    <section id="projects" className="py-24 px-4 md:px-8 max-w-6xl mx-auto relative select-none">
      <div className="absolute right-[-10%] top-1/3 w-96 h-96 bg-emerald-500/5 blur-[100px] rounded-full pointer-events-none" />

      {/* Heading */}
      <div className="flex flex-col mb-16">
        <span className="text-xs font-mono tracking-[0.25em] text-emerald-accent uppercase mb-2">Portfolio</span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight">
          Selected Projects
        </h2>
        <div className="h-[2px] w-16 bg-emerald-accent mt-3 rounded-full" />
      </div>

      {/* Controls Container (Search + Category Filter) */}
      <div className="flex flex-col md:flex-row gap-6 justify-between items-center mb-12">
        {/* Category Tabs */}
        <div className="flex gap-1.5 p-1.5 rounded-xl border border-card-border bg-black/10 backdrop-blur-sm overflow-x-auto w-full md:w-auto shrink-0 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setSelectedCategory(cat.key)}
              className={`px-4 py-2 rounded-lg text-xs md:text-sm font-semibold transition-all duration-300 whitespace-nowrap cursor-pointer ${selectedCategory === cat.key
                  ? "bg-emerald-accent text-neutral-dark shadow-[0_0_12px_rgba(16,185,129,0.25)]"
                  : "text-foreground/50 hover:text-foreground/80"
                }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="relative w-full md:max-w-xs">
          <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/35" />
          <input
            type="text"
            placeholder="Search by tech or title..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-2.5 text-xs md:text-sm rounded-xl border border-card-border bg-card-bg/20 backdrop-blur-sm focus:outline-none focus:border-emerald-accent/50 focus:bg-card-bg/40 text-foreground transition-all placeholder:text-foreground/30"
          />
        </div>
      </div>

      {/* Grid Projects */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filterProjects.map((project) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="glass-panel glass-panel-hover rounded-2xl overflow-hidden flex flex-col h-full group"
            >
              {/* Project Card Image Container */}
              <div className="relative aspect-video w-full overflow-hidden bg-gray-900 border-b border-card-border">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Floating overlay card category */}
                <span className="absolute top-4 left-4 text-[10px] font-mono font-bold tracking-wider uppercase px-2.5 py-1 rounded bg-black/75 text-emerald-accent border border-emerald-accent/20 backdrop-blur-sm">
                  {project.category}
                </span>
              </div>

              {/* Card Contents */}
              <div className="p-6 flex flex-col flex-grow justify-between gap-5">
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-emerald-accent transition-colors">
                    {project.title}
                  </h3>

                  {/* Short text snippet preview */}
                  <p className="text-xs md:text-sm text-foreground/50 line-clamp-3 mb-4 leading-relaxed">
                    {project.challenge}
                  </p>

                  {/* Tech stack badges snippet */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-mono text-foreground/60 px-2 py-0.5 rounded border border-card-border bg-white/2"
                      >
                        {t}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="text-[10px] font-mono text-foreground/40 px-2 py-0.5">
                        +{project.tech.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Case study click trigger */}
                <button
                  onClick={() => setSelectedProject(project)}
                  className="w-full flex items-center justify-between text-xs font-bold text-emerald-accent group/btn cursor-pointer"
                >
                  <span className="group-hover/btn:mr-1 transition-all duration-300">View Case Study</span>
                  <ChevronRight size={14} className="group-hover/btn:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Project details Modal */}
      <Dialog.Root open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
        <AnimatePresence>
          {selectedProject && (
            <Dialog.Portal forceMount>
              {/* Overlay Backdrop */}
              <Dialog.Overlay asChild>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md"
                />
              </Dialog.Overlay>

              {/* Modal Content */}
              <Dialog.Content asChild>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 20 }}
                  transition={{ type: "spring", duration: 0.5 }}
                  className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[92vw] max-w-3xl max-h-[85vh] overflow-y-auto z-50 glass-panel p-6 md:p-8 rounded-3xl shadow-2xl focus:outline-none scrollbar-none"
                >
                  {/* Close button */}
                  <Dialog.Close className="absolute top-6 right-6 p-2 rounded-lg border border-card-border text-foreground/45 hover:text-foreground hover:border-white/20 transition-all cursor-pointer">
                    <X size={16} />
                  </Dialog.Close>

                  {/* Header Title */}
                  <Dialog.Title className="text-xl md:text-2xl font-extrabold text-foreground mb-1.5 flex items-center gap-3">
                    {selectedProject.title}
                    <span className="text-xs font-mono font-medium tracking-wider px-2 py-0.5 rounded bg-emerald-accent/15 border border-emerald-accent/20 text-emerald-accent">
                      {selectedProject.category}
                    </span>
                  </Dialog.Title>

                  <div className="h-[1px] w-full bg-card-border my-5" />

                  {/* Project Image Panel */}
                  <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-gray-900 border border-card-border mb-6">
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="space-y-6">
                    {/* Tech Stack grid list */}
                    <div className="space-y-2">
                      <h4 className="text-xs font-mono tracking-widest text-emerald-accent uppercase">
                        Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tech.map((t) => (
                          <span
                            key={t}
                            className="text-xs font-mono text-foreground/75 px-3 py-1 rounded-lg border border-card-border bg-white/3"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Challenge & Solution */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-card-border">
                      <div className="space-y-2">
                        <h4 className="text-xs font-mono tracking-widest text-emerald-accent uppercase">
                          The Challenge
                        </h4>
                        <p className="text-xs md:text-sm text-foreground/70 leading-relaxed">
                          {selectedProject.challenge}
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h4 className="text-xs font-mono tracking-widest text-emerald-accent uppercase">
                          The Solution
                        </h4>
                        <p className="text-xs md:text-sm text-foreground/70 leading-relaxed">
                          {selectedProject.solution}
                        </p>
                      </div>
                    </div>

                    {/* Key Features */}
                    <div className="space-y-3 pt-4 border-t border-card-border">
                      <h4 className="text-xs font-mono tracking-widest text-emerald-accent uppercase">
                        Key Features Delivered
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs md:text-sm text-foreground/70">
                        {selectedProject.features.map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-accent" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Interactive CTAs */}
                    <div className="flex justify-end gap-4 pt-6 border-t border-card-border">
                      <Dialog.Close className="px-5 py-2.5 rounded-xl border border-card-border text-foreground hover:bg-card-bg/25 text-xs font-semibold cursor-pointer">
                        Close Case Study
                      </Dialog.Close>
                      <a
                        href={selectedProject.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-accent text-neutral-dark hover:opacity-95 font-semibold text-xs transition-opacity shadow-[0_0_15px_rgba(16,185,129,0.2)]"
                      >
                        <Globe size={14} />
                        <span>Live Demo</span>
                        <ExternalLink size={12} />
                      </a>
                    </div>
                  </div>
                </motion.div>
              </Dialog.Content>
            </Dialog.Portal>
          )}
        </AnimatePresence>
      </Dialog.Root>
    </section>
  );
}

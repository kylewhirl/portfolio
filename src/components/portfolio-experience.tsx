"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Asterisk,
  Braces,
  CircleDot,
  Github,
  MoveUpRight,
  Radio,
  Sparkles,
} from "lucide-react";
import { projects } from "@/content/projects";

const projectSlugs = [
  "vine-admin",
  "tqrco",
  "homeassistant-moonside",
  "snapswitch",
  "rewrapped",
];

const work = projectSlugs
  .map((slug) => projects.find((project) => project.slug === slug))
  .filter((project) => project !== undefined);

const modes = [
  {
    number: "01",
    label: "Find the friction",
    title: "Start where the work gets weird.",
    copy: "I watch the real workflow, find the repeated annoyance, and work backward from the moment somebody mutters “there has to be a better way.”",
    tags: ["Operator interviews", "Workflow mapping", "Product scoping"],
  },
  {
    number: "02",
    label: "Build the loop",
    title: "Make something real enough to argue with.",
    copy: "I move from interface to data model to API without throwing the idea over a wall. The first useful loop ships fast; the rest earns its way in.",
    tags: ["Next.js", "SwiftUI", "Prototypes", "Design systems"],
  },
  {
    number: "03",
    label: "Make it solid",
    title: "Then obsess over the boring parts.",
    copy: "Token refresh, retries, realtime state, empty states, and graceful recovery are where a clever demo becomes something people trust every day.",
    tags: ["OAuth", "Realtime", "Observability", "Playwright"],
  },
];

export function PortfolioExperience() {
  const stageRef = useRef<HTMLDivElement>(null);
  const [activeProject, setActiveProject] = useState(0);
  const [activeMode, setActiveMode] = useState(0);

  function handlePointerMove(event: React.PointerEvent<HTMLDivElement>) {
    const bounds = stageRef.current?.getBoundingClientRect();
    if (!bounds || !stageRef.current) return;

    const x = (event.clientX - bounds.left) / bounds.width;
    const y = (event.clientY - bounds.top) / bounds.height;
    stageRef.current.style.setProperty("--pointer-x", `${x * 100}%`);
    stageRef.current.style.setProperty("--pointer-y", `${y * 100}%`);
    stageRef.current.style.setProperty("--tilt-x", `${(x - 0.5) * 12}px`);
    stageRef.current.style.setProperty("--tilt-y", `${(y - 0.5) * 12}px`);
  }

  const selectedProject = work[activeProject];
  const projectLink =
    selectedProject.links.find((link) => link.label === "Site") ??
    selectedProject.links.find((link) => link.label === "GitHub") ??
    selectedProject.links[0];

  return (
    <div ref={stageRef} onPointerMove={handlePointerMove} className="studio-experience">
      <section className="studio-hero">
        <div className="hero-glow" aria-hidden="true" />
        <div className="hero-topline">
          <span>Kyle Worrall</span>
          <span className="hidden sm:inline">Product engineer · Reno, NV</span>
          <span className="live-signal"><i /> Available for the right thing</span>
        </div>

        <div className="hero-copy">
          <p className="studio-kicker"><Asterisk className="h-3.5 w-3.5" /> Independent builder / operator</p>
          <h1>
            I build weirdly
            <br />
            <em>useful</em> software.
          </h1>
          <div className="hero-summary">
            <p>
              Products, interfaces, and integrations for the parts of life that
              refuse to stay neatly inside a browser.
            </p>
            <a href="#work" className="round-action" aria-label="Explore selected work">
              <ArrowDown className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="plant-console" aria-label="Interactive botanical illustration">
          <div className="console-label console-label-a"><CircleDot /> Live system</div>
          <div className="console-label console-label-b"><MoveUpRight /> Pointer reactive</div>
          <div className="plant-halo" />
          <div className="plant-art" aria-hidden="true">
            <i className="stem stem-one" />
            <i className="stem stem-two" />
            <i className="leaf leaf-one" />
            <i className="leaf leaf-two" />
            <i className="leaf leaf-three" />
            <i className="leaf leaf-four" />
            <i className="leaf leaf-five" />
            <div className="plant-pot"><span /></div>
          </div>
          <div className="console-readout">
            <span>Ideas growing</span>
            <strong>05</strong>
          </div>
        </div>

        <div className="hero-footer-line">
          <span>Scroll to enter the workshop</span>
          <span>Next.js · SwiftUI · APIs · Smart home</span>
        </div>
      </section>

      <div className="studio-marquee" aria-hidden="true">
        <div>
          <span>PRODUCTS WITH A PULSE</span><Sparkles />
          <span>PRODUCTS WITH A PULSE</span><Sparkles />
          <span>PRODUCTS WITH A PULSE</span><Sparkles />
          <span>PRODUCTS WITH A PULSE</span><Sparkles />
        </div>
      </div>

      <section id="work" className="workshop-section">
        <div className="workshop-heading">
          <p className="studio-kicker studio-kicker-light"><Radio className="h-3.5 w-3.5" /> Selected transmissions</p>
          <h2>On the workbench</h2>
          <p>Pick something. Poke around.</p>
        </div>

        <div className="project-machine">
          <div className="project-selector" role="tablist" aria-label="Projects">
            {work.map((project, index) => (
              <button
                key={project.slug}
                type="button"
                role="tab"
                aria-selected={activeProject === index}
                onClick={() => setActiveProject(index)}
                className={activeProject === index ? "is-active" : ""}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{project.title}</strong>
                <ArrowRight />
              </button>
            ))}
          </div>

          <article className="project-display" key={selectedProject.slug}>
            <div className="project-display-top">
              <span>{selectedProject.status}</span>
              <span>{selectedProject.category.join(" / ")}</span>
            </div>
            <div className="project-number">0{activeProject + 1}</div>
            <div className="project-display-body">
              <p className="project-role">{selectedProject.role}</p>
              <h3>{selectedProject.title}</h3>
              <p className="project-tagline">{selectedProject.tagline}</p>
              <ul>
                {selectedProject.highlights.slice(0, 3).map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
            <div className="project-display-footer">
              <div>{selectedProject.stack.slice(0, 5).map((item) => <span key={item}>{item}</span>)}</div>
              {projectLink ? (
                <Link href={projectLink.href} target="_blank" rel="noreferrer" className="project-launch">
                  Open it <ArrowUpRight />
                </Link>
              ) : null}
            </div>
          </article>
        </div>

        <Link href="/projects" className="all-work-link">
          All projects, experiments & open source <ArrowUpRight />
        </Link>
      </section>

      <section className="process-lab">
        <div className="process-intro">
          <p className="studio-kicker"><Braces className="h-3.5 w-3.5" /> How the thing gets made</p>
          <h2>No assembly line.<br /><em>More like a loop.</em></h2>
        </div>

        <div className="process-interface">
          <div className="process-tabs" role="tablist" aria-label="Working process">
            {modes.map((mode, index) => (
              <button
                key={mode.number}
                type="button"
                role="tab"
                aria-selected={activeMode === index}
                className={activeMode === index ? "is-active" : ""}
                onClick={() => setActiveMode(index)}
              >
                <span>{mode.number}</span>
                {mode.label}
              </button>
            ))}
          </div>
          <div className="process-screen" key={activeMode}>
            <span className="screen-corner">MODE / {modes[activeMode].number}</span>
            <CircleDot className="screen-icon" />
            <h3>{modes[activeMode].title}</h3>
            <p>{modes[activeMode].copy}</p>
            <div>{modes[activeMode].tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
          </div>
        </div>
      </section>

      <section className="contact-field">
        <div className="contact-orbit" aria-hidden="true"><span /><span /><span /></div>
        <p className="studio-kicker"><CircleDot className="h-3.5 w-3.5" /> One more open tab?</p>
        <h2>Let&apos;s make something<br /><em>worth using.</em></h2>
        <div className="contact-actions">
          <a href="mailto:hello@kyleworrall.com">hello@kyleworrall.com <ArrowUpRight /></a>
          <Link href="https://github.com/kylewhirl" target="_blank" rel="noreferrer"><Github /> GitHub</Link>
        </div>
      </section>
    </div>
  );
}

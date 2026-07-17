"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  ChevronLeft,
  ChevronRight,
  Github,
  Leaf,
} from "lucide-react";
import { projects } from "@/content/projects";

const featuredSlugs = ["vine-admin", "tqrco", "rewrapped", "dinowalls"];
const latestSlugs = ["homeassistant-moonside", "snapswitch"];

const featured = featuredSlugs
  .map((slug) => projects.find((project) => project.slug === slug))
  .filter((project) => project !== undefined);

const latest = latestSlugs
  .map((slug) => projects.find((project) => project.slug === slug))
  .filter((project) => project !== undefined);

const disciplines = [
  {
    number: "01",
    title: "Products",
    copy: "I find the annoying part of a real workflow and turn it into something focused, useful, and shippable.",
    tags: ["Product strategy", "Rapid prototypes", "Operator research"],
  },
  {
    number: "02",
    title: "Interfaces",
    copy: "Calm, legible UI for complex systems—from internal operations to consumer apps people use every day.",
    tags: ["Next.js", "React", "SwiftUI", "Design systems"],
  },
  {
    number: "03",
    title: "Integrations",
    copy: "The invisible glue: authentication, realtime state, vendor APIs, device platforms, retries, and recovery.",
    tags: ["OAuth", "APIs", "Webhooks", "Home Assistant"],
  },
];

export function PortfolioExperience() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [activeProject, setActiveProject] = useState(0);
  const project = featured[activeProject];
  const projectLink =
    project.links.find((link) => link.label === "Site") ??
    project.links.find((link) => link.label === "GitHub") ??
    project.links[0];
  const projectScreenshot =
    project.slug === "vine-admin" && project.screenshots?.[1]
      ? project.screenshots[1]
      : project.screenshots?.[0];

  function handlePointerMove(event: React.PointerEvent<HTMLDivElement>) {
    const bounds = rootRef.current?.getBoundingClientRect();
    if (!bounds || !rootRef.current) return;
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / window.innerHeight - 0.5;
    rootRef.current.style.setProperty("--image-x", `${x * -10}px`);
    rootRef.current.style.setProperty("--image-y", `${y * -8}px`);
  }

  function moveProject(direction: number) {
    setActiveProject((current) =>
      (current + direction + featured.length) % featured.length
    );
  }

  return (
    <div ref={rootRef} onPointerMove={handlePointerMove} className="folio">
      <section className="folio-hero">
        <Image
          src="/images/hero-atrium.webp"
          alt="Sunlit modern atrium with pale oak architecture and a mature olive tree"
          fill
          priority
          sizes="100vw"
          className="folio-hero-image"
        />
        <div className="folio-hero-wash" />
        <div className="folio-hero-content">
          <div className="folio-status">
            <span />
            Product engineer · Reno, Nevada
          </div>
          <h1>
            Useful software,
            <br />
            thoughtfully built.
          </h1>
          <p>
            I design and engineer products, interfaces, and integrations for
            the parts of life that refuse to stay neatly inside a browser.
          </p>
          <div className="folio-hero-actions">
            <a href="#work" className="folio-button folio-button-dark">
              Explore my work <ArrowDown />
            </a>
            <a href="mailto:hello@kyleworrall.com" className="folio-text-link">
              Get in touch <ArrowUpRight />
            </a>
          </div>
        </div>
        <div className="folio-hero-note">
          <Leaf />
          <span>Product taste</span>
          <span>Engineering range</span>
          <span>Operator empathy</span>
        </div>
      </section>

      <section className="folio-proof" aria-label="Selected impact">
        <p>Built from real operational problems</p>
        <div>
          <span><strong>10 hrs</strong> saved every week</span>
          <span><strong>6,500</strong> products managed</span>
          <span><strong>2</strong> retail locations supported</span>
          <span><strong>5+</strong> shipped products</span>
        </div>
      </section>

      <section className="folio-intro">
        <p className="folio-eyebrow">What I do</p>
        <div>
          <h2>Software that feels at home in the real world.</h2>
          <p>
            My best work starts close to the problem: watching how people
            actually operate, finding the friction, and building the complete
            loop—from interface to integration to deployment.
          </p>
        </div>
      </section>

      <section id="work" className="folio-work">
        <div className="folio-section-heading">
          <div>
            <p className="folio-eyebrow">Selected work</p>
            <h2>A few things I&apos;ve shipped.</h2>
          </div>
          <div className="folio-project-arrows">
            <button type="button" onClick={() => moveProject(-1)} aria-label="Previous project">
              <ChevronLeft />
            </button>
            <button type="button" onClick={() => moveProject(1)} aria-label="Next project">
              <ChevronRight />
            </button>
          </div>
        </div>

        <div className="folio-showroom">
          <div className="folio-project-nav" role="tablist" aria-label="Featured projects">
            {featured.map((item, index) => (
              <button
                key={item.slug}
                type="button"
                role="tab"
                aria-selected={activeProject === index}
                onClick={() => setActiveProject(index)}
                className={activeProject === index ? "is-active" : ""}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{item.title}</strong>
                <small>{item.category[0]}</small>
              </button>
            ))}
          </div>

          <article className="folio-project" key={project.slug}>
            <div className="folio-project-visual">
              {projectScreenshot ? (
                <Image
                  src={projectScreenshot.src}
                  alt={projectScreenshot.alt}
                  fill
                  sizes="(max-width: 900px) 100vw, 65vw"
                  className={projectScreenshot.className ?? ""}
                />
              ) : null}
              <div className="folio-project-number">0{activeProject + 1}</div>
            </div>
            <div className="folio-project-info">
              <div>
                <p>{project.role}</p>
                <h3>{project.title}</h3>
                <span>{project.tagline}</span>
              </div>
              <ul>
                {project.highlights.slice(0, 3).map((highlight) => (
                  <li key={highlight}><Check /> {highlight}</li>
                ))}
              </ul>
              <div className="folio-project-footer">
                <div>{project.stack.slice(0, 5).map((item) => <span key={item}>{item}</span>)}</div>
                {projectLink ? (
                  <Link href={projectLink.href} target="_blank" rel="noreferrer">
                    View project <ArrowUpRight />
                  </Link>
                ) : null}
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="folio-disciplines">
        <div className="folio-section-heading">
          <div>
            <p className="folio-eyebrow">The toolkit</p>
            <h2>From first sketch to reliable system.</h2>
          </div>
        </div>
        <div className="folio-discipline-grid">
          {disciplines.map((item) => (
            <article key={item.number}>
              <span>{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
              <div>{item.tags.map((tag) => <small key={tag}>{tag}</small>)}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="folio-lab">
        <div className="folio-lab-copy">
          <p className="folio-eyebrow">Recently in the lab</p>
          <h2>Small ideas deserve good engineering too.</h2>
          <p>Open-source integrations and focused utilities, built to solve very specific annoyances.</p>
        </div>
        <div className="folio-lab-list">
          {latest.map((item) => {
            const link = item.links[0];
            return (
              <Link key={item.slug} href={link.href} target="_blank" rel="noreferrer">
                <div>
                  <span>{item.status}</span>
                  <h3>{item.title}</h3>
                  <p>{item.tagline}</p>
                </div>
                <ArrowUpRight />
              </Link>
            );
          })}
        </div>
      </section>

      <section className="folio-contact">
        <p className="folio-eyebrow">Let&apos;s make something useful</p>
        <h2>Have a stubborn problem?</h2>
        <div>
          <a href="mailto:hello@kyleworrall.com" className="folio-button folio-button-light">
            Tell me about it <ArrowUpRight />
          </a>
          <Link href="https://github.com/kylewhirl" target="_blank" rel="noreferrer" className="folio-text-link folio-text-link-light">
            <Github /> GitHub
          </Link>
        </div>
      </section>
    </div>
  );
}

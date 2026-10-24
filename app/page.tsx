"use client";

import { useState } from "react";
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, Github, Linkedin, Mail,
  Menu, X, Code2, Layers3, Database, Smartphone, Sparkles, ExternalLink,
  Terminal, Globe2, Send, CheckCircle2
} from "lucide-react";

const projects = [
  {
    number: "01",
    title: "Sales Performance Hub",
    type: "DASHBOARD · DATA VISUALIZATION",
    description: "A focused analytics experience that turns sales data into clear performance insights, trends, and actionable summaries.",
    tags: ["Next.js", "TypeScript", "REST API"],
    tone: "mint",
    glyph: "↗",
    link: "#contact"
  },
  {
    number: "02",
    title: "DocuMind AI",
    type: "AI · DOCUMENT INTELLIGENCE",
    description: "A document workspace concept for asking questions across files, comparing information, and finding answers with context.",
    tags: ["ASP.NET Core", "Next.js", "PostgreSQL"],
    tone: "violet",
    glyph: "✳",
    link: "#contact"
  },
  {
    number: "03",
    title: "Commerce Control",
    type: "FULL-STACK · E-COMMERCE",
    description: "A clean operational interface concept for managing products, orders, and business workflows from one place.",
    tags: ["React", "API Design", "SQL"],
    tone: "amber",
    glyph: "◈",
    link: "#contact"
  }
];

const skills = [
  { icon: Code2, title: "Frontend", items: "React · Next.js · TypeScript · JavaScript · HTML · CSS" },
  { icon: Terminal, title: "Backend", items: "C# · ASP.NET Core · REST APIs · Authentication" },
  { icon: Database, title: "Data & Storage", items: "PostgreSQL · SQL · Data modelling · Query design" },
  { icon: Layers3, title: "Engineering", items: "Component architecture · Git · API integration · Debugging" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <div className="grain" aria-hidden="true" />
      <header className="topbar">
        <a href="#home" className="brand" onClick={closeMenu} aria-label="Muntaha Meem home">
          <span className="brand-mark">m<span>.</span></span>
          <span className="brand-name">MUNTAHA MEEM<span className="brand-sub">DEVELOPER PORTFOLIO</span></span>
        </a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        <nav className={menuOpen ? "nav nav-open" : "nav"}>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#work" onClick={closeMenu}>Projects</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#experience" onClick={closeMenu}>Journey</a>
          <a href="#contact" className="nav-contact" onClick={closeMenu}>Let&apos;s talk <ArrowUpRight size={14} /></a>
        </nav>
      </header>

      <section className="hero section-wrap" id="home">
        <div className="hero-copy reveal">
          <div className="availability"><span className="pulse" /> OPEN TO OPPORTUNITIES <span className="availability-line" /></div>
          <p className="eyebrow">FULL-STACK DEVELOPER <span>BASED IN BANGLADESH</span></p>
          <h1>Building digital<br />things with <em>purpose.</em></h1>
          <p className="hero-desc">I&apos;m <strong>Muntaha Meem</strong> — a developer who enjoys turning complex problems into useful, intuitive digital experiences, from thoughtful interfaces to reliable backend systems.</p>
          <div className="hero-actions">
            <a href="#work" className="button button-primary">Explore my work <ArrowDownRight size={17} /></a>
            <a href="#contact" className="button button-ghost">Get in touch <ArrowUpRight size={16} /></a>
          </div>
          <div className="hero-footnote"><span>01 / 04</span><span>DESIGN-MINDED. ENGINEERING-LED.</span></div>
        </div>

        <div className="hero-art reveal" aria-label="Decorative code-inspired artwork">
          <div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="orbit orbit-three" />
          <div className="art-cross cross-a">+</div><div className="art-cross cross-b">+</div>
          <div className="art-tag tag-top"><span className="tag-dot" /> BUILD / SHIP / IMPROVE</div>
          <div className="monogram"><span>m</span><i>.</i></div>
          <div className="art-card card-code">
            <div className="code-head"><span /><span /><span /><small>meem.tsx</small></div>
            <div className="code-lines"><p><b>const</b> <i>developer</i> = {"{"}</p><p className="indent">mindset: <em>&quot;curious&quot;</em>,</p><p className="indent">focus: <em>&quot;full-stack&quot;</em>,</p><p className="indent">always: <em>&quot;learning&quot;</em></p><p>{"}"}</p></div>
          </div>
          <div className="art-card card-stack"><span className="stack-icon"><Code2 size={17} /></span><span><b>Thoughtful code</b><small>Built to make sense.</small></span><ArrowUpRight size={16} /></div>
          <div className="art-index">MM—001 <span>PORTFOLIO / 2026</span></div>
        </div>
        <a className="scroll-cue" href="#about"><span className="scroll-line" /> SCROLL TO EXPLORE</a>
      </section>

      <section className="intro section-wrap" id="about">
        <div className="section-label"><span>01</span> / A LITTLE ABOUT ME</div>
        <div className="intro-grid">
          <h2>Curiosity in.<br /><span>Good solutions out.</span></h2>
          <div className="intro-text">
            <p>I like working at the intersection of product thinking and software engineering. My goal is to build applications that feel simple to use, are structured to scale, and solve a real problem.</p>
            <p>From responsive frontend experiences to backend APIs and data models, I enjoy understanding the whole picture—not just one layer of it.</p>
            <a href="#contact" className="text-link">Have a project in mind? <ArrowUpRight size={16} /></a>
          </div>
        </div>
        <div className="principles">
          <div><span className="principle-num">01</span><Sparkles size={18}/><b>Clarity first</b><p>Make the complex feel intuitive.</p></div>
          <div><span className="principle-num">02</span><Layers3 size={18}/><b>Built with structure</b><p>Clean, maintainable foundations.</p></div>
          <div><span className="principle-num">03</span><Globe2 size={18}/><b>Always learning</b><p>Better tools, better outcomes.</p></div>
        </div>
      </section>

      <section className="work section-wrap" id="work">
        <div className="section-top">
          <div><div className="section-label"><span>02</span> / SELECTED WORK</div><h2>Ideas into <em>interfaces.</em></h2></div>
          <p className="section-note">A selection of project concepts and engineering work. Replace these with your verified live projects and repositories.</p>
        </div>
        <div className="project-list">
          {projects.map((project) => (
            <article className={`project-card ${project.tone}`} key={project.number}>
              <div className="project-visual">
                <div className="visual-top"><span>MM / PROJECT {project.number}</span><span>↗</span></div>
                <div className="visual-glyph">{project.glyph}</div>
                <div className="visual-window">
                  <div className="window-bar"><span /><span /><span /><small>overview / dashboard</small></div>
                  <div className="window-content">
                    <div className="mini-sidebar"><i /><i /><i /><i /></div>
                    <div className="mini-main"><div className="mini-title" /><div className="mini-metrics"><i /><i /><i /></div><div className="mini-chart"><span /><span /><span /><span /><span /><span /><span /><span /></div></div>
                  </div>
                </div>
                <div className="visual-caption">DESIGNED FOR THE DETAILS</div>
              </div>
              <div className="project-info">
                <div className="project-meta"><span>{project.number}</span><span>{project.type}</span></div>
                <h3>{project.title}</h3><p>{project.description}</p>
                <div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                <a href={project.link} className="project-link">Discuss a similar project <ArrowUpRight size={16}/></a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="skills section-wrap" id="skills">
        <div className="section-label"><span>03</span> / THE TOOLKIT</div>
        <div className="skills-heading"><h2>Tools are useful.<br /><em>Thinking is essential.</em></h2><p>My toolkit is centred on building full-stack applications with clear architecture, dependable APIs, and interfaces that work across screen sizes.</p></div>
        <div className="skill-grid">
          {skills.map((skill, i) => {
            const Icon = skill.icon;
            return <article className="skill-card" key={skill.title}><div className="skill-card-top"><span>0{i + 1}</span><Icon size={20} /></div><h3>{skill.title}</h3><p>{skill.items}</p><div className="skill-line"><span /></div></article>;
          })}
        </div>
        <div className="stack-strip"><span>CORE STACK</span><div><b>Next.js</b><i /> <b>TypeScript</b><i /> <b>ASP.NET Core</b><i /> <b>PostgreSQL</b><i /> <b>Git</b></div></div>
      </section>

      <section className="journey section-wrap" id="experience">
        <div className="section-label"><span>04</span> / THE JOURNEY</div>
        <div className="journey-grid">
          <h2>Growing through<br /><em>building.</em></h2>
          <div className="journey-content">
            <div className="journey-item"><span className="journey-dot" /><div className="journey-date">NOW / CONTINUOUSLY</div><h3>Full-Stack Development</h3><p>Developing end-to-end skills across modern frontend frameworks, API design, databases, and practical software architecture.</p><span className="journey-status">CURRENT FOCUS</span></div>
            <div className="journey-item"><span className="journey-dot" /><div className="journey-date">IN PROGRESS</div><h3>Projects & Experimentation</h3><p>Learning by building: exploring data-driven dashboards, document intelligence, and useful business applications.</p><span className="journey-status muted-status">BUILD · TEST · REFINE</span></div>
            <div className="journey-note"><Sparkles size={17}/><p>Have a team, idea, or challenge where I could contribute? I&apos;d be happy to hear about it.</p></div>
          </div>
        </div>
      </section>

      <section className="contact section-wrap" id="contact">
        <div className="contact-orb" />
        <div className="section-label"><span>05</span> / MAKE SOMETHING GOOD</div>
        <div className="contact-grid">
          <div className="contact-copy"><p className="eyebrow">HAVE A PROJECT?</p><h2>Let&apos;s make<br />it <em>happen.</em></h2><p className="contact-desc">Have an idea, a role, or a collaboration in mind? Send a note and let&apos;s start a conversation.</p><a href="mailto:hello@example.com" className="email-link"><Mail size={17}/> hello@example.com <ArrowUpRight size={16}/></a><p className="replace-note">Update this placeholder email before publishing.</p></div>
          <form className="contact-form" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
            <label>Your name<input required name="name" placeholder="How should I call you?" /></label>
            <label>Email address<input required name="email" type="email" placeholder="you@company.com" /></label>
            <label>What&apos;s on your mind?<textarea required name="message" rows={4} placeholder="A little context about your project..." /></label>
            <button type="submit" className="button button-primary submit-button">{sent ? "Message prepared" : "Prepare message"} {sent ? <CheckCircle2 size={17}/> : <Send size={16}/>}</button>
            {sent && <p className="form-feedback">Thanks! This demo form does not send messages yet. Connect an email service or backend endpoint before publishing.</p>}
            <p className="form-privacy">No spam. Just a thoughtful conversation.</p>
          </form>
        </div>
      </section>

      <footer className="footer section-wrap">
        <a href="#home" className="brand footer-brand"><span className="brand-mark">m<span>.</span></span><span className="brand-name">MUNTAHA MEEM<span className="brand-sub">BUILT WITH CURIOSITY</span></span></a>
        <span className="footer-copy">© 2026 Muntaha Meem. Crafted with intent.</span>
        <div className="socials"><a href="https://github.com/" aria-label="GitHub" target="_blank" rel="noreferrer"><Github size={17}/></a><a href="https://linkedin.com/" aria-label="LinkedIn" target="_blank" rel="noreferrer"><Linkedin size={17}/></a><a href="mailto:hello@example.com" aria-label="Email"><Mail size={17}/></a></div>
        <a href="#home" className="back-top">BACK TO TOP <ArrowUpRight size={14}/></a>
      </footer>
    </main>
  );
}

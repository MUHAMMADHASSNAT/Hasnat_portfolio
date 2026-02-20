import React, { useState, useEffect } from "react";

const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "tech-stack", label: "Tech Stack" },
  { id: "portfolio", label: "Portfolio" },
  { id: "contact", label: "Contact" },
];

const SOCIAL_LINKS = [
  {
    name: "GitHub",
    url: "https://github.com/MUHAMMADHASSNAT",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/muhammad-hasnat-6053b02a7",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

const TECH_CATEGORIES = [
  {
    id: "languages",
    title: "Languages & Markup",
    icon: "</>",
    color: "bg-gradient-to-br from-indigo-600/90 via-purple-600/90 to-slate-950",
    technologies: ["C++", "JavaScript", "HTML", "CSS", "Python"],
  },
  {
    id: "frameworks",
    title: "Frameworks & Libraries",
    icon: "⚛",
    color: "bg-gradient-to-br from-emerald-500/90 via-teal-500/90 to-slate-950",
    technologies: ["React.js", "Next.js", "Node.js/Express", "Django", "Tailwind CSS", "Bootstrap"],
  },
  {
    id: "database",
    title: "Database & Technology",
    icon: "🗄",
    color: "bg-gradient-to-br from-amber-500/90 via-orange-500/90 to-slate-950",
    technologies: ["MySQL", "MongoDB", "REST APIs", "OpenAI API"],
  },
  {
    id: "tools",
    title: "Tools & Platforms",
    icon: "⚙",
    color: "bg-gradient-to-br from-pink-500/90 via-rose-500/90 to-slate-950",
    technologies: ["Visual Studio", "Git", "GitHub", "Linux"],
  },
];

const SKILL_ITEMS = [
  {
    icon: (
      <svg className="w-5 h-5 flex-shrink-0 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    text: "Proficient in: Designing and developing front-end and back-end applications using various tools",
  },
  {
    icon: (
      <svg className="w-5 h-5 flex-shrink-0 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
        <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7z" />
      </svg>
    ),
    text: "Problem-Solving: Sharpens problem-solving skills through regular practice on platforms like LeetCode",
  },
  {
    icon: (
      <svg className="w-5 h-5 flex-shrink-0 text-emerald-400" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
    text: "Design Excellence: Strong grasp of design principles, ensuring the creation of robust and efficient applications.",
  },
  {
    icon: (
      <svg className="w-5 h-5 flex-shrink-0 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    text: "Effective Communicator: Clear and collaborative in team environments, ensuring seamless project execution",
  },
];


const PROJECTS = [
  {
    title: "E-Commerce Redis-Powered",
    description: "A high-performance e-commerce platform powered by Redis for caching and real-time data management.",
    image: "/projects/img1.png",
    technologies: ["Node.js", "Express", "Redis", "MongoDB", "React"],
    liveUrl: null,
    githubUrl: "https://github.com/ArfanAbid/E-Commerce-RedisPowered",
  },
];

function Navbar({ active }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg/95 backdrop-blur-xl border-b border-slate-700/40 shadow-lg shadow-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
        <div className="flex items-center min-w-0">
          <div className="flex flex-col leading-tight">
            <h1 className="text-lg sm:text-2xl font-bold tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-300 to-cyan-400 navbar-brand-gradient">
                Muhammad Hasnat
              </span>
            </h1>
            <span className="text-slate-400 text-xs sm:text-sm font-medium tracking-wide">
              Full Stack Developer
            </span>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-1 lg:gap-2">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`group relative px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                active === link.id
                  ? "text-accent"
                  : "text-slate-300 hover:text-white hover:bg-white/5"
              }`}
            >
              {link.label}
              <span
                className={`absolute bottom-1 left-1/2 -translate-x-1/2 h-0.5 rounded-full transition-all duration-300 ${
                  active === link.id
                    ? "w-8 bg-accent opacity-100"
                    : "w-0 bg-accent/60 opacity-0 group-hover:w-6 group-hover:opacity-100"
                }`}
              />
            </button>
          ))}
        </div>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-slate-300 hover:text-accent transition"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 py-4 space-y-1 bg-bg/98 border-t border-slate-700/40">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`block w-full text-left py-3 px-4 rounded-lg text-sm font-medium transition ${
                active === link.id
                  ? "bg-accent/10 text-accent"
                  : "text-slate-300 hover:bg-slate-800"
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}

function ProfileImage() {
  const [imgError, setImgError] = useState(false);
  return imgError ? (
    <div className="w-full h-full bg-gradient-to-br from-slate-600 to-slate-800 flex items-center justify-center text-4xl sm:text-5xl md:text-6xl font-bold text-accent">
      MH
    </div>
  ) : (
    <img
      src="/profile.jpg"
      alt="Muhammad Hasnat"
      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
      onError={() => setImgError(true)}
    />
  );
}

function HeroSection() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [hasMoved, setHasMoved] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCursorPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
    if (!hasMoved) setHasMoved(true);
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-24 sm:pt-20 px-4 sm:px-6 md:px-8 relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Static background glowing circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="glow-circle w-96 h-96 bg-accent/20 top-20 right-20"></div>
        <div className="glow-circle w-80 h-80 bg-blue-500/10 top-40 left-10"></div>
      </div>

      {/* Cursor-follow glow */}
      <div
        className={`pointer-events-none absolute inset-0 transition-opacity duration-500 ${
          hasMoved ? "opacity-100" : "opacity-0"
        }`}
        style={{
          background: `radial-gradient(500px circle at ${cursorPos.x}px ${cursorPos.y}px, rgba(56, 189, 248, 0.18), transparent 65%)`,
          mixBlendMode: "screen",
        }}
      />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center relative z-10">
        {/* Left Column - Text Content */}
        <div className="space-y-4 sm:space-y-6 text-center md:text-left">
          <p className="text-base sm:text-lg md:text-xl text-slate-300 fade-in-up">
            Hello, I&apos;m a
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            <span className="text-white">Software </span>
            <span className="text-accent">Engineer</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300">
            I build{" "}
            <span className="text-accent underline decoration-accent/50">
              solutions
            </span>{" "}
            for tech and business.
          </p>
          <p className="text-sm md:text-base text-slate-400 max-w-xl mx-auto md:mx-0 leading-relaxed">
            With a strong understanding of algorithms, problem-solving, and
            software development. I love creating practical solutions and
            constantly improving my skills to deliver meaningful projects.
          </p>

          {/* Social Media Icons - GitHub & LinkedIn */}
          <div className="flex items-center justify-center md:justify-start gap-4 pt-4">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl bg-slate-800/50 border border-slate-700/50 flex items-center justify-center text-white hover:border-accent/60 hover:bg-accent/10 hover:scale-110 transition-all duration-300"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3 sm:gap-4 pt-4">
            <button className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg border-2 border-accent text-accent font-medium hover:bg-accent/10 hover:scale-105 transition-all duration-200 flex items-center gap-2">
              Resume
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </button>
            <button
              onClick={() => {
                document
                  .getElementById("portfolio")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg bg-slate-800/50 border border-slate-700/50 text-white font-medium hover:bg-slate-800 hover:border-slate-600 hover:scale-105 transition-all duration-200 flex items-center gap-2"
            >
              View Projects
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Right Column - Profile Image with Premium Ring */}
        <div className="flex items-center justify-center relative order-first md:order-last">
          <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80">
            {/* Soft outer glow */}
            <div className="profile-ring-glow" />
            {/* Animated gradient ring */}
            <div className="profile-ring w-full h-full">
              <div className="profile-ring-inner w-full h-full">
                <div className="relative w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-slate-700 to-slate-900">
                  <ProfileImage />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 py-16 sm:py-20"
    >
      <div className="max-w-6xl mx-auto space-y-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center">
          About Me
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column */}
          <div className="space-y-6 text-slate-300 leading-relaxed">
            <p className="text-base md:text-lg">
              Hello, I&apos;m{" "}
              <span className="bg-gradient-to-r from-accent via-emerald-400 to-teal-400 bg-clip-text text-transparent font-bold text-lg md:text-xl">
                Muhammad Hasnat
              </span>
              , a scholar of computer science and programmer with a passion for solving real-world problems. I&apos;m currently pursuing my degree in Software Engineering and honing my programming skills through personal projects and internships.
            </p>

            <div>
              <h3 className="text-lg md:text-xl font-bold text-accent mb-3">
                Education & Training
              </h3>
              <div className="bg-slate-800/40 border border-slate-700/50 rounded-lg p-4">
                <h4 className="text-base font-semibold text-white mb-1">
                  Bachelor of Science in Software Engineering
                </h4>
                <p className="text-slate-300">Kohsar University Murree</p>
                <p className="text-slate-400 text-sm mt-1">Expected 2027</p>
              </div>
            </div>

            <div>
              <h3 className="text-lg md:text-xl font-bold text-accent mb-3">
                Mission Statement
              </h3>
              <div className="bg-slate-800/40 border border-slate-700/50 rounded-lg p-4">
                <p className="text-slate-300">
                  My mission is to use my skills and creativity to deliver innovative tech solutions that exceed client expectations and enhance the digital world. I&apos;m dedicated to continuous learning, always looking for new challenges and opportunities to grow.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Skills & Expertise */}
          <div>
            <h3 className="text-lg md:text-xl font-bold text-accent mb-4">
              Skills & Expertise
            </h3>
            <div className="space-y-4">
              {SKILL_ITEMS.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 bg-slate-800/40 border border-slate-700/50 rounded-lg p-4 hover:border-accent/30 transition-colors"
                >
                  <span className="mt-0.5">{item.icon}</span>
                  <p className="text-slate-300 text-sm md:text-base">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TechStackSection() {
  const [expanded, setExpanded] = useState(null);
  const [animating, setAnimating] = useState(false);

  const toggleExpand = (id) => {
    if (animating) return;
    if (expanded === id) {
      setExpanded(null);
      return;
    }
    setAnimating(true);
    setExpanded(id);
    setTimeout(() => setAnimating(false), 400);
  };

  return (
    <section
      id="tech-stack"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 py-16 sm:py-20"
    >
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-3">
            <span className="text-white">Tech </span>
            <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              Stack
            </span>
          </h2>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700/50 text-slate-300 text-sm">
            <span className="text-accent">{"</>"}</span> Technologies I Use
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 items-stretch auto-rows-fr">
          {TECH_CATEGORIES.map((category) => (
            <div
              key={category.id}
              className={`${category.color} relative h-full rounded-2xl p-4 sm:p-6 cursor-pointer transition-all duration-300 ease-out hover:scale-[1.02] active:scale-[0.98] hover:shadow-xl hover:shadow-black/25 border border-white/10 ${
                expanded === category.id ? "ring-2 ring-white/30" : ""
              }`}
              onClick={() => toggleExpand(category.id)}
            >
              <div className="flex items-center justify-between relative z-10">
                <div className="flex items-center gap-4">
                  <span className="text-2xl">{category.icon}</span>
                  <h3 className="text-lg font-bold text-white">
                    {category.title}
                  </h3>
                </div>
                <svg
                  className={`w-5 h-5 text-white transition-transform duration-300 ${
                    expanded === category.id ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>

              <div
                className={`overflow-hidden transition-all duration-300 ease-out relative z-10 ${
                  expanded === category.id
                    ? "max-h-96 opacity-100 mt-4 pt-4 border-t border-white/20"
                    : "max-h-0 opacity-0 mt-0 pt-0"
                }`}
              >
                <ul className="grid grid-cols-2 gap-2 tech-stack-list">
                  {category.technologies.map((tech, idx) => (
                    <li
                      key={idx}
                      className="text-sm text-white/90 bg-white/10 rounded px-3 py-2 tech-item"
                      style={{ animationDelay: `${idx * 70}ms` }}
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>

              {/* subtle inner highlight */}
              <div className="pointer-events-none absolute inset-0 opacity-0 hover:opacity-80 transition-opacity duration-500" style={{ background: "radial-gradient(circle at top left, rgba(255,255,255,0.22), transparent 55%)" }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PortfolioSection() {
  return (
    <section
      id="portfolio"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 py-16 sm:py-20"
    >
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Portfolio
          </h2>
          <p className="text-slate-400 text-lg">My recent projects</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, idx) => (
            <div
              key={idx}
              className="bg-slate-800/50 border border-slate-700/50 rounded-xl overflow-hidden hover:border-accent/50 transition-all duration-300 hover:scale-[1.02] group"
            >
              <div className="h-48 bg-slate-700/50 relative overflow-hidden">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-slate-400">
                    <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-slate-400 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      className="text-xs bg-accent/20 text-accent px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-slate-300 hover:text-accent transition text-sm"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                      GitHub
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-slate-300 hover:text-accent transition text-sm"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const mailtoLink = `mailto:muhammadhasnat75@gmail.com?subject=Contact from Portfolio - ${formData.firstName} ${formData.lastName}&body=${encodeURIComponent(
      `Name: ${formData.firstName} ${formData.lastName}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    window.location.href = mailtoLink;
    setStatus("Opened!");
    setTimeout(() => {
      setFormData({ firstName: "", lastName: "", email: "", message: "" });
      setStatus("");
    }, 1500);
  };

  const year = new Date().getFullYear();

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col px-4 sm:px-6 md:px-8 py-16 sm:py-20"
    >
      <div className="max-w-2xl mx-auto flex-1 w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 text-left">
          Contact
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="border-b border-slate-600 pb-2 focus-within:border-accent transition-colors">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                placeholder="First name"
                className="w-full bg-transparent text-white placeholder-slate-500 outline-none"
              />
            </div>
            <div className="border-b border-slate-600 pb-2 focus-within:border-accent transition-colors">
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                placeholder="Last name"
                className="w-full bg-transparent text-white placeholder-slate-500 outline-none"
              />
            </div>
          </div>

          <div className="border-b border-slate-600 pb-2 focus-within:border-accent transition-colors">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Email address"
              className="w-full bg-transparent text-white placeholder-slate-500 outline-none"
            />
          </div>

          <div className="border-b border-slate-600 pb-2 focus-within:border-accent transition-colors">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              placeholder="Message"
              className="w-full bg-transparent text-white placeholder-slate-500 outline-none resize-none"
            />
          </div>

          <button
            type="submit"
            className="px-8 py-3 bg-accent text-slate-900 font-semibold rounded hover:bg-accent/90 transition text-left"
          >
            {status || "Submit"}
          </button>
        </form>
      </div>
              {/* Hire Me Section */}
        <div className="mt-12 p-8 bg-gradient-to-br from-slate-800/60 to-slate-900/60 border border-slate-700/50 rounded-xl">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Hire me!
          </h3>
          <p className="text-slate-300 leading-relaxed mb-6">
            Let&apos;s Build Something Amazing Together I&apos;m always open to exciting opportunities and collaborations. Whether you&apos;re looking for a modern website, a responsive UI, or a long-term developer for your team — I&apos;m ready to help bring your vision to life. Let&apos;s connect and turn your idea into reality!
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/CV.pdf"
              download="CV.pdf"
              className="px-6 py-3 bg-accent text-slate-900 font-semibold rounded hover:bg-accent/90 transition text-center flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download CV
            </a>
            <a
              href="https://wa.me/03128595061"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-green-600 text-white font-semibold rounded hover:bg-green-700 transition text-center flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Contact Me
            </a>
          </div>
        </div>
      {/* Footer - Contact section ke andar */}
      <footer className="mt-16 md:mt-24 pt-8 border-t border-slate-800 text-center">
        <p className="text-slate-500 text-sm">
          © {year}{" "}
          <span className="text-accent font-medium">Muhammad Hasnat</span>. All
          rights reserved.
        </p>
        <div className="flex justify-center gap-4 mt-4">
          {SOCIAL_LINKS.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-accent transition"
              aria-label={social.name}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </footer>
    </section>
  );
}

export default function App() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 100;
      let current = "home";

      NAV_LINKS.forEach((link) => {
        const el = document.getElementById(link.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            current = link.id;
          }
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-bg text-white relative">
      <Navbar active={active} />
      <HeroSection />
      <AboutSection />
      <TechStackSection />
      <PortfolioSection />
      <ContactSection />
    </div>
  );
}

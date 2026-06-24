export function Hero() {
  const heroTools = [
    "Power BI",
    "SQL",
    "Python",
    "Excel",
    "DAX",
    "Power Query",
    "Data Modelling",
    "Dashboards",
    "Star Schema",
    "ETL",
    "Data Cleaning",
  ];

  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center px-6 pt-32 lg:pt-20"
    >
      <div className="mx-auto w-full max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left Column: Profile & Info */}
          <div className="text-left lg:col-span-7">
            {/* Name + Avatar Row */}
            <div
              className="flex flex-col items-start gap-6 opacity-0 sm:flex-row sm:items-center"
              style={{
                animation:
                  "fade-up 1.1s 0.1s cubic-bezier(0.22,1,0.36,1) forwards",
              }}
            >
              {/* Name Block */}
              <div className="min-w-0">
                <p className="mb-2 font-mono text-[10px] font-semibold uppercase tracking-[0.25em] text-muted-foreground">
                  Personal Profile
                </p>

                <h1 className="font-sans text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl md:text-7xl">
                  Tien Vuong
                  <br />
                  Nguyen
                </h1>
              </div>

              {/* Avatar */}
              <div className="relative shrink-0 sm:ml-2 md:ml-6">
                <div className="h-26 w-26 overflow-hidden rounded-full border border-white/15 bg-white/5 shadow-[0_0_35px_rgba(122,192,233,0.12)] md:h-30 md:w-30">
                  <img
                    src="/images/jay_nguyen.png"
                    alt="Tien Vuong Nguyen avatar"
                    className="h-full w-full object-cover object-center"
                  />
                </div>

                {/* Soft glow ring */}
                <div className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-accent/30" />

                {/* Small status dot */}
                <div className="absolute bottom-1 right-1 h-4 w-4 rounded-full border-2 border-slate-950 bg-accent shadow-[0_0_14px_rgba(122,192,233,0.45)]" />
              </div>
            </div>

            {/* 2. Data Analyst as the role */}
            <p
              className="mt-6 font-sans text-2xl font-semibold tracking-wide text-accent opacity-0 md:text-3xl"
              style={{
                animation:
                  "fade-up 1.1s 0.35s cubic-bezier(0.22,1,0.36,1) forwards",
              }}
            >
              Data Analyst
            </p>

            {/* 3. Preferred name as a small supporting line */}
            <p
              className="mt-2 font-mono text-xs uppercase tracking-wider text-muted-foreground opacity-0"
              style={{
                animation:
                  "fade-up 1.1s 0.45s cubic-bezier(0.22,1,0.36,1) forwards",
              }}
            >
              Preferred name: Jay Nguyen
            </p>

            {/* 4. Tool badges */}
            <div
              className="mt-5 opacity-0"
              style={{
                animation:
                  "fade-up 1.1s 0.55s cubic-bezier(0.22,1,0.36,1) forwards",
              }}
            >
              <div className="flex flex-wrap items-center gap-2">
                {heroTools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border border-purple-500/25 bg-purple-500/10 px-3 py-1 text-xs font-semibold text-purple-200 transition-all duration-300 hover:border-purple-400/40 hover:bg-purple-500/15"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* 5. Short description */}
            <p
              className="mt-6 max-w-xl font-sans text-lg leading-relaxed text-foreground/80 opacity-0 md:text-xl"
              style={{
                animation:
                  "fade-up 1.1s 0.65s cubic-bezier(0.22,1,0.36,1) forwards",
              }}
            >
              I transform complex datasets into clear dashboards, business
              insights, and predictive models using Power BI, SQL, Python, and
              R.
            </p>

            {/* 6. CTA buttons */}
            <div
              className="mt-10 flex flex-wrap gap-4 opacity-0"
              style={{
                animation:
                  "fade-up 1.1s 0.8s cubic-bezier(0.22,1,0.36,1) forwards",
              }}
            >
              <a
                href="#projects"
                className="group relative overflow-hidden rounded-full bg-ink px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.15em] text-paper transition-transform hover:-translate-y-0.5"
              >
                <span className="relative z-10">View Projects</span>
              </a>

              <a
                href="https://drive.google.com/uc?export=download&id=12sT98Vx5BNL7Fn3owon_GIT7Z9OpSsx6"
                className="rounded-full border border-ink/40 px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.15em] transition-all hover:border-ink hover:bg-ink/5"
              >
                Download Resume
              </a>
            </div>
          </div>

          {/* Right Column: Power BI Style Profile Dashboard Card */}
          <div
            className="relative opacity-0 lg:col-span-5"
            style={{
              animation:
                "fade-up 1.3s 0.4s cubic-bezier(0.22,1,0.36,1) forwards",
            }}
          >
            {/* Technical layout framing & dot-matrix accent directly behind the dashboard card */}
            <div className="pointer-events-none absolute -inset-4 -z-10 rounded-3xl border border-white/[0.03] bg-gradient-to-br from-accent/[0.015] to-transparent" />

            <div
              className="pointer-events-none absolute -right-6 -top-6 -z-10 h-20 w-20 opacity-30"
              style={{
                backgroundImage:
                  "radial-gradient(rgba(122, 192, 233, 0.15) 1px, transparent 1px)",
                backgroundSize: "8px 8px",
              }}
            />

            <div
              className="pointer-events-none absolute -bottom-6 -left-6 -z-10 h-16 w-16 opacity-20"
              style={{
                backgroundImage:
                  "radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px)",
                backgroundSize: "8px 8px",
              }}
            />

            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-950/40 p-6 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] backdrop-blur-md transition-all duration-500 hover:border-accent/30 hover:shadow-[0_40px_80px_-20px_rgba(122,192,233,0.15)]">
              {/* Power BI Window Header */}
              <div className="mb-5 flex items-center justify-between border-b border-white/5 pb-3.5">
                <div className="flex items-center gap-2 font-sans text-[11px] font-bold uppercase tracking-[0.15em] text-white">
                  <span className="h-2 w-2 rounded bg-accent" />
                  ANALYST OVERVIEW // BI DASHBOARD
                </div>

                <div className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground">
                  REPORT VIEW
                </div>
              </div>

              {/* Top KPI tiles */}
              <div className="mb-5 grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-white/5 bg-white/[0.02] p-3">
                  <div className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground">
                    Current Role
                  </div>
                  <div className="mt-1 font-sans text-xs font-semibold text-white">
                    Data Analyst
                  </div>
                  <div className="font-sans text-[10px] text-accent">
                    BIG Digital
                  </div>
                </div>

                <div className="rounded-xl border border-white/5 bg-white/[0.02] p-3">
                  <div className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground">
                    Education
                  </div>
                  <div className="mt-1 font-sans text-xs font-semibold text-white">
                    M.S. Data Science
                  </div>
                  <div className="font-sans text-[10px] text-muted-foreground">
                    Deakin University
                  </div>
                </div>

                <div className="rounded-xl border border-white/5 bg-white/[0.02] p-3">
                  <div className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground">
                    Location
                  </div>
                  <div className="mt-1 font-sans text-xs font-semibold text-white">
                    Melbourne, AU
                  </div>
                  <div className="font-sans text-[10px] text-muted-foreground">
                    Australia
                  </div>
                </div>

                <div className="rounded-xl border border-white/5 bg-white/[0.02] p-3">
                  <div className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground">
                    Core Tools
                  </div>
                  <div className="mt-1 flex flex-wrap gap-1.5">
                    {heroTools.map((tool) => (
                      <span
                        key={tool}
                        className="rounded-full border border-accent/20 bg-accent/10 px-2 py-0.5 text-[9px] font-semibold text-accent"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Middle Section: Power BI style horizontal bar chart */}
              <div className="mb-5 rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <div className="mb-3 font-sans text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                  Focus Areas & Coverage
                </div>

                <div className="space-y-2.5">
                  {[
                    ["Dashboards", "95%"],
                    ["Data Modelling", "90%"],
                    ["Business Insights", "92%"],
                    ["Predictive Analytics", "80%"],
                  ].map(([label, value]) => (
                    <div key={label}>
                      <div className="mb-1 flex justify-between font-sans text-[10px] text-foreground/80">
                        <span>{label}</span>
                        <span className="font-semibold text-accent">
                          {value}
                        </span>
                      </div>

                      <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/5">
                        <div
                          className="h-full rounded-full bg-accent"
                          style={{ width: value }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Section: Featured Projects Table / Matrix */}
              <div className="rounded-xl border border-white/5 bg-white/[0.02] p-3.5">
                <div className="mb-2.5 font-sans text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                  Featured Projects
                </div>

                <div className="space-y-2 font-sans text-[10px] text-foreground/80">
                  <div className="flex items-center gap-2 border-b border-white/5 pb-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    <span className="flex-1 truncate">
                      Melbourne Housing Market
                    </span>
                    <span className="font-mono text-[9px] uppercase tracking-wide text-muted-foreground">
                      Analysis
                    </span>
                  </div>

                  <div className="flex items-center gap-2 border-b border-white/5 pb-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    <span className="flex-1 truncate">
                      Pizza Sales Performance
                    </span>
                    <span className="font-mono text-[9px] uppercase tracking-wide text-muted-foreground">
                      Dashboard
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    <span className="flex-1 truncate">
                      Supermarket Sales Analytics
                    </span>
                    <span className="font-mono text-[9px] uppercase tracking-wide text-muted-foreground">
                      BI Model
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
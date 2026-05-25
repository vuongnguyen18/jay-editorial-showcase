export function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center px-6 pt-32 lg:pt-20">
      <div className="mx-auto w-full max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          
          {/* Left Column: Profile & Info */}
          <div className="text-left lg:col-span-7">
            {/* 1. Full name as the main heading */}
            <h1
              className="font-sans text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl md:text-7xl opacity-0"
              style={{ animation: "fade-up 1.1s 0.2s cubic-bezier(0.22,1,0.36,1) forwards" }}
            >
              Tien Vuong Nguyen
            </h1>

            {/* 2. Data Analyst as the role */}
            <p
              className="mt-3 font-sans text-2xl font-semibold tracking-wide text-accent md:text-3xl opacity-0"
              style={{ animation: "fade-up 1.1s 0.35s cubic-bezier(0.22,1,0.36,1) forwards" }}
            >
              Data Analyst
            </p>

            {/* 3. Preferred name as a small supporting line */}
            <p
              className="mt-2 font-mono text-xs uppercase tracking-wider text-muted-foreground opacity-0"
              style={{ animation: "fade-up 1.1s 0.45s cubic-bezier(0.22,1,0.36,1) forwards" }}
            >
              Preferred name: Jay Nguyen
            </p>

            {/* 4. Skill and location line */}
            <p
              className="mt-5 font-sans text-sm font-medium tracking-wide text-foreground/75 opacity-0"
              style={{ animation: "fade-up 1.1s 0.55s cubic-bezier(0.22,1,0.36,1) forwards" }}
            >
              Power BI · SQL · Python · R &nbsp;|&nbsp; Melbourne, Australia
            </p>

            {/* 5. Short description */}
            <p
              className="mt-6 max-w-xl font-sans text-lg leading-relaxed text-foreground/80 md:text-xl opacity-0"
              style={{ animation: "fade-up 1.1s 0.65s cubic-bezier(0.22,1,0.36,1) forwards" }}
            >
              I transform complex datasets into clear dashboards, business insights, and predictive models using Power BI, SQL, Python, and R.
            </p>

            {/* 6. CTA buttons */}
            <div
              className="mt-10 flex flex-wrap gap-4 opacity-0"
              style={{ animation: "fade-up 1.1s 0.8s cubic-bezier(0.22,1,0.36,1) forwards" }}
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
            className="lg:col-span-5 opacity-0 relative"
            style={{ animation: "fade-up 1.3s 0.4s cubic-bezier(0.22,1,0.36,1) forwards" }}
          >
            {/* Technical layout framing & dot-matrix accent directly behind the dashboard card */}
            <div className="absolute -inset-4 -z-10 rounded-3xl border border-white/[0.03] bg-gradient-to-br from-accent/[0.015] to-transparent pointer-events-none" />
            <div className="absolute -right-6 -top-6 -z-10 h-20 w-20 opacity-30 pointer-events-none" style={{ backgroundImage: "radial-gradient(rgba(122, 192, 233, 0.15) 1px, transparent 1px)", backgroundSize: "8px 8px" }} />
            <div className="absolute -left-6 -bottom-6 -z-10 h-16 w-16 opacity-20 pointer-events-none" style={{ backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px)", backgroundSize: "8px 8px" }} />

            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-950/40 p-6 backdrop-blur-md shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] transition-all duration-500 hover:border-accent/30 hover:shadow-[0_40px_80px_-20px_rgba(122,192,233,0.15)]">
              
              {/* Power BI Window Header */}
              <div className="mb-5 flex items-center justify-between border-b border-white/5 pb-3.5">
                <div className="font-sans text-[11px] font-bold uppercase tracking-[0.15em] text-white flex items-center gap-2">
                  <span className="h-2 w-2 rounded bg-accent" />
                  ANALYST OVERVIEW // BI DASHBOARD
                </div>
                <div className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground">
                  REPORT VIEW
                </div>
              </div>

              {/* Top KPI tiles (Grid of 2) */}
              <div className="grid grid-cols-2 gap-3 mb-5">
                <div className="rounded-xl bg-white/[0.02] border border-white/5 p-3">
                  <div className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground">Current Role</div>
                  <div className="mt-1 font-sans text-xs font-semibold text-white">Data Analyst</div>
                  <div className="font-sans text-[10px] text-accent">BIG Digital</div>
                </div>
                <div className="rounded-xl bg-white/[0.02] border border-white/5 p-3">
                  <div className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground">Education</div>
                  <div className="mt-1 font-sans text-xs font-semibold text-white">M.S. Data Science</div>
                  <div className="font-sans text-[10px] text-muted-foreground">Deakin University</div>
                </div>
                <div className="rounded-xl bg-white/[0.02] border border-white/5 p-3">
                  <div className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground">Location</div>
                  <div className="mt-1 font-sans text-xs font-semibold text-white">Melbourne, AU</div>
                  <div className="font-sans text-[10px] text-muted-foreground">Australia</div>
                </div>
                <div className="rounded-xl bg-white/[0.02] border border-white/5 p-3">
                  <div className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground">Core Tools</div>
                  <div className="mt-1 font-sans text-[10px] font-semibold text-accent leading-tight">
                    Power BI · SQL<br />Python · R
                  </div>
                </div>
              </div>

              {/* Middle Section: Power BI style horizontal bar chart */}
              <div className="rounded-xl bg-white/[0.02] border border-white/5 p-4 mb-5">
                <div className="font-sans text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-3">Focus Areas & Coverage</div>
                <div className="space-y-2.5">
                  <div>
                    <div className="flex justify-between font-sans text-[10px] text-foreground/80 mb-1">
                      <span>Dashboards</span>
                      <span className="text-accent font-semibold">95%</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-accent rounded-full" style={{ width: "95%" }} />
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between font-sans text-[10px] text-foreground/80 mb-1">
                      <span>Data Modelling</span>
                      <span className="text-accent font-semibold">90%</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-accent rounded-full" style={{ width: "90%" }} />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between font-sans text-[10px] text-foreground/80 mb-1">
                      <span>Business Insights</span>
                      <span className="text-accent font-semibold">92%</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-accent rounded-full" style={{ width: "92%" }} />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between font-sans text-[10px] text-foreground/80 mb-1">
                      <span>Predictive Analytics</span>
                      <span className="text-accent font-semibold">80%</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-accent rounded-full" style={{ width: "80%" }} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Section: Featured Projects Table / Matrix */}
              <div className="rounded-xl bg-white/[0.02] border border-white/5 p-3.5">
                <div className="font-sans text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-2.5">Featured Projects</div>
                <div className="font-sans text-[10px] space-y-2 text-foreground/80">
                  <div className="flex items-center gap-2 border-b border-white/5 pb-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    <span className="flex-1 truncate">Melbourne Housing Market</span>
                    <span className="text-muted-foreground font-mono text-[9px] uppercase tracking-wide">Analysis</span>
                  </div>
                  <div className="flex items-center gap-2 border-b border-white/5 pb-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    <span className="flex-1 truncate">Pizza Sales Performance</span>
                    <span className="text-muted-foreground font-mono text-[9px] uppercase tracking-wide">Dashboard</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    <span className="flex-1 truncate">Netflix Content Strategy</span>
                    <span className="text-muted-foreground font-mono text-[9px] uppercase tracking-wide">Data Model</span>
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

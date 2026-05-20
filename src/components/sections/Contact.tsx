import { useState } from "react";
import { Reveal } from "../Reveal";
import { Mail, Github, Linkedin, Send } from "lucide-react";
import { toast } from "sonner";

const channels = [
  { label: "Email", value: "vuongnt31@gmail.com", href: "mailto:vuongnt31@gmail.com", icon: Mail },
  { label: "GitHub", value: "github.com/vuongnguyen18", href: "https://github.com/vuongnguyen18", icon: Github },
  { label: "LinkedIn", value: "Vuong (Jay) Nguyen", href: "https://linkedin.com/in/vuong-nguyen-3676a7213", icon: Linkedin },
];

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Construct mailto link with pre-filled fields
      const targetEmail = "vuongnt31@gmail.com";
      const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
      const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
      );

      // Trigger the mailto redirect
      window.location.href = `mailto:${targetEmail}?subject=${subject}&body=${body}`;

      // Show success toast
      toast.success("Success! Opening your email client to send the message.");
      
      // Clear form inputs
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      toast.error("Failed to open email client. Please email vuongnt31@gmail.com directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="mb-16 flex items-baseline gap-6">
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent">§ 05</span>
            <h2 className="font-serif text-4xl md:text-5xl">Correspondence</h2>
            <span className="h-px flex-1 editorial-rule" />
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#131130] via-[#0b0c1e] to-[#04050f] border border-white/10 p-8 md:p-16 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.75)]">
            {/* Neon Glow Blobs */}
            <div className="absolute -top-40 -right-40 h-[30rem] w-[30rem] rounded-full bg-purple-600/10 blur-[130px] pointer-events-none" />
            <div className="absolute -bottom-40 -left-40 h-[30rem] w-[30rem] rounded-full bg-blue-600/10 blur-[130px] pointer-events-none" />

            <div className="relative z-10 grid gap-16 lg:grid-cols-12 items-center">
              {/* Left Side Content */}
              <div className="lg:col-span-7 flex flex-col justify-center">
                <span className="font-mono text-xs font-semibold uppercase tracking-[0.3em] text-purple-400">
                  Contact
                </span>
                <h3 className="mt-4 font-sans text-5xl font-bold leading-[1.1] tracking-tight text-white sm:text-6xl xl:text-7xl">
                  Let’s turn <br />
                  data into <br />
                  <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-sky-400 bg-clip-text text-transparent">
                    insight
                  </span>.
                </h3>
                <p className="mt-8 max-w-lg text-base leading-relaxed text-slate-300">
                  I’m currently open to full-time Data Analyst and Business Intelligence opportunities.
                  <br /><br />
                  If you’re hiring, collaborating on a data project, or would like to connect, feel free to reach out.
                </p>

                {/* Contact Channels */}
                <div className="mt-12 flex flex-col gap-5">
                  {channels.map((c) => (
                    <div key={c.label}>
                      <a
                        href={c.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-4 text-slate-300 hover:text-white transition-colors"
                      >
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 border border-white/10 group-hover:bg-purple-500/15 group-hover:border-purple-500/40 transition-all duration-300">
                          <c.icon className="h-5 w-5 text-purple-300 group-hover:text-purple-200 transition-colors" />
                        </div>
                        <span className="font-mono text-sm tracking-wide">{c.value}</span>
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Side Form Card */}
              <div className="lg:col-span-5">
                <div className="glass-strong rounded-3xl border border-white/10 bg-[#0c0a20]/45 p-8 md:p-10 backdrop-blur-xl shadow-2xl relative overflow-hidden">
                  {/* Subtle inner glow */}
                  <div className="absolute -top-24 -left-24 h-48 w-48 rounded-full bg-pink-500/5 blur-3xl pointer-events-none" />

                  <form 
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-purple-300/80">
                        Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Jane Doe"
                        className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-white placeholder-white/30 transition-all duration-300 focus:border-purple-400 focus:bg-white/10 focus:outline-none focus:ring-1 focus:ring-purple-400 animate-none"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-purple-300/80">
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="jane@example.com"
                        className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-white placeholder-white/30 transition-all duration-300 focus:border-purple-400 focus:bg-white/10 focus:outline-none focus:ring-1 focus:ring-purple-400 animate-none"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-purple-300/80">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={4}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Tell me about your project..."
                        className="w-full resize-none rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-white placeholder-white/30 transition-all duration-300 focus:border-purple-400 focus:bg-white/10 focus:outline-none focus:ring-1 focus:ring-purple-400 animate-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500 py-4 text-sm font-semibold uppercase tracking-wider text-white shadow-lg shadow-purple-500/20 transition-all duration-500 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-fuchsia-500/30 active:translate-y-0 disabled:opacity-75"
                    >
                      <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <span>{isSubmitting ? "Sending..." : "Send message"}</span>
                      <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <footer className="mt-32 flex flex-col items-center justify-between gap-4 border-t border-ink/15 pt-10 text-center font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground md:flex-row md:text-left">
            <span>© MMXXVI — Tien Vuong Nguyen</span>
            <span className="italic font-serif normal-case tracking-normal">
              Set in Cormorant & Inter. Hand-built with care.
            </span>
            <span>Melbourne ⇄ The World</span>
          </footer>
        </Reveal>
      </div>
    </section>
  );
}

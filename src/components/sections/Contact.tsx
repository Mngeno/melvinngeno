import { useState } from "react";
import { z } from "zod";
import { Mail, Phone, Linkedin, Github, MapPin, Send, CheckCircle2 } from "lucide-react";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  subject: z.string().trim().min(2, "Please add a subject").max(150),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(2000),
});

const CONTACTS = [
  { icon: Mail, label: "Email", value: "melvin.ngeno@example.com", href: "mailto:melvin.ngeno@example.com" },
  { icon: Phone, label: "Phone", value: "+254 700 000 000", href: "tel:+254700000000" },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/melvin-ngeno", href: "https://www.linkedin.com/" },
  { icon: Github, label: "GitHub", value: "github.com/melvin-ngeno", href: "https://github.com/" },
  { icon: MapPin, label: "Location", value: "Nairobi, Kenya", href: "#" },
];

export function Contact() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const fe: Record<string, string> = {};
      parsed.error.issues.forEach((i) => (fe[i.path[0] as string] = i.message));
      setErrors(fe);
      return;
    }
    setErrors({});
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSent(true);
      (e.target as HTMLFormElement).reset();
    }, 700);
  };

  return (
    <section id="contact" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-muted px-3 py-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Get in touch
            </span>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
              Let's chart the next project together
            </h2>
            <p className="mt-4 text-muted-foreground">
              Whether you need geospatial advisory, survey services or full implementation of a land information
              system, I'd love to hear about your work.
            </p>

            <ul className="mt-8 space-y-3">
              {CONTACTS.map((c) => (
                <li key={c.label}>
                  <a
                    href={c.href}
                    className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-4 transition hover:-translate-y-0.5 hover:border-geo/40 hover:shadow-card-soft"
                  >
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent text-geo transition group-hover:bg-gradient-accent group-hover:text-white">
                      <c.icon className="h-5 w-5" />
                    </span>
                    <div className="min-w-0">
                      <div className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
                        {c.label}
                      </div>
                      <div className="truncate text-sm font-semibold text-foreground">{c.value}</div>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Form */}
          <form
            onSubmit={onSubmit}
            className="relative overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-card-soft sm:p-8"
          >
            <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-gradient-accent opacity-10 blur-3xl" />
            <h3 className="font-display text-xl font-bold">Send a message</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              I usually reply within one business day.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <Field label="Name" name="name" error={errors.name} placeholder="Jane Doe" />
              <Field label="Email" name="email" type="email" error={errors.email} placeholder="jane@company.co.ke" />
            </div>
            <div className="mt-4">
              <Field label="Subject" name="subject" error={errors.subject} placeholder="Project enquiry" />
            </div>
            <div className="mt-4">
              <label className="block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Message
              </label>
              <textarea
                name="message"
                rows={5}
                maxLength={2000}
                placeholder="Tell me about your project, timelines and goals…"
                className="mt-2 w-full resize-none rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none ring-ring/30 transition focus:border-geo focus:ring-2"
              />
              {errors.message && <p className="mt-1.5 text-xs font-medium text-destructive">{errors.message}</p>}
            </div>

            <button
              type="submit"
              disabled={submitting || sent}
              className="mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-gradient-accent px-6 text-sm font-semibold text-white shadow-elevated transition hover:opacity-95 disabled:opacity-70 sm:w-auto"
            >
              {sent ? (
                <>
                  <CheckCircle2 className="h-4 w-4" /> Message sent
                </>
              ) : submitting ? (
                "Sending…"
              ) : (
                <>
                  <Send className="h-4 w-4" /> Send message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  error,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  error?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        maxLength={255}
        placeholder={placeholder}
        className="mt-2 h-11 w-full rounded-xl border border-input bg-background px-4 text-sm text-foreground outline-none ring-ring/30 transition focus:border-geo focus:ring-2"
      />
      {error && <p className="mt-1.5 text-xs font-medium text-destructive">{error}</p>}
    </div>
  );
}

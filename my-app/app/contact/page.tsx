import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Vela",
  description: "Talk to the Vela team or book a free demo.",
  alternates: {
    canonical: "/contact/",
  },
  openGraph: {
    type: "website",
    title: "Contact Vela",
    description: "Talk to the Vela team or book a free demo.",
    url: "/contact/",
    siteName: "Vela AI Chatbot",
    locale: "en",
  },
};

const inputClassName =
  "w-full rounded-xl border border-line bg-background px-4 py-3 text-ink placeholder:text-muted focus:border-brand focus:outline-none focus:ring-4 focus:ring-tint";

export default function Contact() {
  return (
      <main>
        <section className="pt-14 pb-6 md:pt-[72px]">
          <div className="mx-auto w-[92%] max-w-[1120px]">
            <h1 className="font-display text-[clamp(2.1rem,5vw,3.6rem)] font-extrabold leading-[1.2] tracking-[-.02em]">
              Let&apos;s talk about your customers.
            </h1>
            <p className="mt-5 text-xl text-muted">
              Send us a message and we&apos;ll reply within one working day.
            </p>
          </div>
        </section>

        <section className="py-14 md:py-20">
          <div className="mx-auto grid w-[92%] max-w-[1120px] items-start gap-10 md:grid-cols-[1.4fr_1fr]">
            <form
              className="flex flex-col rounded-2xl border border-line bg-white p-6 shadow-[0_12px_32px_rgba(20,26,51,.08)] md:p-9"
              action="#"
              method="post"
            >
              <label htmlFor="name" className="mt-4 mb-1.5 text-[.95rem] font-bold first:mt-0">
                Full name
              </label>
              <input
                className={inputClassName}
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                autoComplete="name"
                required
              />

              <label htmlFor="email" className="mt-4 mb-1.5 text-[.95rem] font-bold">
                Work email
              </label>
              <input
                className={inputClassName}
                id="email"
                name="email"
                type="email"
                placeholder="you@company.com"
                autoComplete="email"
                required
              />

              <label htmlFor="company" className="mt-4 mb-1.5 text-[.95rem] font-bold">
                Company
              </label>
              <input
                className={inputClassName}
                id="company"
                name="company"
                type="text"
                placeholder="Company name"
                autoComplete="organization"
              />

              <label htmlFor="topic" className="mt-4 mb-1.5 text-[.95rem] font-bold">
                I&apos;m interested in
              </label>
              <select className={inputClassName} id="topic" name="topic" defaultValue="A free demo">
                <option>A free demo</option>
                <option>Pricing</option>
                <option>Support</option>
                <option>Something else</option>
              </select>

              <label htmlFor="message" className="mt-4 mb-1.5 text-[.95rem] font-bold">
                Message
              </label>
              <textarea
                className={`${inputClassName} resize-y`}
                id="message"
                name="message"
                rows={5}
                placeholder="How can we help?"
                required
              />

              <button
                type="submit"
                className="mt-6 self-start rounded-full bg-brand px-7 py-3.5 font-bold text-white transition hover:-translate-y-0.5 hover:bg-brand-dark"
              >
                Send message
              </button>
            </form>

            <aside className="grid gap-4">
              <article className="rounded-2xl border border-line bg-white p-7">
                <h2 className="mb-2 font-display text-[1.1rem] font-bold">
                  Email
                </h2>
                <p className="text-muted">
                  <a
                    className="font-medium text-brand hover:underline"
                    href="mailto:hello@vela.ai"
                  >
                    hello@vela.ai
                  </a>
                </p>
              </article>
              <article className="rounded-2xl border border-line bg-white p-7">
                <h2 className="mb-2 font-display text-[1.1rem] font-bold">
                  Phone
                </h2>
                <p className="text-muted">
                  <a
                    className="font-medium text-brand hover:underline"
                    href="tel:+910000000000"
                  >
                    +91 00000 00000
                  </a>
                  <br />
                  Mon to Fri, 10am to 6pm IST
                </p>
              </article>
              <article className="rounded-2xl border border-line bg-white p-7">
                <h2 className="mb-2 font-display text-[1.1rem] font-bold">
                  Office
                </h2>
                <p className="text-muted">
                  123 Business Park, Ahmedabad,
                  <br />
                  Gujarat, India
                </p>
              </article>
            </aside>
          </div>
        </section>
      </main>
  );
}
